# User Count Audit Runbook (Autotask × SetSail Reconciliation)

This file is the canonical workflow for the monthly user-count billing audit. The same instructions are embedded in the scheduled task `user-count-audit-monthly` so the audit can run unattended on the 5th of each month.

## Purpose

Datapath bills clients monthly per active user. Onboarding/offboarding requests are *supposed* to flow through SetSail (the form-based intake tool), but helpdesk engineers often handle them directly in Autotask without updating SetSail. This causes billing variances. This audit catches every onboard/offboard event that touched Autotask and flags the ones missing from SetSail.

## When to run

- Monthly, on or after the 5th, covering the previous full calendar month (automated via the scheduled task).
- Ad-hoc when needed for billing reconciliation.

## Required access

- **Chrome browser** with the Claude-in-Chrome extension connected, logged into both Autotask and SetSail. If the extension isn't connected, ask the user to install it before proceeding.
- **File access** to `/Users/scott/Documents/dag-monthlyfinancials-dashboard/` (the dashboard repo).
- **The user's terminal** — required for git operations (the cowork bash sandbox can't unlink files in this repo).

## Workflow

### Step 1 — Determine the date range

If a range is specified, use it. Otherwise default to "the previous full calendar month" — running on May 5 covers April 1 – April 30. Format dates as `MM/DD/YYYY` for Autotask form fields.

For first-time runs that need year-to-date coverage, pull from January 1 of the current year through the end of the previous month.

### Step 2 — Pull Autotask tickets

1. Connect to the user's Chrome browser via `mcp__Claude_in_Chrome__list_connected_browsers` and `select_browser`. If no browser is connected, call `switch_browser` to broadcast a pairing request.
2. Navigate directly to `https://ww14.autotask.net/Mvc/ServiceDesk/TicketGridSearch.mvc/Index` (skip the iframe-wrapped landing page).
3. For each keyword in this list, run a Title search with the date range and scrape all result pages:
   - `onboard`
   - `offboard`
   - `terminat`
   - `new hire`
   - `new user`
   - `separation`
4. Form field coordinates on a 1568×746 viewport: Title input (170, 294), Created>= (835, 226), Created<= (835, 293), Search button (1505, 80). Status filter — leave blank to include all statuses.
5. After clicking Search, scrape each result page from `tables[1]` (the data table). Columns: 3=Ticket #, 4=Title, 5=Description, 6=Company, 8=Queue, 9=Resources, 11=Status, 13=Created.
6. Paginate via `document.querySelectorAll('div.PageIndex')` — click each page index, wait 3 seconds, scrape, repeat.

### Step 3 — Filter test/QA tickets

Drop any ticket where:
- `company == "DAGTECH01"` (internal test client)
- `userName` matches `/^QA[a-z]?[a-z0-9]*\s/` or starts with `QA-Test`, `QA519`
- `userName == "Test SetSail"` or starts with `first_name-`, `last_name-`
- `userName` is one of: `Test Submission`, `VaultTest EmailConfirm`, `EmailTest OnboardingTest`, `Test Alpha`, `Test FullCycle`, `Test LifecycleE2E`, `Test Flanders-Sanders`, `Test Johnson-Bronson`
- `userName` starts with `Complete Onboarding ` followed by digits, or starts with `Claude Due Test`
- `userName` contains `Tony Stark` (joke test name)

### Step 4 — Classify action and extract user name

Action by title regex:
- **Offboard**: `/(offboard|terminat|separation|disable account|deactivate|no longer (work|with))/i`
- **Onboard**: `/(onboard|new hire|new user|new employee|new consultant|add (new )?(user|employee))/i`
- Otherwise: `Review` (flag for manual review)

User name extraction (try in order):
1. `\[(?:Onboarding|Offboarding)\]\s+(?:Onboard|Offboard)\s+(.+?)(?:\s+\(|$)` — e.g. `[Onboarding] Onboard Jeff Prior` → `Jeff Prior`
2. `^(?:Onboard|Offboard)(?:ing)?\s*[-:]?\s*(.+?)(?:\s+\(|$)` — e.g. `Offboard Jon Hoy` → `Jon Hoy`
3. `(?:ONBOARDING|OFFBOARDING)\s*[-:]\s*(.+?)$` — e.g. `OFFBOARD - SFP` → `SFP`
4. If none match, leave blank — the title will be visible in the table.

### Step 5 — Pull SetSail tickets

Still in the same Chrome session:

1. Navigate to `https://setsail.today/dashboard/admin/tickets/` (just to ensure the session is authenticated — you don't need to scrape the UI).
2. Run in JS:
   ```js
   fetch('/api/data/tickets/all?with[]=member&with[]=company', {credentials: 'include'})
     .then(r => r.json())
     .then(d => { window.setsailRaw = d; })
   ```
3. Each ticket has `ticket_number` matching the Autotask format (e.g. `T20260430.0046`).
4. Filter SetSail tickets to the same date range using `ticket_generated_at` (or `created_at` as fallback).

### Step 6 — Cross-reference

Build:
- `SETSAIL_MATCHED` = Set of Autotask ticket numbers that ALSO exist in SetSail within the date range
- `MISSING_FROM_SETSAIL` = Autotask tickets NOT in SetSail (the billing risk)
- `SETSAIL_ONLY` = SetSail tickets with no Autotask match (rare — usually deleted-in-Autotask test entries)

### Step 7 — Update the dashboard

Edit `/Users/scott/Documents/dag-monthlyfinancials-dashboard/index.html`:

1. Replace the `AUDIT_TICKETS` const with the new combined dataset (preserve previous months — accumulate, don't replace).
2. Replace the `SETSAIL_MATCHED` const with the new Set of matched ticket numbers.
3. Update the date-range comment in the `/* USER COUNT AUDIT */` block header.
4. If the audit now spans more than 4 months, add new `<option value="2026-XX">Mon YYYY</option>` entries to `auditMonthFilter`, and update the `months` and `monthLabels` arrays inside `renderUserAuditView()`.

Verify with a JSDOM headless test before declaring done:

```bash
cd /tmp && node -e "
const {JSDOM} = require('jsdom');
const fs = require('fs');
const html = fs.readFileSync('/Users/scott/Documents/dag-monthlyfinancials-dashboard/index.html', 'utf8')
  .replace(/<script\s+src=\"https:[^>]+><\/script>/g, '')
  .replace('<script src=\"data.js\"></script>',
    '<script>window.DATA=[{month:\"x\"}];window.SEAT_DATA=[];window.SEAT_PRODUCTS=[];window.BENCH_CONFIG={};window.CLIENT_DATA={};</script>');
const dom = new JSDOM(html, {runScripts:'dangerously', pretendToBeVisual:true});
setTimeout(() => {
  const w = dom.window;
  w.document.getElementById('mainApp').classList.remove('app-hidden');
  w.document.getElementById('useraudit').classList.add('active');
  w.initUserAuditView();
  console.log('Total:', w.document.querySelectorAll('#auditDetailTable tbody tr').length);
}, 600);
"
```

### Step 8 — Hand off git to the user

DO NOT run `git fetch`, `git reset`, `git pull`, or `git gc` from the cowork bash sandbox — the mount blocks `unlink()` and these commands leave stale `.git/index.lock` files. `git status`, `git add`, `git diff` are safe.

Provide the user copy-paste-ready commands:

```
cd /Users/scott/Documents/dag-monthlyfinancials-dashboard
git status
git add index.html
git commit -m "User Count Audit: refresh through {LAST_MONTH_NAME} {YEAR}"
git push origin main
```

If push is rejected, instruct them:

```
rm /Users/scott/Documents/dag-monthlyfinancials-dashboard/.git/index.lock 2>/dev/null
git pull --rebase origin main
git push origin main
```

### Step 9 — Report findings

Summarize in chat:
- Total events captured for the month
- Onboard / offboard split
- Matched in SetSail / Missing from SetSail
- Top clients with missing entries (top 5–10 by count)
- Any unusual patterns (e.g. "BHSTRT01 had 4 onboards but only 1 in SetSail")
- Link the dashboard: `[View dashboard](computer:///Users/scott/Documents/dag-monthlyfinancials-dashboard/index.html)`

## Reference

| Item | Value |
|------|-------|
| Autotask Ticket Search | `https://ww14.autotask.net/Mvc/ServiceDesk/TicketGridSearch.mvc/Index` |
| Autotask Ticket Detail (template) | `https://ww14.autotask.net/Mvc/ServiceDesk/TicketDetail.mvc?TicketNumber={N}` |
| SetSail Admin UI | `https://setsail.today/dashboard/admin/tickets/` |
| SetSail API | `https://setsail.today/api/data/tickets/all?with[]=member&with[]=company` |
| Dashboard Repo | `/Users/scott/Documents/dag-monthlyfinancials-dashboard/` |
| GitHub Remote | `scottg-dashboards-gorilla/dag-monthlyfinancials-dashboard` |
| Auto-deploy task | `push-dashboard-to-github` (every 10 min, 8am-8pm) |

## "Missing from SetSail" categories

- **Helpdesk queue** — engineers handled directly via email/phone, never created SetSail entry. Biggest category (~75% of misses).
- **Merged queue** — duplicates merged into another ticket.
- **Setsail queue but no SetSail match** — manually-created Autotask tickets not from a SetSail form (rare).
- **Internal Tasks queue** — usually project-level onboarding (new client coming on), not per-user.

## Baseline (Jan–Apr 2026, established 2026-05-01)

- 142 unique events · 83 onboards / 59 offboards
- 75 matched in SetSail · 67 missing from SetSail (48% bypass rate)
- 31 unique client companies
- Top clients with bypass: SWTLNE01 (9), AMPWSH01 (6), URBLEG01 (4), SCILUC01 (4), SHASQI01 (4), NCJWOM01 (4), AGUDCA01 (3)
