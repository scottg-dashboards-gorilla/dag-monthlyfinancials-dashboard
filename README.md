# DAG Tech — Monthly P&L Dashboard

Password-protected interactive financial dashboard for DAG Tech LLC.

## Live dashboard

**URL:** `https://[your-github-username].github.io/dag-pnl-dashboard/`

**Password:** Shared separately with authorized viewers.

## Project structure

```
index.html              ← Dashboard UI (do not modify)
data.js                 ← Financial data (updated monthly by Cowork)
COWORK_INSTRUCTIONS.md  ← Setup guide for automated monthly updates
pnl-uploads/            ← Drop new P&L PDFs here for Cowork to process
```

## GitHub Pages setup

1. Go to repo Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main`, folder: `/ (root)`
4. Save — your dashboard will be live at the URL above

## Monthly update process

See `COWORK_INSTRUCTIONS.md` for full Cowork automation setup.

Manual alternative: Edit `data.js` directly — append new month's values to each array.

## Features

- KPI summary cards (Revenue, GP, NP, annualized pace)
- 13-month revenue/profit/margin trend chart
- Condensed P&L table — all months + FY25 totals
- Division gross profit trend table
- Div 8 (A+ Animal/Diamond) growth trajectory chart
- Division GP% vs target comparison
- Detailed divisional P&L with MoM and 3-month trailing variance
- Division filter buttons
- Full expense trend chart
- Flagged anomaly items with action steps
- AI analyst chat panel (functional when hosted as Claude artifact)
- Password protection
