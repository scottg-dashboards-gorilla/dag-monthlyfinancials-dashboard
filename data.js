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
// === CLIENT REVENUE DATA (Jun 25 - Feb 26) ===
const CLIENT_REV_MONTHS = ["Jun 25", "Jul 25", "Aug 25", "Sep 25", "Oct 25", "Nov 25", "Dec 25", "Jan 26", "Feb 26"];

const CLIENT_REV_GRAND_TOTALS = [255149.38, 222186.29, 229841.6, 278006.3, 207633.45, 215082.23, 281027.4, 252741.41, 231507.43];

const CLIENT_REV_DIV_TOTALS = {"D1": [44267.01, 36516.05, 39560.02, 35761.22, 26824.18, 30294, 34687.19, 35442.5, 30688.39], "D2": [5129.6, 13860.28, 40793.56, 17723.88, 14252.5, 1994.12, 1979.16, 3200.52, 2557.85], "D3": [57302.48, 44737.74, 39828.12, 49626.08, 43481.03, 49456.94, 43300.18, 49585.2, 55433.96], "D3-TS3": [370, 370, 370, 370, 370, 370, 370, 370, 370], "D5-Mat": [21452.58, 14751.8, 1331.4, 45467.97, 4048.28, 541.34, 3752.46, 18240.9, 2396], "D5-Mkp": [5760.26, 2203.46, 1210.88, 1278.42, 334.99, 251.26, 6003.25, 2136.11, 831.6], "D5-NP": [20716.72, 5704.98, 7189.72, 13702.83, 9045.65, 3465.55, 54900.69, 11125.91, 3265.4], "D5-Ship": [166.35, 32, 49.83, 780.89, 405.86, 25, 456.99, 128.9, 39], "D6": [5330, 5220, 4780, 8262.5, 6485, 4780, 4780, 5110, 6805], "D8-A+": [88861.6, 85100.6, 85351.6, 92515.81, 88202.11, 103978.19, 109395.65, 108841.53, 107824.74], "D8-Ess": [1746, 1746, 1746, 1746, 1746, 1746, 1746, 1746, 1746], "D8-Pro": [1158.3, 1158.3, 1287, 1287, 3460.87, 5640, 8216, 8446, 8446], "D8-Leg": [4010, 4010, 4010, 2960, 2960, 8410, 5685, 5685, 5685]};

const CLIENT_REV_DETAIL = [{"name": "212TAX01-ODA1", "div": "D1", "v": [0, 120, 400, 480, 280, 40, 1400, 680, 0]}, {"name": "AFACTR01", "div": "D1", "v": [0, 0, 0, 0, 0, 320, 320, 1240, 320]}, {"name": "AFFLEN01", "div": "D1", "v": [0, 0, 0, 0, 0, 0, 0, 0, 40]}, {"name": "AGUDCA01", "div": "D1", "v": [0, 0, 0, 0, 0, 0, 1200, 1200, 1200]}, {"name": "AMPLHR01-SLA1 Clarity 4", "div": "D1", "v": [640, 0, 0, 0, 0, 0, 0, 0, 0]}, {"name": "CONVRG01-ODA1", "div": "D1", "v": [600, 280, 1693.33, 120, 640, 40, 400, 280, 240]}, {"name": "DBDCAR01-OD1", "div": "D1", "v": [150, 0, 0, 37.5, 0, 0, 0, 112.5, 0]}, {"name": "DWNAPT01", "div": "D1", "v": [0, 0, 0, 0, 308.18, 0, 0, 0, 0]}, {"name": "EMPCON01-OD1", "div": "D1", "v": [0, 900, 562.5, 112.5, 0, 150, 862.5, 862.5, 450]}, {"name": "ESJLRY01", "div": "D1", "v": [150, 0, 0, 0, 0, 0, 0, 0, 0]}, {"name": "EVNFLO01-OD1", "div": "D1", "v": [40, 0, 0, 0, 0, 0, 40, 0, 0]}, {"name": "FLWSTF01", "div": "D1", "v": [0, 0, 337.5, 0, 0, 0, 0, 0, 0]}, {"name": "FNDIGS01-SLA1 Clarity 16", "div": "D1", "v": [2400, 2400, 3600, 2625, 2550, 4425, 2625, 4162.5, 2625]}, {"name": "FRDDVD01-ODA", "div": "D1", "v": [0, 0, 0, 0, 1080, 800, 1280, 1040, 1360]}, {"name": "GRAEFE01-OD1", "div": "D1", "v": [325, 0, 0, 0, 0, 0, 0, 0, 65]}, {"name": "GRTPAC01-ODA1", "div": "D1", "v": [0, 562.5, 525, 562.5, 450, 825, 562.5, 375, 0]}, {"name": "HMCBLD01-SLA2-JoinDaisy Clarity 2", "div": "D1", "v": [320, 320, 320, 320, 320, 320, 320, 320, 320]}, {"name": "HMCBLD01-SLA2-Miro Clarity 2", "div": "D1", "v": [320, 320, 320, 320, 320, 320, 320, 320, 320]}, {"name": "HMCBLD01-SLA2-NewtonX Clarity 2", "div": "D1", "v": [320, 320, 320, 320, 320, 320, 320, 320, 320]}, {"name": "IAVAML01-OD1", "div": "D1", "v": [0, 0, 70, 0, 660, 0, 0, 0, 0]}, {"name": "KATCOM01", "div": "D1", "v": [0, 0, 0, 243.62, 0, 0, 0, 0, 0]}, {"name": "KBHLLP01-ODA1", "div": "D1", "v": [0, 0, 0, 0, 240, 0, 0, 0, 0]}, {"name": "KHHITT01-ODA1", "div": "D1", "v": [0, 0, 0, 112.5, 0, 0, 0, 300, 0]}, {"name": "KHHITT01-SLA1 Clarity 10", "div": "D1", "v": [0, 0, 0, 0, 0, 1600, 1600, 1600, 1600]}, {"name": "KRAOCS01-AUS", "div": "D1", "v": [640, 1000.01, 288.94, 653.6, 640, 640, 639.69, 640, 675.59]}, {"name": "LACCLB01", "div": "D1", "v": [0, 0, 0, 0, 0, 0, 2400, 2400, 2400]}, {"name": "MAVENE01-OD1", "div": "D1", "v": [150, 487.5, 150, 412.5, 1125, 262.5, 375, 337.5, 0]}, {"name": "MCRRCY01-SLA1 Clarity 4", "div": "D1", "v": [1280, 1280, 1280, 1280, 1280, 1280, 1280, 640, 640]}, {"name": "MDFIRE01-ODA1", "div": "D1", "v": [750, 262.5, 112.5, 840, 400, 560, 960, 0, 772.8]}, {"name": "ONEILD01", "div": "D1", "v": [0, 0, 0, 852.5, 0, 0, 0, 0, 0]}, {"name": "ONEILD01-SLA1(Clarity 8)", "div": "D1", "v": [1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200]}, {"name": "PACGCG01-ODA1", "div": "D1", "v": [360, 160, 1680, 80, 320, 1560, 0, 1960, 200]}, {"name": "PIEBYP01-OD1", "div": "D1", "v": [412.5, 225, 675, 112.5, 0, 337.5, 75, 75, 0]}, {"name": "RAIRNS01-ODA01", "div": "D1", "v": [800, 800, 0, 0, 0, 800, 0, 0, 0]}, {"name": "RBSLLC01", "div": "D1", "v": [0, 0, 0, 0, 0, 0, 0, 0, 600]}, {"name": "RBSLLC01-SLA1 4", "div": "D1", "v": [600, 600, 600, 600, 600, 600, 600, 600, 0]}, {"name": "RGCENG01", "div": "D1", "v": [0, 0, 0, 0, 0, 0, 3600, 0, 0]}, {"name": "RSTHWS01-OD1", "div": "D1", "v": [0, 0, 0, 0, 200, 640, 40, 0, 0]}, {"name": "SHALOM01 - ODA1", "div": "D1", "v": [0, 0, 0, 0, 0, 1260, 1120, 0, 210]}, {"name": "SHALOM01-SLA1 Clarity 96", "div": "D1", "v": [11288, 10200, 7395, 7412, 0, 0, 0, 0, 0]}, {"name": "TDSYST01-DCA-OD1", "div": "D1", "v": [0, 0, 0, 0, 0, 0, 0, 0, 240]}, {"name": "TDSYST01-NYC-OD1", "div": "D1", "v": [0, 0, 0, 0, 0, 0, 0, 0, 160]}, {"name": "UNIWAY01-OD1", "div": "D1", "v": [1275, 75, 0, 0, 0, 0, 0, 0, 0]}, {"name": "URBLEG01", "div": "D1", "v": [1642.5, 960, 1740, 960, 1090, 1870, 1772.5, 960, 1770]}, {"name": "VILLDEN01-OD1", "div": "D1", "v": [0, 0, 0, 0, 0, 140, 0, 0, 140]}, {"name": "VILOCA01", "div": "D1", "v": [0, 0, 0, 0, 0, 0, 0, 960, 1480]}, {"name": "VILOCA01-SLA1 Clarity 6", "div": "D1", "v": [2422.5, 7710, 5197.5, 3885, 2272.5, 960, 960, 0, 0]}, {"name": "VRLVLY01", "div": "D1", "v": [3710, 3115, 2800, 4091.25, 3920, 2800, 2800, 2800, 2800]}, {"name": "WHIDCA01", "div": "D1", "v": [0, -688.43, 0, 0, 0, 0, 0, 0, 0]}, {"name": "WHIDCA01-SLA2 (Clarity 32)", "div": "D1", "v": [8661, 7569, 7659.48, 8232, 9831, 6126, 6984, 7050, 7500]}, {"name": "WHOHEE01-SLA1 Clarity 8", "div": "D1", "v": [1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040]}, {"name": "BHSTRT01-PMA1-S4 (230 Park)", "div": "D2", "v": [252.28, 2334.39, 0, 0, 0, 0, 0, 0, 0]}, {"name": "EMPCON01-New Office Move (P202511-582)", "div": "D2", "v": [0, 0, 0, 0, 0, 0, 947.35, 2178.9, 2557.85]}, {"name": "FNDIGS01 - Offshore Computing P2 (P202510-873)", "div": "D2", "v": [0, 0, 0, 0, 0, 0, 412.5, 712.5, 0]}, {"name": "FNDIGS01 - Offshore User Computing", "div": "D2", "v": [0, 0, 41.16, 1050, 459.69, 0, 240.03, 309.12, 0]}, {"name": "HMCBLD01 - 385 5th Ave Intercom (P202505-420)", "div": "D2", "v": [0, 154.83, 3203.07, 542.1, 0, 0, 0, 0, 0]}, {"name": "HOLAPA01 - PA1 (192 Lex Office)", "div": "D2", "v": [0, 22.61, 0, 0, 0, 0, 0, 0, 0]}, {"name": "IMGCNT01 - Bloomerang SQL DB (P202506-813)", "div": "D2", "v": [0, 4000, 0, 0, 0, 0, 0, 0, 0]}, {"name": "IMGCNT01 - Conference Room Upgrades (P202501-707)", "div": "D2", "v": [0, 0, 0, 1267.95, 232.05, 0, 0, 0, 0]}, {"name": "KHHITT01 - M365 Migration (P202502-539)", "div": "D2", "v": [0, 0, 7968.75, 4143.75, 6885, 63.75, 0, 0, 0]}, {"name": "MAVENE01-PA1-S3 (Form Automation)", "div": "D2", "v": [54.3, 54.3, 14639.04, 0, 0, 277.07, 0, 0, 0]}, {"name": "MCRRCY01", "div": "D2", "v": [0, 0, 1400, 0, 0, 0, 0, 0, 0]}, {"name": "MCRRCY01-New Office Move (P202504-844)", "div": "D2", "v": [1918.2, 3556.72, 2576, 0, 0, 0, 0, 0, 0]}, {"name": "RDKSTG01-PMA1-S2", "div": "D2", "v": [0, 0, 8299.62, 4300.38, 0, 0, 0, 0, 0]}, {"name": "RGCENG01 - 19th FL Office Move (P202505-490)", "div": "D2", "v": [233.08, 546.48, 0, 425.18, 2935.26, 0, 0, 0, 0]}, {"name": "SHALOM01 - QNAP Deployment (P202509-252)", "div": "D2", "v": [0, 0, 0, 167.16, 672.84, 0, 0, 0, 0]}, {"name": "VRLVRY01 - 5th Ave Office (P202411-505)", "div": "D2", "v": [0, 193.05, 0, 0, 0, 0, 0, 0, 0]}, {"name": "VRLVRY01 - Boston 154 Newbury St (P202505-241)", "div": "D2", "v": [1739.76, 696.3, 405.9, 1826.88, 190.74, 1653.3, 87.12, 0, 0]}, {"name": "VRLVRY01 - Chicago 100 Oakbook (P202505-748)", "div": "D2", "v": [138.6, 1177.68, 343.14, 1812.3, 677.88, 0, 13.86, 0, 0]}, {"name": "VRLVRY01 - Dallas 8687 N Central (P202501-645)", "div": "D2", "v": [793.38, 1123.92, 1916.88, 48.72, 16.8, 0, 0, 0, 0]}, {"name": "WHIDCA01 - Silver Spring Office Move (P202509-617)", "div": "D2", "v": [0, 0, 0, 2139.46, 2182.24, 0, 278.3, 0, 0]}, {"name": "212TAX01", "div": "D3", "v": [185.6, 185.6, 185.6, 105.6, 185.6, 185.6, 291.2, 473.48, 185.6]}, {"name": "ADVTES01", "div": "D3", "v": [243.75, 243.75, 243.75, 243.75, 249.75, 267.75, 247.75, 230, 230]}, {"name": "AMPLHR01", "div": "D3", "v": [219.6, 0, 0, 0, 0, 0, 0, 0, 0]}, {"name": "AMPWSH01", "div": "D3", "v": [1617.0, 1686.6, 1679.4, 1686.6, 1699.8, 1716.6, 1750.2, 1807.8, 1779]}, {"name": "AYAVDO01", "div": "D3", "v": [202.5, 202.5, 202.5, 202.5, 202.5, 202.5, 202.5, 202.5, 202.5]}, {"name": "BAKEML01", "div": "D3", "v": [1616.71, 1570.89, 1724.18, 1825.88, 1924.41, 2037.08, 2022.32, 2074.14, 2128.22]}, {"name": "BCORTH01", "div": "D3", "v": [60, 0, 0, 0, 0, 0, 0, 0, 0]}, {"name": "BHSTRT01", "div": "D3", "v": [1014.6, 1093.8, 1213.8, 1213.8, 1204.2, 1198.6, 1218.6, 1218.6, 1248.9]}, {"name": "CENNUR01", "div": "D3", "v": [482.4, 482.4, 482.4, 482.4, 482.4, 287.4, 287.4, 287.4, 287.4]}, {"name": "CONVRG01", "div": "D3", "v": [90, 90, 90, 90, 90, 90, 90, 90, 90]}, {"name": "CRACCT01", "div": "D3", "v": [750.6, 730.83, 751.8, 750.28, 731.4, 745.54, 730.16, 752.83, 752.68]}, {"name": "CRSKSO01", "div": "D3", "v": [0, 0, 0, 0, 0, 0, 1059.99, 0, 0]}, {"name": "DBDCAR01", "div": "D3", "v": [350.45, 169.32, 169.32, 169.32, 169.32, 169.32, 169.32, 169.32, 169.32]}, {"name": "DELSON01", "div": "D3", "v": [132, 132, 132, 132, 132, 132, 132, 132, 0]}, {"name": "EMPCON01", "div": "D3", "v": [458.4, 458.4, 458.4, 458.4, 458.4, 458.4, 458.4, 2212.4, 458.4]}, {"name": "ERSKIN01", "div": "D3", "v": [235.4, 235.4, 235.4, 235.4, 270.4, 206.4, 206.4, 206.4, 206.4]}, {"name": "EVNFLO01", "div": "D3", "v": [86.4, 86.4, 86.4, 86.4, 71.4, 71.4, 71.4, 71.4, 71.4]}, {"name": "FNDIGS01", "div": "D3", "v": [0, 0, 0, 0, 0, 0, 2399, 0, 0]}, {"name": "GRAEFE01", "div": "D3", "v": [41.2, 31.2, 31.2, 31.2, 31.2, 31.2, 31.2, 31.2, 31.2]}, {"name": "GRTPAC01", "div": "D3", "v": [210, 195, 209.4, 202.2, 202.2, 202.2, 202.2, 202.2, 175.8]}, {"name": "HERHTH01", "div": "D3", "v": [39.84, 39.84, 39.84, 39.84, 39.84, 39.84, 39.84, 39.84, 39.84]}, {"name": "HMCBLD01", "div": "D3", "v": [1132.8, 283.2, 283.2, 948.2, 283.2, 283.2, 283.2, 283.2, 4943.2]}, {"name": "HOLAPA01", "div": "D3", "v": [927.53, 493.9, 546.7, 578.8, 861.7, 528.1, 528.1, 919.28, 578.6]}, {"name": "IAVAML01", "div": "D3", "v": [218, 218, 218, 218, 218, 218, 218, 436, 218]}, {"name": "IMGCNT01", "div": "D3", "v": [33, 33, 110.52, 33, 88.7, 91.32, 160.56, 121.56, 187.56]}, {"name": "KATCOM01", "div": "D3", "v": [1545, 1545, 1401, 1401, 1617, 1743.12, 1649.16, 1846.42, 1882.42]}, {"name": "KHHITT01", "div": "D3", "v": [2352.54, 2425.26, 2583.66, 5210.1, 5493.3, 6504.55, 6510, 7452.97, 7865.77]}, {"name": "KOLAMD01", "div": "D3", "v": [116.04, 116.04, 116.04, 116.04, 116.04, 116.04, 116.04, 116.04, 116.04]}, {"name": "KRAOCS01-AUS", "div": "D3", "v": [5760.41, 5694.35, 5669.26, 5808.4, 5656.39, 5740.62, 5973.21, 5922.65, 6067.07]}, {"name": "KRAOCS01-SLA1 (A+ Animal - USA)", "div": "D3", "v": [150, 150, 150, 150, 150, 150, 100, 100, 100]}, {"name": "KRAOCS01-USA", "div": "D3", "v": [0, 0, 0, 0, 0, 0, 0, 220, 0]}, {"name": "LANEOF01", "div": "D3", "v": [4172.8, 4264.56, 4245.73, 4255.02, 4179.32, 4316.83, 2710.9, 4203.34, 4136.19]}, {"name": "LDUWIN01", "div": "D3", "v": [86.16, 86.16, 86.16, 86.16, 86.16, 86.16, 86, 86.16, 86.16]}, {"name": "MACLAW01", "div": "D3", "v": [832, 826.33, 829.38, 830.22, 823.34, 825.75, 819.54, 821.2, 700.53]}, {"name": "MAVENE01", "div": "D3", "v": [49.5, 48, 51, 49.5, 52.5, 60, 55.5, 54, 52.5]}, {"name": "MDFIRE01", "div": "D3", "v": [858.69, 668.68, 668.68, 668.68, 668.76, 668.68, 668.68, 668.68, 668.68]}, {"name": "MLWGRP01", "div": "D3", "v": [284, 284, 284, 284, 284, 284, 284, 284, 2320.76]}, {"name": "NCJWOM01", "div": "D3", "v": [0, 0, 0, 0, 0, 0, 0, 0, 6.6]}, {"name": "PACGCG01", "div": "D3", "v": [331.6, 368, 368, 368, 388, 388, 388, 388, 338]}, {"name": "PIEBYP01", "div": "D3", "v": [201.6, 201.6, 230.4, 230.4, 259.2, 259.2, 259.2, 259.2, 259.2]}, {"name": "PTRMNA01", "div": "D3", "v": [146.4, 146.4, 146.4, 146.4, 146.4, 0, 0, 0, 0]}, {"name": "RDKSTG01", "div": "D3", "v": [0, 26.4, 1852.8, 627.02, 499.92, 499.92, 499.92, 499.92, 499.92]}, {"name": "RGCENG01", "div": "D3", "v": [648.97, 648.97, 1399.93, 656.97, 732.4, 819.37, 663.37, 661.6, 2423.34]}, {"name": "RISTID01", "div": "D3", "v": [15, 15, 15, 15, 15, 15, 15, 15, 15]}, {"name": "SCILUC01", "div": "D3", "v": [20950.38, 2774.52, 2852.54, 2922.42, 5769.61, 10361.3, 4554, 4279.24, 4245.28]}, {"name": "SHASQI01", "div": "D3", "v": [1018.4, 1037.6, 1037.6, 1037.6, 1157.6, 1097.6, 1097.6, 1217.6, 1157.6]}, {"name": "SHIRAZ01", "div": "D3", "v": [1199.2, 1493.2, 1203.9, 1188.9, 1263.1, 1054, 1054, 1169.5, 1169.5]}, {"name": "SKFGLR01", "div": "D3", "v": [374.62, 348, 348, 348, 348, 348, 348, 374.4, 363]}, {"name": "TDSYST01", "div": "D3", "v": [74.8, 74.8, 74.8, 0, 0, 0, 0, 0, 0]}, {"name": "TEAMCO01", "div": "D3", "v": [100, 100, 100, 0, 0, 0, 0, 0, 0]}, {"name": "UCPWHL01", "div": "D3", "v": [146.87, 0, 0, 0, 0, 0, 0, 0, 0]}, {"name": "URBLEG01", "div": "D3", "v": [842, 842, 842, 842, 910.8, 910.8, 868.4, 875, 875]}, {"name": "VILLDEN01", "div": "D3", "v": [15, 15, 15, 15, 0, 0, 0, 0, 0]}, {"name": "VILOCA01", "div": "D3", "v": [1866.52, 1922.92, 1834.43, 1168, 1153.97, 1931.75, 1760.6, 1951.93, 1951.78]}, {"name": "VRLVLY01", "div": "D3", "v": [40, 0, 0, 0, 0, 0, 0, 0, 0]}, {"name": "WESCRB01", "div": "D3", "v": [0, 46.2, 46.2, 46.2, 46.2, 46.2, 46.2, 46.2, 46.2]}, {"name": "WHIDCA01", "div": "D3", "v": [2776.2, 9906.72, 2282.4, 11421.48, 2067.6, 2067.6, 2146.8, 4110.6, 4103.4]}, {"name": "SHASQI01", "div": "D3-TS3", "v": [370, 370, 370, 370, 370, 370, 370, 370, 370]}, {"name": "Division 4 Partner Network Income", "div": "D3-TS3", "v": [1500.15, 1757.25, 1623.4, 4909.65, 1501.14, 2511.95, 652.53, 4065.28, 4851.31]}, {"name": "Avant Communications", "div": "D3-TS3", "v": [148.84, 148.84, 153.34, 153.34, 153.34, 191.96, 285.57, 268.1, 250.22]}, {"name": "Interactivetel LLC", "div": "D3-TS3", "v": [0, 166.96, 0, 166.96, 0, 333.92, 166.96, 166.96, 166.96]}, {"name": "Pilot Fiber Inc", "div": "D3-TS3", "v": [0, 0, 150, 150, 100, 150, 0, 150, 150]}, {"name": "BHSTRT01", "div": "D5-Mat", "v": [0, 0, 0, 0, 0, 541.34, 0, 0, 0]}, {"name": "BHSTRT01-PMA1-S4 (230 Park)", "div": "D5-Mat", "v": [0, 0, 0, 471, 0, 0, 0, 0, 0]}, {"name": "EMPCON01-New Office Move (P202511-582)", "div": "D5-Mat", "v": [0, 0, 0, 0, 0, 0, 0, 534.99, 0]}, {"name": "ERSKIN01", "div": "D5-Mat", "v": [0, 793.94, 0, 0, 0, 0, 0, 0, 0]}, {"name": "HMCBLD01 - 385 5th Ave Intercom (P202505-420)", "div": "D5-Mat", "v": [0, 0, 153.23, 4668.75, 0, 0, 0, 0, 0]}, {"name": "IMGCNT01", "div": "D5-Mat", "v": [1171.86, 0, 0, 0, 0, 0, 0, 0, 0]}, {"name": "IMGCNT01 - Conference Room Upgrades (P202501-707)", "div": "D5-Mat", "v": [0, 0, 68.82, 7411.52, 0, 0, 0, 0, 0]}, {"name": "KATCOM01", "div": "D5-Mat", "v": [0, 0, 0, 0, 189.36, 0, 0, 0, 0]}, {"name": "MCRRCY01-New Office Move (P202504-844)", "div": "D5-Mat", "v": [0, 11582.5, 584.08, 0, 0, 0, 0, 0, 0]}, {"name": "RGCENG01 - 19th FL Office Move (P202505-490)", "div": "D5-Mat", "v": [6126.11, 0, 0, 0, 469, 0, 0, 0, 0]}, {"name": "SHALOM01 - QNAP Deployment (P202509-252)", "div": "D5-Mat", "v": [0, 0, 0, 6016.08, 3389.92, 0, 0, 0, 0]}, {"name": "SHALOM01-PMA1-S2 (Office Expansion)", "div": "D5-Mat", "v": [0, 0, 0, 0, 0, 0, 3819.55, 0, 0]}, {"name": "VRLVLY01", "div": "D5-Mat", "v": [0, 0, 0, 0, 0, 0, 0, 0, 2396]}, {"name": "VRLVRY01 - Boston 154 Newbury St (P202505-241)", "div": "D5-Mat", "v": [0, 0, 0, 0, 0, 0, 0, 17705.91, 0]}, {"name": "VRLVRY01 - Chicago 100 Oakbook (P202505-748)", "div": "D5-Mat", "v": [0, 0, 525.27, 17280.56, 0, 0, 0, 0, 0]}, {"name": "VRLVRY01 - Dallas 8687 N Central (P202501-645)", "div": "D5-Mat", "v": [14154.61, 2375.36, 0, 1618, 0, 0, 0, 0, 0]}, {"name": "WHIDCA01 - Silver Spring Office Move (P202509-617)", "div": "D5-Mat", "v": [0, 0, 0, 8002.06, 0, 0, 0, 0, 0]}, {"name": "AFACTR01", "div": "D5-Mkp", "v": [0, 0, 0, 0, 0, 251.26, 540.03, 0, 0]}, {"name": "BHSTRT01", "div": "D5-Mkp", "v": [0, 0, 0, 0, 0, 0, 0, 0, 435.74]}, {"name": "CONVRG01", "div": "D5-Mkp", "v": [0, 0, 0, 0, 0, 0, 26.79, 0, 0]}, {"name": "IMGCNT01", "div": "D5-Mkp", "v": [0, 0, 0, 0, 0, 0, 0, 0, 245.86]}, {"name": "KATCOM01", "div": "D5-Mkp", "v": [0, 0, 0, 243.62, 0, 0, 0, 263.79, 0]}, {"name": "KOLAMD01", "div": "D5-Mkp", "v": [0, 0, 0, 10, 0, 0, 0, 598.13, 0]}, {"name": "LANEOF01", "div": "D5-Mkp", "v": [0, 0, 0, 0, 0, 0, 0, 5.71, 0]}, {"name": "REGASC01", "div": "D5-Mkp", "v": [0, 0, 0, 50.01, 0, 0, 479.92, 0, 0]}, {"name": "RGCENG01", "div": "D5-Mkp", "v": [0, 0, 0, 0, 0, 0, 108.02, 0, 0]}, {"name": "SCILUC01", "div": "D5-Mkp", "v": [1433.68, 0, 0, 0, 0, 0, 4848.49, 565.21, 0]}, {"name": "SHALOM01", "div": "D5-Mkp", "v": [3480.71, 0, 300, 0, 0, 0, 0, 0, 0]}, {"name": "SKFGLR01", "div": "D5-Mkp", "v": [0, 223.03, 0, 0, 0, 0, 0, 0, 0]}, {"name": "SWTLNE01", "div": "D5-Mkp", "v": [0, 0, 0, 0, 0, 0, 0, 8.17, 0]}, {"name": "VILOCA01", "div": "D5-Mkp", "v": [17, 0, 0, 0, 0, 0, 0, 0, 0]}, {"name": "VRLVLY01", "div": "D5-Mkp", "v": [111, 0, 0, 177.05, 0, 0, 0, 208.17, 150]}, {"name": "WHIDCA01", "div": "D5-Mkp", "v": [717.87, 1980.43, 910.88, 797.74, 334.99, 0, 0, 486.93, 0]}, {"name": "ADVTES01", "div": "D5-NP", "v": [0, 0, 1605.6, 0, 0, 0, 0, 0, 0]}, {"name": "AFACTR01", "div": "D5-NP", "v": [0, 0, 0, 0, 0, 1173.74, 1977.98, 0, 0]}, {"name": "BHSTRT01", "div": "D5-NP", "v": [0, 0, 0, 0, 0, 0, 0, 0, 1263.26]}, {"name": "CONVRG01", "div": "D5-NP", "v": [0, 0, 0, 0, 0, 0, 106.19, 0, 0]}, {"name": "HOLAPA01", "div": "D5-NP", "v": [1713, 0, 0, 0, 0, 0, 0, 0, 0]}, {"name": "IMGCNT01", "div": "D5-NP", "v": [0, 0, 0, 1048.24, 0, 0, 0, 0, 953.14]}, {"name": "KATCOM01", "div": "D5-NP", "v": [0, 0, 0, 3128.38, 768.64, 0, 0, 935.21, 0]}, {"name": "KOLAMD01", "div": "D5-NP", "v": [0, 0, 0, 319, 0, 0, 0, 1279.87, 0]}, {"name": "LANEOF01", "div": "D5-NP", "v": [0, 0, 0, 0, 0, 0, 0, 13.29, 0]}, {"name": "REGASC01", "div": "D5-NP", "v": [0, 0, 0, 508, 0, 2291.81, 2876.09, 0, 0]}, {"name": "RGCENG01", "div": "D5-NP", "v": [0, 0, 0, 0, 6664, 0, 25689.98, 0, 0]}, {"name": "SCILUC01", "div": "D5-NP", "v": [5311.3, 0, 0, 0, 0, 0, 24122.45, 4532.8, 0]}, {"name": "SHALOM01", "div": "D5-NP", "v": [9910.28, 0, 1398, 0, 0, 0, 0, 0, 0]}, {"name": "SKFGLR01", "div": "D5-NP", "v": [0, 1069.97, 0, 0, 0, 0, 0, 0, 0]}, {"name": "SWTLNE01", "div": "D5-NP", "v": [0, 0, 0, 0, 0, 0, 128, 128.83, 0]}, {"name": "VILOCA01", "div": "D5-NP", "v": [53, 0, 0, 0, 0, 0, 0, 0, 0]}, {"name": "VRLVLY01", "div": "D5-NP", "v": [849, 0, 0, 3300.95, 0, 0, 0, 2224.83, 1049]}, {"name": "WHIDCA01", "div": "D5-NP", "v": [2880.14, 4635.01, 4186.12, 5398.26, 1613.01, 0, 0, 2011.08, 0]}, {"name": "AFACTR01", "div": "D5-Ship", "v": [0, 0, 0, 0, 0, 10, 0, 0, 0]}, {"name": "BHSTRT01-PMA1-S4 (230 Park)", "div": "D5-Ship", "v": [0, 0, 0, 39.7, 0, 0, 0, 0, 0]}, {"name": "CONVRG01", "div": "D5-Ship", "v": [0, 0, 0, 0, 0, 0, 9.99, 0, 0]}, {"name": "ERSKIN01", "div": "D5-Ship", "v": [0, 11, 0, 0, 0, 0, 0, 0, 0]}, {"name": "HMCBLD01 - 385 5th Ave Intercom (P202505-420)", "div": "D5-Ship", "v": [0, 0, 0, 300, 0, 0, 0, 0, 0]}, {"name": "HOLAPA01", "div": "D5-Ship", "v": [132.35, 0, 0, 0, 0, 0, 0, 0, 0]}, {"name": "IMGCNT01", "div": "D5-Ship", "v": [0, 0, 0, 262.7, 0, 0, 0, 0, 12]}, {"name": "KATCOM01", "div": "D5-Ship", "v": [0, 0, 0, 34.99, 12, 15, 0, 25, 15]}, {"name": "KOLAMD01", "div": "D5-Ship", "v": [0, 0, 0, 11, 0, 0, 0, 9, 0]}, {"name": "KRAOCS01-USA", "div": "D5-Ship", "v": [0, 0, 0, 0, 0, 0, 0, 29.9, 0]}, {"name": "LANEOF01", "div": "D5-Ship", "v": [0, 0, 0, 0, 0, 0, 0, 5, 0]}, {"name": "REGASC01", "div": "D5-Ship", "v": [0, 0, 0, 15, 0, 0, 25, 0, 0]}, {"name": "RGCENG01", "div": "D5-Ship", "v": [0, 0, 0, 0, 393.86, 0, 62, 0, 0]}, {"name": "SCILUC01", "div": "D5-Ship", "v": [0, 0, 0, 0, 0, 0, 60, 35, 0]}, {"name": "SHALOM01", "div": "D5-Ship", "v": [0, 0, 9, 0, 0, 0, 0, 0, 0]}, {"name": "SHALOM01 - QNAP Deployment (P202509-252)", "div": "D5-Ship", "v": [0, 0, 0, 75, 0, 0, 0, 0, 0]}, {"name": "SHALOM01-PMA1-S2 (Office Expansion)", "div": "D5-Ship", "v": [0, 0, 0, 0, 0, 0, 300, 0, 0]}, {"name": "SKFGLR01", "div": "D5-Ship", "v": [0, 12, 0, 0, 0, 0, 0, 0, 0]}, {"name": "SWTLNE01", "div": "D5-Ship", "v": [0, 0, 0, 0, 0, 0, 0, 5, 0]}, {"name": "VRLVLY01", "div": "D5-Ship", "v": [9, 0, 0, 0, 0, 0, 0, 5, 12]}, {"name": "VRLVRY01 - Chicago 100 Oakbook (P202505-748)", "div": "D5-Ship", "v": [0, 0, 21.83, 0, 0, 0, 0, 0, 0]}, {"name": "VRLVRY01 - Dallas 8687 N Central (P202501-645)", "div": "D5-Ship", "v": [0, 0, 0, 22.51, 0, 0, 0, 0, 0]}, {"name": "WHIDCA01", "div": "D5-Ship", "v": [0, 9, 19, 19.99, 0, 0, 0, 15, 0]}, {"name": "WHIDCA01-CxO", "div": "D5-Ship", "v": [25, 0, 0, 0, 0, 0, 0, 0, 0]}, {"name": "RDKSTG01", "div": "D6", "v": [1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680]}, {"name": "SCILUC01-CxO", "div": "D6", "v": [0, 0, 0, 787.5, 0, 0, 0, 0, 0]}, {"name": "URBLEG01", "div": "D6", "v": [700, 700, 700, 700, 700, 700, 700, 700, 700]}, {"name": "VILOCA01 - CxO (On Demand)", "div": "D6", "v": [550, 440, 0, 2695, 1705, 0, 0, 330, 0]}, {"name": "WHIDCA01-CxO", "div": "D6", "v": [2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 4425]}, {"name": "ADVTES01-SLA1 A+ Animal", "div": "D8-A+", "v": [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000]}, {"name": "AGUDCA01", "div": "D8-A+", "v": [0, 0, 0, 0, 0, 20651.4, 20651.4, 20790, 20651.4]}, {"name": "AMPWSH01-SLA1 A+ Animal", "div": "D8-A+", "v": [4950, 5676, 4988, 5160, 4988, 4300, 4300, 4300, 4300]}, {"name": "AYAVDO01", "div": "D8-A+", "v": [2160, 2160, 2160, 2160, 2160, 2160, 2160, 2160, 2160]}, {"name": "BAKEML01-SLA1 A+ Animal", "div": "D8-A+", "v": [1990, 1990, 1990, 1990, 1990, 1990, 1791, 1791, 1791]}, {"name": "BHSTRT01-SLA1 A+Animal", "div": "D8-A+", "v": [3040, 3360, 3200, 3040, 3200, 2560, 2240, 2400, 2240]}, {"name": "BLUPER01-SLA1 A+Animal", "div": "D8-A+", "v": [1650, 1650, 1650, 1650, 1500, 1200, 1200, 1200, 1200]}, {"name": "CENNUR01-SLA2 A+ Animal", "div": "D8-A+", "v": [1700, 1700, 1700, 1700, 1700, 1700, 1392, 1392, 1392]}, {"name": "DELSON01-SLA1 A+ Animal", "div": "D8-A+", "v": [300, 300, 300, 300, 300, 300, 300, 0, 0]}, {"name": "DRDSHI01-SLA1 A+ Animal", "div": "D8-A+", "v": [0, 0, 796, 796, 796, 796, 796, 796, 796]}, {"name": "ERSKIN01-SLA1 A+ Animal", "div": "D8-A+", "v": [1218, 1218, 1218, 1392, 1218, 1218, 1218, 1218, 1218]}, {"name": "HMCBLD01-SLA1 A+ Animal", "div": "D8-A+", "v": [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050]}, {"name": "HOLAPA01-SLA2 A+ Animal", "div": "D8-A+", "v": [3024, 3024, 3024, 3024, 3024, 3168, 3168, 3168, 3024]}, {"name": "KATCOM01-SLA2 (A+ Animal)", "div": "D8-A+", "v": [2400, 2550, 2550, 2212, 2528, 2528, 2528, 2528, 2370]}, {"name": "KOLAMD01-SLA2 A+ Animal", "div": "D8-A+", "v": [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1200, 1050]}, {"name": "KRAOCS01-AUS", "div": "D8-A+", "v": [2431, 2431, 2431, 2482.66, 2431, 2431, 2504.79, 2506, 2645.37]}, {"name": "KRAOCS01-SLA1 (A+ Animal - USA)", "div": "D8-A+", "v": [2717, 2860, 3003, 3003, 3003, 3003, 2717, 2002, 1859]}, {"name": "LACCLB01", "div": "D8-A+", "v": [0, 0, 0, 0, 0, 0, 6642, 6642, 6642]}, {"name": "LANEOF01-SLA2 A+ Animal", "div": "D8-A+", "v": [7052, 6880, 6880, 7052, 7396, 6364, 6364, 6364, 6536]}, {"name": "LDUWIN01-SLA1 A+Animal", "div": "D8-A+", "v": [1044, 1044, 1044, 1044, 1044, 1044, 1044, 1044, 1044]}, {"name": "MACLAW1-SLA1 A+ Animal", "div": "D8-A+", "v": [1148, 1148, 1148, 1148, 1148, 1148, 1148, 1148, 1148]}, {"name": "MLWGRP01-SLA1 A+ Animal", "div": "D8-A+", "v": [1395, 1395, 1395, 1395, 1395, 1395, 1395, 1240, 1240]}, {"name": "NCJWOM01-SLA1 A+ Animal", "div": "D8-A+", "v": [5826.6, 5826.6, 5826.6, 5826.6, 5527.8, 5527.8, 5527.8, 5677.2, 5677.2]}, {"name": "RDKSTG01", "div": "D8-A+", "v": [10560, 5632, 5632, 5984, 5280, 5104, 4752, 4752, 4576]}, {"name": "REGASC01-SLA1 A+ Animal", "div": "D8-A+", "v": [1791, 1791, 1791, 1791, 1791, 1791, 1791, 1791, 1791]}, {"name": "RGCENG01-SLA2 A+ Animal", "div": "D8-A+", "v": [2100, 2100, 2100, 1950, 1950, 2100, 2100, 2250, 2400]}, {"name": "SCILUC01-SLA2 A+ Animal", "div": "D8-A+", "v": [7275, 7275, 7275, 7865.73, 7865.73, 7865.73, 7865.73, 7865.73, 7420.5]}, {"name": "SHIRAZ01-SLA1 A+ Animal", "div": "D8-A+", "v": [4800, 4950, 4950, 4050, 3600, 1950, 1950, 1950, 1800]}, {"name": "SKFGLR01-SLA2 A+ Animal", "div": "D8-A+", "v": [1760, 1760, 1920, 1920, 1920, 1920, 1920, 1920, 1920]}, {"name": "SWTLNE01-SLA1 A+ Animal", "div": "D8-A+", "v": [0, 0, 0, 7199.82, 3466.58, 2933.26, 2799.93, 2666.6, 2533.27]}, {"name": "URBLEG01", "div": "D8-A+", "v": [2880, 2880, 2880, 2880, 2880, 2880, 2880, 2880, 3200]}, {"name": "WHIDCA01-SLA3 A+ Animal", "div": "D8-A+", "v": [8550, 8400, 8400, 8400, 9000, 8850, 9150, 9150, 9150]}, {"name": "VRLVLY01", "div": "D8-Ess", "v": [1746, 1746, 1746, 1746, 1746, 1746, 1746, 1746, 1746]}, {"name": "IMGCNT01-SLA1 (D365)", "div": "D8-Pro", "v": [1158.3, 1158.3, 1287, 1287, 1287, 1080, 1080, 1080, 1080]}, {"name": "LACCLB01", "div": "D8-Pro", "v": [0, 0, 0, 0, 0, 0, 2576, 2806, 2806]}, {"name": "SYNGNE01-SLA1 D365", "div": "D8-Pro", "v": [0, 0, 0, 0, 2173.87, 4560, 4560, 4560, 4560]}, {"name": "AFACTR01", "div": "D8-Leg", "v": [0, 0, 0, 0, 0, 5450, 2725, 2725, 2725]}, {"name": "SHASQI01-SLA1 D365", "div": "D8-Leg", "v": [2960, 2960, 2960, 2960, 2960, 2960, 2960, 2960, 2960]}, {"name": "TEAMCO01", "div": "D8-Leg", "v": [1050, 1050, 1050, 0, 0, 0, 0, 0, 0]}];

const CLIENT_REV_AGG = [{"name": "212TAX01", "divs": ["D3"], "v": [185.6, 185.6, 185.6, 105.6, 185.6, 185.6, 291.2, 473.48, 185.6], "total": 1983.88}, {"name": "212TAX01-ODA1", "divs": ["D1"], "v": [0, 120, 400, 480, 280, 40, 1400, 680, 0], "total": 3400}, {"name": "ADVTES01", "divs": ["D3", "D5-NP"], "v": [243.75, 243.75, 1849.35, 243.75, 249.75, 267.75, 247.75, 230, 230], "total": 3805.85}, {"name": "ADVTES01-SLA1 A+ Animal", "divs": ["D8-A+"], "v": [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000], "total": 27000}, {"name": "AFACTR01", "divs": ["D1", "D5-Mkp", "D5-NP", "D5-Ship", "D8-Leg"], "v": [0, 0, 0, 0, 0, 7205.0, 5563.01, 3965, 3045], "total": 19778.01}, {"name": "AFFLEN01", "divs": ["D1"], "v": [0, 0, 0, 0, 0, 0, 0, 0, 40], "total": 40}, {"name": "AGUDCA01", "divs": ["D1", "D8-A+"], "v": [0, 0, 0, 0, 0, 20651.4, 21851.4, 21990, 21851.4], "total": 86344.2}, {"name": "AMPLHR01", "divs": ["D3"], "v": [219.6, 0, 0, 0, 0, 0, 0, 0, 0], "total": 219.6}, {"name": "AMPLHR01-SLA1 Clarity 4", "divs": ["D1"], "v": [640, 0, 0, 0, 0, 0, 0, 0, 0], "total": 640}, {"name": "AMPWSH01", "divs": ["D3"], "v": [1617.0, 1686.6, 1679.4, 1686.6, 1699.8, 1716.6, 1750.2, 1807.8, 1779], "total": 15423.0}, {"name": "AMPWSH01-SLA1 A+ Animal", "divs": ["D8-A+"], "v": [4950, 5676, 4988, 5160, 4988, 4300, 4300, 4300, 4300], "total": 42962}, {"name": "AYAVDO01", "divs": ["D3", "D8-A+"], "v": [2362.5, 2362.5, 2362.5, 2362.5, 2362.5, 2362.5, 2362.5, 2362.5, 2362.5], "total": 21262.5}, {"name": "Avant Communications", "divs": ["D3-TS3"], "v": [148.84, 148.84, 153.34, 153.34, 153.34, 191.96, 285.57, 268.1, 250.22], "total": 1753.55}, {"name": "BAKEML01", "divs": ["D3"], "v": [1616.71, 1570.89, 1724.18, 1825.88, 1924.41, 2037.08, 2022.32, 2074.14, 2128.22], "total": 16923.83}, {"name": "BAKEML01-SLA1 A+ Animal", "divs": ["D8-A+"], "v": [1990, 1990, 1990, 1990, 1990, 1990, 1791, 1791, 1791], "total": 17313}, {"name": "BCORTH01", "divs": ["D3"], "v": [60, 0, 0, 0, 0, 0, 0, 0, 0], "total": 60}, {"name": "BHSTRT01", "divs": ["D3", "D5-Mat", "D5-Mkp", "D5-NP"], "v": [1014.6, 1093.8, 1213.8, 1213.8, 1204.2, 1739.94, 1218.6, 1218.6, 2947.9], "total": 12865.24}, {"name": "BHSTRT01-PMA1-S4 (230 Park)", "divs": ["D2", "D5-Mat", "D5-Ship"], "v": [252.28, 2334.39, 0, 510.7, 0, 0, 0, 0, 0], "total": 3097.37}, {"name": "BHSTRT01-SLA1 A+Animal", "divs": ["D8-A+"], "v": [3040, 3360, 3200, 3040, 3200, 2560, 2240, 2400, 2240], "total": 25280}, {"name": "BLUPER01-SLA1 A+Animal", "divs": ["D8-A+"], "v": [1650, 1650, 1650, 1650, 1500, 1200, 1200, 1200, 1200], "total": 12900}, {"name": "CENNUR01", "divs": ["D3"], "v": [482.4, 482.4, 482.4, 482.4, 482.4, 287.4, 287.4, 287.4, 287.4], "total": 3561.6}, {"name": "CENNUR01-SLA2 A+ Animal", "divs": ["D8-A+"], "v": [1700, 1700, 1700, 1700, 1700, 1700, 1392, 1392, 1392], "total": 14376}, {"name": "CONVRG01", "divs": ["D3", "D5-Mkp", "D5-NP", "D5-Ship"], "v": [90, 90, 90, 90, 90, 90, 232.97, 90, 90], "total": 952.97}, {"name": "CONVRG01-ODA1", "divs": ["D1"], "v": [600, 280, 1693.33, 120, 640, 40, 400, 280, 240], "total": 4293.33}, {"name": "CRACCT01", "divs": ["D3"], "v": [750.6, 730.83, 751.8, 750.28, 731.4, 745.54, 730.16, 752.83, 752.68], "total": 6696.12}, {"name": "CRSKSO01", "divs": ["D3"], "v": [0, 0, 0, 0, 0, 0, 1059.99, 0, 0], "total": 1059.99}, {"name": "DBDCAR01", "divs": ["D3"], "v": [350.45, 169.32, 169.32, 169.32, 169.32, 169.32, 169.32, 169.32, 169.32], "total": 1705.01}, {"name": "DBDCAR01-OD1", "divs": ["D1"], "v": [150, 0, 0, 37.5, 0, 0, 0, 112.5, 0], "total": 300.0}, {"name": "DELSON01", "divs": ["D3"], "v": [132, 132, 132, 132, 132, 132, 132, 132, 0], "total": 1056}, {"name": "DELSON01-SLA1 A+ Animal", "divs": ["D8-A+"], "v": [300, 300, 300, 300, 300, 300, 300, 0, 0], "total": 2100}, {"name": "DRDSHI01-SLA1 A+ Animal", "divs": ["D8-A+"], "v": [0, 0, 796, 796, 796, 796, 796, 796, 796], "total": 5572}, {"name": "DWNAPT01", "divs": ["D1"], "v": [0, 0, 0, 0, 308.18, 0, 0, 0, 0], "total": 308.18}, {"name": "Division 4 Partner Network Income", "divs": ["D3-TS3"], "v": [1500.15, 1757.25, 1623.4, 4909.65, 1501.14, 2511.95, 652.53, 4065.28, 4851.31], "total": 23372.66}, {"name": "EMPCON01", "divs": ["D3"], "v": [458.4, 458.4, 458.4, 458.4, 458.4, 458.4, 458.4, 2212.4, 458.4], "total": 5879.6}, {"name": "EMPCON01-New Office Move (P202511-582)", "divs": ["D2", "D5-Mat"], "v": [0, 0, 0, 0, 0, 0, 947.35, 2713.89, 2557.85], "total": 6219.09}, {"name": "EMPCON01-OD1", "divs": ["D1"], "v": [0, 900, 562.5, 112.5, 0, 150, 862.5, 862.5, 450], "total": 3900.0}, {"name": "ERSKIN01", "divs": ["D3", "D5-Mat", "D5-Ship"], "v": [235.4, 1040.34, 235.4, 235.4, 270.4, 206.4, 206.4, 206.4, 206.4], "total": 2842.54}, {"name": "ERSKIN01-SLA1 A+ Animal", "divs": ["D8-A+"], "v": [1218, 1218, 1218, 1392, 1218, 1218, 1218, 1218, 1218], "total": 11136}, {"name": "ESJLRY01", "divs": ["D1"], "v": [150, 0, 0, 0, 0, 0, 0, 0, 0], "total": 150}, {"name": "EVNFLO01", "divs": ["D3"], "v": [86.4, 86.4, 86.4, 86.4, 71.4, 71.4, 71.4, 71.4, 71.4], "total": 702.6}, {"name": "EVNFLO01-OD1", "divs": ["D1"], "v": [40, 0, 0, 0, 0, 0, 40, 0, 0], "total": 80}, {"name": "FLWSTF01", "divs": ["D1"], "v": [0, 0, 337.5, 0, 0, 0, 0, 0, 0], "total": 337.5}, {"name": "FNDIGS01", "divs": ["D3"], "v": [0, 0, 0, 0, 0, 0, 2399, 0, 0], "total": 2399}, {"name": "FNDIGS01 - Offshore Computing P2 (P202510-873)", "divs": ["D2"], "v": [0, 0, 0, 0, 0, 0, 412.5, 712.5, 0], "total": 1125.0}, {"name": "FNDIGS01 - Offshore User Computing", "divs": ["D2"], "v": [0, 0, 41.16, 1050, 459.69, 0, 240.03, 309.12, 0], "total": 2100.0}, {"name": "FNDIGS01-SLA1 Clarity 16", "divs": ["D1"], "v": [2400, 2400, 3600, 2625, 2550, 4425, 2625, 4162.5, 2625], "total": 27412.5}, {"name": "FRDDVD01-ODA", "divs": ["D1"], "v": [0, 0, 0, 0, 1080, 800, 1280, 1040, 1360], "total": 5560}, {"name": "GRAEFE01", "divs": ["D3"], "v": [41.2, 31.2, 31.2, 31.2, 31.2, 31.2, 31.2, 31.2, 31.2], "total": 290.8}, {"name": "GRAEFE01-OD1", "divs": ["D1"], "v": [325, 0, 0, 0, 0, 0, 0, 0, 65], "total": 390}, {"name": "GRTPAC01", "divs": ["D3"], "v": [210, 195, 209.4, 202.2, 202.2, 202.2, 202.2, 202.2, 175.8], "total": 1801.2}, {"name": "GRTPAC01-ODA1", "divs": ["D1"], "v": [0, 562.5, 525, 562.5, 450, 825, 562.5, 375, 0], "total": 3862.5}, {"name": "HERHTH01", "divs": ["D3"], "v": [39.84, 39.84, 39.84, 39.84, 39.84, 39.84, 39.84, 39.84, 39.84], "total": 358.56}, {"name": "HMCBLD01", "divs": ["D3"], "v": [1132.8, 283.2, 283.2, 948.2, 283.2, 283.2, 283.2, 283.2, 4943.2], "total": 8723.4}, {"name": "HMCBLD01 - 385 5th Ave Intercom (P202505-420)", "divs": ["D2", "D5-Mat", "D5-Ship"], "v": [0, 154.83, 3356.3, 5510.85, 0, 0, 0, 0, 0], "total": 9021.98}, {"name": "HMCBLD01-SLA1 A+ Animal", "divs": ["D8-A+"], "v": [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050], "total": 9450}, {"name": "HMCBLD01-SLA2-JoinDaisy Clarity 2", "divs": ["D1"], "v": [320, 320, 320, 320, 320, 320, 320, 320, 320], "total": 2880}, {"name": "HMCBLD01-SLA2-Miro Clarity 2", "divs": ["D1"], "v": [320, 320, 320, 320, 320, 320, 320, 320, 320], "total": 2880}, {"name": "HMCBLD01-SLA2-NewtonX Clarity 2", "divs": ["D1"], "v": [320, 320, 320, 320, 320, 320, 320, 320, 320], "total": 2880}, {"name": "HOLAPA01", "divs": ["D3", "D5-NP", "D5-Ship"], "v": [2772.88, 493.9, 546.7, 578.8, 861.7, 528.1, 528.1, 919.28, 578.6], "total": 7808.06}, {"name": "HOLAPA01 - PA1 (192 Lex Office)", "divs": ["D2"], "v": [0, 22.61, 0, 0, 0, 0, 0, 0, 0], "total": 22.61}, {"name": "HOLAPA01-SLA2 A+ Animal", "divs": ["D8-A+"], "v": [3024, 3024, 3024, 3024, 3024, 3168, 3168, 3168, 3024], "total": 27648}, {"name": "IAVAML01", "divs": ["D3"], "v": [218, 218, 218, 218, 218, 218, 218, 436, 218], "total": 2180}, {"name": "IAVAML01-OD1", "divs": ["D1"], "v": [0, 0, 70, 0, 660, 0, 0, 0, 0], "total": 730}, {"name": "IMGCNT01", "divs": ["D3", "D5-Mat", "D5-Mkp", "D5-NP", "D5-Ship"], "v": [1204.86, 33, 110.52, 1343.94, 88.7, 91.32, 160.56, 121.56, 1398.56], "total": 4553.02}, {"name": "IMGCNT01 - Bloomerang SQL DB (P202506-813)", "divs": ["D2"], "v": [0, 4000, 0, 0, 0, 0, 0, 0, 0], "total": 4000}, {"name": "IMGCNT01 - Conference Room Upgrades (P202501-707)", "divs": ["D2", "D5-Mat"], "v": [0, 0, 68.82, 8679.47, 232.05, 0, 0, 0, 0], "total": 8980.34}, {"name": "IMGCNT01-SLA1 (D365)", "divs": ["D8-Pro"], "v": [1158.3, 1158.3, 1287, 1287, 1287, 1080, 1080, 1080, 1080], "total": 10497.6}, {"name": "Interactivetel LLC", "divs": ["D3-TS3"], "v": [0, 166.96, 0, 166.96, 0, 333.92, 166.96, 166.96, 166.96], "total": 1168.72}, {"name": "KATCOM01", "divs": ["D1", "D3", "D5-Mat", "D5-Mkp", "D5-NP", "D5-Ship"], "v": [1545, 1545, 1401, 5051.61, 2587.0, 1758.12, 1649.16, 3070.42, 1897.42], "total": 20504.73}, {"name": "KATCOM01-SLA2 (A+ Animal)", "divs": ["D8-A+"], "v": [2400, 2550, 2550, 2212, 2528, 2528, 2528, 2528, 2370], "total": 22194}, {"name": "KBHLLP01-ODA1", "divs": ["D1"], "v": [0, 0, 0, 0, 240, 0, 0, 0, 0], "total": 240}, {"name": "KHHITT01", "divs": ["D3"], "v": [2352.54, 2425.26, 2583.66, 5210.1, 5493.3, 6504.55, 6510, 7452.97, 7865.77], "total": 46398.15}, {"name": "KHHITT01 - M365 Migration (P202502-539)", "divs": ["D2"], "v": [0, 0, 7968.75, 4143.75, 6885, 63.75, 0, 0, 0], "total": 19061.25}, {"name": "KHHITT01-ODA1", "divs": ["D1"], "v": [0, 0, 0, 112.5, 0, 0, 0, 300, 0], "total": 412.5}, {"name": "KHHITT01-SLA1 Clarity 10", "divs": ["D1"], "v": [0, 0, 0, 0, 0, 1600, 1600, 1600, 1600], "total": 6400}, {"name": "KOLAMD01", "divs": ["D3", "D5-Mkp", "D5-NP", "D5-Ship"], "v": [116.04, 116.04, 116.04, 456.04, 116.04, 116.04, 116.04, 2003.04, 116.04], "total": 3271.36}, {"name": "KOLAMD01-SLA2 A+ Animal", "divs": ["D8-A+"], "v": [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1200, 1050], "total": 9600}, {"name": "KRAOCS01-AUS", "divs": ["D1", "D3", "D8-A+"], "v": [8831.41, 9125.36, 8389.2, 8944.66, 8727.39, 8811.62, 9117.69, 9068.65, 9388.03], "total": 80404.01}, {"name": "KRAOCS01-SLA1 (A+ Animal - USA)", "divs": ["D3", "D8-A+"], "v": [2867, 3010, 3153, 3153, 3153, 3153, 2817, 2102, 1959], "total": 25367}, {"name": "KRAOCS01-USA", "divs": ["D3", "D5-Ship"], "v": [0, 0, 0, 0, 0, 0, 0, 249.9, 0], "total": 249.9}, {"name": "LACCLB01", "divs": ["D1", "D8-A+", "D8-Pro"], "v": [0, 0, 0, 0, 0, 0, 11618, 11848, 11848], "total": 35314}, {"name": "LANEOF01", "divs": ["D3", "D5-Mkp", "D5-NP", "D5-Ship"], "v": [4172.8, 4264.56, 4245.73, 4255.02, 4179.32, 4316.83, 2710.9, 4227.34, 4136.19], "total": 36508.69}, {"name": "LANEOF01-SLA2 A+ Animal", "divs": ["D8-A+"], "v": [7052, 6880, 6880, 7052, 7396, 6364, 6364, 6364, 6536], "total": 60888}, {"name": "LDUWIN01", "divs": ["D3"], "v": [86.16, 86.16, 86.16, 86.16, 86.16, 86.16, 86, 86.16, 86.16], "total": 775.28}, {"name": "LDUWIN01-SLA1 A+Animal", "divs": ["D8-A+"], "v": [1044, 1044, 1044, 1044, 1044, 1044, 1044, 1044, 1044], "total": 9396}, {"name": "MACLAW01", "divs": ["D3"], "v": [832, 826.33, 829.38, 830.22, 823.34, 825.75, 819.54, 821.2, 700.53], "total": 7308.29}, {"name": "MACLAW1-SLA1 A+ Animal", "divs": ["D8-A+"], "v": [1148, 1148, 1148, 1148, 1148, 1148, 1148, 1148, 1148], "total": 10332}, {"name": "MAVENE01", "divs": ["D3"], "v": [49.5, 48, 51, 49.5, 52.5, 60, 55.5, 54, 52.5], "total": 472.5}, {"name": "MAVENE01-OD1", "divs": ["D1"], "v": [150, 487.5, 150, 412.5, 1125, 262.5, 375, 337.5, 0], "total": 3300.0}, {"name": "MAVENE01-PA1-S3 (Form Automation)", "divs": ["D2"], "v": [54.3, 54.3, 14639.04, 0, 0, 277.07, 0, 0, 0], "total": 15024.71}, {"name": "MCRRCY01", "divs": ["D2"], "v": [0, 0, 1400, 0, 0, 0, 0, 0, 0], "total": 1400}, {"name": "MCRRCY01-New Office Move (P202504-844)", "divs": ["D2", "D5-Mat"], "v": [1918.2, 15139.22, 3160.08, 0, 0, 0, 0, 0, 0], "total": 20217.5}, {"name": "MCRRCY01-SLA1 Clarity 4", "divs": ["D1"], "v": [1280, 1280, 1280, 1280, 1280, 1280, 1280, 640, 640], "total": 10240}, {"name": "MDFIRE01", "divs": ["D3"], "v": [858.69, 668.68, 668.68, 668.68, 668.76, 668.68, 668.68, 668.68, 668.68], "total": 6208.21}, {"name": "MDFIRE01-ODA1", "divs": ["D1"], "v": [750, 262.5, 112.5, 840, 400, 560, 960, 0, 772.8], "total": 4657.8}, {"name": "MLWGRP01", "divs": ["D3"], "v": [284, 284, 284, 284, 284, 284, 284, 284, 2320.76], "total": 4592.76}, {"name": "MLWGRP01-SLA1 A+ Animal", "divs": ["D8-A+"], "v": [1395, 1395, 1395, 1395, 1395, 1395, 1395, 1240, 1240], "total": 12245}, {"name": "NCJWOM01", "divs": ["D3"], "v": [0, 0, 0, 0, 0, 0, 0, 0, 6.6], "total": 6.6}, {"name": "NCJWOM01-SLA1 A+ Animal", "divs": ["D8-A+"], "v": [5826.6, 5826.6, 5826.6, 5826.6, 5527.8, 5527.8, 5527.8, 5677.2, 5677.2], "total": 51244.2}, {"name": "ONEILD01", "divs": ["D1"], "v": [0, 0, 0, 852.5, 0, 0, 0, 0, 0], "total": 852.5}, {"name": "ONEILD01-SLA1(Clarity 8)", "divs": ["D1"], "v": [1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200], "total": 10800}, {"name": "PACGCG01", "divs": ["D3"], "v": [331.6, 368, 368, 368, 388, 388, 388, 388, 338], "total": 3325.6}, {"name": "PACGCG01-ODA1", "divs": ["D1"], "v": [360, 160, 1680, 80, 320, 1560, 0, 1960, 200], "total": 6320}, {"name": "PIEBYP01", "divs": ["D3"], "v": [201.6, 201.6, 230.4, 230.4, 259.2, 259.2, 259.2, 259.2, 259.2], "total": 2160.0}, {"name": "PIEBYP01-OD1", "divs": ["D1"], "v": [412.5, 225, 675, 112.5, 0, 337.5, 75, 75, 0], "total": 1912.5}, {"name": "PTRMNA01", "divs": ["D3"], "v": [146.4, 146.4, 146.4, 146.4, 146.4, 0, 0, 0, 0], "total": 732.0}, {"name": "Pilot Fiber Inc", "divs": ["D3-TS3"], "v": [0, 0, 150, 150, 100, 150, 0, 150, 150], "total": 850}, {"name": "RAIRNS01-ODA01", "divs": ["D1"], "v": [800, 800, 0, 0, 0, 800, 0, 0, 0], "total": 2400}, {"name": "RBSLLC01", "divs": ["D1"], "v": [0, 0, 0, 0, 0, 0, 0, 0, 600], "total": 600}, {"name": "RBSLLC01-SLA1 4", "divs": ["D1"], "v": [600, 600, 600, 600, 600, 600, 600, 600, 0], "total": 4800}, {"name": "RDKSTG01", "divs": ["D3", "D6", "D8-A+"], "v": [12240, 7338.4, 9164.8, 8291.02, 7459.92, 7283.92, 6931.92, 6931.92, 6755.92], "total": 72397.82}, {"name": "RDKSTG01-PMA1-S2", "divs": ["D2"], "v": [0, 0, 8299.62, 4300.38, 0, 0, 0, 0, 0], "total": 12600.0}, {"name": "REGASC01", "divs": ["D5-Mkp", "D5-NP", "D5-Ship"], "v": [0, 0, 0, 573.01, 0, 2291.81, 3381.01, 0, 0], "total": 6245.83}, {"name": "REGASC01-SLA1 A+ Animal", "divs": ["D8-A+"], "v": [1791, 1791, 1791, 1791, 1791, 1791, 1791, 1791, 1791], "total": 16119}, {"name": "RGCENG01", "divs": ["D1", "D3", "D5-Mkp", "D5-NP", "D5-Ship"], "v": [648.97, 648.97, 1399.93, 656.97, 7790.26, 819.37, 30123.37, 661.6, 2423.34], "total": 45172.78}, {"name": "RGCENG01 - 19th FL Office Move (P202505-490)", "divs": ["D2", "D5-Mat"], "v": [6359.19, 546.48, 0, 425.18, 3404.26, 0, 0, 0, 0], "total": 10735.11}, {"name": "RGCENG01-SLA2 A+ Animal", "divs": ["D8-A+"], "v": [2100, 2100, 2100, 1950, 1950, 2100, 2100, 2250, 2400], "total": 19050}, {"name": "RISTID01", "divs": ["D3"], "v": [15, 15, 15, 15, 15, 15, 15, 15, 15], "total": 135}, {"name": "RSTHWS01-OD1", "divs": ["D1"], "v": [0, 0, 0, 0, 200, 640, 40, 0, 0], "total": 880}, {"name": "SCILUC01", "divs": ["D3", "D5-Mkp", "D5-NP", "D5-Ship"], "v": [27695.36, 2774.52, 2852.54, 2922.42, 5769.61, 10361.3, 33584.94, 9412.25, 4245.28], "total": 99618.22}, {"name": "SCILUC01-CxO", "divs": ["D6"], "v": [0, 0, 0, 787.5, 0, 0, 0, 0, 0], "total": 787.5}, {"name": "SCILUC01-SLA2 A+ Animal", "divs": ["D8-A+"], "v": [7275, 7275, 7275, 7865.73, 7865.73, 7865.73, 7865.73, 7865.73, 7420.5], "total": 68574.15}, {"name": "SHALOM01", "divs": ["D5-Mkp", "D5-NP", "D5-Ship"], "v": [13390.99, 0, 1707, 0, 0, 0, 0, 0, 0], "total": 15097.99}, {"name": "SHALOM01 - ODA1", "divs": ["D1"], "v": [0, 0, 0, 0, 0, 1260, 1120, 0, 210], "total": 2590}, {"name": "SHALOM01 - QNAP Deployment (P202509-252)", "divs": ["D2", "D5-Mat", "D5-Ship"], "v": [0, 0, 0, 6258.24, 4062.76, 0, 0, 0, 0], "total": 10321.0}, {"name": "SHALOM01-PMA1-S2 (Office Expansion)", "divs": ["D5-Mat", "D5-Ship"], "v": [0, 0, 0, 0, 0, 0, 4119.55, 0, 0], "total": 4119.55}, {"name": "SHALOM01-SLA1 Clarity 96", "divs": ["D1"], "v": [11288, 10200, 7395, 7412, 0, 0, 0, 0, 0], "total": 36295}, {"name": "SHASQI01", "divs": ["D3", "D3-TS3"], "v": [1388.4, 1407.6, 1407.6, 1407.6, 1527.6, 1467.6, 1467.6, 1587.6, 1527.6], "total": 13189.2}, {"name": "SHASQI01-SLA1 D365", "divs": ["D8-Leg"], "v": [2960, 2960, 2960, 2960, 2960, 2960, 2960, 2960, 2960], "total": 26640}, {"name": "SHIRAZ01", "divs": ["D3"], "v": [1199.2, 1493.2, 1203.9, 1188.9, 1263.1, 1054, 1054, 1169.5, 1169.5], "total": 10795.3}, {"name": "SHIRAZ01-SLA1 A+ Animal", "divs": ["D8-A+"], "v": [4800, 4950, 4950, 4050, 3600, 1950, 1950, 1950, 1800], "total": 30000}, {"name": "SKFGLR01", "divs": ["D3", "D5-Mkp", "D5-NP", "D5-Ship"], "v": [374.62, 1653.0, 348, 348, 348, 348, 348, 374.4, 363], "total": 4505.02}, {"name": "SKFGLR01-SLA2 A+ Animal", "divs": ["D8-A+"], "v": [1760, 1760, 1920, 1920, 1920, 1920, 1920, 1920, 1920], "total": 16960}, {"name": "SWTLNE01", "divs": ["D5-Mkp", "D5-NP", "D5-Ship"], "v": [0, 0, 0, 0, 0, 0, 128, 142.0, 0], "total": 270.0}, {"name": "SWTLNE01-SLA1 A+ Animal", "divs": ["D8-A+"], "v": [0, 0, 0, 7199.82, 3466.58, 2933.26, 2799.93, 2666.6, 2533.27], "total": 21599.46}, {"name": "SYNGNE01-SLA1 D365", "divs": ["D8-Pro"], "v": [0, 0, 0, 0, 2173.87, 4560, 4560, 4560, 4560], "total": 20413.87}, {"name": "TDSYST01", "divs": ["D3"], "v": [74.8, 74.8, 74.8, 0, 0, 0, 0, 0, 0], "total": 224.4}, {"name": "TDSYST01-DCA-OD1", "divs": ["D1"], "v": [0, 0, 0, 0, 0, 0, 0, 0, 240], "total": 240}, {"name": "TDSYST01-NYC-OD1", "divs": ["D1"], "v": [0, 0, 0, 0, 0, 0, 0, 0, 160], "total": 160}, {"name": "TEAMCO01", "divs": ["D3", "D8-Leg"], "v": [1150, 1150, 1150, 0, 0, 0, 0, 0, 0], "total": 3450}, {"name": "UCPWHL01", "divs": ["D3"], "v": [146.87, 0, 0, 0, 0, 0, 0, 0, 0], "total": 146.87}, {"name": "UNIWAY01-OD1", "divs": ["D1"], "v": [1275, 75, 0, 0, 0, 0, 0, 0, 0], "total": 1350}, {"name": "URBLEG01", "divs": ["D1", "D3", "D6", "D8-A+"], "v": [6064.5, 5382, 6162, 5382, 5580.8, 6360.8, 6220.9, 5415, 6545], "total": 53113.0}, {"name": "VILLDEN01", "divs": ["D3"], "v": [15, 15, 15, 15, 0, 0, 0, 0, 0], "total": 60}, {"name": "VILLDEN01-OD1", "divs": ["D1"], "v": [0, 0, 0, 0, 0, 140, 0, 0, 140], "total": 280}, {"name": "VILOCA01", "divs": ["D1", "D3", "D5-Mkp", "D5-NP"], "v": [1936.52, 1922.92, 1834.43, 1168, 1153.97, 1931.75, 1760.6, 2911.93, 3431.78], "total": 18051.9}, {"name": "VILOCA01 - CxO (On Demand)", "divs": ["D6"], "v": [550, 440, 0, 2695, 1705, 0, 0, 330, 0], "total": 5720}, {"name": "VILOCA01-SLA1 Clarity 6", "divs": ["D1"], "v": [2422.5, 7710, 5197.5, 3885, 2272.5, 960, 960, 0, 0], "total": 23407.5}, {"name": "VRLVLY01", "divs": ["D1", "D3", "D5-Mat", "D5-Mkp", "D5-NP", "D5-Ship", "D8-Ess"], "v": [6465, 4861, 4546, 9315.25, 5666, 4546, 4546, 6984.0, 8153], "total": 55082.25}, {"name": "VRLVRY01 - 5th Ave Office (P202411-505)", "divs": ["D2"], "v": [0, 193.05, 0, 0, 0, 0, 0, 0, 0], "total": 193.05}, {"name": "VRLVRY01 - Boston 154 Newbury St (P202505-241)", "divs": ["D2", "D5-Mat"], "v": [1739.76, 696.3, 405.9, 1826.88, 190.74, 1653.3, 87.12, 17705.91, 0], "total": 24305.91}, {"name": "VRLVRY01 - Chicago 100 Oakbook (P202505-748)", "divs": ["D2", "D5-Mat", "D5-Ship"], "v": [138.6, 1177.68, 890.24, 19092.86, 677.88, 0, 13.86, 0, 0], "total": 21991.12}, {"name": "VRLVRY01 - Dallas 8687 N Central (P202501-645)", "divs": ["D2", "D5-Mat", "D5-Ship"], "v": [14947.99, 3499.28, 1916.88, 1689.23, 16.8, 0, 0, 0, 0], "total": 22070.18}, {"name": "WESCRB01", "divs": ["D3"], "v": [0, 46.2, 46.2, 46.2, 46.2, 46.2, 46.2, 46.2, 46.2], "total": 369.6}, {"name": "WHIDCA01", "divs": ["D1", "D3", "D5-Mkp", "D5-NP", "D5-Ship"], "v": [6374.21, 15842.73, 7398.4, 17637.47, 4015.6, 2067.6, 2146.8, 6623.61, 4103.4], "total": 66209.82}, {"name": "WHIDCA01 - Silver Spring Office Move (P202509-617)", "divs": ["D2", "D5-Mat"], "v": [0, 0, 0, 10141.52, 2182.24, 0, 278.3, 0, 0], "total": 12602.06}, {"name": "WHIDCA01-CxO", "divs": ["D5-Ship", "D6"], "v": [2425, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 4425], "total": 23650}, {"name": "WHIDCA01-SLA2 (Clarity 32)", "divs": ["D1"], "v": [8661, 7569, 7659.48, 8232, 9831, 6126, 6984, 7050, 7500], "total": 69612.48}, {"name": "WHIDCA01-SLA3 A+ Animal", "divs": ["D8-A+"], "v": [8550, 8400, 8400, 8400, 9000, 8850, 9150, 9150, 9150], "total": 79050}, {"name": "WHOHEE01-SLA1 Clarity 8", "divs": ["D1"], "v": [1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040], "total": 9360}];

const CLIENT_REV_NEW = [{"name": "RBSLLC01", "month": 8, "firstRev": 600, "latestRev": 600, "totalRev": 600, "divs": ["D1"]}, {"name": "TDSYST01-DCA-OD1", "month": 8, "firstRev": 240, "latestRev": 240, "totalRev": 240, "divs": ["D1"]}, {"name": "TDSYST01-NYC-OD1", "month": 8, "firstRev": 160, "latestRev": 160, "totalRev": 160, "divs": ["D1"]}, {"name": "AFFLEN01", "month": 8, "firstRev": 40, "latestRev": 40, "totalRev": 40, "divs": ["D1"]}, {"name": "NCJWOM01", "month": 8, "firstRev": 6.6, "latestRev": 6.6, "totalRev": 6.6, "divs": ["D3"]}, {"name": "KRAOCS01-USA", "month": 7, "firstRev": 249.9, "latestRev": 0, "totalRev": 249.9, "divs": ["D3", "D5-Ship"]}, {"name": "LACCLB01", "month": 6, "firstRev": 11618, "latestRev": 11848, "totalRev": 35314, "divs": ["D1", "D8-A+", "D8-Pro"]}, {"name": "SHALOM01-PMA1-S2 (Office Expansion)", "month": 6, "firstRev": 4119.55, "latestRev": 0, "totalRev": 4119.55, "divs": ["D5-Mat", "D5-Ship"]}, {"name": "FNDIGS01", "month": 6, "firstRev": 2399, "latestRev": 0, "totalRev": 2399, "divs": ["D3"]}, {"name": "CRSKSO01", "month": 6, "firstRev": 1059.99, "latestRev": 0, "totalRev": 1059.99, "divs": ["D3"]}, {"name": "EMPCON01-New Office Move (P202511-582)", "month": 6, "firstRev": 947.35, "latestRev": 2557.85, "totalRev": 6219.09, "divs": ["D2", "D5-Mat"]}, {"name": "FNDIGS01 - Offshore Computing P2 (P202510-873)", "month": 6, "firstRev": 412.5, "latestRev": 0, "totalRev": 1125.0, "divs": ["D2"]}, {"name": "SWTLNE01", "month": 6, "firstRev": 128, "latestRev": 0, "totalRev": 270.0, "divs": ["D5-Mkp", "D5-NP", "D5-Ship"]}, {"name": "AGUDCA01", "month": 5, "firstRev": 20651.4, "latestRev": 21851.4, "totalRev": 86344.2, "divs": ["D1", "D8-A+"]}, {"name": "AFACTR01", "month": 5, "firstRev": 7205.0, "latestRev": 3045, "totalRev": 19778.01, "divs": ["D1", "D5-Mkp", "D5-NP", "D5-Ship", "D8-Leg"]}, {"name": "KHHITT01-SLA1 Clarity 10", "month": 5, "firstRev": 1600, "latestRev": 1600, "totalRev": 6400, "divs": ["D1"]}, {"name": "SHALOM01 - ODA1", "month": 5, "firstRev": 1260, "latestRev": 210, "totalRev": 2590, "divs": ["D1"]}, {"name": "VILLDEN01-OD1", "month": 5, "firstRev": 140, "latestRev": 140, "totalRev": 280, "divs": ["D1"]}, {"name": "SYNGNE01-SLA1 D365", "month": 4, "firstRev": 2173.87, "latestRev": 4560, "totalRev": 20413.87, "divs": ["D8-Pro"]}, {"name": "FRDDVD01-ODA", "month": 4, "firstRev": 1080, "latestRev": 1360, "totalRev": 5560, "divs": ["D1"]}, {"name": "DWNAPT01", "month": 4, "firstRev": 308.18, "latestRev": 0, "totalRev": 308.18, "divs": ["D1"]}, {"name": "KBHLLP01-ODA1", "month": 4, "firstRev": 240, "latestRev": 0, "totalRev": 240, "divs": ["D1"]}, {"name": "RSTHWS01-OD1", "month": 4, "firstRev": 200, "latestRev": 0, "totalRev": 880, "divs": ["D1"]}, {"name": "WHIDCA01 - Silver Spring Office Move (P202509-617)", "month": 3, "firstRev": 10141.52, "latestRev": 0, "totalRev": 12602.06, "divs": ["D2", "D5-Mat"]}, {"name": "SWTLNE01-SLA1 A+ Animal", "month": 3, "firstRev": 7199.82, "latestRev": 2533.27, "totalRev": 21599.46, "divs": ["D8-A+"]}, {"name": "SHALOM01 - QNAP Deployment (P202509-252)", "month": 3, "firstRev": 6258.24, "latestRev": 0, "totalRev": 10321.0, "divs": ["D2", "D5-Mat", "D5-Ship"]}, {"name": "ONEILD01", "month": 3, "firstRev": 852.5, "latestRev": 0, "totalRev": 852.5, "divs": ["D1"]}, {"name": "SCILUC01-CxO", "month": 3, "firstRev": 787.5, "latestRev": 0, "totalRev": 787.5, "divs": ["D6"]}, {"name": "REGASC01", "month": 3, "firstRev": 573.01, "latestRev": 0, "totalRev": 6245.83, "divs": ["D5-Mkp", "D5-NP", "D5-Ship"]}, {"name": "KHHITT01-ODA1", "month": 3, "firstRev": 112.5, "latestRev": 0, "totalRev": 412.5, "divs": ["D1"]}, {"name": "RDKSTG01-PMA1-S2", "month": 2, "firstRev": 8299.62, "latestRev": 0, "totalRev": 12600.0, "divs": ["D2"]}, {"name": "KHHITT01 - M365 Migration (P202502-539)", "month": 2, "firstRev": 7968.75, "latestRev": 0, "totalRev": 19061.25, "divs": ["D2"]}, {"name": "MCRRCY01", "month": 2, "firstRev": 1400, "latestRev": 0, "totalRev": 1400, "divs": ["D2"]}, {"name": "DRDSHI01-SLA1 A+ Animal", "month": 2, "firstRev": 796, "latestRev": 796, "totalRev": 5572, "divs": ["D8-A+"]}, {"name": "FLWSTF01", "month": 2, "firstRev": 337.5, "latestRev": 0, "totalRev": 337.5, "divs": ["D1"]}, {"name": "Pilot Fiber Inc", "month": 2, "firstRev": 150, "latestRev": 150, "totalRev": 850, "divs": ["D3-TS3"]}, {"name": "IAVAML01-OD1", "month": 2, "firstRev": 70, "latestRev": 0, "totalRev": 730, "divs": ["D1"]}, {"name": "IMGCNT01 - Conference Room Upgrades (P202501-707)", "month": 2, "firstRev": 68.82, "latestRev": 0, "totalRev": 8980.34, "divs": ["D2", "D5-Mat"]}, {"name": "FNDIGS01 - Offshore User Computing", "month": 2, "firstRev": 41.16, "latestRev": 0, "totalRev": 2100.0, "divs": ["D2"]}, {"name": "IMGCNT01 - Bloomerang SQL DB (P202506-813)", "month": 1, "firstRev": 4000, "latestRev": 0, "totalRev": 4000, "divs": ["D2"]}, {"name": "EMPCON01-OD1", "month": 1, "firstRev": 900, "latestRev": 450, "totalRev": 3900.0, "divs": ["D1"]}, {"name": "GRTPAC01-ODA1", "month": 1, "firstRev": 562.5, "latestRev": 0, "totalRev": 3862.5, "divs": ["D1"]}, {"name": "VRLVRY01 - 5th Ave Office (P202411-505)", "month": 1, "firstRev": 193.05, "latestRev": 0, "totalRev": 193.05, "divs": ["D2"]}, {"name": "Interactivetel LLC", "month": 1, "firstRev": 166.96, "latestRev": 166.96, "totalRev": 1168.72, "divs": ["D3-TS3"]}, {"name": "HMCBLD01 - 385 5th Ave Intercom (P202505-420)", "month": 1, "firstRev": 154.83, "latestRev": 0, "totalRev": 9021.98, "divs": ["D2", "D5-Mat", "D5-Ship"]}, {"name": "212TAX01-ODA1", "month": 1, "firstRev": 120, "latestRev": 0, "totalRev": 3400, "divs": ["D1"]}, {"name": "WESCRB01", "month": 1, "firstRev": 46.2, "latestRev": 46.2, "totalRev": 369.6, "divs": ["D3"]}, {"name": "HOLAPA01 - PA1 (192 Lex Office)", "month": 1, "firstRev": 22.61, "latestRev": 0, "totalRev": 22.61, "divs": ["D2"]}];

const CLIENT_REV_LOST = [{"name": "VRLVRY01 - Boston 154 Newbury St (P202505-241)", "month": 7, "lastRev": 17705.91, "peakRev": 17705.91, "totalRev": 24305.91, "divs": ["D2", "D5-Mat"]}, {"name": "VILOCA01 - CxO (On Demand)", "month": 7, "lastRev": 330, "peakRev": 2695, "totalRev": 5720, "divs": ["D6"]}, {"name": "212TAX01-ODA1", "month": 7, "lastRev": 680, "peakRev": 1400, "totalRev": 3400, "divs": ["D1"]}, {"name": "MAVENE01-OD1", "month": 7, "lastRev": 337.5, "peakRev": 1125, "totalRev": 3300.0, "divs": ["D1"]}, {"name": "FNDIGS01 - Offshore User Computing", "month": 7, "lastRev": 309.12, "peakRev": 1050, "totalRev": 2100.0, "divs": ["D2"]}, {"name": "GRTPAC01-ODA1", "month": 7, "lastRev": 375, "peakRev": 825, "totalRev": 3862.5, "divs": ["D1"]}, {"name": "FNDIGS01 - Offshore Computing P2 (P202510-873)", "month": 7, "lastRev": 712.5, "peakRev": 712.5, "totalRev": 1125.0, "divs": ["D2"]}, {"name": "PIEBYP01-OD1", "month": 7, "lastRev": 75, "peakRev": 675, "totalRev": 1912.5, "divs": ["D1"]}, {"name": "RBSLLC01-SLA1 4", "month": 7, "lastRev": 600, "peakRev": 600, "totalRev": 4800, "divs": ["D1"]}, {"name": "KHHITT01-ODA1", "month": 7, "lastRev": 300, "peakRev": 300, "totalRev": 412.5, "divs": ["D1"]}, {"name": "KRAOCS01-USA", "month": 7, "lastRev": 249.9, "peakRev": 249.9, "totalRev": 249.9, "divs": ["D3", "D5-Ship"]}, {"name": "DBDCAR01-OD1", "month": 7, "lastRev": 112.5, "peakRev": 150, "totalRev": 300.0, "divs": ["D1"]}, {"name": "SWTLNE01", "month": 7, "lastRev": 142.0, "peakRev": 142.0, "totalRev": 270.0, "divs": ["D5-Mkp", "D5-NP", "D5-Ship"]}, {"name": "DELSON01", "month": 7, "lastRev": 132, "peakRev": 132, "totalRev": 1056, "divs": ["D3"]}, {"name": "VRLVRY01 - Chicago 100 Oakbook (P202505-748)", "month": 6, "lastRev": 13.86, "peakRev": 19092.86, "totalRev": 21991.12, "divs": ["D2", "D5-Mat", "D5-Ship"]}, {"name": "WHIDCA01 - Silver Spring Office Move (P202509-617)", "month": 6, "lastRev": 278.3, "peakRev": 10141.52, "totalRev": 12602.06, "divs": ["D2", "D5-Mat"]}, {"name": "VILOCA01-SLA1 Clarity 6", "month": 6, "lastRev": 960, "peakRev": 7710, "totalRev": 23407.5, "divs": ["D1"]}, {"name": "SHALOM01-PMA1-S2 (Office Expansion)", "month": 6, "lastRev": 4119.55, "peakRev": 4119.55, "totalRev": 4119.55, "divs": ["D5-Mat", "D5-Ship"]}, {"name": "REGASC01", "month": 6, "lastRev": 3381.01, "peakRev": 3381.01, "totalRev": 6245.83, "divs": ["D5-Mkp", "D5-NP", "D5-Ship"]}, {"name": "FNDIGS01", "month": 6, "lastRev": 2399, "peakRev": 2399, "totalRev": 2399, "divs": ["D3"]}, {"name": "CRSKSO01", "month": 6, "lastRev": 1059.99, "peakRev": 1059.99, "totalRev": 1059.99, "divs": ["D3"]}, {"name": "RSTHWS01-OD1", "month": 6, "lastRev": 40, "peakRev": 640, "totalRev": 880, "divs": ["D1"]}, {"name": "DELSON01-SLA1 A+ Animal", "month": 6, "lastRev": 300, "peakRev": 300, "totalRev": 2100, "divs": ["D8-A+"]}, {"name": "EVNFLO01-OD1", "month": 6, "lastRev": 40, "peakRev": 40, "totalRev": 80, "divs": ["D1"]}, {"name": "MAVENE01-PA1-S3 (Form Automation)", "month": 5, "lastRev": 277.07, "peakRev": 14639.04, "totalRev": 15024.71, "divs": ["D2"]}, {"name": "KHHITT01 - M365 Migration (P202502-539)", "month": 5, "lastRev": 63.75, "peakRev": 7968.75, "totalRev": 19061.25, "divs": ["D2"]}, {"name": "RAIRNS01-ODA01", "month": 5, "lastRev": 800, "peakRev": 800, "totalRev": 2400, "divs": ["D1"]}, {"name": "VRLVRY01 - Dallas 8687 N Central (P202501-645)", "month": 4, "lastRev": 16.8, "peakRev": 14947.99, "totalRev": 22070.18, "divs": ["D2", "D5-Mat", "D5-Ship"]}, {"name": "IMGCNT01 - Conference Room Upgrades (P202501-707)", "month": 4, "lastRev": 232.05, "peakRev": 8679.47, "totalRev": 8980.34, "divs": ["D2", "D5-Mat"]}, {"name": "RGCENG01 - 19th FL Office Move (P202505-490)", "month": 4, "lastRev": 3404.26, "peakRev": 6359.19, "totalRev": 10735.11, "divs": ["D2", "D5-Mat"]}, {"name": "SHALOM01 - QNAP Deployment (P202509-252)", "month": 4, "lastRev": 4062.76, "peakRev": 6258.24, "totalRev": 10321.0, "divs": ["D2", "D5-Mat", "D5-Ship"]}, {"name": "IAVAML01-OD1", "month": 4, "lastRev": 660, "peakRev": 660, "totalRev": 730, "divs": ["D1"]}, {"name": "DWNAPT01", "month": 4, "lastRev": 308.18, "peakRev": 308.18, "totalRev": 308.18, "divs": ["D1"]}, {"name": "KBHLLP01-ODA1", "month": 4, "lastRev": 240, "peakRev": 240, "totalRev": 240, "divs": ["D1"]}, {"name": "PTRMNA01", "month": 4, "lastRev": 146.4, "peakRev": 146.4, "totalRev": 732.0, "divs": ["D3"]}, {"name": "SHALOM01-SLA1 Clarity 96", "month": 3, "lastRev": 7412, "peakRev": 11288, "totalRev": 36295, "divs": ["D1"]}, {"name": "RDKSTG01-PMA1-S2", "month": 3, "lastRev": 4300.38, "peakRev": 8299.62, "totalRev": 12600.0, "divs": ["D2"]}, {"name": "HMCBLD01 - 385 5th Ave Intercom (P202505-420)", "month": 3, "lastRev": 5510.85, "peakRev": 5510.85, "totalRev": 9021.98, "divs": ["D2", "D5-Mat", "D5-Ship"]}, {"name": "BHSTRT01-PMA1-S4 (230 Park)", "month": 3, "lastRev": 510.7, "peakRev": 2334.39, "totalRev": 3097.37, "divs": ["D2", "D5-Mat", "D5-Ship"]}, {"name": "ONEILD01", "month": 3, "lastRev": 852.5, "peakRev": 852.5, "totalRev": 852.5, "divs": ["D1"]}, {"name": "SCILUC01-CxO", "month": 3, "lastRev": 787.5, "peakRev": 787.5, "totalRev": 787.5, "divs": ["D6"]}, {"name": "VILLDEN01", "month": 3, "lastRev": 15, "peakRev": 15, "totalRev": 60, "divs": ["D3"]}, {"name": "MCRRCY01-New Office Move (P202504-844)", "month": 2, "lastRev": 3160.08, "peakRev": 15139.22, "totalRev": 20217.5, "divs": ["D2", "D5-Mat"]}, {"name": "SHALOM01", "month": 2, "lastRev": 1707, "peakRev": 13390.99, "totalRev": 15097.99, "divs": ["D5-Mkp", "D5-NP", "D5-Ship"]}, {"name": "MCRRCY01", "month": 2, "lastRev": 1400, "peakRev": 1400, "totalRev": 1400, "divs": ["D2"]}, {"name": "TEAMCO01", "month": 2, "lastRev": 1150, "peakRev": 1150, "totalRev": 3450, "divs": ["D3", "D8-Leg"]}, {"name": "FLWSTF01", "month": 2, "lastRev": 337.5, "peakRev": 337.5, "totalRev": 337.5, "divs": ["D1"]}, {"name": "TDSYST01", "month": 2, "lastRev": 74.8, "peakRev": 74.8, "totalRev": 224.4, "divs": ["D3"]}, {"name": "IMGCNT01 - Bloomerang SQL DB (P202506-813)", "month": 1, "lastRev": 4000, "peakRev": 4000, "totalRev": 4000, "divs": ["D2"]}, {"name": "UNIWAY01-OD1", "month": 1, "lastRev": 75, "peakRev": 1275, "totalRev": 1350, "divs": ["D1"]}, {"name": "VRLVRY01 - 5th Ave Office (P202411-505)", "month": 1, "lastRev": 193.05, "peakRev": 193.05, "totalRev": 193.05, "divs": ["D2"]}, {"name": "HOLAPA01 - PA1 (192 Lex Office)", "month": 1, "lastRev": 22.61, "peakRev": 22.61, "totalRev": 22.61, "divs": ["D2"]}, {"name": "AMPLHR01-SLA1 Clarity 4", "month": 0, "lastRev": 640, "peakRev": 640, "totalRev": 640, "divs": ["D1"]}, {"name": "AMPLHR01", "month": 0, "lastRev": 219.6, "peakRev": 219.6, "totalRev": 219.6, "divs": ["D3"]}, {"name": "ESJLRY01", "month": 0, "lastRev": 150, "peakRev": 150, "totalRev": 150, "divs": ["D1"]}, {"name": "UCPWHL01", "month": 0, "lastRev": 146.87, "peakRev": 146.87, "totalRev": 146.87, "divs": ["D3"]}, {"name": "BCORTH01", "month": 0, "lastRev": 60, "peakRev": 60, "totalRev": 60, "divs": ["D3"]}];

const CLIENT_REV_TOP40 = [{"name": "SCILUC01", "v": [27695.36, 2774.52, 2852.54, 2922.42, 5769.61, 10361.3, 33584.94, 9412.25, 4245.28], "total": 99618.22, "divs": ["D3", "D5-Mkp", "D5-NP", "D5-Ship"]}, {"name": "AGUDCA01", "v": [0, 0, 0, 0, 0, 20651.4, 21851.4, 21990, 21851.4], "total": 86344.2, "divs": ["D1", "D8-A+"]}, {"name": "KRAOCS01-AUS", "v": [8831.41, 9125.36, 8389.2, 8944.66, 8727.39, 8811.62, 9117.69, 9068.65, 9388.03], "total": 80404.01, "divs": ["D1", "D3", "D8-A+"]}, {"name": "WHIDCA01-SLA3 A+ Animal", "v": [8550, 8400, 8400, 8400, 9000, 8850, 9150, 9150, 9150], "total": 79050, "divs": ["D8-A+"]}, {"name": "RDKSTG01", "v": [12240, 7338.4, 9164.8, 8291.02, 7459.92, 7283.92, 6931.92, 6931.92, 6755.92], "total": 72397.82, "divs": ["D3", "D6", "D8-A+"]}, {"name": "WHIDCA01-SLA2 (Clarity 32)", "v": [8661, 7569, 7659.48, 8232, 9831, 6126, 6984, 7050, 7500], "total": 69612.48, "divs": ["D1"]}, {"name": "SCILUC01-SLA2 A+ Animal", "v": [7275, 7275, 7275, 7865.73, 7865.73, 7865.73, 7865.73, 7865.73, 7420.5], "total": 68574.15, "divs": ["D8-A+"]}, {"name": "WHIDCA01", "v": [6374.21, 15842.73, 7398.4, 17637.47, 4015.6, 2067.6, 2146.8, 6623.61, 4103.4], "total": 66209.82, "divs": ["D1", "D3", "D5-Mkp", "D5-NP", "D5-Ship"]}, {"name": "LANEOF01-SLA2 A+ Animal", "v": [7052, 6880, 6880, 7052, 7396, 6364, 6364, 6364, 6536], "total": 60888, "divs": ["D8-A+"]}, {"name": "VRLVLY01", "v": [6465, 4861, 4546, 9315.25, 5666, 4546, 4546, 6984.0, 8153], "total": 55082.25, "divs": ["D1", "D3", "D5-Mat", "D5-Mkp", "D5-NP", "D5-Ship", "D8-Ess"]}, {"name": "URBLEG01", "v": [6064.5, 5382, 6162, 5382, 5580.8, 6360.8, 6220.9, 5415, 6545], "total": 53113.0, "divs": ["D1", "D3", "D6", "D8-A+"]}, {"name": "NCJWOM01-SLA1 A+ Animal", "v": [5826.6, 5826.6, 5826.6, 5826.6, 5527.8, 5527.8, 5527.8, 5677.2, 5677.2], "total": 51244.2, "divs": ["D8-A+"]}, {"name": "KHHITT01", "v": [2352.54, 2425.26, 2583.66, 5210.1, 5493.3, 6504.55, 6510, 7452.97, 7865.77], "total": 46398.15, "divs": ["D3"]}, {"name": "RGCENG01", "v": [648.97, 648.97, 1399.93, 656.97, 7790.26, 819.37, 30123.37, 661.6, 2423.34], "total": 45172.78, "divs": ["D1", "D3", "D5-Mkp", "D5-NP", "D5-Ship"]}, {"name": "AMPWSH01-SLA1 A+ Animal", "v": [4950, 5676, 4988, 5160, 4988, 4300, 4300, 4300, 4300], "total": 42962, "divs": ["D8-A+"]}, {"name": "LANEOF01", "v": [4172.8, 4264.56, 4245.73, 4255.02, 4179.32, 4316.83, 2710.9, 4227.34, 4136.19], "total": 36508.69, "divs": ["D3", "D5-Mkp", "D5-NP", "D5-Ship"]}, {"name": "SHALOM01-SLA1 Clarity 96", "v": [11288, 10200, 7395, 7412, 0, 0, 0, 0, 0], "total": 36295, "divs": ["D1"]}, {"name": "LACCLB01", "v": [0, 0, 0, 0, 0, 0, 11618, 11848, 11848], "total": 35314, "divs": ["D1", "D8-A+", "D8-Pro"]}, {"name": "SHIRAZ01-SLA1 A+ Animal", "v": [4800, 4950, 4950, 4050, 3600, 1950, 1950, 1950, 1800], "total": 30000, "divs": ["D8-A+"]}, {"name": "HOLAPA01-SLA2 A+ Animal", "v": [3024, 3024, 3024, 3024, 3024, 3168, 3168, 3168, 3024], "total": 27648, "divs": ["D8-A+"]}, {"name": "FNDIGS01-SLA1 Clarity 16", "v": [2400, 2400, 3600, 2625, 2550, 4425, 2625, 4162.5, 2625], "total": 27412.5, "divs": ["D1"]}, {"name": "ADVTES01-SLA1 A+ Animal", "v": [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000], "total": 27000, "divs": ["D8-A+"]}, {"name": "SHASQI01-SLA1 D365", "v": [2960, 2960, 2960, 2960, 2960, 2960, 2960, 2960, 2960], "total": 26640, "divs": ["D8-Leg"]}, {"name": "KRAOCS01-SLA1 (A+ Animal - USA)", "v": [2867, 3010, 3153, 3153, 3153, 3153, 2817, 2102, 1959], "total": 25367, "divs": ["D3", "D8-A+"]}, {"name": "BHSTRT01-SLA1 A+Animal", "v": [3040, 3360, 3200, 3040, 3200, 2560, 2240, 2400, 2240], "total": 25280, "divs": ["D8-A+"]}, {"name": "VRLVRY01 - Boston 154 Newbury St (P202505-241)", "v": [1739.76, 696.3, 405.9, 1826.88, 190.74, 1653.3, 87.12, 17705.91, 0], "total": 24305.91, "divs": ["D2", "D5-Mat"]}, {"name": "WHIDCA01-CxO", "v": [2425, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 4425], "total": 23650, "divs": ["D5-Ship", "D6"]}, {"name": "VILOCA01-SLA1 Clarity 6", "v": [2422.5, 7710, 5197.5, 3885, 2272.5, 960, 960, 0, 0], "total": 23407.5, "divs": ["D1"]}, {"name": "Division 4 Partner Network Income", "v": [1500.15, 1757.25, 1623.4, 4909.65, 1501.14, 2511.95, 652.53, 4065.28, 4851.31], "total": 23372.66, "divs": ["D3-TS3"]}, {"name": "KATCOM01-SLA2 (A+ Animal)", "v": [2400, 2550, 2550, 2212, 2528, 2528, 2528, 2528, 2370], "total": 22194, "divs": ["D8-A+"]}, {"name": "VRLVRY01 - Dallas 8687 N Central (P202501-645)", "v": [14947.99, 3499.28, 1916.88, 1689.23, 16.8, 0, 0, 0, 0], "total": 22070.18, "divs": ["D2", "D5-Mat", "D5-Ship"]}, {"name": "VRLVRY01 - Chicago 100 Oakbook (P202505-748)", "v": [138.6, 1177.68, 890.24, 19092.86, 677.88, 0, 13.86, 0, 0], "total": 21991.12, "divs": ["D2", "D5-Mat", "D5-Ship"]}, {"name": "SWTLNE01-SLA1 A+ Animal", "v": [0, 0, 0, 7199.82, 3466.58, 2933.26, 2799.93, 2666.6, 2533.27], "total": 21599.46, "divs": ["D8-A+"]}, {"name": "AYAVDO01", "v": [2362.5, 2362.5, 2362.5, 2362.5, 2362.5, 2362.5, 2362.5, 2362.5, 2362.5], "total": 21262.5, "divs": ["D3", "D8-A+"]}, {"name": "KATCOM01", "v": [1545, 1545, 1401, 5051.61, 2587.0, 1758.12, 1649.16, 3070.42, 1897.42], "total": 20504.73, "divs": ["D1", "D3", "D5-Mat", "D5-Mkp", "D5-NP", "D5-Ship"]}, {"name": "SYNGNE01-SLA1 D365", "v": [0, 0, 0, 0, 2173.87, 4560, 4560, 4560, 4560], "total": 20413.87, "divs": ["D8-Pro"]}, {"name": "MCRRCY01-New Office Move (P202504-844)", "v": [1918.2, 15139.22, 3160.08, 0, 0, 0, 0, 0, 0], "total": 20217.5, "divs": ["D2", "D5-Mat"]}, {"name": "AFACTR01", "v": [0, 0, 0, 0, 0, 7205.0, 5563.01, 3965, 3045], "total": 19778.01, "divs": ["D1", "D5-Mkp", "D5-NP", "D5-Ship", "D8-Leg"]}, {"name": "KHHITT01 - M365 Migration (P202502-539)", "v": [0, 0, 7968.75, 4143.75, 6885, 63.75, 0, 0, 0], "total": 19061.25, "divs": ["D2"]}, {"name": "RGCENG01-SLA2 A+ Animal", "v": [2100, 2100, 2100, 1950, 1950, 2100, 2100, 2250, 2400], "total": 19050, "divs": ["D8-A+"]}];

const CLIENT_REV_STATS = {totalNew: 48, totalLost: 57, newRev: 108062.43, lostPeakRev: 204941.0, months: 9};
