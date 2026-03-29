# Cowork Instructions — DAG Tech P&L Dashboard

## Project setup in Cowork

1. Open Claude Desktop → switch to **Cowork** tab
2. Create a new project: **"DAG P&L Dashboard"**
3. Grant folder access to wherever you clone the GitHub repo (e.g., `~/Projects/dag-pnl-dashboard/`)
4. Paste the following as your project instructions:

---

## Cowork project prompt (paste this)

```
You manage the DAG Tech Monthly P&L Dashboard. The project has this structure:

- index.html — The dashboard UI. NEVER modify this file.
- data.js — The financial data. This is the ONLY file you update.
- /pnl-uploads/ — Folder where new P&L PDFs are dropped.

WHEN A NEW P&L PDF APPEARS IN /pnl-uploads/:

1. Parse the PDF and extract all revenue, COGS, and expense line items
2. Map each line item to the correct field in data.js using this mapping:

   REVENUE:
   - "Division 1" → rev.d1
   - "Division 2" → rev.d2
   - "Division 3" (total of all Div 3 sub-lines) → rev.d3
   - "Division 4 Partner Network Income" → rev.d4
   - "Division 5 Non-Project Material Revenue" → rev.d5a
   - "Division 5 IT Projects Materials Revenue" + "Division 5 Markup" → rev.d5b
   - "Division 5 Shipping Income" → rev.d5o
   - "Division 6 CxO" → rev.d6
   - "Division 8" (total of A+ Animal + Diamond IT Essentials + Diamond IT Pro + Diamond Legacy) → rev.d8

   COGS:
   - "Division 1 Tech Support Costs" (total) → cogs.d1
   - "Division 2 Labor Costs" → cogs.d2a
   - "Division 2 Labor Costs (Non Allocatable)" → cogs.d2n
   - "Division 3 Cloud Costs" (total) → cogs.d3
   - "Division 5 Non-Project Purchases" → cogs.d5a
   - "Division 5 Project Purchases" → cogs.d5b
   - "Division 5 Shipping, Freight & Delivery" → cogs.d5s
   - "Division 6 Labor Cost" → cogs.d6
   - "Division 8 A+ Animal Suite Costs" (the cloud/infrastructure component) → cogs.d8c
   - "Division 8 Labor Cost" → cogs.d8l
   - "Division 8 Resold Services Costs" → cogs.d8r
   - Any non-billable labor overhead line → cogs.loh
   - "Research & Development (COGS)" → cogs.rd

   EXPENSES:
   - Sum all operating expense lines → append to opex array
   - Sum all growth expense lines (Advertising, Business Advisory, Business Dev, Marketing, R&D below-the-line, Travel) → append to growth array
   - Update opxD with last-4-months detail for each operating expense line
   - Update grwD with last-4-months detail for each growth expense line

3. Append each value to the END of the corresponding array in data.js
4. Add the new month label to months array and ms array
5. Update the "latest" field
6. Update the opxD and grwD objects to show the last 4 months (drop the oldest, add the new)
7. Review the new month's data for anomalies (>30% variance from 3-month avg, new line items) and update the flags array
8. Save data.js
9. Run: git add data.js && git commit -m "Update P&L: [Month Year]" && git push

NEVER modify index.html. ONLY modify data.js.
```

---

## Monthly workflow

1. Download the P&L PDF from Bharat
2. Drop it into the `/pnl-uploads/` folder
3. Tell Cowork: "New P&L is ready — process it"
4. Cowork parses → updates data.js → commits → pushes to GitHub
5. Dashboard updates automatically on GitHub Pages

## Scheduling (optional)

You can set up a recurring Cowork task:
- "Every month on the 15th, check /pnl-uploads/ for new P&L files and process them"

This way if Bharat's PDF lands in the folder, Cowork handles it without you even asking.
