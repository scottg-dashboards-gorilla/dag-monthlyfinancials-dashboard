// DAG Tech P&L Data — Last updated: February 2026
// Cowork: When adding a new month, append a new month object to DATA and update related fields.
// Do NOT modify the dashboard code (index.html). Only update this file.

// Department definitions
var DEPTS = [
  {
    "id": "d1",
    "name": "Div 1 — IT Support",
    "emoji": "🖥️",
    "color": "#3b82f6",
    "desc": "Managed IT helpdesk, Clarity platform support"
  },
  {
    "id": "d2",
    "name": "Div 2 — Project Labor",
    "emoji": "🔧",
    "color": "#10b981",
    "desc": "Project-based IT labor and implementations"
  },
  {
    "id": "d3",
    "name": "Div 3 — Cloud VAR",
    "emoji": "☁️",
    "color": "#8b5cf6",
    "desc": "Cloud services, managed services VAR"
  },
  {
    "id": "d4",
    "name": "Div 4 — Partner Network",
    "emoji": "🤝",
    "color": "#06b6d4",
    "desc": "Partner network referral income"
  },
  {
    "id": "d5",
    "name": "Div 5 — Materials",
    "emoji": "📦",
    "color": "#f59e0b",
    "desc": "Hardware/software procurement and project materials"
  },
  {
    "id": "d6",
    "name": "Div 6 — CxO Consulting",
    "emoji": "💼",
    "color": "#ec4899",
    "desc": "Strategic CxO advisory services"
  },
  {
    "id": "d8",
    "name": "Div 8 — Security Platform",
    "emoji": "🛡️",
    "color": "#ef4444",
    "desc": "A+ Animal Suite, Diamond IT managed security"
  }
];

// Benchmarks per division (gross margin targets)
var BM = {
  "d1": {
    "tgt": 60,
    "top": 70,
    "med": 50,
    "desc": "IT Support gross margin targets"
  },
  "d2": {
    "tgt": 55,
    "top": 65,
    "med": 45,
    "desc": "Project labor margin targets"
  },
  "d3": {
    "tgt": 25,
    "top": 35,
    "med": 18,
    "desc": "Cloud VAR margin targets (historically low for DAG)"
  },
  "d4": {
    "tgt": 90,
    "top": 95,
    "med": 80,
    "desc": "Partner network (mostly referral income, low COGS)"
  },
  "d5": {
    "tgt": 15,
    "top": 25,
    "med": 8,
    "desc": "Materials margin targets"
  },
  "d6": {
    "tgt": 55,
    "top": 65,
    "med": 45,
    "desc": "Consulting margin targets"
  },
  "d8": {
    "tgt": 50,
    "top": 60,
    "med": 40,
    "desc": "Security platform margin targets"
  }
};

// Monthly financial data
var DATA = [
  {
    "month": "Jan 25",
    "d": {
      "d1": {"rev": 43054.81, "cogs": 27909.78, "gp": 15145.03, "gpM": 35.18},
      "d2": {"rev": 10722.6, "cogs": 5172.26, "gp": 5550.34, "gpM": 51.76},
      "d3": {"rev": 51127.73, "cogs": 30134.37, "gp": 20993.36, "gpM": 41.06},
      "d4": {"rev": 1372.36, "cogs": 0.0, "gp": 1372.36, "gpM": 100.0},
      "d5": {"rev": 11517.19, "cogs": 1960.23, "gp": 9556.96, "gpM": 82.98},
      "d6": {"rev": 3156.25, "cogs": 995.57, "gp": 2160.68, "gpM": 68.46},
      "d8": {"rev": 85118.8, "cogs": 36809.51, "gp": 48309.29, "gpM": 56.76}
    },
    "detail": {
      "d2": {"cogsAllocatable": 4355.68, "cogsNonAllocatable": 816.58},
      "d5": {
        "revNonProject": 3631.99, "revProject": 7885.2, "revShipping": 0,
        "cogsNonProject": -5623.83, "cogsProject": 7584.06, "cogsShipping": 0
      },
      "d8": {"cogsCloud": 13058.91, "cogsLabor": 23750.6, "cogsResold": 0}
    },
    "unalloc": {"loh": 21804.45, "rd": 0},
    "totRev": 206069.74,
    "totCogs": 124786.17,
    "gp": 81283.57,
    "gpM": 39.44,
    "opex": 36953.76,
    "growth": 22626.34,
    "ebitda": 21703.47,
    "ebitdaM": 10.53,
    "netIncome": 21157.92
  },
  {
    "month": "Feb 25",
    "d": {
      "d1": {"rev": 41276.62, "cogs": 19257.61, "gp": 22019.01, "gpM": 53.34},
      "d2": {"rev": 9301.99, "cogs": 2596.56, "gp": 6705.43, "gpM": 72.09},
      "d3": {"rev": 43681.11, "cogs": 35160.3, "gp": 8520.81, "gpM": 19.51},
      "d4": {"rev": 1788.85, "cogs": 0.0, "gp": 1788.85, "gpM": 100.0},
      "d5": {"rev": 18121.46, "cogs": 15636.84, "gp": 2484.62, "gpM": 13.71},
      "d6": {"rev": 3100.0, "cogs": 875.04, "gp": 2224.96, "gpM": 71.77},
      "d8": {"rev": 83328.2, "cogs": 30309.91, "gp": 53018.29, "gpM": 63.63}
    },
    "detail": {
      "d2": {"cogsAllocatable": 1794.24, "cogsNonAllocatable": 802.32},
      "d5": {
        "revNonProject": 10253.06, "revProject": 7868.4, "revShipping": 0,
        "cogsNonProject": 9298.53, "cogsProject": 6338.31, "cogsShipping": 0
      },
      "d8": {"cogsCloud": 11364.24, "cogsLabor": 18945.67, "cogsResold": 0}
    },
    "unalloc": {"loh": 21076.66, "rd": 0},
    "totRev": 200598.23,
    "totCogs": 124912.92,
    "gp": 75685.31,
    "gpM": 37.73,
    "opex": 29921.55,
    "growth": 28892.72,
    "ebitda": 16871.04,
    "ebitdaM": 8.41,
    "netIncome": 16909.07
  },
  {
    "month": "Mar 25",
    "d": {
      "d1": {"rev": 44747.28, "cogs": 18080.3, "gp": 26666.98, "gpM": 59.59},
      "d2": {"rev": 4824.84, "cogs": 2288.08, "gp": 2536.76, "gpM": 52.58},
      "d3": {"rev": 41893.06, "cogs": 31881.29, "gp": 10011.77, "gpM": 23.9},
      "d4": {"rev": 4497.46, "cogs": 0.0, "gp": 4497.46, "gpM": 100.0},
      "d5": {"rev": 29374.41, "cogs": 18779.64, "gp": 10594.77, "gpM": 36.07},
      "d6": {"rev": 3100.0, "cogs": 747.83, "gp": 2352.17, "gpM": 75.88},
      "d8": {"rev": 82408.2, "cogs": 29140.79, "gp": 53267.41, "gpM": 64.64}
    },
    "detail": {
      "d2": {"cogsAllocatable": 1540.25, "cogsNonAllocatable": 747.83},
      "d5": {
        "revNonProject": 22219.08, "revProject": 7155.33, "revShipping": 0,
        "cogsNonProject": 15016.18, "cogsProject": 3763.46, "cogsShipping": 0
      },
      "d8": {"cogsCloud": 10403.44, "cogsLabor": 18737.35, "cogsResold": 0}
    },
    "unalloc": {"loh": 17828.99, "rd": 0},
    "totRev": 210845.25,
    "totCogs": 118746.92,
    "gp": 92098.33,
    "gpM": 43.68,
    "opex": 37046.58,
    "growth": 24120.58,
    "ebitda": 30931.17,
    "ebitdaM": 14.67,
    "netIncome": 30625.55
  },
  {
    "month": "Apr 25",
    "d": {
      "d1": {"rev": 41805.53, "cogs": 14529.42, "gp": 27276.11, "gpM": 65.25},
      "d2": {"rev": 6463.88, "cogs": 4829.0, "gp": 1634.88, "gpM": 25.29},
      "d3": {"rev": 49957.85, "cogs": 40989.24, "gp": 8968.61, "gpM": 17.95},
      "d4": {"rev": 1665.58, "cogs": 0.0, "gp": 1665.58, "gpM": 100.0},
      "d5": {"rev": 3603.08, "cogs": 3704.93, "gp": -101.85, "gpM": -2.83},
      "d6": {"rev": 5366.25, "cogs": 2037.83, "gp": 3328.42, "gpM": 62.03},
      "d8": {"rev": 83624.86, "cogs": 30594.81, "gp": 53030.05, "gpM": 63.41}
    },
    "detail": {
      "d2": {"cogsAllocatable": 4083.73, "cogsNonAllocatable": 745.27},
      "d5": {
        "revNonProject": 3568.55, "revProject": 34.53, "revShipping": 0,
        "cogsNonProject": 3754.83, "cogsProject": -49.9, "cogsShipping": 0
      },
      "d8": {"cogsCloud": 10462.76, "cogsLabor": 20132.05, "cogsResold": 0}
    },
    "unalloc": {"loh": 20649.23, "rd": 0},
    "totRev": 192487.03,
    "totCogs": 117334.46,
    "gp": 75152.57,
    "gpM": 39.04,
    "opex": 31749.98,
    "growth": 28177.23,
    "ebitda": 15225.36,
    "ebitdaM": 7.91,
    "netIncome": 46017.06
  },
  {
    "month": "May 25",
    "d": {
      "d1": {"rev": 40463.0, "cogs": 19592.01, "gp": 20870.99, "gpM": 51.58},
      "d2": {"rev": 2125.03, "cogs": 2667.52, "gp": -542.49, "gpM": -25.53},
      "d3": {"rev": 41930.04, "cogs": 32735.27, "gp": 9194.77, "gpM": 21.93},
      "d4": {"rev": 1506.79, "cogs": 0.0, "gp": 1506.79, "gpM": 100.0},
      "d5": {"rev": 22098.11, "cogs": 18302.96, "gp": 3795.15, "gpM": 17.17},
      "d6": {"rev": 3325.0, "cogs": 1536.55, "gp": 1788.45, "gpM": 53.79},
      "d8": {"rev": 85611.8, "cogs": 35123.94, "gp": 50487.86, "gpM": 58.97}
    },
    "detail": {
      "d2": {"cogsAllocatable": 1549.61, "cogsNonAllocatable": 1117.91},
      "d5": {
        "revNonProject": 22098.11, "revProject": 0.0, "revShipping": 0,
        "cogsNonProject": 18302.96, "cogsProject": 0.0, "cogsShipping": 0
      },
      "d8": {"cogsCloud": 10747.49, "cogsLabor": 24376.45, "cogsResold": 0}
    },
    "unalloc": {"loh": 17112.65, "rd": 0},
    "totRev": 197059.77,
    "totCogs": 127070.9,
    "gp": 69988.87,
    "gpM": 35.52,
    "opex": 26881.84,
    "growth": 31899.16,
    "ebitda": 11207.87,
    "ebitdaM": 5.69,
    "netIncome": 11351.38
  },
  {
    "month": "Jun 25",
    "d": {
      "d1": {"rev": 44267.01, "cogs": 17208.91, "gp": 27058.1, "gpM": 61.12},
      "d2": {"rev": 5129.6, "cogs": 5430.84, "gp": -301.24, "gpM": -5.87},
      "d3": {"rev": 57672.48, "cogs": 45227.39, "gp": 12445.09, "gpM": 21.58},
      "d4": {"rev": 1500.15, "cogs": 0.0, "gp": 1500.15, "gpM": 100.0},
      "d5": {"rev": 48095.91, "cogs": 38438.13, "gp": 9657.78, "gpM": 20.08},
      "d6": {"rev": 5330.0, "cogs": 1732.54, "gp": 3597.46, "gpM": 67.49},
      "d8": {"rev": 95775.9, "cogs": 34561.41, "gp": 61214.49, "gpM": 63.91}
    },
    "detail": {
      "d2": {"cogsAllocatable": 4685.57, "cogsNonAllocatable": 745.27},
      "d5": {
        "revNonProject": 26643.33, "revProject": 21452.58, "revShipping": 0,
        "cogsNonProject": 22018.8, "cogsProject": 16419.33, "cogsShipping": 0
      },
      "d8": {"cogsCloud": 10778.83, "cogsLabor": 23782.58, "cogsResold": 0}
    },
    "unalloc": {"loh": 15917.25, "rd": 0},
    "totRev": 257771.05,
    "totCogs": 158516.47,
    "gp": 99254.58,
    "gpM": 38.5,
    "opex": 33105.31,
    "growth": 28071.81,
    "ebitda": 38077.46,
    "ebitdaM": 14.77,
    "netIncome": 38172.0
  },
  {
    "month": "Jul 25",
    "d": {
      "d1": {"rev": 36516.05, "cogs": 22265.96, "gp": 14250.09, "gpM": 39.02},
      "d2": {"rev": 13860.28, "cogs": 12597.07, "gp": 1263.21, "gpM": 9.11},
      "d3": {"rev": 45107.74, "cogs": 36886.77, "gp": 8220.97, "gpM": 18.23},
      "d4": {"rev": 1757.25, "cogs": 0.0, "gp": 1757.25, "gpM": 100.0},
      "d5": {"rev": 22692.24, "cogs": 24551.15, "gp": -1858.91, "gpM": -8.19},
      "d6": {"rev": 5220.0, "cogs": 2102.43, "gp": 3117.57, "gpM": 59.72},
      "d8": {"rev": 92014.9, "cogs": 33514.57, "gp": 58500.33, "gpM": 63.58}
    },
    "detail": {
      "d2": {"cogsAllocatable": 11851.8, "cogsNonAllocatable": 745.27},
      "d5": {
        "revNonProject": 7940.44, "revProject": 14751.8, "revShipping": 0,
        "cogsNonProject": 12725.1, "cogsProject": 11826.05, "cogsShipping": 0
      },
      "d8": {"cogsCloud": 10685.88, "cogsLabor": 22828.69, "cogsResold": 0}
    },
    "unalloc": {"loh": 12899.06, "rd": 0},
    "totRev": 217168.46,
    "totCogs": 144817.01,
    "gp": 72351.45,
    "gpM": 33.32,
    "opex": 32221.72,
    "growth": 29393.67,
    "ebitda": 10736.06,
    "ebitdaM": 4.94,
    "netIncome": 10817.6
  },
  {
    "month": "Aug 25",
    "d": {
      "d1": {"rev": 39560.02, "cogs": 21380.97, "gp": 18179.05, "gpM": 45.95},
      "d2": {"rev": 40793.56, "cogs": 17874.84, "gp": 22918.72, "gpM": 56.18},
      "d3": {"rev": 40198.12, "cogs": 32052.46, "gp": 8145.66, "gpM": 20.26},
      "d4": {"rev": 1623.4, "cogs": 0.0, "gp": 1623.4, "gpM": 100.0},
      "d5": {"rev": 9781.83, "cogs": 6935.72, "gp": 2846.11, "gpM": 29.1},
      "d6": {"rev": 4780.0, "cogs": 896.26, "gp": 3883.74, "gpM": 81.25},
      "d8": {"rev": 92394.6, "cogs": 34921.84, "gp": 57472.76, "gpM": 62.2}
    },
    "detail": {
      "d2": {"cogsAllocatable": 17129.57, "cogsNonAllocatable": 745.27},
      "d5": {
        "revNonProject": 8450.43, "revProject": 1331.4, "revShipping": 0,
        "cogsNonProject": 5226.64, "cogsProject": 1709.08, "cogsShipping": 0
      },
      "d8": {"cogsCloud": 10693.16, "cogsLabor": 24228.68, "cogsResold": 0}
    },
    "unalloc": {"loh": 16388.45, "rd": 0},
    "totRev": 229131.53,
    "totCogs": 130450.54,
    "gp": 98680.99,
    "gpM": 43.07,
    "opex": 27945.28,
    "growth": 26701.7,
    "ebitda": 44034.01,
    "ebitdaM": 19.22,
    "netIncome": 44470.37
  },
  {
    "month": "Sep 25",
    "d": {
      "d1": {"rev": 35761.22, "cogs": 18562.82, "gp": 17198.4, "gpM": 48.09},
      "d2": {"rev": 17723.88, "cogs": 8626.91, "gp": 9096.97, "gpM": 51.33},
      "d3": {"rev": 49996.08, "cogs": 40102.18, "gp": 9893.9, "gpM": 19.79},
      "d4": {"rev": 4909.65, "cogs": 0.0, "gp": 4909.65, "gpM": 100.0},
      "d5": {"rev": 61230.11, "cogs": 52185.37, "gp": 9044.74, "gpM": 14.77},
      "d6": {"rev": 8262.5, "cogs": 2962.4, "gp": 5300.1, "gpM": 64.15},
      "d8": {"rev": 98508.81, "cogs": 40068.53, "gp": 58440.28, "gpM": 59.32}
    },
    "detail": {
      "d2": {"cogsAllocatable": 7881.64, "cogsNonAllocatable": 745.27},
      "d5": {
        "revNonProject": 15762.14, "revProject": 45467.97, "revShipping": 0,
        "cogsNonProject": 12541.15, "cogsProject": 39644.22, "cogsShipping": 0
      },
      "d8": {"cogsCloud": 10959.68, "cogsLabor": 29108.85, "cogsResold": 0}
    },
    "unalloc": {"loh": 11008.97, "rd": 0},
    "totRev": 276392.25,
    "totCogs": 173517.18,
    "gp": 102875.07,
    "gpM": 37.22,
    "opex": 35670.41,
    "growth": 29215.54,
    "ebitda": 37989.12,
    "ebitdaM": 13.74,
    "netIncome": 38498.85
  },
  {
    "month": "Oct 25",
    "d": {
      "d1": {"rev": 26824.18, "cogs": 16943.28, "gp": 9880.9, "gpM": 36.84},
      "d2": {"rev": 14252.5, "cogs": 7947.14, "gp": 6305.36, "gpM": 44.24},
      "d3": {"rev": 43851.03, "cogs": 36045.19, "gp": 7805.84, "gpM": 17.8},
      "d4": {"rev": 1501.14, "cogs": 0.0, "gp": 1501.14, "gpM": 100.0},
      "d5": {"rev": 13834.78, "cogs": 13365.05, "gp": 469.73, "gpM": 3.4},
      "d6": {"rev": 6485.0, "cogs": 2599.29, "gp": 3885.71, "gpM": 59.92},
      "d8": {"rev": 96368.98, "cogs": 36703.69, "gp": 59665.29, "gpM": 61.91}
    },
    "detail": {
      "d2": {"cogsAllocatable": 6829.24, "cogsNonAllocatable": 1117.9},
      "d5": {
        "revNonProject": 9786.5, "revProject": 4048.28, "revShipping": 0,
        "cogsNonProject": 9545.71, "cogsProject": 3819.34, "cogsShipping": 0
      },
      "d8": {"cogsCloud": 10197.2, "cogsLabor": 26506.49, "cogsResold": 0}
    },
    "unalloc": {"loh": 16236.51, "rd": 0},
    "totRev": 203117.61,
    "totCogs": 129840.15,
    "gp": 73277.46,
    "gpM": 36.08,
    "opex": 28763.0,
    "growth": 32097.87,
    "ebitda": 12416.59,
    "ebitdaM": 6.11,
    "netIncome": 12238.9
  },
  {
    "month": "Nov 25",
    "d": {
      "d1": {"rev": 30294.0, "cogs": 10800.79, "gp": 19493.21, "gpM": 64.35},
      "d2": {"rev": 1994.12, "cogs": 1719.24, "gp": 274.88, "gpM": 13.78},
      "d3": {"rev": 49826.94, "cogs": 38566.44, "gp": 11260.5, "gpM": 22.6},
      "d4": {"rev": 2511.95, "cogs": 0.0, "gp": 2511.95, "gpM": 100.0},
      "d5": {"rev": 4283.15, "cogs": 3911.74, "gp": 371.41, "gpM": 8.67},
      "d6": {"rev": 4780.0, "cogs": 2286.48, "gp": 2493.52, "gpM": 52.17},
      "d8": {"rev": 119774.19, "cogs": 41876.54, "gp": 77897.65, "gpM": 65.04}
    },
    "detail": {
      "d2": {"cogsAllocatable": 973.97, "cogsNonAllocatable": 745.27},
      "d5": {
        "revNonProject": 3741.81, "revProject": 541.34, "revShipping": 0,
        "cogsNonProject": 3311.74, "cogsProject": 600.0, "cogsShipping": 0
      },
      "d8": {"cogsCloud": 11425.16, "cogsLabor": 30451.38, "cogsResold": 0}
    },
    "unalloc": {"loh": 17299.39, "rd": 0},
    "totRev": 213464.35,
    "totCogs": 116460.62,
    "gp": 97003.73,
    "gpM": 45.44,
    "opex": 36264.84,
    "growth": 27920.02,
    "ebitda": 32818.87,
    "ebitdaM": 15.37,
    "netIncome": 32640.23
  },
  {
    "month": "Dec 25",
    "d": {
      "d1": {"rev": 34687.19, "cogs": 12027.1, "gp": 22660.09, "gpM": 65.33},
      "d2": {"rev": 1979.16, "cogs": 1964.88, "gp": 14.28, "gpM": 0.72},
      "d3": {"rev": 43670.18, "cogs": 38345.43, "gp": 5324.75, "gpM": 12.19},
      "d4": {"rev": 652.53, "cogs": 0.0, "gp": 652.53, "gpM": 100.0},
      "d5": {"rev": 65113.39, "cogs": 57030.68, "gp": 8082.71, "gpM": 12.41},
      "d6": {"rev": 4780.0, "cogs": 1852.85, "gp": 2927.15, "gpM": 61.24},
      "d8": {"rev": 125042.65, "cogs": 40771.02, "gp": 84271.63, "gpM": 67.39}
    },
    "detail": {
      "d2": {"cogsAllocatable": 1219.61, "cogsNonAllocatable": 745.27},
      "d5": {
        "revNonProject": 61360.93, "revProject": 3752.46, "revShipping": 0,
        "cogsNonProject": 53250.35, "cogsProject": 3780.33, "cogsShipping": 0
      },
      "d8": {"cogsCloud": 11118.52, "cogsLabor": 29652.5, "cogsResold": 0}
    },
    "unalloc": {"loh": 17243.65, "rd": 0},
    "totRev": 275925.1,
    "totCogs": 169235.61,
    "gp": 106689.49,
    "gpM": 38.67,
    "opex": 34875.11,
    "growth": 32156.72,
    "ebitda": 39657.66,
    "ebitdaM": 14.37,
    "netIncome": 39581.01
  },
  {
    "month": "Jan 26",
    "d": {
      "d1": {"rev": 35442.5, "cogs": 12989.7, "gp": 22452.8, "gpM": 63.35},
      "d2": {"rev": 3200.52, "cogs": 4438.37, "gp": -1237.85, "gpM": -38.68},
      "d3": {"rev": 49955.2, "cogs": 39990.55, "gp": 9964.65, "gpM": 19.95},
      "d4": {"rev": 4065.28, "cogs": 0.0, "gp": 4065.28, "gpM": 100.0},
      "d5": {"rev": 31631.82, "cogs": 26858.52, "gp": 4773.3, "gpM": 15.09},
      "d6": {"rev": 5110.0, "cogs": 2782.84, "gp": 2327.16, "gpM": 45.54},
      "d8": {"rev": 124718.53, "cogs": 39548.8, "gp": 85169.73, "gpM": 68.29}
    },
    "detail": {
      "d2": {"cogsAllocatable": 3620.41, "cogsNonAllocatable": 817.96},
      "d5": {
        "revNonProject": 13390.92, "revProject": 18240.9, "revShipping": 0,
        "cogsNonProject": 11805.69, "cogsProject": 15052.83, "cogsShipping": 0
      },
      "d8": {"cogsCloud": 12381.09, "cogsLabor": 27167.71, "cogsResold": 0}
    },
    "unalloc": {"loh": 25017.24, "rd": 0},
    "totRev": 254123.85,
    "totCogs": 151626.02,
    "gp": 102497.83,
    "gpM": 40.33,
    "opex": 40389.12,
    "growth": 40722.16,
    "ebitda": 21386.55,
    "ebitdaM": 8.42,
    "netIncome": 21228.53
  },
  {
    "month": "Feb 26",
    "d": {
      "d1": {"rev": 30688.39, "cogs": 13342.13, "gp": 17346.26, "gpM": 56.52},
      "d2": {"rev": 2557.85, "cogs": 7530.68, "gp": -4972.83, "gpM": -194.41},
      "d3": {"rev": 55803.96, "cogs": 44248.08, "gp": 11555.88, "gpM": 20.71},
      "d4": {"rev": 4851.31, "cogs": 0.0, "gp": 4851.31, "gpM": 100.0},
      "d5": {"rev": 6532.0, "cogs": 9564.55, "gp": -3032.55, "gpM": -46.43},
      "d6": {"rev": 6805.0, "cogs": 3017.4, "gp": 3787.6, "gpM": 55.66},
      "d8": {"rev": 123701.74, "cogs": 47918.33, "gp": 75783.41, "gpM": 61.26}
    },
    "detail": {
      "d2": {"cogsAllocatable": 6728.36, "cogsNonAllocatable": 802.32},
      "d5": {
        "revNonProject": 4136.0, "revProject": 2396.0, "revShipping": 0,
        "cogsNonProject": 6142.35, "cogsProject": 3422.2, "cogsShipping": 0
      },
      "d8": {"cogsCloud": 12525.82, "cogsLabor": 35392.51, "cogsResold": 0}
    },
    "unalloc": {"loh": 21213.18, "rd": 0},
    "totRev": 230940.25,
    "totCogs": 146834.35,
    "gp": 84105.9,
    "gpM": 36.42,
    "opex": 28456.91,
    "growth": 34050.14,
    "ebitda": 21598.85,
    "ebitdaM": 9.35,
    "netIncome": 17048.99
  }
];

// Operating expense detail (last 4 months: Nov 25, Dec 25, Jan 26, Feb 26)
var opxD = {
  "Bank charges": [5470.68, 4432.79, 4912.70, 4890.52, 5145.89, 5186.21, 5354.33, 4446.31, 6740.63, 5151.06, 4876.79, 6830.99, 6501.52, 5456.56],
  "Bonus": [0, 0, 0, 0, 0, 1500, 0, 0, 0, 0, 0, 0, 3000, 0],
  "Commissions": [1019.70, 1019.70, 1019.70, 1019.70, 1019.70, 1019.70, 1340.10, 1340.10, 1340.10, 1340.10, 2683.18, 2683.18, 1663.48, 1663.48],
  "Employee benefits": [26.50, 1206.89, 360.83, 26.50, 26.50, 550.75, 739.81, 26.50, 773.36, 546.24, 450.75, 751.98, 26.50, 628.70],
  "Financial admin": [5648.19, 5767.25, 5714.91, 6964.37, 6056.43, 6824.27, 5623.06, 5769.86, 7187.42, 5380.60, 5512.10, 7293.31, 5900.36, 4957.88],
  "HR": [1000, 1000, 1000, 1000, 1000, 1000, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400],
  "Insurance": [990.80, 2321.32, 1065.75, 1234.22, 1234.23, 1234.24, 1833.01, 861.64, 861.61, 1743.16, 1156.64, 1156.64, 1156.64, 2780.99],
  "Interest": [2769.32, 483.88, 483.88, 355.27, 322.07, 355.27, 342.65, 341.48, 351.66, 344, 344, 344, 0, 0],
  "Legal & professional": [1828.21, 2630.88, 6588.45, 7284.52, 2128.78, 5005.41, 4368.51, 4164.71, 3644.68, 1117.90, 4419.27, 745.27, 5432.92, 802.32],
  "Office space": [1514.58, 1382.58, 1382.58, 1382.58, 1382.58, 1382.58, 2104.87, 1382.58, 1382.58, 1419.36, 1419.36, 1419.36, 1419.36, 1419.36],
  "Office admin": [1280, 0, 67.91, 0, 969.83, 126.92, 22.78, 0, 0, 249.28, 78.66, 0, 68.74, 1735.97],
  "Operational services": [14591.31, 8897.64, 13091.83, 7053.71, 6453.25, 6949.92, 7719.20, 7253.46, 9175.66, 9646.48, 12487.45, 8549.35, 11542.41, 6811.23],
  "QB payments": [814.47, 778.62, 1208.04, 538.59, 1142.58, 1970.04, 1373.40, 958.64, 2341.71, 424.82, 1436.64, 3701.03, 2134.80, 800.42],
  "Taxes & licenses": [0, 0, 150, 0, 0, 0, 0, 0, 471, 0, 0, 0, 107.09, 0],
  "Utilities": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35.30, 0]
};

// Growth expense detail (last 4 months)
var grwD = {
  "Advertising": [9493.20, 9535.45, 7377.62, 8003.66, 9308.34, 9132.08, 8598.63, 7866.67, 8504.89, 8691.72, 8525.22, 8376.05, 8979.83, 6730.53],
  "Business advisory (COO)": [5554.50, 5644.13, 6020.20, 5696.38, 5565, 6011.20, 5802.13, 5802.88, 5741.03, 5399, 5452.69, 10621.85, 10483, 10403.10],
  "Business development": [5133.16, 5104.64, 4995.66, 4990.54, 5735.80, 4990.54, 6390.54, 6390.54, 6390.54, 7135.82, 6390.54, 6390.54, 8224.33, 6587.98],
  "Consulting": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "Marketing": [2992.62, 4400.80, 2923.09, 2710.14, 6192.10, 4885.86, 5082.62, 2319.26, 5997.70, 5146.24, 4689.48, 4469.48, 4469.35, 3275.26],
  "R&D": [-5033.43, 802.33, 781.03, 1065.27, 1117.91, 985.67, 745.27, 745.27, 745.27, 1117.90, 745.27, 745.27, 817.96, 802.32],
  "Travel & business": [4486.29, 3405.37, 2022.98, 5711.24, 3980.01, 2066.46, 2774.48, 3577.08, 1836.11, 4607.19, 2116.82, 1553.53, 7747.69, 6250.95]
};

// Anomalies and flags
var ANOMALIES = {
  "Jan 25": [
    {"type": "anomaly", "category": "Revenue", "description": "KHHAITE billed extra for past licenses — income inflated", "impact": -7570.37, "dept": "d3", "action": "One-time adjustment; will normalize next month"},
    {"type": "anomaly", "category": "Revenue", "description": "WESRIBE showing negative $3,319 — client double-charged from Aug 2024", "impact": -3319, "dept": "d1", "action": "Credit adjustment applied"},
    {"type": "anomaly", "category": "Revenue", "description": "FNDIGS01-ODA1 — billing pending, rate not confirmed. Client signed Clarity contract", "impact": 3120, "dept": "d1", "action": "Invoice to be sent now that contract is signed"},
    {"type": "anomaly", "category": "Revenue", "description": "ADHEAL01 — billing pending, client status unpaid in Maxio", "impact": 86, "dept": "d3", "action": "Client has been contacted"},
    {"type": "anomaly", "category": "Revenue", "description": "212TAX01 — billing pending, client raised query on other charges", "impact": 0, "dept": "d3", "action": "Will bill once query resolved"},
    {"type": "anomaly", "category": "Revenue", "description": "MDFIRE01 — billing pending, client status unpaid in Maxio", "impact": 450, "dept": "d3", "action": "Client has been contacted"}
  ],
  "Feb 25": [
    {"type": "anomaly", "category": "Revenue", "description": "212TAX01 — billing still pending due to client query", "impact": 0, "dept": "d3", "action": "Awaiting client resolution"},
    {"type": "anomaly", "category": "Revenue", "description": "ADHEAL01 — billing still pending, unpaid in Maxio", "impact": 86, "dept": "d3", "action": "Follow-up in progress"},
    {"type": "anomaly", "category": "Revenue", "description": "MDFIRE01 — billing still pending, unpaid in Maxio", "impact": 450, "dept": "d3", "action": "Follow-up in progress"}
  ],
  "Mar 25": [
    {"type": "adjustment", "category": "Revenue", "description": "ERC check received — $31,247 net ($35,167 check minus $3,920 commission)", "impact": 31246.77, "dept": "exceptional", "action": "Recorded as exceptional item"},
    {"type": "anomaly", "category": "Revenue", "description": "HMCB01 — charged client in March and refunded in April, causing ~$6K swing", "impact": -3135.60, "dept": "d3", "action": "Two-month impact: Mar inflated, Apr reduced"}
  ],
  "Apr 25": [
    {"type": "anomaly", "category": "Revenue", "description": "HMCB01 — April refund from March charge creating ~$3K negative impact", "impact": -3135.60, "dept": "d3", "action": "Offset of March overbilling"},
    {"type": "anomaly", "category": "Revenue", "description": "WHIDCA01-SLA2 — extra on-demand billing to client", "impact": 9230.52, "dept": "d1", "action": "One-time on-demand surge"},
    {"type": "anomaly", "category": "Revenue", "description": "STLPNT01-OD1 — emergency on-demand billing", "impact": 1233.62, "dept": "d1", "action": "Emergency engagement"},
    {"type": "anomaly", "category": "Revenue", "description": "SKFAPR01 — Adobe subscription billed to client", "impact": 5540.76, "dept": "d3", "action": "Subscription pass-through"},
    {"type": "anomaly", "category": "Revenue", "description": "MDFIRE01 — billing still pending, unpaid in Maxio", "impact": 1942, "dept": "d3", "action": "Continued follow-up"}
  ],
  "May 25": [
    {"type": "anomaly", "category": "Revenue", "description": "MCRRCY01 — new office move project invoice still pending", "impact": 430.50, "dept": "d2", "action": "Invoice to be sent"},
    {"type": "anomaly", "category": "Revenue", "description": "SHALOM01-POD1 server closet cleanup — project invoice pending", "impact": 30, "dept": "d2", "action": "Invoice to be sent"},
    {"type": "anomaly", "category": "Revenue", "description": "HMCBLD01-PA1-S2 (7th Floor) — project invoiced Dec 2023, still showing", "impact": 7.89, "dept": "d2", "action": "Legacy entry to be cleared"},
    {"type": "anomaly", "category": "Revenue", "description": "HOLAPA01-PA1 (192 Lex Office) — project invoiced Dec 2023, still showing", "impact": 102.50, "dept": "d2", "action": "Legacy entry to be cleared"},
    {"type": "expense", "category": "COGS", "description": "Non-allocatable labor (Dan's payroll) ~$373 higher — 5 Thursdays in month", "impact": 372.64, "dept": "d2", "action": "Calendar-driven variance; no action needed"},
    {"type": "expense", "category": "OpEx", "description": "Alex Shadraw extra payment for Google Ads + Dan's payroll higher than usual", "impact": 2695, "dept": "marketing", "action": "Confirm if recurring"}
  ],
  "Jun 25": [
    {"type": "anomaly", "category": "COGS", "description": "SCILUC01 — Adobe yearly subscriptions", "impact": 12478, "dept": "d3", "action": "Annual renewal; one-time spike"},
    {"type": "anomaly", "category": "Revenue", "description": "WHIDCA01-CxO $2,400 not received — credit card expired. Payment processed in August, June deposit adjusted accordingly", "impact": 2400, "dept": "d6", "action": "Payment shifted to August (not July as initially expected)"},
    {"type": "anomaly", "category": "COGS", "description": "VRLVL01-Dallas — invoiced 28 hrs ($4,200) but 30.5 hrs of labor cost recorded", "impact": 0, "dept": "d2", "action": "Labor cost exceeds invoiced amount"},
    {"type": "anomaly", "category": "Revenue", "description": "VRLVRY01-Chicago 100 Oakbrook — client invoice pending", "impact": 0, "dept": "d2", "action": "Invoice to be sent"},
    {"type": "anomaly", "category": "Revenue", "description": "VRLVRY01-Boston 154 Newbury St — client invoice pending", "impact": 0, "dept": "d2", "action": "Invoice to be sent"},
    {"type": "anomaly", "category": "Revenue", "description": "NCJWOM01 — new office move invoice pending", "impact": 0, "dept": "d2", "action": "Invoice to be sent"},
    {"type": "anomaly", "category": "COGS", "description": "BHSTRT01-PA1-S1 (New Office Move) — project completed since 2023, costs still showing", "impact": 0, "dept": "d2", "action": "Legacy entry; clean up project codes"},
    {"type": "anomaly", "category": "COGS", "description": "HMCBLD01-PA1-S7 (185 Madison Access Control) — invoiced in 2023 but costs lingering", "impact": 0, "dept": "d2", "action": "Legacy entry; clean up project codes"}
  ],
  "Jul 25": [
    {"type": "anomaly", "category": "COGS", "description": "SHALOM01 — client shifted from Timothy to Craig, higher on-demand costs", "impact": 0, "dept": "d1", "action": "New engineer assignment driving cost increase"},
    {"type": "anomaly", "category": "COGS", "description": "RDKSTG01-CxO — Hammer logged time at high rate, reducing Div 6 profit", "impact": 0, "dept": "d6", "action": "Review CxO labor allocation"}
  ],
  "Aug 25": [
    {"type": "anomaly", "category": "Margin", "description": "Minimal time on WHIDCA-CxO and RDKSTG01-CxO — higher Div 6 profit than usual", "impact": 0, "dept": "d6", "action": "Low activity month; profit % inflated"},
    {"type": "expense", "category": "OpEx", "description": "Traveler insurance $372.60 accrued monthly but no cost recorded in August", "impact": -372.60, "dept": "opex", "action": "Bank timing difference"},
    {"type": "anomaly", "category": "OpEx", "description": "No employee cost overhead recorded in August", "impact": 0, "dept": "opex", "action": "Verify with accounting"},
    {"type": "anomaly", "category": "Revenue", "description": "KRAOCS01-AUS — billing anomaly flagged for review", "impact": 0, "dept": "d1", "action": "Verify billing status and client engagement"}
  ],
  "Sep 25": [
    {"type": "anomaly", "category": "COGS", "description": "VRLVL01 — Dallas and Chicago project hours exceed estimates (Jun-Aug carryover)", "impact": 0, "dept": "d2", "action": "Review project scope and billing"},
    {"type": "anomaly", "category": "COGS", "description": "Non-project expense $5,629 unattributable — asked Stanley and G, no clarity", "impact": 5629.48, "dept": "d5a", "action": "Needs further investigation"},
    {"type": "anomaly", "category": "Revenue", "description": "FNDIGS01-SLA1 Clarity 16 — increase in overage billing", "impact": 5175, "dept": "d1", "action": "Overage reflects higher client usage"},
    {"type": "anomaly", "category": "Revenue", "description": "KHHITT01 — users jumped from 66 to 184 for Microsoft Premium", "impact": 3115.20, "dept": "d3", "action": "Seat count increase driving revenue spike"},
    {"type": "anomaly", "category": "COGS", "description": "WHIDAC01 — Cloudflare renewal", "impact": 8400, "dept": "d3", "action": "Annual renewal; one-time cost spike"},
    {"type": "anomaly", "category": "Revenue", "description": "SCILUC01-CxO — new CxO engagement", "impact": 675, "dept": "d6", "action": "New client engagement"},
    {"type": "anomaly", "category": "Revenue", "description": "VILOCA01-CxO (On Demand) — new engagement", "impact": 2695, "dept": "d6", "action": "On-demand CxO revenue"},
    {"type": "anomaly", "category": "Revenue", "description": "SWTLNE01-SLA1 A+ Animal — new client onboarded", "impact": 7199.82, "dept": "d8", "action": "New recurring revenue"},
    {"type": "anomaly", "category": "Revenue", "description": "KHHAITE extra billing for past licenses — income inflated", "impact": 0, "dept": "d3", "action": "One-time adjustment"}
  ],
  "Oct 25": [
    {"type": "anomaly", "category": "Revenue", "description": "Shiraz & Swiftline A+ Animal seat count reduced", "impact": -2183.32, "dept": "d8", "action": "Client downsized seats"},
    {"type": "anomaly", "category": "Revenue", "description": "RGCEN — invoice recorded but no related expense", "impact": 0, "dept": "d5", "action": "Verify cost entry"}
  ],
  "Nov 25": [
    {"type": "anomaly", "category": "Revenue", "description": "Shiraz & Swiftline A+ Animal seat count reduced (continued)", "impact": -2183.32, "dept": "d8", "action": "Ongoing reduction from October"},
    {"type": "anomaly", "category": "Revenue", "description": "AGU onboarded — new A+ Animal client", "impact": 20651.40, "dept": "d8", "action": "Major new client; recurring revenue"},
    {"type": "anomaly", "category": "COGS", "description": "EVE point material purchased, categorized under project material by G", "impact": 600, "dept": "d5a", "action": "Classification directed by management"}
  ],
  "Dec 25": [
    {"type": "anomaly", "category": "Revenue", "description": "Los Angeles Country Club onboarded — new client boosting Div 1 and Div 8", "impact": 11618, "dept": "d1", "action": "New recurring revenue from major client"},
    {"type": "anomaly", "category": "Revenue", "description": "AGU onboarding (from November) continuing to boost Div 8 revenue", "impact": 20651.40, "dept": "d8", "action": "Recurring revenue now stabilized"},
    {"type": "anomaly", "category": "COGS", "description": "Multiple projects with actual hours exceeding estimates — loss in Div 2", "impact": 0, "dept": "d2", "action": "Review project scoping and estimation process"},
    {"type": "anomaly", "category": "Revenue", "description": "RGCENG $25,752 + Scilucent $24,182 non-project material purchases — big revenue spike in Div 5A", "impact": 49934.43, "dept": "d5a", "action": "Large one-time material orders"},
    {"type": "expense", "category": "COGS", "description": "VRLVRY01-Boston and KHHITT01 M365 migration — $2,738 material cost with no matching material revenue (labor-only agreement)", "impact": 2738, "dept": "d5b", "action": "Cost recorded in Div 5B but income in Div 2"}
  ],
  "Jan 26": [
    {"type": "expense", "category": "COGS", "description": "$7,232 Microsourcing employees time logged under DAGtech internal R&D", "impact": 7231.94, "dept": "unalloc", "action": "Reclassified from Growth to COGS"},
    {"type": "expense", "category": "OpEx", "description": "Legal expense — Niro Law Group, Whiteford Law, and CT Corporation", "impact": 4614.96, "dept": "opex", "action": "Multiple legal engagements in January"},
    {"type": "expense", "category": "OpEx", "description": "MSP360 recategorized from Operational to Consulting expense", "impact": 2770, "dept": "opex", "action": "Category reclassification"},
    {"type": "expense", "category": "Growth", "description": "Expedia and Delta airline — travel increase in January", "impact": 7747.69, "dept": "growth", "action": "Dan and Kristin LA trip for LACC client launch"},
    {"type": "expense", "category": "OpEx", "description": "$4K Hudu yearly charge", "impact": 4244.41, "dept": "opex", "action": "Annual subscription renewal"},
    {"type": "adjustment", "category": "OpEx", "description": "Bonus — $3,000 one-time for Justin", "impact": 3000, "dept": "opex", "action": "Confirmed one-time"},
    {"type": "adjustment", "category": "Margin", "description": "Div 3 Cloud GP% — 19.9% (target 60%)", "impact": 0, "dept": "d3", "action": "Evaluate bundling into platform pricing"},
    {"type": "adjustment", "category": "Revenue", "description": "Div 8 Resold services COGS $7,343", "impact": 7342.75, "dept": "d8", "action": "New resold services cost line"}
  ],
  "Feb 26": [
    {"type": "anomaly", "category": "Revenue", "description": "Some clients reduced On Demand hours — Div 1 revenue decline of ~$4,754", "impact": -4754.11, "dept": "d1", "action": "Monitor client on-demand usage trends"},
    {"type": "anomaly", "category": "COGS", "description": "VRLVRY01-Boston 154 Newbury — labor costs recorded but revenue already recognized in 2025. Hours overran, cannot alter prior-year revenue (books closed, tax returns filed)", "impact": -2634.75, "dept": "d2", "action": "Loss recognized in D2; prior-year books are closed"},
    {"type": "anomaly", "category": "COGS", "description": "~$3,000 in labor costs not charged to client — pre-approval project efforts and mislogged employee hours into wrong client codes", "impact": -3000, "dept": "d2", "action": "Review timesheet logging practices; correct mis-allocated hours"},
    {"type": "anomaly", "category": "Revenue", "description": "HMCBLD01 — increase in cloud services income", "impact": 4660, "dept": "d3", "action": "Client usage increase driving revenue"},
    {"type": "anomaly", "category": "Revenue", "description": "MLWGRP01 — increase in cloud services income", "impact": 2036.76, "dept": "d3", "action": "Client usage increase driving revenue"},
    {"type": "anomaly", "category": "Revenue", "description": "WHIDCA01-CxO — excess CxO hours in February increased revenue", "impact": 2025, "dept": "d6", "action": "Higher client engagement this month"},
    {"type": "expense", "category": "OpEx", "description": "Large reduction in Legal & Professional fees vs January", "impact": 0, "dept": "opex", "action": "January had one-time legal engagements (Niro, Whiteford, CT Corp)"},
    {"type": "expense", "category": "OpEx", "description": "ELA Ruga (Microsourcing contractor) cost now expensed under Office/General Admin instead of Labor Overhead — going forward this will be the standard", "impact": 1735.97, "dept": "opex", "action": "Reclassification: previously split across clients based on hours"},
    {"type": "expense", "category": "Growth", "description": "Travel expense in February remains high, similar to January levels (~$5K increase vs Dec 2025)", "impact": 5000, "dept": "growth", "action": "Review if travel is generating corresponding client revenue"},
    {"type": "expense", "category": "OpEx", "description": "Various non-project material purchases not yet invoiced to clients — Stanley asked to invoice all pending material purchases", "impact": 6134.85, "dept": "other", "action": "Follow up with Stanley on pending invoices"},
    {"type": "adjustment", "category": "COGS", "description": "Labor overhead returned to $21,213 after $0 in January", "impact": 21213.18, "dept": "unalloc", "action": "January had R&D reclassification; February normalized"}
  ]
};

// Flagged Items — color-coded action/monitor cards per month
var FLAGS = {
  "Feb 26": [
    {"status":"action","title":"VRLVRY01-Boston labor overrun — no revenue recognition possible","desc":"Labor costs recorded but revenue was already recognized in 2025. Books are closed and tax returns filed — cannot alter prior-year revenue. $2,635 loss in D2.","next":"Accept as sunk cost; tighten project hour estimates going forward","dept":"COGS / D2"},
    {"status":"action","title":"$3K unbilled labor — mislogged hours & pre-approval work","desc":"Employee/contractor hours logged to project codes during pre-approval phase or to wrong client codes. Not billable.","next":"Implement timesheet review process; correct future logging","dept":"COGS / D2"},
    {"status":"action","title":"Non-project material purchases not invoiced — $6,135","desc":"Various material purchases made but not yet billed to clients. Stanley has been asked to invoice all pending.","next":"Follow up with Stanley on invoicing status","dept":"Revenue / D5"},
    {"status":"monitor","title":"Client On Demand hours reduced — Div 1 revenue down $4,754","desc":"Multiple clients reduced on-demand hours, driving Div 1 revenue decline.","next":"Monitor if trend continues; review client engagement","dept":"Revenue / D1"},
    {"status":"monitor","title":"ELA Ruga cost reclassified to Office/General Admin","desc":"Microsourcing contractor cost ($1,736) now under Office/General Admin instead of Labor Overhead. New permanent categorization going forward.","next":"No action — accounting reclassification","dept":"OPEX"},
    {"status":"monitor","title":"Travel expense remains elevated (~$5K above Dec baseline)","desc":"Travel spending in February similar to January levels. Approximately $5K increase compared to December 2025.","next":"Review if travel is tied to client acquisition/retention","dept":"Growth / OPEX"},
    {"status":"monitor","title":"HMCBLD01 & MLWGRP01 cloud revenue increase","desc":"Combined $6,697 revenue increase in cloud services from these two clients.","next":"Positive trend — monitor for sustainability","dept":"Revenue / D3"}
  ],
  "Jan 26": [
    {"status":"resolved","title":"R&D in COGS — $25,856","desc":"Normal tech overhead is ~$17K/mo. January was $25,856 — the increase of ~$8.9K is the delta above normal. Was previously booked under Growth Expenses at ~$868/mo in 2025.","next":"Resolved — delta is $8.9K above $17K baseline","dept":"COGS / UNALLOC"},
    {"status":"resolved","title":"Travel & business — $7,748 (+144% vs avg)","desc":"Dan and Kristin traveled to LA for extended stay + launch of LA Country Club (LACC), a large new client.","next":"Resolved — justified by LACC client launch","dept":"Growth / OPEX"},
    {"status":"resolved","title":"Consulting expenses — $2,468","desc":"AG MSP helping DAG migrate fully to Autotask. Two more payments coming — total project cost ~$8K spread throughout 2026.","next":"P&L to be updated to reflect this. Will re-ingest data once done.","dept":"OPEX"},
    {"status":"resolved","title":"Bonus — $3,000","desc":"One-time bonus for Justin.","next":"Resolved — confirmed one-time","dept":"OPEX"}
  ],
  "Dec 25": [
    {"status":"action","title":"Div 5 Materials rev spiked to $65.2K","desc":"From $1.5K prior month — 43x increase. Largest single-month swing.","next":"Clarify what drove this spike","dept":"Revenue / D5"},
    {"status":"monitor","title":"Div 2 Project Labor GP% at -23.7%","desc":"Negative margin for second consecutive month.","next":"Review project profitability","dept":"Margin / D2"},
    {"status":"monitor","title":"Div 8 Security Platform crossed $125K rev","desc":"Represents 49% of total company revenue. Concentration risk.","next":"Monitor concentration risk","dept":"Revenue / D8"}
  ],
  "Nov 25": [
    {"status":"action","title":"Div 2 Project Labor GP% at -63.2%","desc":"Worst month on record. Deeply negative margin.","next":"Identify which projects caused the loss","dept":"Margin / D2"},
    {"status":"action","title":"Div 5 Materials rev collapsed to $1,450","desc":"Down from $13.5K prior month — 89% drop.","next":"Clarify if client loss or timing","dept":"Revenue / D5"},
    {"status":"monitor","title":"OpEx at $35.9K (+13% above trailing avg)","desc":"Above the $31.7K trailing 12-month average.","next":"Review what drove the increase","dept":"OPEX"}
  ],
  "Oct 25": [
    {"status":"monitor","title":"Div 5 Materials GP% spiked to 42.6%","desc":"Vs avg ~15%. Unusually high margin.","next":"Verify if sustainable or one-time favorable mix","dept":"Margin / D5"}
  ],
  "Sep 25": [
    {"status":"action","title":"Div 5 Materials rev spiked to $62.8K","desc":"4x prior month ($9.8K). Largest Materials month of 2025.","next":"Clarify what project/client drove this","dept":"Revenue / D5"},
    {"status":"monitor","title":"OpEx at $35.2K (above avg)","desc":"9 anomaly items logged — most of any month in 2025.","next":"Review anomalies list for resolution","dept":"OPEX"}
  ],
  "Aug 25": [
    {"status":"action","title":"Div 2 Project Labor rev tripled to $32.3K","desc":"From ~$10K avg. Single largest D2 month.","next":"Identify the project driving this","dept":"Revenue / D2"},
    {"status":"monitor","title":"Div 6 CxO Consulting GP% at 81.3%","desc":"Unusually high vs avg ~64%.","next":"Verify COGS is correctly allocated","dept":"Margin / D6"}
  ],
  "Jul 25": [
    {"status":"monitor","title":"Div 1 IT Support GP% dropped to 41.2%","desc":"From 61.5% prior month — 20 pt swing.","next":"Review staffing costs","dept":"Margin / D1"},
    {"status":"monitor","title":"Div 2 Project Labor GP% at 4.7%","desc":"Near break-even. Pricing may not cover labor.","next":"Review project pricing","dept":"Margin / D2"}
  ],
  "Jun 25": [
    {"status":"monitor","title":"Total revenue spiked to $262K","desc":"35% above prior month. Highest month until Dec 25.","next":"Understand if sustainable growth","dept":"Revenue"},
    {"status":"monitor","title":"Div 5 Materials rev doubled to $46.9K","desc":"From $22K prior month.","next":"Identify the client/project","dept":"Revenue / D5"}
  ],
  "May 25": [
    {"status":"action","title":"Div 2 Project Labor GP% at -25.5%","desc":"Negative margin. Revenue dropped to $2.1K.","next":"Identify loss-making projects","dept":"Margin / D2"},
    {"status":"monitor","title":"Div 5 Materials rev 6x to $22K","desc":"From $3.6K prior month.","next":"Clarify what client drove this","dept":"Revenue / D5"}
  ],
  "Apr 25": [
    {"status":"action","title":"Div 5 Materials GP% at -2.8%","desc":"Negative margin with revenue drop to $3.6K (from $30.5K).","next":"Review this department viability","dept":"Margin / D5"},
    {"status":"monitor","title":"Div 2 Project Labor GP% dropped to 25.3%","desc":"From 52.6% prior month.","next":"Review project mix","dept":"Margin / D2"}
  ],
  "Mar 25": [
    {"status":"monitor","title":"OpEx at $36.9K (highest of Q1)","desc":"15% above trailing average.","next":"Review what drove the spike","dept":"OPEX"},
    {"status":"monitor","title":"Div 5 Materials rev spiked to $30.5K","desc":"74% increase from $17.5K.","next":"Identify the driver","dept":"Revenue / D5"}
  ],
  "Feb 25": [
    {"status":"action","title":"Div 3 Cloud VAR GP% crashed to 19.5%","desc":"From 41.1% prior month — 21 pt drop.","next":"Investigate COGS increase","dept":"Margin / D3"},
    {"status":"monitor","title":"Div 2 Project Labor GP% spiked to 72.1%","desc":"Unusually high vs avg ~30%.","next":"Verify COGS allocation","dept":"Margin / D2"}
  ],
  "Jan 25": [
    {"status":"monitor","title":"Div 5 Materials GP% at 9.1%","desc":"Well below target 15%. Lowest of any month.","next":"Review vendor pricing","dept":"Margin / D5"},
    {"status":"monitor","title":"Labor overhead at $21.8K","desc":"Highest of all months. Baseline for future tracking.","next":"Benchmark for future tracking","dept":"COGS / UNALLOC"}
  ]
};

var FLAG_SUMMARY = {
  "Feb 26": "Revenue at $231K, down 10% from Jan. Client on-demand reductions drove Div 1 down ~$4.8K. Div 2 losses from VRLVRY01-Boston labor overrun ($2.6K — prior-year books closed) and $3K in mislogged/pre-approval hours. Cloud revenue up via HMCBLD01 (+$4.7K) and MLWGRP01 (+$2K). WHIDCA01-CxO excess hours added $2K. ELA Ruga contractor permanently reclassified from Labor Overhead to Office/General Admin. $6.1K in material purchases pending invoicing (Stanley following up). Travel remains elevated similar to January.",
  "Jan 26": "Revenue at $256K grew 24% YoY. GP margin at 40.2%. Net margin at 7.7% compressed by expense anomalies. A+ Animal/Diamond at $125K represents 49% of revenue. Normalize for the R&D COGS reclassification and GP would be 50.3%.",
  "Dec 25": "Revenue at $278K — record month. GP margin 40.1%. D8 Security Platform at $125K is 45% of revenue. D5 Materials had massive $65K spike. D2 continued negative margins.",
  "Nov 25": "Revenue at $211K. GP margin improved to 46.1% (best of 2025). D2 Project Labor posted worst-ever -63.2% margin. D5 Materials nearly zeroed out at $1.5K.",
  "Oct 25": "Revenue at $207K. GP margin 40.3%. Relatively stable month. D5 Materials showed unusually high 42.6% margin.",
  "Sep 25": "Revenue at $270K — second highest month. GP margin 35.2%. D5 Materials spiked to $62.8K. Most anomaly items (9) of any month.",
  "Aug 25": "Revenue at $220K. GP margin 40.1%. D2 Project Labor tripled to $32.3K. D6 CxO posted unusually high 81.3% margin.",
  "Jul 25": "Revenue at $223K. GP margin 35.1%. D1 IT Support margin dropped 20 pts. D2 near break-even at 4.7% margin.",
  "Jun 25": "Revenue spiked to $262K (+35% MoM). GP margin 39.5%. Strong growth across D5 Materials and D8 Security Platform.",
  "May 25": "Revenue at $196K. GP margin 34.8% (lowest of 2025). D2 posted -25.5% margin. D5 rebounded 6x from April.",
  "Apr 25": "Revenue at $200K. GP margin 35.9%. D5 Materials margin went negative at -2.8% with revenue collapsing to $3.6K.",
  "Mar 25": "Revenue at $208K. GP margin 37.2%. OpEx at $36.9K was highest of Q1. D5 Materials had strong $30.5K month.",
  "Feb 25": "Revenue at $195K. GP margin 36.3%. D3 Cloud VAR margin crashed 21 pts to 19.5%. D2 posted unusually high 72.1% margin.",
  "Jan 25": "Revenue at $206K. GP margin 36.1%. Baseline month. D5 Materials at 9.1% margin — lowest performer. Labor overhead at $21.8K — highest of all months."
};

// A+ Animal Suite — Seat Count Tracking (Div 8)
// Each entry: month label, YYYYMM code, products with seats(s), diff(d), clients(c), MRR(mrr)
var SEAT_DATA = [
  {"month":"Jul 24","code":"202407","products":{"A+ Animal":{"s":480,"d":-19,"c":27,"mrr":72963.9}}},
  {"month":"Aug 24","code":"202408","products":{"A+ Animal":{"s":481,"d":-2,"c":27,"mrr":73142.2}}},
  {"month":"Sep 24","code":"202409","products":{"A+ Animal":{"s":479,"d":-1,"c":27,"mrr":72981.0}}},
  {"month":"Oct 24","code":"202410","products":{"A+ Animal":{"s":494,"d":15,"c":27,"mrr":75227.5}}},
  {"month":"Nov 24","code":"202411","products":{"A+ Animal":{"s":494,"d":0,"c":27,"mrr":75188.6}}},
  {"month":"Dec 24","code":"202412","products":{"A+ Animal":{"s":497,"d":2,"c":27,"mrr":75609.7}}},
  {"month":"Jan 25","code":"202501","products":{"A+ Animal":{"s":501,"d":4,"c":27,"mrr":77309.2}}},
  {"month":"Feb 25","code":"202502","products":{"A+ Animal":{"s":503,"d":3,"c":27,"mrr":77595.6},"Diamond Legacy":{"s":0,"d":0,"c":3,"mrr":0},"Diamond IT Pro":{"s":0,"d":0,"c":1,"mrr":0},"TS4":{"s":0,"d":0,"c":1,"mrr":0},"Diamond IT Essentials":{"s":0,"d":0,"c":1,"mrr":0}}},
  {"month":"Mar 25","code":"202503","products":{"A+ Animal":{"s":493,"d":-10,"c":27,"mrr":76019.6},"Diamond Legacy":{"s":37,"d":0,"c":3,"mrr":0},"Diamond IT Pro":{"s":12,"d":0,"c":1,"mrr":0},"TS4":{"s":0,"d":0,"c":1,"mrr":0},"Diamond IT Essentials":{"s":0,"d":0,"c":1,"mrr":0}}},
  {"month":"Apr 25","code":"202504","products":{"A+ Animal":{"s":502,"d":9,"c":27,"mrr":77407.8},"Diamond Legacy":{"s":57,"d":0,"c":3,"mrr":0},"Diamond IT Pro":{"s":12,"d":0,"c":1,"mrr":0},"TS4":{"s":9,"d":0,"c":2,"mrr":0},"Diamond IT Essentials":{"s":18,"d":0,"c":1,"mrr":0}}},
  {"month":"May 25","code":"202505","products":{"A+ Animal":{"s":514,"d":12,"c":27,"mrr":79283.2},"Diamond Legacy":{"s":57,"d":0,"c":3,"mrr":0},"Diamond IT Pro":{"s":12,"d":0,"c":1,"mrr":0},"TS4":{"s":9,"d":0,"c":2,"mrr":0},"Diamond IT Essentials":{"s":18,"d":0,"c":1,"mrr":0}}},
  {"month":"Jun 25","code":"202506","products":{"A+ Animal":{"s":511,"d":-3,"c":27,"mrr":78924.6},"Diamond Legacy":{"s":57,"d":0,"c":3,"mrr":0},"Diamond IT Pro":{"s":11,"d":-1,"c":1,"mrr":-120},"TS4":{"s":9,"d":0,"c":2,"mrr":0},"Diamond IT Essentials":{"s":18,"d":0,"c":1,"mrr":0}}},
  {"month":"Jul 25","code":"202507","products":{"A+ Animal":{"s":546,"d":5,"c":28,"mrr":85249.6},"Diamond Legacy":{"s":57,"d":0,"c":3,"mrr":0},"Diamond IT Pro":{"s":11,"d":0,"c":1,"mrr":0},"TS4":{"s":9,"d":0,"c":2,"mrr":0},"Diamond IT Essentials":{"s":18,"d":0,"c":1,"mrr":0}}},
  {"month":"Aug 25","code":"202508","products":{"A+ Animal":{"s":549,"d":3,"c":29,"mrr":86184.6},"Diamond Legacy":{"s":57,"d":0,"c":3,"mrr":0},"Diamond IT Pro":{"s":11,"d":0,"c":1,"mrr":0},"TS4":{"s":9,"d":0,"c":2,"mrr":0},"Diamond IT Essentials":{"s":18,"d":0,"c":1,"mrr":0}}},
  {"month":"Sep 25","code":"202509","products":{"A+ Animal":{"s":541,"d":-8,"c":29,"mrr":85024.6},"Diamond Legacy":{"s":57,"d":0,"c":3,"mrr":0},"Diamond IT Pro":{"s":11,"d":0,"c":1,"mrr":0},"TS4":{"s":9,"d":0,"c":2,"mrr":0},"Diamond IT Essentials":{"s":18,"d":0,"c":1,"mrr":0}}},
  {"month":"Oct 25","code":"202510","products":{"A+ Animal":{"s":714,"d":-2,"c":30,"mrr":105293.2},"Diamond Legacy":{"s":57,"d":0,"c":3,"mrr":0},"Diamond IT Pro":{"s":12,"d":1,"c":3,"mrr":120},"TS4":{"s":9,"d":0,"c":2,"mrr":0},"Diamond IT Essentials":{"s":18,"d":0,"c":1,"mrr":0}}},
  {"month":"Nov 25","code":"202511","products":{"A+ Animal":{"s":693,"d":128,"c":30,"mrr":102589.2},"Diamond IT Pro":{"s":78,"d":66,"c":3,"mrr":7405},"TS4":{"s":9,"d":0,"c":2,"mrr":0},"Diamond Legacy":{"s":57,"d":0,"c":3,"mrr":0},"Diamond IT Essentials":{"s":18,"d":0,"c":1,"mrr":1746}}},
  {"month":"Dec 25","code":"202512","products":{"A+ Animal":{"s":684,"d":-9,"c":30,"mrr":101143.6},"Diamond IT Pro":{"s":78,"d":0,"c":3,"mrr":7285},"TS4":{"s":7,"d":-2,"c":2,"mrr":0},"Diamond Legacy":{"s":57,"d":0,"c":3,"mrr":0},"Diamond IT Essentials":{"s":18,"d":0,"c":1,"mrr":1746}}},
  {"month":"Jan 26","code":"202601","products":{"A+ Animal":{"s":724,"d":40,"c":32,"mrr":107834.2},"Diamond IT Pro":{"s":101,"d":23,"c":4,"mrr":10091},"TS4":{"s":13,"d":6,"c":3,"mrr":0},"Diamond Legacy":{"s":57,"d":0,"c":3,"mrr":0},"Diamond IT Essentials":{"s":18,"d":0,"c":1,"mrr":1746}}},
  {"month":"Feb 26","code":"202602","products":{"A+ Animal":{"s":716,"d":-6,"c":31,"mrr":106823.6},"Diamond IT Pro":{"s":101,"d":0,"c":4,"mrr":10091},"TS4":{"s":13,"d":0,"c":3,"mrr":0},"Diamond Legacy":{"s":57,"d":0,"c":3,"mrr":0},"Diamond IT Essentials":{"s":18,"d":0,"c":1,"mrr":1746}}},
  {"month":"Mar 26","code":"202603","products":{"A+ Animal":{"s":699,"d":-21,"c":31,"mrr":103543.4},"Diamond IT Pro":{"s":98,"d":-3,"c":4,"mrr":9725},"TS4":{"s":13,"d":0,"c":3,"mrr":0},"Diamond Legacy":{"s":58,"d":1,"c":3,"mrr":65},"Diamond IT Essentials":{"s":18,"d":0,"c":1,"mrr":1746}}},
  {"month":"Apr 26","code":"202604","products":{"A+ Animal":{"s":730,"d":13,"c":31,"mrr":108268.9},"Diamond IT Pro":{"s":102,"d":0,"c":4,"mrr":10210},"TS4":{"s":8,"d":-5,"c":3,"mrr":0},"Diamond Legacy":{"s":58,"d":0,"c":3,"mrr":0},"Diamond IT Essentials":{"s":18,"d":0,"c":1,"mrr":1746}}}
];

var SEAT_PRODUCTS = [
  {id: "A+ Animal", color: "#ef4444", desc: "Core managed security platform"},
  {id: "Diamond IT Pro", color: "#3b82f6", desc: "IT professional suite"},
  {id: "Diamond IT Essentials", color: "#10b981", desc: "IT essentials package"},
  {id: "Diamond Legacy", color: "#f59e0b", desc: "Legacy Diamond platform"},
  {id: "TS4", color: "#8b5cf6", desc: "TS4 security module"}
];

// MSP Benchmarking — Industry ranges and DAG config
// Values are computed dynamically from DATA in renderBenchmarkView()
// headcount is manual until automated: update when team changes
var BENCH_CONFIG = {
  headcount: 16,
  benchmarks: [
    {
      id: "ebitda",
      title: "Adjusted EBITDA Margin",
      formula: "(Revenue − COGS − OpEx + owner addbacks) ÷ Revenue",
      desc: "The single number that drives valuation multiple at exit. Top quartile earns ~2.5x the EBITDA margin of the median. Clearing 20% materially expands the exit multiple.",
      medianLo: 10.0, medianHi: 14.0,
      topLo: 20.0, topHi: 25.0,
      unit: "%",
      source: "ConnectWise/Service Leadership Q2 & Q4 2024; Aventis Advisors"
    },
    {
      id: "revPerEmp",
      title: "Service Revenue per Employee",
      formula: "Annual Service Revenue ÷ Total Headcount",
      desc: "TruMethods anchor metric. Lead indicator of EBITDA margin. Captures service output produced per person — the compounding lever of standardization and automation.",
      medianLo: 125, medianHi: 135,
      topLo: 165, topHi: 185,
      unit: "$K",
      source: "TruMethods World Class MSP; Kaptius 2025; Dune Creek Capital"
    },
    {
      id: "recurPct",
      title: "Recurring Revenue % of Total",
      formula: "(MS + Security + Cloud MRR) ÷ Total Revenue",
      desc: "Recurring dollars are valued at ~10x the multiple of one-time/resale dollars. The foundation of MSP valuation premium — buyers pay 8–12x for high-recurring MSPs vs 4–5x for project-heavy shops.",
      medianLo: 55.0, medianHi: 65.0,
      topLo: 75.0, topHi: 85.0,
      unit: "%",
      source: "ScalePad 2025; Service Leadership Index; Auxo Capital"
    },
    {
      id: "svcMult",
      title: "Service Multiple of Wages",
      formula: "Service Revenue ÷ Service-Team Labor (COGS)",
      desc: "Most directly tied to gross margin. TruMethods target: service wages should be no more than 33% of service revenue (i.e., 3.0x minimum). Every $1 in service wages producing $4.50 vs $2.50 is the difference between top-decile and median margins. Driven by automation, offshoring, and pricing discipline.",
      medianLo: 2.50, medianHi: 3.50,
      topLo: 4.00, topHi: 5.00,
      unit: "x",
      source: "TruMethods 33% wage rule; Thread 30 MSP KPIs"
    },
    {
      id: "recurGrowth",
      title: "Recurring Revenue Growth Rate",
      formula: "Current Recurring Rev ÷ Recurring Rev 12 months prior × 100",
      desc: "Measures whether recurring revenue is growing or shrinking year-over-year. Above 100% means the book is expanding. PE buyers use this to grade revenue quality — sustained growth above 100% materially expands the exit multiple.",
      medianLo: 97.0, medianHi: 103.0,
      topLo: 107.0, topHi: 117.0,
      unit: "%",
      note: "Includes both expansion of existing clients and new logo adds — not a pure same-store NRR metric. MSP-specific benchmarks for this metric are limited; ranges derived from IT services M&A advisory data.",
      source: "Service Leadership Index 2024; Evergreen Services Agreement data; Auxo Capital"
    },
    {
      id: "msMargin",
      title: "Managed Services Gross Margin",
      formula: "(Service Rev − Direct Service COGS incl. labor) ÷ Service Revenue",
      desc: "The headline gross margin buyers want to see, stripped of product-resale drag. Service Leadership 2024 data shows median at 40–42% and top quartile at 46–48%. Only 25% of MSPs exceed 50%. Top performers achieve higher margins through tooling efficiency and tier-1 automation.",
      medianLo: 40.0, medianHi: 48.0,
      topLo: 52.0, topHi: 60.0,
      unit: "%",
      source: "Service Leadership Index 2024; ScalePad Benchmark 2025; ConnectWise IT Nation"
    },
    {
      id: "clientConc",
      title: "Client Concentration Risk",
      formula: "Top Client Revenue ÷ Total Recurring Revenue × 100",
      desc: "Buyers discount heavily for concentration. A single client over 15% of revenue triggers a risk flag in most LOIs. Target: no single client above 10%, top 5 clients below 30% combined. High concentration = key-man risk + negotiation leverage loss.",
      medianLo: 10.0, medianHi: 15.0,
      topLo: 5.0, topHi: 8.0,
      unit: "%",
      invert: true,
      source: "Dune Creek Capital; Evergreen M&A advisory; TruMethods"
    }
  ]
};

// Per-client revenue data for concentration analysis
var CLIENT_DATA = [
  {"month":"Jul 24","code":"202407","totalMrr":72963.9,"totalSeats":480,"totalClients":27,"top1Pct":10.3,"top5Pct":41.1,"top10Pct":64.0,"top1Name":"WHIDCA01-SLA3","clients":[{"n":"WHIDCA01-SLA3","s":50,"d":-3,"mrr":7500},{"n":"SCILUC01-SLA2","s":49,"d":5,"mrr":7129.5},{"n":"LANEOF01-SLA2","s":40,"d":-2,"mrr":5644},{"n":"SHIRAZ01-SLA","s":34,"d":0,"mrr":5100},{"n":"NCJWOM01-SLA1","s":31,"d":-7,"mrr":4631.4},{"n":"AMPWSH01-SLA1","s":27,"d":0,"mrr":4050},{"n":"KATCOM01-SLA2","s":24,"d":0,"mrr":3600},{"n":"BHSTRT01-SLA1","s":19,"d":-1,"mrr":3040},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3000},{"n":"KRAOCS01-SLA1 US","s":22,"d":-2,"mrr":2992},{"n":"AYAVDO01-SLA1","s":17,"d":-1,"mrr":2720},{"n":"KRAOCS01-SLA1 AU","s":18,"d":-4,"mrr":2448},{"n":"RGCENG01-SLA2","s":16,"d":-1,"mrr":2400},{"n":"URBLEG01-SLA2","s":15,"d":0,"mrr":2400},{"n":"BAKEML01-SLA1","s":10,"d":0,"mrr":1990}]},
  {"month":"Aug 24","code":"202408","totalMrr":73142.2,"totalSeats":481,"totalClients":27,"top1Pct":10.0,"top5Pct":40.8,"top10Pct":63.6,"top1Name":"WHIDCA01-SLA3","clients":[{"n":"WHIDCA01-SLA3","s":49,"d":-1,"mrr":7350},{"n":"SCILUC01-SLA2","s":49,"d":0,"mrr":7129.5},{"n":"LANEOF01-SLA2","s":39,"d":-1,"mrr":5502.9},{"n":"SHIRAZ01-SLA","s":34,"d":0,"mrr":5100},{"n":"NCJWOM01-SLA1","s":32,"d":1,"mrr":4780.8},{"n":"AMPWSH01-SLA1","s":27,"d":0,"mrr":4050},{"n":"KATCOM01-SLA2","s":24,"d":-1,"mrr":3600},{"n":"BHSTRT01-SLA1","s":19,"d":0,"mrr":3040},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3000},{"n":"KRAOCS01-SLA1 AU","s":22,"d":0,"mrr":2992},{"n":"AYAVDO01-SLA1","s":17,"d":0,"mrr":2720},{"n":"URBLEG01-SLA2","s":17,"d":0,"mrr":2720},{"n":"KRAOCS01-SLA1 US","s":18,"d":0,"mrr":2448},{"n":"RGCENG01-SLA2","s":16,"d":0,"mrr":2400},{"n":"BAKEML01-SLA1","s":10,"d":0,"mrr":1990}]},
  {"month":"Sep 24","code":"202409","totalMrr":72981.0,"totalSeats":479,"totalClients":27,"top1Pct":9.8,"top5Pct":40.7,"top10Pct":63.4,"top1Name":"SCILUC01-SLA2","clients":[{"n":"SCILUC01-SLA2","s":49,"d":0,"mrr":7129.5},{"n":"WHIDCA01-SLA3","s":46,"d":-3,"mrr":6900},{"n":"LANEOF01-SLA2","s":39,"d":0,"mrr":5502.9},{"n":"SHIRAZ01-SLA","s":34,"d":0,"mrr":5100},{"n":"NCJWOM01-SLA1","s":34,"d":3,"mrr":5079.6},{"n":"AMPWSH01-SLA1","s":27,"d":0,"mrr":4050},{"n":"KATCOM01-SLA2","s":24,"d":0,"mrr":3600},{"n":"BHSTRT01-SLA1","s":19,"d":0,"mrr":3040},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3000},{"n":"URBLEG01-SLA2","s":18,"d":1,"mrr":2880},{"n":"KRAOCS01-SLA1 US","s":21,"d":-1,"mrr":2856},{"n":"AYAVDO01-SLA1","s":16,"d":-1,"mrr":2560},{"n":"RGCENG01-SLA2","s":16,"d":0,"mrr":2400},{"n":"BAKEML01-SLA1","s":12,"d":2,"mrr":2388},{"n":"KRAOCS01-SLA1 AU","s":16,"d":-2,"mrr":2176}]},
  {"month":"Oct 24","code":"202410","totalMrr":75227.5,"totalSeats":494,"totalClients":27,"top1Pct":10.2,"top5Pct":41.1,"top10Pct":63.9,"top1Name":"WHIDCA01-SLA3","clients":[{"n":"WHIDCA01-SLA3","s":51,"d":5,"mrr":7650},{"n":"SCILUC01-SLA2","s":52,"d":3,"mrr":7566},{"n":"LANEOF01-SLA2","s":39,"d":0,"mrr":5502.9},{"n":"SHIRAZ01-SLA","s":34,"d":0,"mrr":5100},{"n":"NCJWOM01-SLA1","s":34,"d":0,"mrr":5079.6},{"n":"AMPWSH01-SLA1","s":27,"d":0,"mrr":4050},{"n":"KATCOM01-SLA2","s":27,"d":3,"mrr":4050},{"n":"BHSTRT01-SLA1","s":19,"d":0,"mrr":3040},{"n":"URBLEG01-SLA2","s":19,"d":1,"mrr":3040},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3000},{"n":"KRAOCS01-SLA1 US","s":21,"d":0,"mrr":2856},{"n":"AYAVDO01-SLA1","s":16,"d":0,"mrr":2560},{"n":"RGCENG01-SLA2","s":16,"d":0,"mrr":2400},{"n":"BAKEML01-SLA1","s":12,"d":0,"mrr":2388},{"n":"KRAOCS01-SLA1 AU","s":17,"d":1,"mrr":2312}]},
  {"month":"Nov 24","code":"202411","totalMrr":75188.6,"totalSeats":494,"totalClients":27,"top1Pct":10.2,"top5Pct":41.3,"top10Pct":64.3,"top1Name":"WHIDCA01-SLA3","clients":[{"n":"WHIDCA01-SLA3","s":51,"d":0,"mrr":7650},{"n":"SCILUC01-SLA2","s":52,"d":0,"mrr":7566},{"n":"LANEOF01-SLA2","s":40,"d":1,"mrr":5644},{"n":"SHIRAZ01-SLA","s":34,"d":0,"mrr":5100},{"n":"NCJWOM01-SLA1","s":34,"d":0,"mrr":5079.6},{"n":"AMPWSH01-SLA1","s":29,"d":2,"mrr":4350},{"n":"KATCOM01-SLA2","s":27,"d":0,"mrr":4050},{"n":"BHSTRT01-SLA1","s":19,"d":0,"mrr":3040},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3000},{"n":"KRAOCS01-SLA1 US","s":21,"d":0,"mrr":2856},{"n":"AYAVDO01-SLA1","s":16,"d":0,"mrr":2560},{"n":"URBLEG01-SLA2","s":16,"d":-3,"mrr":2560},{"n":"RGCENG01-SLA2","s":16,"d":0,"mrr":2400},{"n":"BAKEML01-SLA1","s":12,"d":0,"mrr":2388},{"n":"KRAOCS01-SLA1 AU","s":17,"d":0,"mrr":2312}]},
  {"month":"Dec 24","code":"202412","totalMrr":75609.7,"totalSeats":497,"totalClients":27,"top1Pct":10.5,"top5Pct":41.4,"top10Pct":64.5,"top1Name":"WHIDCA01-SLA3","clients":[{"n":"WHIDCA01-SLA3","s":53,"d":2,"mrr":7950},{"n":"SCILUC01-SLA2","s":52,"d":0,"mrr":7566},{"n":"LANEOF01-SLA2","s":41,"d":-1,"mrr":5785.1},{"n":"NCJWOM01-SLA1","s":34,"d":0,"mrr":5079.6},{"n":"SHIRAZ01-SLA","s":33,"d":0,"mrr":4950},{"n":"AMPWSH01-SLA1","s":32,"d":3,"mrr":4800},{"n":"KATCOM01-SLA2","s":27,"d":0,"mrr":4050},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3000},{"n":"KRAOCS01-SLA1 US","s":21,"d":0,"mrr":2856},{"n":"URBLEG01-SLA2","s":17,"d":1,"mrr":2720},{"n":"AYAVDO01-SLA1","s":16,"d":0,"mrr":2560},{"n":"BHSTRT01-SLA1","s":16,"d":-3,"mrr":2560},{"n":"RGCENG01-SLA2","s":16,"d":0,"mrr":2400},{"n":"BAKEML01-SLA1","s":12,"d":0,"mrr":2388},{"n":"KRAOCS01-SLA1 AU","s":17,"d":0,"mrr":2312}]},
  {"month":"Jan 25","code":"202501","totalMrr":77309.2,"totalSeats":501,"totalClients":27,"top1Pct":10.5,"top5Pct":41.7,"top10Pct":64.3,"top1Name":"WHIDCA01-SLA3","clients":[{"n":"WHIDCA01-SLA3","s":54,"d":1,"mrr":8100},{"n":"SCILUC01-SLA2","s":52,"d":0,"mrr":7566},{"n":"LANEOF01-SLA2","s":40,"d":-1,"mrr":6880},{"n":"NCJWOM01-SLA1","s":33,"d":-1,"mrr":4930.2},{"n":"AMPWSH01-SLA1","s":32,"d":0,"mrr":4800},{"n":"SHIRAZ01-SLA","s":32,"d":-1,"mrr":4800},{"n":"KATCOM01-SLA2","s":27,"d":0,"mrr":4050},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3000},{"n":"KRAOCS01-SLA1 US","s":21,"d":0,"mrr":2856},{"n":"URBLEG01-SLA2","s":17,"d":0,"mrr":2720},{"n":"HOLAPA1-SLA2","s":18,"d":8,"mrr":2592},{"n":"AYAVDO01-SLA1","s":16,"d":0,"mrr":2560},{"n":"BHSTRT01-SLA1","s":16,"d":0,"mrr":2560},{"n":"RGCENG01-SLA2","s":16,"d":0,"mrr":2400},{"n":"KRAOCS01-SLA1 AU","s":17,"d":0,"mrr":2312}]},
  {"month":"Feb 25","code":"202502","totalMrr":77595.6,"totalSeats":503,"totalClients":27,"top1Pct":10.2,"top5Pct":41.8,"top10Pct":64.5,"top1Name":"WHIDCA01-SLA3","clients":[{"n":"WHIDCA01-SLA3","s":53,"d":0,"mrr":7950},{"n":"SCILUC01-SLA2","s":52,"d":0,"mrr":7566},{"n":"LANEOF01-SLA2","s":40,"d":0,"mrr":6880},{"n":"NCJWOM01-SLA1","s":34,"d":1,"mrr":5079.6},{"n":"SHIRAZ01-SLA","s":33,"d":1,"mrr":4950},{"n":"AMPWSH01-SLA1","s":32,"d":0,"mrr":4800},{"n":"KATCOM01-SLA2","s":27,"d":0,"mrr":4050},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3000},{"n":"HOLAPA1-SLA2","s":20,"d":2,"mrr":2880},{"n":"KRAOCS01-SLA1 US","s":21,"d":0,"mrr":2856},{"n":"URBLEG01-SLA2","s":17,"d":0,"mrr":2720},{"n":"AYAVDO01-SLA1","s":16,"d":0,"mrr":2560},{"n":"BHSTRT01-SLA1","s":15,"d":-1,"mrr":2400},{"n":"RGCENG01-SLA2","s":16,"d":0,"mrr":2400},{"n":"KRAOCS01-SLA1 AU","s":17,"d":0,"mrr":2312}]},
  {"month":"Mar 25","code":"202503","totalMrr":76019.6,"totalSeats":542,"totalClients":27,"top1Pct":10.3,"top5Pct":41.4,"top10Pct":64.5,"top1Name":"WHIDCA01-SLA3","clients":[{"n":"WHIDCA01-SLA3","s":52,"d":-1,"mrr":7800},{"n":"SCILUC01-SLA2","s":52,"d":0,"mrr":7566},{"n":"LANEOF01-SLA2","s":36,"d":-4,"mrr":6192},{"n":"NCJWOM01-SLA1","s":34,"d":0,"mrr":5079.6},{"n":"AMPWSH01-SLA1","s":32,"d":0,"mrr":4800},{"n":"SHIRAZ01-SLA","s":32,"d":-1,"mrr":4800},{"n":"KATCOM01-SLA2","s":27,"d":0,"mrr":4050},{"n":"HOLAPA1-SLA2","s":21,"d":1,"mrr":3024},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3000},{"n":"URBLEG01-SLA2","s":17,"d":0,"mrr":2720},{"n":"KRAOCS01-SLA1 US","s":19,"d":-2,"mrr":2584},{"n":"AYAVDO01-SLA1","s":16,"d":0,"mrr":2560},{"n":"KRAOCS01-SLA1 AU","s":17,"d":0,"mrr":2312},{"n":"BHSTRT01-SLA1","s":14,"d":-1,"mrr":2240},{"n":"RGCENG01-SLA2","s":14,"d":-2,"mrr":2100}]},
  {"month":"Apr 25","code":"202504","totalMrr":77407.8,"totalSeats":598,"totalClients":27,"top1Pct":10.3,"top5Pct":41.8,"top10Pct":64.7,"top1Name":"WHIDCA01-SLA3","clients":[{"n":"WHIDCA01-SLA3","s":53,"d":1,"mrr":7950},{"n":"SCILUC01-SLA2","s":52,"d":0,"mrr":7566},{"n":"LANEOF01-SLA2","s":37,"d":1,"mrr":6364},{"n":"NCJWOM01-SLA1","s":37,"d":3,"mrr":5527.8},{"n":"SHIRAZ01-SLA","s":33,"d":1,"mrr":4950},{"n":"AMPWSH01-SLA1","s":32,"d":0,"mrr":4800},{"n":"KATCOM01-SLA2","s":27,"d":0,"mrr":4050},{"n":"HOLAPA1-SLA2","s":22,"d":1,"mrr":3168},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3000},{"n":"URBLEG01-SLA2","s":17,"d":0,"mrr":2720},{"n":"KRAOCS01-SLA1 US","s":19,"d":0,"mrr":2584},{"n":"AYAVDO01-SLA1","s":15,"d":-1,"mrr":2400},{"n":"KRAOCS01-SLA1 AU","s":17,"d":0,"mrr":2312},{"n":"BHSTRT01-SLA1","s":14,"d":0,"mrr":2240},{"n":"RGCENG01-SLA2","s":14,"d":0,"mrr":2100}]},
  {"month":"May 25","code":"202505","totalMrr":79283.2,"totalSeats":610,"totalClients":27,"top1Pct":11.0,"top5Pct":42.2,"top10Pct":64.7,"top1Name":"WHIDCA01-SLA3","clients":[{"n":"WHIDCA01-SLA3","s":58,"d":5,"mrr":8700},{"n":"SCILUC01-SLA2","s":52,"d":0,"mrr":7566},{"n":"LANEOF01-SLA2","s":38,"d":1,"mrr":6536},{"n":"NCJWOM01-SLA1","s":38,"d":1,"mrr":5677.2},{"n":"AMPWSH01-SLA1","s":33,"d":1,"mrr":4950},{"n":"SHIRAZ01-SLA","s":33,"d":0,"mrr":4950},{"n":"KATCOM01-SLA2","s":27,"d":0,"mrr":4050},{"n":"HOLAPA1-SLA2","s":21,"d":-1,"mrr":3024},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3000},{"n":"URBLEG01-SLA2","s":18,"d":1,"mrr":2880},{"n":"KRAOCS01-SLA1 US","s":19,"d":0,"mrr":2584},{"n":"AYAVDO01-SLA1","s":15,"d":0,"mrr":2400},{"n":"BHSTRT01-SLA1","s":15,"d":1,"mrr":2400},{"n":"KRAOCS01-SLA1 AU","s":17,"d":0,"mrr":2312},{"n":"RGCENG01-SLA2","s":14,"d":0,"mrr":2100}]},
  {"month":"Jun 25","code":"202506","totalMrr":78804.6,"totalSeats":606,"totalClients":27,"top1Pct":10.8,"top5Pct":43.1,"top10Pct":64.3,"top1Name":"WHIDCA01-SLA3","clients":[{"n":"WHIDCA01-SLA3","s":57,"d":-1,"mrr":8550},{"n":"SCILUC01-SLA2","s":52,"d":0,"mrr":7566},{"n":"LANEOF01-SLA2","s":41,"d":3,"mrr":7052},{"n":"NCJWOM01-SLA1","s":39,"d":1,"mrr":5826.6},{"n":"AMPWSH01-SLA1","s":33,"d":0,"mrr":4950},{"n":"SHIRAZ01-SLA","s":32,"d":-1,"mrr":4800},{"n":"BHSTRT01-SLA1","s":19,"d":4,"mrr":3040},{"n":"HOLAPA1-SLA2","s":21,"d":0,"mrr":3024},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3000},{"n":"URBLEG01-SLA2","s":18,"d":0,"mrr":2880},{"n":"KATCOM01-SLA2","s":19,"d":-8,"mrr":2850},{"n":"KRAOCS01-SLA1 US","s":19,"d":0,"mrr":2584},{"n":"AYAVDO01-SLA1","s":15,"d":0,"mrr":2400},{"n":"KRAOCS01-SLA1 AU","s":17,"d":0,"mrr":2312},{"n":"RGCENG01-SLA2","s":14,"d":0,"mrr":2100}]},
  {"month":"Jul 25","code":"202507","totalMrr":85249.6,"totalSeats":641,"totalClients":28,"top1Pct":9.9,"top5Pct":40.2,"top10Pct":62.9,"top1Name":"WHIDCA01-SLA3","clients":[{"n":"WHIDCA01-SLA3","s":56,"d":-1,"mrr":8400},{"n":"SCILUC01-SLA2","s":52,"d":0,"mrr":7566},{"n":"LANEOF01-SLA2","s":40,"d":-1,"mrr":6880},{"n":"NCJWOM01-SLA1","s":39,"d":0,"mrr":5826.6},{"n":"RDKSTG01-SLA1","s":32,"d":2,"mrr":5632},{"n":"AMPWSH01-SLA1","s":33,"d":0,"mrr":4950},{"n":"SHIRAZ01-SLA","s":33,"d":1,"mrr":4950},{"n":"BHSTRT01-SLA1","s":21,"d":2,"mrr":3360},{"n":"HOLAPA1-SLA2","s":21,"d":0,"mrr":3024},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3000},{"n":"KATCOM01-SLA2","s":20,"d":1,"mrr":3000},{"n":"URBLEG01-SLA2","s":18,"d":0,"mrr":2880},{"n":"KRAOCS01-SLA1 US","s":20,"d":1,"mrr":2860},{"n":"KRAOCS01-SLA1 AU","s":17,"d":0,"mrr":2431},{"n":"AYAVDO01-SLA1","s":15,"d":0,"mrr":2400}]},
  {"month":"Aug 25","code":"202508","totalMrr":86184.6,"totalSeats":644,"totalClients":28,"top1Pct":9.7,"top5Pct":40.2,"top10Pct":62.9,"top1Name":"WHIDCA01-SLA3","clients":[{"n":"WHIDCA01-SLA3","s":56,"d":0,"mrr":8400},{"n":"SCILUC01-SLA2","s":52,"d":0,"mrr":7566},{"n":"LANEOF01-SLA2","s":41,"d":1,"mrr":7052},{"n":"NCJWOM01-SLA1","s":39,"d":0,"mrr":5826.6},{"n":"RDKSTG01-SLA1","s":33,"d":1,"mrr":5808},{"n":"AMPWSH01-SLA1","s":33,"d":0,"mrr":4950},{"n":"SHIRAZ01-SLA","s":33,"d":0,"mrr":4950},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3440},{"n":"BHSTRT01-SLA1","s":20,"d":-1,"mrr":3200},{"n":"HOLAPA1-SLA2","s":21,"d":0,"mrr":3024},{"n":"KRAOCS01-SLA1 US","s":21,"d":1,"mrr":3003},{"n":"KATCOM01-SLA2","s":20,"d":0,"mrr":3000},{"n":"URBLEG01-SLA2","s":18,"d":0,"mrr":2880},{"n":"KRAOCS01-SLA1 AU","s":17,"d":0,"mrr":2431},{"n":"AYAVDO01-SLA1","s":15,"d":0,"mrr":2400}]},
  {"month":"Sep 25","code":"202509","totalMrr":85024.6,"totalSeats":636,"totalClients":28,"top1Pct":9.9,"top5Pct":41.0,"top10Pct":62.5,"top1Name":"WHIDCA01-SLA3","clients":[{"n":"WHIDCA01-SLA3","s":56,"d":0,"mrr":8400},{"n":"SCILUC01-SLA2","s":52,"d":0,"mrr":7566},{"n":"LANEOF01-SLA2","s":41,"d":1,"mrr":7052},{"n":"RDKSTG01-SLA1","s":34,"d":1,"mrr":5984},{"n":"NCJWOM01-SLA1","s":39,"d":0,"mrr":5826.6},{"n":"AMPWSH01-SLA1","s":32,"d":-1,"mrr":4800},{"n":"SHIRAZ01-SLA","s":27,"d":-6,"mrr":4050},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3440},{"n":"BHSTRT01-SLA1","s":19,"d":-1,"mrr":3040},{"n":"HOLAPA1-SLA2","s":21,"d":0,"mrr":3024},{"n":"KRAOCS01-SLA1 US","s":21,"d":0,"mrr":3003},{"n":"URBLEG01-SLA2","s":18,"d":0,"mrr":2880},{"n":"KATCOM01-SLA2","s":19,"d":-1,"mrr":2850},{"n":"KRAOCS01-SLA1 AU","s":17,"d":0,"mrr":2431},{"n":"AYAVDO01-SLA1","s":15,"d":0,"mrr":2400}]},
  {"month":"Oct 25","code":"202510","totalMrr":105413.2,"totalSeats":810,"totalClients":30,"top1Pct":19.6,"top5Pct":47.6,"top10Pct":66.8,"top1Name":"AGUDCA01-SLA1","clients":[{"n":"AGUDCA01-SLA1","s":149,"d":0,"mrr":20651.4},{"n":"WHIDCA01-SLA3","s":60,"d":4,"mrr":9000},{"n":"SCILUC01-SLA2","s":52,"d":0,"mrr":7566},{"n":"LANEOF01-SLA2","s":43,"d":2,"mrr":7396},{"n":"NCJWOM01-SLA1","s":37,"d":-2,"mrr":5527.8},{"n":"RDKSTG01-SLA1","s":30,"d":-4,"mrr":5280},{"n":"AMPWSH01-SLA1","s":32,"d":0,"mrr":4800},{"n":"SHIRAZ01-SLA","s":24,"d":-3,"mrr":3600},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3440},{"n":"KATCOM01-SLA2","s":21,"d":2,"mrr":3150},{"n":"BHSTRT01-SLA1","s":19,"d":0,"mrr":3040},{"n":"HOLAPA1-SLA2","s":21,"d":0,"mrr":3024},{"n":"KRAOCS01-SLA1 US","s":21,"d":0,"mrr":3003},{"n":"URBLEG01-SLA2","s":18,"d":0,"mrr":2880},{"n":"KRAOCS01-SLA1 AU","s":17,"d":0,"mrr":2431}]},
  {"month":"Nov 25","code":"202511","totalMrr":111740.2,"totalSeats":855,"totalClients":33,"top1Pct":18.5,"top5Pct":43.8,"top10Pct":62.8,"top1Name":"AGUDCA01-SLA1","clients":[{"n":"AGUDCA01-SLA1","s":149,"d":149,"mrr":20651.4},{"n":"WHIDCA01-SLA3","s":59,"d":-1,"mrr":8850},{"n":"SCILUC01-SLA2","s":52,"d":0,"mrr":7566},{"n":"LANEOF01-SLA2","s":37,"d":-6,"mrr":6364},{"n":"NCJWOM01-SLA1","s":37,"d":0,"mrr":5527.8},{"n":"RDKSTG01-SLA1","s":29,"d":-1,"mrr":5104},{"n":"AMPWSH01-SLA1","s":32,"d":0,"mrr":4800},{"n":"SYNGNE01","s":40,"d":40,"mrr":4560},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3440},{"n":"KATCOM01-SLA2","s":22,"d":1,"mrr":3300},{"n":"BHSTRT01-SLA1","s":20,"d":1,"mrr":3200},{"n":"HOLAPA1-SLA2","s":22,"d":1,"mrr":3168},{"n":"KRAOCS01-SLA1 US","s":21,"d":0,"mrr":3003},{"n":"URBLEG01-SLA2","s":18,"d":0,"mrr":2880},{"n":"AFACTR01","s":25,"d":25,"mrr":2725}]},
  {"month":"Dec 25","code":"202512","totalMrr":110174.6,"totalSeats":844,"totalClients":32,"top1Pct":18.7,"top5Pct":44.8,"top10Pct":63.8,"top1Name":"AGUDCA01-SLA1","clients":[{"n":"AGUDCA01-SLA1","s":149,"d":0,"mrr":20651.4},{"n":"WHIDCA01-SLA3","s":61,"d":2,"mrr":9150},{"n":"SCILUC01-SLA2","s":52,"d":0,"mrr":7566},{"n":"LANEOF01-SLA2","s":37,"d":0,"mrr":6364},{"n":"NCJWOM01-SLA1","s":38,"d":1,"mrr":5677.2},{"n":"AMPWSH01-SLA1","s":32,"d":0,"mrr":4800},{"n":"RDKSTG01-SLA1","s":27,"d":-2,"mrr":4752},{"n":"SYNGNE01","s":40,"d":0,"mrr":4560},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3440},{"n":"KATCOM01-SLA2","s":22,"d":0,"mrr":3300},{"n":"HOLAPA1-SLA2","s":22,"d":0,"mrr":3168},{"n":"BHSTRT01-SLA1","s":18,"d":-2,"mrr":2880},{"n":"URBLEG01-SLA2","s":18,"d":0,"mrr":2880},{"n":"AFACTR01","s":25,"d":0,"mrr":2725},{"n":"KRAOCS01-SLA1 US","s":19,"d":-2,"mrr":2717}]},
  {"month":"Jan 26","code":"202601","totalMrr":119671.2,"totalSeats":913,"totalClients":33,"top1Pct":17.4,"top5Pct":44.6,"top10Pct":64.1,"top1Name":"AGUDCA01-SLA1","clients":[{"n":"AGUDCA01-SLA1","s":150,"d":1,"mrr":20790},{"n":"LACCLB01","s":70,"d":70,"mrr":9448},{"n":"WHIDCA01-SLA3","s":61,"d":0,"mrr":9150},{"n":"SCILUC01-SLA2","s":52,"d":0,"mrr":7566},{"n":"LANEOF01-SLA2","s":37,"d":0,"mrr":6364},{"n":"NCJWOM01-SLA1","s":38,"d":0,"mrr":5677.2},{"n":"AMPWSH01-SLA1","s":33,"d":1,"mrr":4950},{"n":"RDKSTG01-SLA1","s":27,"d":0,"mrr":4752},{"n":"SYNGNE01","s":40,"d":0,"mrr":4560},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3440},{"n":"BHSTRT01-SLA1","s":20,"d":2,"mrr":3200},{"n":"HOLAPA1-SLA2","s":22,"d":0,"mrr":3168},{"n":"KATCOM01-SLA2","s":21,"d":-1,"mrr":3150},{"n":"URBLEG01-SLA2","s":18,"d":0,"mrr":2880},{"n":"AFACTR01","s":25,"d":0,"mrr":2725}]},
  {"month":"Feb 26","code":"202602","totalMrr":118660.6,"totalSeats":905,"totalClients":32,"top1Pct":17.4,"top5Pct":44.7,"top10Pct":64.1,"top1Name":"AGUDCA01-SLA1","clients":[{"n":"AGUDCA01-SLA1","s":149,"d":-1,"mrr":20651.4},{"n":"LACCLB01","s":70,"d":0,"mrr":9448},{"n":"WHIDCA01-SLA3","s":61,"d":0,"mrr":9150},{"n":"SCILUC01-SLA2","s":50,"d":-2,"mrr":7275},{"n":"LANEOF01-SLA2","s":38,"d":1,"mrr":6536},{"n":"NCJWOM01-SLA1","s":38,"d":0,"mrr":5677.2},{"n":"AMPWSH01-SLA1","s":32,"d":-1,"mrr":4800},{"n":"RDKSTG01-SLA1","s":26,"d":-1,"mrr":4576},{"n":"SYNGNE01","s":40,"d":0,"mrr":4560},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3440},{"n":"URBLEG01-SLA2","s":20,"d":2,"mrr":3200},{"n":"KATCOM01-SLA2","s":21,"d":0,"mrr":3150},{"n":"BHSTRT01-SLA1","s":19,"d":-1,"mrr":3040},{"n":"HOLAPA1-SLA2","s":21,"d":-1,"mrr":3024},{"n":"AFACTR01","s":25,"d":0,"mrr":2725}]},
  {"month":"Mar 26","code":"202603","totalMrr":115079.4,"totalSeats":886,"totalClients":33,"top1Pct":18.2,"top5Pct":45.8,"top10Pct":65.7,"top1Name":"AGUDCA01-SLA1","clients":[{"n":"AGUDCA01-SLA1","s":151,"d":2,"mrr":20928.6},{"n":"WHIDCA01-SLA3","s":60,"d":-1,"mrr":9000},{"n":"LACCLB01","s":67,"d":-3,"mrr":8962},{"n":"SCILUC01-SLA2","s":50,"d":0,"mrr":7275},{"n":"LANEOF01-SLA2","s":38,"d":0,"mrr":6536},{"n":"NCJWOM01-SLA1","s":42,"d":4,"mrr":6274.8},{"n":"RDKSTG01-SLA1","s":28,"d":2,"mrr":4928},{"n":"SYNGNE01","s":41,"d":1,"mrr":4674},{"n":"AMPWSH01-SLA1","s":24,"d":-8,"mrr":3600},{"n":"ADVTES01-SLA1","s":20,"d":0,"mrr":3440},{"n":"HOLAPA1-SLA2","s":22,"d":1,"mrr":3168},{"n":"URBLEG01-SLA2","s":19,"d":-1,"mrr":3040},{"n":"AFACTR01","s":25,"d":0,"mrr":2725},{"n":"AYAVDO01-SLA1","s":15,"d":-1,"mrr":2400},{"n":"RGCENG01-SLA2","s":16,"d":0,"mrr":2400}]},
  {"month":"Apr 26","code":"202604","totalMrr":120224.9,"totalSeats":916,"totalClients":32,"top1Pct":17.5,"top5Pct":44.2,"top10Pct":63.3,"top1Name":"AGUDCA01-SLA1","clients":[{"n":"AGUDCA01-SLA1","s":152,"d":1,"mrr":21067.2},{"n":"WHIDCA01-SLA3","s":60,"d":0,"mrr":9000},{"n":"LACCLB01","s":67,"d":0,"mrr":8962},{"n":"SCILUC01-SLA2","s":51,"d":1,"mrr":7420.5},{"n":"LANEOF01-SLA2","s":39,"d":1,"mrr":6708},{"n":"NCJWOM01-SLA1","s":33,"d":-9,"mrr":4930.2},{"n":"RDKSTG01-SLA1","s":28,"d":0,"mrr":4928},{"n":"SYNGNE01","s":42,"d":1,"mrr":4788},{"n":"AMPWSH01-SLA1","s":31,"d":-1,"mrr":4650},{"n":"ADVTES01-SLA1","s":21,"d":1,"mrr":3612},{"n":"SHIRAZ01-SLA","s":24,"d":11,"mrr":3600},{"n":"URBLEG01-SLA2","s":22,"d":3,"mrr":3520},{"n":"HOLAPA1-SLA2","s":24,"d":2,"mrr":3456},{"n":"BHSTRT01-SLA1","s":18,"d":0,"mrr":2880},{"n":"KATCOM01-SLA2","s":19,"d":-1,"mrr":2850}]}
];

// === MRR CLIENT MOVEMENT DATA (D1 + D8, Jun 25 - Feb 26) ===
const MRR_MONTHS = ["Jun 25", "Jul 25", "Aug 25", "Sep 25", "Oct 25", "Nov 25", "Dec 25", "Jan 26", "Feb 26"];
const MRR_D1_SLA_TOTALS = [30491.5, 32959, 28931.98, 27234, 19733.5, 18191, 17249, 17252.5, 15565];
const MRR_D1_TM_TOTALS = [11005.0, 8259.08, 11034.77, 9670.97, 11353.18, 13045.0, 19847.19, 16222.5, 15123.39];
const MRR_D1_TOTALS = [41496.5, 41218.08, 39966.75, 36904.97, 31086.68, 31236.0, 37096.19, 33475.0, 30688.39];
const MRR_D8_PRODUCT_TOTALS = {"D8-A+": [88861.6, 85100.6, 85351.6, 92515.81, 88202.11, 103978.19, 109395.65, 108841.53, 107824.74], "D8-Ess": [1746, 1746, 1746, 1746, 1746, 1746, 1746, 1746, 1746], "D8-Pro": [1158.3, 1158.3, 1287, 1287, 3460.87, 5640, 8216, 8446, 8446], "D8-Leg": [4010, 4010, 4010, 2960, 2960, 8410, 5685, 5685, 5685]};
const MRR_D8_TOTALS = [95775.9, 92014.9, 92394.6, 98508.81, 96368.98, 119774.19, 125042.65, 124718.53, 123701.74];
const MRR_COMBINED = [137272.4, 133232.98, 132361.35, 135413.78, 127455.66, 151010.19, 162138.84, 158193.53, 154390.13];
const MRR_D1_CLIENTS = [{"name": "212TAX01-ODA1", "type": "T&M", "v": [0, 120, 400, 480, 280, 40, 1400, 680, 0]}, {"name": "AFACTR01", "type": "T&M", "v": [0, 0, 0, 0, 0, 320, 320, 1240, 320]}, {"name": "AFFLEN01", "type": "T&M", "v": [0, 0, 0, 0, 0, 0, 0, 0, 40]}, {"name": "AGUDCA01", "type": "T&M", "v": [0, 0, 0, 0, 0, 0, 1200, 1200, 1200]}, {"name": "AMPLHR01-SLA1 Clarity 4", "type": "SLA", "v": [640, 0, 0, 0, 0, 0, 0, 0, 0]}, {"name": "CONVRG01-ODA1", "type": "T&M", "v": [600, 280, 1693.33, 120, 640, 40, 400, 280, 240]}, {"name": "DBDCAR01-OD1", "type": "T&M", "v": [150, 0, 0, 37.5, 0, 0, 0, 112.5, 0]}, {"name": "DWNAPT01", "type": "T&M", "v": [0, 0, 0, 0, 308.18, 0, 0, 0, 0]}, {"name": "EMPCON01-OD1", "type": "T&M", "v": [0, 900, 562.5, 112.5, 0, 150, 862.5, 862.5, 450]}, {"name": "ESJLRY01", "type": "T&M", "v": [150, 0, 0, 0, 0, 0, 0, 0, 0]}, {"name": "EVNFLO01-OD1", "type": "T&M", "v": [40, 0, 0, 0, 0, 0, 40, 0, 0]}, {"name": "FLWSTF01", "type": "T&M", "v": [0, 0, 337.5, 0, 0, 0, 0, 0, 0]}, {"name": "FNDIGS01-SLA1 Clarity 16", "type": "SLA", "v": [2400, 2400, 3600, 2625, 2550, 4425, 2625, 4162.5, 2625]}, {"name": "FRDDVD01-ODA", "type": "T&M", "v": [0, 0, 0, 0, 1080, 800, 1280, 1040, 1360]}, {"name": "GRAEFE01-OD1", "type": "T&M", "v": [325, 0, 0, 0, 0, 0, 0, 0, 65]}, {"name": "GRTPAC01-ODA1", "type": "T&M", "v": [0, 562.5, 525, 562.5, 450, 825, 562.5, 375, 0]}, {"name": "HMCBLD01-SLA2-JoinDaisy Clarity 2", "type": "SLA", "v": [320, 320, 320, 320, 320, 320, 320, 320, 320]}, {"name": "HMCBLD01-SLA2-Miro Clarity 2", "type": "SLA", "v": [320, 320, 320, 320, 320, 320, 320, 320, 320]}, {"name": "HMCBLD01-SLA2-NewtonX Clarity 2", "type": "SLA", "v": [320, 320, 320, 320, 320, 320, 320, 320, 320]}, {"name": "IAVAML01-OD1", "type": "T&M", "v": [0, 0, 70, 0, 660, 0, 0, 0, 0]}, {"name": "KATCOM01", "type": "T&M", "v": [0, 0, 0, 243.62, 0, 0, 0, 0, 0]}, {"name": "KBHLLP01-ODA1", "type": "T&M", "v": [0, 0, 0, 0, 240, 0, 0, 0, 0]}, {"name": "KHHITT01-ODA1", "type": "T&M", "v": [0, 0, 0, 112.5, 0, 0, 0, 300, 0]}, {"name": "KHHITT01-SLA1 Clarity 10", "type": "SLA", "v": [0, 0, 0, 0, 0, 1600, 1600, 1600, 1600]}, {"name": "KRAOCS01-AUS", "type": "T&M", "v": [640, 1000.01, 288.94, 653.6, 640, 640, 639.69, 640, 675.59]}, {"name": "LACCLB01", "type": "T&M", "v": [0, 0, 0, 0, 0, 0, 2400, 2400, 2400]}, {"name": "MAVENE01-OD1", "type": "T&M", "v": [150, 487.5, 150, 412.5, 1125, 262.5, 375, 337.5, 0]}, {"name": "MCRRCY01-SLA1 Clarity 4", "type": "SLA", "v": [1280, 1280, 1280, 1280, 1280, 1280, 1280, 640, 640]}, {"name": "MDFIRE01-ODA1", "type": "T&M", "v": [750, 262.5, 112.5, 840, 400, 560, 960, 0, 772.8]}, {"name": "ONEILD01", "type": "T&M", "v": [0, 0, 0, 852.5, 0, 0, 0, 0, 0]}, {"name": "ONEILD01-SLA1(Clarity 8)", "type": "SLA", "v": [1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200]}, {"name": "PACGCG01-ODA1", "type": "T&M", "v": [360, 160, 1680, 80, 320, 1560, 0, 1960, 200]}, {"name": "PIEBYP01-OD1", "type": "T&M", "v": [412.5, 225, 675, 112.5, 0, 337.5, 75, 75, 0]}, {"name": "RAIRNS01-ODA01", "type": "T&M", "v": [800, 800, 0, 0, 0, 800, 0, 0, 0]}, {"name": "RBSLLC01", "type": "T&M", "v": [0, 0, 0, 0, 0, 0, 0, 0, 600]}, {"name": "RBSLLC01-SLA1 4", "type": "SLA", "v": [600, 600, 600, 600, 600, 600, 600, 600, 0]}, {"name": "RGCENG01", "type": "T&M", "v": [0, 0, 0, 0, 0, 0, 3600, 0, 0]}, {"name": "RSTHWS01-OD1", "type": "T&M", "v": [0, 0, 0, 0, 200, 640, 40, 0, 0]}, {"name": "SHALOM01 - ODA1", "type": "T&M", "v": [0, 0, 0, 0, 0, 1260, 1120, 0, 210]}, {"name": "SHALOM01-SLA1 Clarity 96", "type": "SLA", "v": [11288, 10200, 7395, 7412, 0, 0, 0, 0, 0]}, {"name": "TDSYST01-DCA-OD1", "type": "T&M", "v": [0, 0, 0, 0, 0, 0, 0, 0, 240]}, {"name": "TDSYST01-NYC-OD1", "type": "T&M", "v": [0, 0, 0, 0, 0, 0, 0, 0, 160]}, {"name": "UNIWAY01-OD1", "type": "T&M", "v": [1275, 75, 0, 0, 0, 0, 0, 0, 0]}, {"name": "URBLEG01", "type": "T&M", "v": [1642.5, 960, 1740, 960, 1090, 1870, 1772.5, 960, 1770]}, {"name": "VILLDEN01-OD1", "type": "T&M", "v": [0, 0, 0, 0, 0, 140, 0, 0, 140]}, {"name": "VILOCA01", "type": "T&M", "v": [0, 0, 0, 0, 0, 0, 0, 960, 1480]}, {"name": "VILOCA01-SLA1 Clarity 6", "type": "SLA", "v": [2422.5, 7710, 5197.5, 3885, 2272.5, 960, 960, 0, 0]}, {"name": "VRLVLY01", "type": "T&M", "v": [3710, 3115, 2800, 4091.25, 3920, 2800, 2800, 2800, 2800]}, {"name": "WHIDCA01", "type": "T&M", "v": [0, -688.43, 0, 0, 0, 0, 0, 0, 0]}, {"name": "WHIDCA01-SLA2 (Clarity 32)", "type": "SLA", "v": [8661, 7569, 7659.48, 8232, 9831, 6126, 6984, 7050, 7500]}, {"name": "WHOHEE01-SLA1 Clarity 8", "type": "SLA", "v": [1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040]}];
const MRR_D8_CLIENTS = [{"name": "ADVTES01-SLA1 A+ Animal", "product": "D8-A+", "v": [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000]}, {"name": "AGUDCA01", "product": "D8-A+", "v": [0, 0, 0, 0, 0, 20651.4, 20651.4, 20790, 20651.4]}, {"name": "AMPWSH01-SLA1 A+ Animal", "product": "D8-A+", "v": [4950, 5676, 4988, 5160, 4988, 4300, 4300, 4300, 4300]}, {"name": "AYAVDO01", "product": "D8-A+", "v": [2160, 2160, 2160, 2160, 2160, 2160, 2160, 2160, 2160]}, {"name": "BAKEML01-SLA1 A+ Animal", "product": "D8-A+", "v": [1990, 1990, 1990, 1990, 1990, 1990, 1791, 1791, 1791]}, {"name": "BHSTRT01-SLA1 A+Animal", "product": "D8-A+", "v": [3040, 3360, 3200, 3040, 3200, 2560, 2240, 2400, 2240]}, {"name": "BLUPER01-SLA1 A+Animal", "product": "D8-A+", "v": [1650, 1650, 1650, 1650, 1500, 1200, 1200, 1200, 1200]}, {"name": "CENNUR01-SLA2 A+ Animal", "product": "D8-A+", "v": [1700, 1700, 1700, 1700, 1700, 1700, 1392, 1392, 1392]}, {"name": "DELSON01-SLA1 A+ Animal", "product": "D8-A+", "v": [300, 300, 300, 300, 300, 300, 300, 0, 0]}, {"name": "DRDSHI01-SLA1 A+ Animal", "product": "D8-A+", "v": [0, 0, 796, 796, 796, 796, 796, 796, 796]}, {"name": "ERSKIN01-SLA1 A+ Animal", "product": "D8-A+", "v": [1218, 1218, 1218, 1392, 1218, 1218, 1218, 1218, 1218]}, {"name": "HMCBLD01-SLA1 A+ Animal", "product": "D8-A+", "v": [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050]}, {"name": "HOLAPA01-SLA2 A+ Animal", "product": "D8-A+", "v": [3024, 3024, 3024, 3024, 3024, 3168, 3168, 3168, 3024]}, {"name": "KATCOM01-SLA2 (A+ Animal)", "product": "D8-A+", "v": [2400, 2550, 2550, 2212, 2528, 2528, 2528, 2528, 2370]}, {"name": "KOLAMD01-SLA2 A+ Animal", "product": "D8-A+", "v": [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1200, 1050]}, {"name": "KRAOCS01-AUS", "product": "D8-A+", "v": [2431, 2431, 2431, 2482.66, 2431, 2431, 2504.79, 2506, 2645.37]}, {"name": "KRAOCS01-SLA1 (A+ Animal - USA)", "product": "D8-A+", "v": [2717, 2860, 3003, 3003, 3003, 3003, 2717, 2002, 1859]}, {"name": "LACCLB01", "product": "D8-A+", "v": [0, 0, 0, 0, 0, 0, 6642, 6642, 6642]}, {"name": "LANEOF01-SLA2 A+ Animal", "product": "D8-A+", "v": [7052, 6880, 6880, 7052, 7396, 6364, 6364, 6364, 6536]}, {"name": "LDUWIN01-SLA1 A+Animal", "product": "D8-A+", "v": [1044, 1044, 1044, 1044, 1044, 1044, 1044, 1044, 1044]}, {"name": "MACLAW1-SLA1 A+ Animal", "product": "D8-A+", "v": [1148, 1148, 1148, 1148, 1148, 1148, 1148, 1148, 1148]}, {"name": "MLWGRP01-SLA1 A+ Animal", "product": "D8-A+", "v": [1395, 1395, 1395, 1395, 1395, 1395, 1395, 1240, 1240]}, {"name": "NCJWOM01-SLA1 A+ Animal", "product": "D8-A+", "v": [5826.6, 5826.6, 5826.6, 5826.6, 5527.8, 5527.8, 5527.8, 5677.2, 5677.2]}, {"name": "RDKSTG01", "product": "D8-A+", "v": [10560, 5632, 5632, 5984, 5280, 5104, 4752, 4752, 4576]}, {"name": "REGASC01-SLA1 A+ Animal", "product": "D8-A+", "v": [1791, 1791, 1791, 1791, 1791, 1791, 1791, 1791, 1791]}, {"name": "RGCENG01-SLA2 A+ Animal", "product": "D8-A+", "v": [2100, 2100, 2100, 1950, 1950, 2100, 2100, 2250, 2400]}, {"name": "SCILUC01-SLA2 A+ Animal", "product": "D8-A+", "v": [7275, 7275, 7275, 7865.73, 7865.73, 7865.73, 7865.73, 7865.73, 7420.5]}, {"name": "SHIRAZ01-SLA1 A+ Animal", "product": "D8-A+", "v": [4800, 4950, 4950, 4050, 3600, 1950, 1950, 1950, 1800]}, {"name": "SKFGLR01-SLA2 A+ Animal", "product": "D8-A+", "v": [1760, 1760, 1920, 1920, 1920, 1920, 1920, 1920, 1920]}, {"name": "SWTLNE01-SLA1 A+ Animal", "product": "D8-A+", "v": [0, 0, 0, 7199.82, 3466.58, 2933.26, 2799.93, 2666.6, 2533.27]}, {"name": "URBLEG01", "product": "D8-A+", "v": [2880, 2880, 2880, 2880, 2880, 2880, 2880, 2880, 3200]}, {"name": "WHIDCA01-SLA3 A+ Animal", "product": "D8-A+", "v": [8550, 8400, 8400, 8400, 9000, 8850, 9150, 9150, 9150]}, {"name": "VRLVLY01", "product": "D8-Ess", "v": [1746, 1746, 1746, 1746, 1746, 1746, 1746, 1746, 1746]}, {"name": "IMGCNT01-SLA1 (D365)", "product": "D8-Pro", "v": [1158.3, 1158.3, 1287, 1287, 1287, 1080, 1080, 1080, 1080]}, {"name": "LACCLB01", "product": "D8-Pro", "v": [0, 0, 0, 0, 0, 0, 2576, 2806, 2806]}, {"name": "SYNGNE01-SLA1 D365", "product": "D8-Pro", "v": [0, 0, 0, 0, 2173.87, 4560, 4560, 4560, 4560]}, {"name": "AFACTR01", "product": "D8-Leg", "v": [0, 0, 0, 0, 0, 5450, 2725, 2725, 2725]}, {"name": "SHASQI01-SLA1 D365", "product": "D8-Leg", "v": [2960, 2960, 2960, 2960, 2960, 2960, 2960, 2960, 2960]}, {"name": "TEAMCO01", "product": "D8-Leg", "v": [1050, 1050, 1050, 0, 0, 0, 0, 0, 0]}];
const MRR_D1_MOVEMENTS = [{"from": "Jun 25", "to": "Jul 25", "up": [{"name": "VILOCA01-SLA1 Clarity 6", "prev": 2422.5, "cur": 7710, "delta": 5287.5, "group": "SLA"}, {"name": "KRAOCS01-AUS", "prev": 640, "cur": 1000.01, "delta": 360.01, "group": "T&M"}, {"name": "MAVENE01-OD1", "prev": 150, "cur": 487.5, "delta": 337.5, "group": "T&M"}], "down": [{"name": "UNIWAY01-OD1", "prev": 1275, "cur": 75, "delta": -1200, "group": "T&M"}, {"name": "WHIDCA01-SLA2 (Clarity 32)", "prev": 8661, "cur": 7569, "delta": -1092, "group": "SLA"}, {"name": "SHALOM01-SLA1 Clarity 96", "prev": 11288, "cur": 10200, "delta": -1088, "group": "SLA"}, {"name": "WHIDCA01", "prev": 0, "cur": -688.43, "delta": -688.43, "group": "T&M"}, {"name": "URBLEG01", "prev": 1642.5, "cur": 960, "delta": -682.5, "group": "T&M"}, {"name": "VRLVLY01", "prev": 3710, "cur": 3115, "delta": -595, "group": "T&M"}, {"name": "MDFIRE01-ODA1", "prev": 750, "cur": 262.5, "delta": -487.5, "group": "T&M"}, {"name": "CONVRG01-ODA1", "prev": 600, "cur": 280, "delta": -320, "group": "T&M"}, {"name": "PACGCG01-ODA1", "prev": 360, "cur": 160, "delta": -200, "group": "T&M"}, {"name": "PIEBYP01-OD1", "prev": 412.5, "cur": 225, "delta": -187.5, "group": "T&M"}], "new": [{"name": "EMPCON01-OD1", "rev": 900, "group": "T&M"}, {"name": "GRTPAC01-ODA1", "rev": 562.5, "group": "T&M"}, {"name": "212TAX01-ODA1", "rev": 120, "group": "T&M"}], "lost": [{"name": "AMPLHR01-SLA1 Clarity 4", "rev": 640, "group": "SLA"}, {"name": "GRAEFE01-OD1", "rev": 325, "group": "T&M"}, {"name": "DBDCAR01-OD1", "rev": 150, "group": "T&M"}, {"name": "ESJLRY01", "rev": 150, "group": "T&M"}, {"name": "EVNFLO01-OD1", "rev": 40, "group": "T&M"}], "upTotal": 5985.01, "downTotal": -6540.93, "newTotal": 1582.5, "lostTotal": 1305}, {"from": "Jul 25", "to": "Aug 25", "up": [{"name": "PACGCG01-ODA1", "prev": 160, "cur": 1680, "delta": 1520, "group": "T&M"}, {"name": "CONVRG01-ODA1", "prev": 280, "cur": 1693.33, "delta": 1413.33, "group": "T&M"}, {"name": "FNDIGS01-SLA1 Clarity 16", "prev": 2400, "cur": 3600, "delta": 1200, "group": "SLA"}, {"name": "URBLEG01", "prev": 960, "cur": 1740, "delta": 780, "group": "T&M"}, {"name": "WHIDCA01", "prev": -688.43, "cur": 0, "delta": 688.43, "group": "T&M"}, {"name": "PIEBYP01-OD1", "prev": 225, "cur": 675, "delta": 450, "group": "T&M"}, {"name": "212TAX01-ODA1", "prev": 120, "cur": 400, "delta": 280, "group": "T&M"}, {"name": "WHIDCA01-SLA2 (Clarity 32)", "prev": 7569, "cur": 7659.48, "delta": 90.48, "group": "SLA"}], "down": [{"name": "SHALOM01-SLA1 Clarity 96", "prev": 10200, "cur": 7395, "delta": -2805, "group": "SLA"}, {"name": "VILOCA01-SLA1 Clarity 6", "prev": 7710, "cur": 5197.5, "delta": -2512.5, "group": "SLA"}, {"name": "KRAOCS01-AUS", "prev": 1000.01, "cur": 288.94, "delta": -711.07, "group": "T&M"}, {"name": "EMPCON01-OD1", "prev": 900, "cur": 562.5, "delta": -337.5, "group": "T&M"}, {"name": "MAVENE01-OD1", "prev": 487.5, "cur": 150, "delta": -337.5, "group": "T&M"}, {"name": "VRLVLY01", "prev": 3115, "cur": 2800, "delta": -315, "group": "T&M"}, {"name": "MDFIRE01-ODA1", "prev": 262.5, "cur": 112.5, "delta": -150.0, "group": "T&M"}, {"name": "GRTPAC01-ODA1", "prev": 562.5, "cur": 525, "delta": -37.5, "group": "T&M"}], "new": [{"name": "FLWSTF01", "rev": 337.5, "group": "T&M"}, {"name": "IAVAML01-OD1", "rev": 70, "group": "T&M"}], "lost": [{"name": "RAIRNS01-ODA01", "rev": 800, "group": "T&M"}, {"name": "UNIWAY01-OD1", "rev": 75, "group": "T&M"}], "upTotal": 6422.24, "downTotal": -7206.07, "newTotal": 407.5, "lostTotal": 875}, {"from": "Aug 25", "to": "Sep 25", "up": [{"name": "VRLVLY01", "prev": 2800, "cur": 4091.25, "delta": 1291.25, "group": "T&M"}, {"name": "MDFIRE01-ODA1", "prev": 112.5, "cur": 840, "delta": 727.5, "group": "T&M"}, {"name": "WHIDCA01-SLA2 (Clarity 32)", "prev": 7659.48, "cur": 8232, "delta": 572.52, "group": "SLA"}, {"name": "KRAOCS01-AUS", "prev": 288.94, "cur": 653.6, "delta": 364.66, "group": "T&M"}, {"name": "MAVENE01-OD1", "prev": 150, "cur": 412.5, "delta": 262.5, "group": "T&M"}, {"name": "212TAX01-ODA1", "prev": 400, "cur": 480, "delta": 80, "group": "T&M"}, {"name": "GRTPAC01-ODA1", "prev": 525, "cur": 562.5, "delta": 37.5, "group": "T&M"}, {"name": "SHALOM01-SLA1 Clarity 96", "prev": 7395, "cur": 7412, "delta": 17, "group": "SLA"}], "down": [{"name": "PACGCG01-ODA1", "prev": 1680, "cur": 80, "delta": -1600, "group": "T&M"}, {"name": "CONVRG01-ODA1", "prev": 1693.33, "cur": 120, "delta": -1573.33, "group": "T&M"}, {"name": "VILOCA01-SLA1 Clarity 6", "prev": 5197.5, "cur": 3885, "delta": -1312.5, "group": "SLA"}, {"name": "FNDIGS01-SLA1 Clarity 16", "prev": 3600, "cur": 2625, "delta": -975, "group": "SLA"}, {"name": "URBLEG01", "prev": 1740, "cur": 960, "delta": -780, "group": "T&M"}, {"name": "PIEBYP01-OD1", "prev": 675, "cur": 112.5, "delta": -562.5, "group": "T&M"}, {"name": "EMPCON01-OD1", "prev": 562.5, "cur": 112.5, "delta": -450.0, "group": "T&M"}], "new": [{"name": "ONEILD01", "rev": 852.5, "group": "T&M"}, {"name": "KATCOM01", "rev": 243.62, "group": "T&M"}, {"name": "KHHITT01-ODA1", "rev": 112.5, "group": "T&M"}, {"name": "DBDCAR01-OD1", "rev": 37.5, "group": "T&M"}], "lost": [{"name": "FLWSTF01", "rev": 337.5, "group": "T&M"}, {"name": "IAVAML01-OD1", "rev": 70, "group": "T&M"}], "upTotal": 3352.93, "downTotal": -7253.33, "newTotal": 1246.12, "lostTotal": 407.5}, {"from": "Sep 25", "to": "Oct 25", "up": [{"name": "WHIDCA01-SLA2 (Clarity 32)", "prev": 8232, "cur": 9831, "delta": 1599, "group": "SLA"}, {"name": "MAVENE01-OD1", "prev": 412.5, "cur": 1125, "delta": 712.5, "group": "T&M"}, {"name": "CONVRG01-ODA1", "prev": 120, "cur": 640, "delta": 520, "group": "T&M"}, {"name": "PACGCG01-ODA1", "prev": 80, "cur": 320, "delta": 240, "group": "T&M"}, {"name": "URBLEG01", "prev": 960, "cur": 1090, "delta": 130, "group": "T&M"}], "down": [{"name": "VILOCA01-SLA1 Clarity 6", "prev": 3885, "cur": 2272.5, "delta": -1612.5, "group": "SLA"}, {"name": "MDFIRE01-ODA1", "prev": 840, "cur": 400, "delta": -440, "group": "T&M"}, {"name": "212TAX01-ODA1", "prev": 480, "cur": 280, "delta": -200, "group": "T&M"}, {"name": "VRLVLY01", "prev": 4091.25, "cur": 3920, "delta": -171.25, "group": "T&M"}, {"name": "GRTPAC01-ODA1", "prev": 562.5, "cur": 450, "delta": -112.5, "group": "T&M"}, {"name": "FNDIGS01-SLA1 Clarity 16", "prev": 2625, "cur": 2550, "delta": -75, "group": "SLA"}, {"name": "KRAOCS01-AUS", "prev": 653.6, "cur": 640, "delta": -13.6, "group": "T&M"}], "new": [{"name": "FRDDVD01-ODA", "rev": 1080, "group": "T&M"}, {"name": "IAVAML01-OD1", "rev": 660, "group": "T&M"}, {"name": "DWNAPT01", "rev": 308.18, "group": "T&M"}, {"name": "KBHLLP01-ODA1", "rev": 240, "group": "T&M"}, {"name": "RSTHWS01-OD1", "rev": 200, "group": "T&M"}], "lost": [{"name": "SHALOM01-SLA1 Clarity 96", "rev": 7412, "group": "SLA"}, {"name": "ONEILD01", "rev": 852.5, "group": "T&M"}, {"name": "KATCOM01", "rev": 243.62, "group": "T&M"}, {"name": "EMPCON01-OD1", "rev": 112.5, "group": "T&M"}, {"name": "KHHITT01-ODA1", "rev": 112.5, "group": "T&M"}, {"name": "PIEBYP01-OD1", "rev": 112.5, "group": "T&M"}, {"name": "DBDCAR01-OD1", "rev": 37.5, "group": "T&M"}], "upTotal": 3201.5, "downTotal": -2624.85, "newTotal": 2488.18, "lostTotal": 8883.12}, {"from": "Oct 25", "to": "Nov 25", "up": [{"name": "FNDIGS01-SLA1 Clarity 16", "prev": 2550, "cur": 4425, "delta": 1875, "group": "SLA"}, {"name": "PACGCG01-ODA1", "prev": 320, "cur": 1560, "delta": 1240, "group": "T&M"}, {"name": "URBLEG01", "prev": 1090, "cur": 1870, "delta": 780, "group": "T&M"}, {"name": "RSTHWS01-OD1", "prev": 200, "cur": 640, "delta": 440, "group": "T&M"}, {"name": "GRTPAC01-ODA1", "prev": 450, "cur": 825, "delta": 375, "group": "T&M"}, {"name": "MDFIRE01-ODA1", "prev": 400, "cur": 560, "delta": 160, "group": "T&M"}], "down": [{"name": "WHIDCA01-SLA2 (Clarity 32)", "prev": 9831, "cur": 6126, "delta": -3705, "group": "SLA"}, {"name": "VILOCA01-SLA1 Clarity 6", "prev": 2272.5, "cur": 960, "delta": -1312.5, "group": "SLA"}, {"name": "VRLVLY01", "prev": 3920, "cur": 2800, "delta": -1120, "group": "T&M"}, {"name": "MAVENE01-OD1", "prev": 1125, "cur": 262.5, "delta": -862.5, "group": "T&M"}, {"name": "CONVRG01-ODA1", "prev": 640, "cur": 40, "delta": -600, "group": "T&M"}, {"name": "FRDDVD01-ODA", "prev": 1080, "cur": 800, "delta": -280, "group": "T&M"}, {"name": "212TAX01-ODA1", "prev": 280, "cur": 40, "delta": -240, "group": "T&M"}], "new": [{"name": "KHHITT01-SLA1 Clarity 10", "rev": 1600, "group": "SLA"}, {"name": "SHALOM01 - ODA1", "rev": 1260, "group": "T&M"}, {"name": "RAIRNS01-ODA01", "rev": 800, "group": "T&M"}, {"name": "PIEBYP01-OD1", "rev": 337.5, "group": "T&M"}, {"name": "AFACTR01", "rev": 320, "group": "T&M"}, {"name": "EMPCON01-OD1", "rev": 150, "group": "T&M"}, {"name": "VILLDEN01-OD1", "rev": 140, "group": "T&M"}], "lost": [{"name": "IAVAML01-OD1", "rev": 660, "group": "T&M"}, {"name": "DWNAPT01", "rev": 308.18, "group": "T&M"}, {"name": "KBHLLP01-ODA1", "rev": 240, "group": "T&M"}], "upTotal": 4870, "downTotal": -8120.0, "newTotal": 4607.5, "lostTotal": 1208.18}, {"from": "Nov 25", "to": "Dec 25", "up": [{"name": "212TAX01-ODA1", "prev": 40, "cur": 1400, "delta": 1360, "group": "T&M"}, {"name": "WHIDCA01-SLA2 (Clarity 32)", "prev": 6126, "cur": 6984, "delta": 858, "group": "SLA"}, {"name": "EMPCON01-OD1", "prev": 150, "cur": 862.5, "delta": 712.5, "group": "T&M"}, {"name": "FRDDVD01-ODA", "prev": 800, "cur": 1280, "delta": 480, "group": "T&M"}, {"name": "MDFIRE01-ODA1", "prev": 560, "cur": 960, "delta": 400, "group": "T&M"}, {"name": "CONVRG01-ODA1", "prev": 40, "cur": 400, "delta": 360, "group": "T&M"}, {"name": "MAVENE01-OD1", "prev": 262.5, "cur": 375, "delta": 112.5, "group": "T&M"}], "down": [{"name": "FNDIGS01-SLA1 Clarity 16", "prev": 4425, "cur": 2625, "delta": -1800, "group": "SLA"}, {"name": "RSTHWS01-OD1", "prev": 640, "cur": 40, "delta": -600, "group": "T&M"}, {"name": "GRTPAC01-ODA1", "prev": 825, "cur": 562.5, "delta": -262.5, "group": "T&M"}, {"name": "PIEBYP01-OD1", "prev": 337.5, "cur": 75, "delta": -262.5, "group": "T&M"}, {"name": "SHALOM01 - ODA1", "prev": 1260, "cur": 1120, "delta": -140, "group": "T&M"}, {"name": "URBLEG01", "prev": 1870, "cur": 1772.5, "delta": -97.5, "group": "T&M"}, {"name": "KRAOCS01-AUS", "prev": 640, "cur": 639.69, "delta": -0.31, "group": "T&M"}], "new": [{"name": "RGCENG01", "rev": 3600, "group": "T&M"}, {"name": "LACCLB01", "rev": 2400, "group": "T&M"}, {"name": "AGUDCA01", "rev": 1200, "group": "T&M"}, {"name": "EVNFLO01-OD1", "rev": 40, "group": "T&M"}], "lost": [{"name": "PACGCG01-ODA1", "rev": 1560, "group": "T&M"}, {"name": "RAIRNS01-ODA01", "rev": 800, "group": "T&M"}, {"name": "VILLDEN01-OD1", "rev": 140, "group": "T&M"}], "upTotal": 4283.0, "downTotal": -3162.81, "newTotal": 7240, "lostTotal": 2500}, {"from": "Dec 25", "to": "Jan 26", "up": [{"name": "FNDIGS01-SLA1 Clarity 16", "prev": 2625, "cur": 4162.5, "delta": 1537.5, "group": "SLA"}, {"name": "AFACTR01", "prev": 320, "cur": 1240, "delta": 920, "group": "T&M"}, {"name": "WHIDCA01-SLA2 (Clarity 32)", "prev": 6984, "cur": 7050, "delta": 66, "group": "SLA"}, {"name": "KRAOCS01-AUS", "prev": 639.69, "cur": 640, "delta": 0.31, "group": "T&M"}], "down": [{"name": "URBLEG01", "prev": 1772.5, "cur": 960, "delta": -812.5, "group": "T&M"}, {"name": "212TAX01-ODA1", "prev": 1400, "cur": 680, "delta": -720, "group": "T&M"}, {"name": "MCRRCY01-SLA1 Clarity 4", "prev": 1280, "cur": 640, "delta": -640, "group": "SLA"}, {"name": "FRDDVD01-ODA", "prev": 1280, "cur": 1040, "delta": -240, "group": "T&M"}, {"name": "GRTPAC01-ODA1", "prev": 562.5, "cur": 375, "delta": -187.5, "group": "T&M"}, {"name": "CONVRG01-ODA1", "prev": 400, "cur": 280, "delta": -120, "group": "T&M"}, {"name": "MAVENE01-OD1", "prev": 375, "cur": 337.5, "delta": -37.5, "group": "T&M"}], "new": [{"name": "PACGCG01-ODA1", "rev": 1960, "group": "T&M"}, {"name": "VILOCA01", "rev": 960, "group": "T&M"}, {"name": "KHHITT01-ODA1", "rev": 300, "group": "T&M"}, {"name": "DBDCAR01-OD1", "rev": 112.5, "group": "T&M"}], "lost": [{"name": "RGCENG01", "rev": 3600, "group": "T&M"}, {"name": "SHALOM01 - ODA1", "rev": 1120, "group": "T&M"}, {"name": "MDFIRE01-ODA1", "rev": 960, "group": "T&M"}, {"name": "VILOCA01-SLA1 Clarity 6", "rev": 960, "group": "SLA"}, {"name": "EVNFLO01-OD1", "rev": 40, "group": "T&M"}, {"name": "RSTHWS01-OD1", "rev": 40, "group": "T&M"}], "upTotal": 2523.81, "downTotal": -2757.5, "newTotal": 3332.5, "lostTotal": 6720}, {"from": "Jan 26", "to": "Feb 26", "up": [{"name": "URBLEG01", "prev": 960, "cur": 1770, "delta": 810, "group": "T&M"}, {"name": "VILOCA01", "prev": 960, "cur": 1480, "delta": 520, "group": "T&M"}, {"name": "WHIDCA01-SLA2 (Clarity 32)", "prev": 7050, "cur": 7500, "delta": 450, "group": "SLA"}, {"name": "FRDDVD01-ODA", "prev": 1040, "cur": 1360, "delta": 320, "group": "T&M"}, {"name": "KRAOCS01-AUS", "prev": 640, "cur": 675.59, "delta": 35.59, "group": "T&M"}], "down": [{"name": "PACGCG01-ODA1", "prev": 1960, "cur": 200, "delta": -1760, "group": "T&M"}, {"name": "FNDIGS01-SLA1 Clarity 16", "prev": 4162.5, "cur": 2625, "delta": -1537.5, "group": "SLA"}, {"name": "AFACTR01", "prev": 1240, "cur": 320, "delta": -920, "group": "T&M"}, {"name": "EMPCON01-OD1", "prev": 862.5, "cur": 450, "delta": -412.5, "group": "T&M"}, {"name": "CONVRG01-ODA1", "prev": 280, "cur": 240, "delta": -40, "group": "T&M"}], "new": [{"name": "MDFIRE01-ODA1", "rev": 772.8, "group": "T&M"}, {"name": "RBSLLC01", "rev": 600, "group": "T&M"}, {"name": "TDSYST01-DCA-OD1", "rev": 240, "group": "T&M"}, {"name": "SHALOM01 - ODA1", "rev": 210, "group": "T&M"}, {"name": "TDSYST01-NYC-OD1", "rev": 160, "group": "T&M"}, {"name": "VILLDEN01-OD1", "rev": 140, "group": "T&M"}, {"name": "GRAEFE01-OD1", "rev": 65, "group": "T&M"}, {"name": "AFFLEN01", "rev": 40, "group": "T&M"}], "lost": [{"name": "212TAX01-ODA1", "rev": 680, "group": "T&M"}, {"name": "RBSLLC01-SLA1 4", "rev": 600, "group": "SLA"}, {"name": "GRTPAC01-ODA1", "rev": 375, "group": "T&M"}, {"name": "MAVENE01-OD1", "rev": 337.5, "group": "T&M"}, {"name": "KHHITT01-ODA1", "rev": 300, "group": "T&M"}, {"name": "DBDCAR01-OD1", "rev": 112.5, "group": "T&M"}, {"name": "PIEBYP01-OD1", "rev": 75, "group": "T&M"}], "upTotal": 2135.59, "downTotal": -4670.0, "newTotal": 2227.8, "lostTotal": 2480.0}];
const MRR_D8_MOVEMENTS = [{"from": "Jun 25", "to": "Jul 25", "up": [{"name": "AMPWSH01-SLA1 A+ Animal", "prev": 4950, "cur": 5676, "delta": 726, "group": "D8-A+"}, {"name": "BHSTRT01-SLA1 A+Animal", "prev": 3040, "cur": 3360, "delta": 320, "group": "D8-A+"}, {"name": "KATCOM01-SLA2 (A+ Animal)", "prev": 2400, "cur": 2550, "delta": 150, "group": "D8-A+"}, {"name": "SHIRAZ01-SLA1 A+ Animal", "prev": 4800, "cur": 4950, "delta": 150, "group": "D8-A+"}, {"name": "KRAOCS01-SLA1 (A+ Animal - USA)", "prev": 2717, "cur": 2860, "delta": 143, "group": "D8-A+"}], "down": [{"name": "RDKSTG01", "prev": 10560, "cur": 5632, "delta": -4928, "group": "D8-A+"}, {"name": "LANEOF01-SLA2 A+ Animal", "prev": 7052, "cur": 6880, "delta": -172, "group": "D8-A+"}, {"name": "WHIDCA01-SLA3 A+ Animal", "prev": 8550, "cur": 8400, "delta": -150, "group": "D8-A+"}], "new": [], "lost": [], "upTotal": 1489, "downTotal": -5250, "newTotal": 0, "lostTotal": 0}, {"from": "Jul 25", "to": "Aug 25", "up": [{"name": "SKFGLR01-SLA2 A+ Animal", "prev": 1760, "cur": 1920, "delta": 160, "group": "D8-A+"}, {"name": "KRAOCS01-SLA1 (A+ Animal - USA)", "prev": 2860, "cur": 3003, "delta": 143, "group": "D8-A+"}, {"name": "IMGCNT01-SLA1 (D365)", "prev": 1158.3, "cur": 1287, "delta": 128.7, "group": "D8-Pro"}], "down": [{"name": "AMPWSH01-SLA1 A+ Animal", "prev": 5676, "cur": 4988, "delta": -688, "group": "D8-A+"}, {"name": "BHSTRT01-SLA1 A+Animal", "prev": 3360, "cur": 3200, "delta": -160, "group": "D8-A+"}], "new": [{"name": "DRDSHI01-SLA1 A+ Animal", "rev": 796, "group": "D8-A+"}], "lost": [], "upTotal": 431.7, "downTotal": -848, "newTotal": 796, "lostTotal": 0}, {"from": "Aug 25", "to": "Sep 25", "up": [{"name": "SCILUC01-SLA2 A+ Animal", "prev": 7275, "cur": 7865.73, "delta": 590.73, "group": "D8-A+"}, {"name": "RDKSTG01", "prev": 5632, "cur": 5984, "delta": 352, "group": "D8-A+"}, {"name": "ERSKIN01-SLA1 A+ Animal", "prev": 1218, "cur": 1392, "delta": 174, "group": "D8-A+"}, {"name": "AMPWSH01-SLA1 A+ Animal", "prev": 4988, "cur": 5160, "delta": 172, "group": "D8-A+"}, {"name": "LANEOF01-SLA2 A+ Animal", "prev": 6880, "cur": 7052, "delta": 172, "group": "D8-A+"}, {"name": "KRAOCS01-AUS", "prev": 2431, "cur": 2482.66, "delta": 51.66, "group": "D8-A+"}], "down": [{"name": "SHIRAZ01-SLA1 A+ Animal", "prev": 4950, "cur": 4050, "delta": -900, "group": "D8-A+"}, {"name": "KATCOM01-SLA2 (A+ Animal)", "prev": 2550, "cur": 2212, "delta": -338, "group": "D8-A+"}, {"name": "BHSTRT01-SLA1 A+Animal", "prev": 3200, "cur": 3040, "delta": -160, "group": "D8-A+"}, {"name": "RGCENG01-SLA2 A+ Animal", "prev": 2100, "cur": 1950, "delta": -150, "group": "D8-A+"}], "new": [{"name": "SWTLNE01-SLA1 A+ Animal", "rev": 7199.82, "group": "D8-A+"}], "lost": [{"name": "TEAMCO01", "rev": 1050, "group": "D8-Leg"}], "upTotal": 1512.39, "downTotal": -1548, "newTotal": 7199.82, "lostTotal": 1050}, {"from": "Sep 25", "to": "Oct 25", "up": [{"name": "WHIDCA01-SLA3 A+ Animal", "prev": 8400, "cur": 9000, "delta": 600, "group": "D8-A+"}, {"name": "LANEOF01-SLA2 A+ Animal", "prev": 7052, "cur": 7396, "delta": 344, "group": "D8-A+"}, {"name": "KATCOM01-SLA2 (A+ Animal)", "prev": 2212, "cur": 2528, "delta": 316, "group": "D8-A+"}, {"name": "BHSTRT01-SLA1 A+Animal", "prev": 3040, "cur": 3200, "delta": 160, "group": "D8-A+"}], "down": [{"name": "SWTLNE01-SLA1 A+ Animal", "prev": 7199.82, "cur": 3466.58, "delta": -3733.24, "group": "D8-A+"}, {"name": "RDKSTG01", "prev": 5984, "cur": 5280, "delta": -704, "group": "D8-A+"}, {"name": "SHIRAZ01-SLA1 A+ Animal", "prev": 4050, "cur": 3600, "delta": -450, "group": "D8-A+"}, {"name": "NCJWOM01-SLA1 A+ Animal", "prev": 5826.6, "cur": 5527.8, "delta": -298.8, "group": "D8-A+"}, {"name": "ERSKIN01-SLA1 A+ Animal", "prev": 1392, "cur": 1218, "delta": -174, "group": "D8-A+"}, {"name": "AMPWSH01-SLA1 A+ Animal", "prev": 5160, "cur": 4988, "delta": -172, "group": "D8-A+"}, {"name": "BLUPER01-SLA1 A+Animal", "prev": 1650, "cur": 1500, "delta": -150, "group": "D8-A+"}, {"name": "KRAOCS01-AUS", "prev": 2482.66, "cur": 2431, "delta": -51.66, "group": "D8-A+"}], "new": [{"name": "SYNGNE01-SLA1 D365", "rev": 2173.87, "group": "D8-Pro"}], "lost": [], "upTotal": 1420, "downTotal": -5733.7, "newTotal": 2173.87, "lostTotal": 0}, {"from": "Oct 25", "to": "Nov 25", "up": [{"name": "SYNGNE01-SLA1 D365", "prev": 2173.87, "cur": 4560, "delta": 2386.13, "group": "D8-Pro"}, {"name": "RGCENG01-SLA2 A+ Animal", "prev": 1950, "cur": 2100, "delta": 150, "group": "D8-A+"}, {"name": "HOLAPA01-SLA2 A+ Animal", "prev": 3024, "cur": 3168, "delta": 144, "group": "D8-A+"}], "down": [{"name": "SHIRAZ01-SLA1 A+ Animal", "prev": 3600, "cur": 1950, "delta": -1650, "group": "D8-A+"}, {"name": "LANEOF01-SLA2 A+ Animal", "prev": 7396, "cur": 6364, "delta": -1032, "group": "D8-A+"}, {"name": "AMPWSH01-SLA1 A+ Animal", "prev": 4988, "cur": 4300, "delta": -688, "group": "D8-A+"}, {"name": "BHSTRT01-SLA1 A+Animal", "prev": 3200, "cur": 2560, "delta": -640, "group": "D8-A+"}, {"name": "SWTLNE01-SLA1 A+ Animal", "prev": 3466.58, "cur": 2933.26, "delta": -533.32, "group": "D8-A+"}, {"name": "BLUPER01-SLA1 A+Animal", "prev": 1500, "cur": 1200, "delta": -300, "group": "D8-A+"}, {"name": "IMGCNT01-SLA1 (D365)", "prev": 1287, "cur": 1080, "delta": -207, "group": "D8-Pro"}, {"name": "RDKSTG01", "prev": 5280, "cur": 5104, "delta": -176, "group": "D8-A+"}, {"name": "WHIDCA01-SLA3 A+ Animal", "prev": 9000, "cur": 8850, "delta": -150, "group": "D8-A+"}], "new": [{"name": "AGUDCA01", "rev": 20651.4, "group": "D8-A+"}, {"name": "AFACTR01", "rev": 5450, "group": "D8-Leg"}], "lost": [], "upTotal": 2680.13, "downTotal": -5376.32, "newTotal": 26101.4, "lostTotal": 0}, {"from": "Nov 25", "to": "Dec 25", "up": [{"name": "WHIDCA01-SLA3 A+ Animal", "prev": 8850, "cur": 9150, "delta": 300, "group": "D8-A+"}, {"name": "KRAOCS01-AUS", "prev": 2431, "cur": 2504.79, "delta": 73.79, "group": "D8-A+"}], "down": [{"name": "AFACTR01", "prev": 5450, "cur": 2725, "delta": -2725, "group": "D8-Leg"}, {"name": "RDKSTG01", "prev": 5104, "cur": 4752, "delta": -352, "group": "D8-A+"}, {"name": "BHSTRT01-SLA1 A+Animal", "prev": 2560, "cur": 2240, "delta": -320, "group": "D8-A+"}, {"name": "CENNUR01-SLA2 A+ Animal", "prev": 1700, "cur": 1392, "delta": -308, "group": "D8-A+"}, {"name": "KRAOCS01-SLA1 (A+ Animal - USA)", "prev": 3003, "cur": 2717, "delta": -286, "group": "D8-A+"}, {"name": "BAKEML01-SLA1 A+ Animal", "prev": 1990, "cur": 1791, "delta": -199, "group": "D8-A+"}, {"name": "SWTLNE01-SLA1 A+ Animal", "prev": 2933.26, "cur": 2799.93, "delta": -133.33, "group": "D8-A+"}], "new": [{"name": "LACCLB01", "rev": 6642, "group": "D8-A+"}, {"name": "LACCLB01", "rev": 2576, "group": "D8-Pro"}], "lost": [], "upTotal": 373.79, "downTotal": -4323.33, "newTotal": 9218, "lostTotal": 0}, {"from": "Dec 25", "to": "Jan 26", "up": [{"name": "LACCLB01", "prev": 2576, "cur": 2806, "delta": 230, "group": "D8-Pro"}, {"name": "BHSTRT01-SLA1 A+Animal", "prev": 2240, "cur": 2400, "delta": 160, "group": "D8-A+"}, {"name": "KOLAMD01-SLA2 A+ Animal", "prev": 1050, "cur": 1200, "delta": 150, "group": "D8-A+"}, {"name": "RGCENG01-SLA2 A+ Animal", "prev": 2100, "cur": 2250, "delta": 150, "group": "D8-A+"}, {"name": "NCJWOM01-SLA1 A+ Animal", "prev": 5527.8, "cur": 5677.2, "delta": 149.4, "group": "D8-A+"}, {"name": "AGUDCA01", "prev": 20651.4, "cur": 20790, "delta": 138.6, "group": "D8-A+"}, {"name": "KRAOCS01-AUS", "prev": 2504.79, "cur": 2506, "delta": 1.21, "group": "D8-A+"}], "down": [{"name": "KRAOCS01-SLA1 (A+ Animal - USA)", "prev": 2717, "cur": 2002, "delta": -715, "group": "D8-A+"}, {"name": "MLWGRP01-SLA1 A+ Animal", "prev": 1395, "cur": 1240, "delta": -155, "group": "D8-A+"}, {"name": "SWTLNE01-SLA1 A+ Animal", "prev": 2799.93, "cur": 2666.6, "delta": -133.33, "group": "D8-A+"}], "new": [], "lost": [{"name": "DELSON01-SLA1 A+ Animal", "rev": 300, "group": "D8-A+"}], "upTotal": 979.21, "downTotal": -1003.33, "newTotal": 0, "lostTotal": 300}, {"from": "Jan 26", "to": "Feb 26", "up": [{"name": "URBLEG01", "prev": 2880, "cur": 3200, "delta": 320, "group": "D8-A+"}, {"name": "LANEOF01-SLA2 A+ Animal", "prev": 6364, "cur": 6536, "delta": 172, "group": "D8-A+"}, {"name": "RGCENG01-SLA2 A+ Animal", "prev": 2250, "cur": 2400, "delta": 150, "group": "D8-A+"}, {"name": "KRAOCS01-AUS", "prev": 2506, "cur": 2645.37, "delta": 139.37, "group": "D8-A+"}], "down": [{"name": "SCILUC01-SLA2 A+ Animal", "prev": 7865.73, "cur": 7420.5, "delta": -445.23, "group": "D8-A+"}, {"name": "RDKSTG01", "prev": 4752, "cur": 4576, "delta": -176, "group": "D8-A+"}, {"name": "BHSTRT01-SLA1 A+Animal", "prev": 2400, "cur": 2240, "delta": -160, "group": "D8-A+"}, {"name": "KATCOM01-SLA2 (A+ Animal)", "prev": 2528, "cur": 2370, "delta": -158, "group": "D8-A+"}, {"name": "KOLAMD01-SLA2 A+ Animal", "prev": 1200, "cur": 1050, "delta": -150, "group": "D8-A+"}, {"name": "SHIRAZ01-SLA1 A+ Animal", "prev": 1950, "cur": 1800, "delta": -150, "group": "D8-A+"}, {"name": "HOLAPA01-SLA2 A+ Animal", "prev": 3168, "cur": 3024, "delta": -144, "group": "D8-A+"}, {"name": "KRAOCS01-SLA1 (A+ Animal - USA)", "prev": 2002, "cur": 1859, "delta": -143, "group": "D8-A+"}, {"name": "AGUDCA01", "prev": 20790, "cur": 20651.4, "delta": -138.6, "group": "D8-A+"}, {"name": "SWTLNE01-SLA1 A+ Animal", "prev": 2666.6, "cur": 2533.27, "delta": -133.33, "group": "D8-A+"}], "new": [], "lost": [], "upTotal": 781.37, "downTotal": -1798.16, "newTotal": 0, "lostTotal": 0}];
const MRR_STATS = {d1New:37,d1Lost:35,d8New:7,d8Lost:2,d1Clients:51,d8Clients:39};
