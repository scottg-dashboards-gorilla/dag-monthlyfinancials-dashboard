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
    {"type": "anomaly", "category": "Revenue", "description": "WHIDCA01-CxO $2,400 not received — credit card expired, will record in July", "impact": 2400, "dept": "d6", "action": "Payment shifted to July"},
    {"type": "anomaly", "category": "COGS", "description": "Multiple projects showing negative income — higher labor cost than invoiced", "impact": 0, "dept": "d2", "action": "Review VRLVL01-Dallas, VRLVRY01-Chicago/Boston, NCJWOM01, BHSTRT01, HMCBLD01 projects"}
  ],
  "Jul 25": [
    {"type": "anomaly", "category": "COGS", "description": "SHALOM01 — client shifted from Timothy to Craig, higher on-demand costs", "impact": 0, "dept": "d1", "action": "New engineer assignment driving cost increase"},
    {"type": "anomaly", "category": "COGS", "description": "RDKSTG01-CxO — Hammer logged time at high rate, reducing Div 6 profit", "impact": 0, "dept": "d6", "action": "Review CxO labor allocation"}
  ],
  "Aug 25": [
    {"type": "anomaly", "category": "Margin", "description": "Minimal time on WHIDCA-CxO and RDKSTG01-CxO — higher Div 6 profit than usual", "impact": 0, "dept": "d6", "action": "Low activity month; profit % inflated"},
    {"type": "expense", "category": "OpEx", "description": "Traveler insurance $372.60 accrued monthly but no cost recorded in August", "impact": -372.60, "dept": "opex", "action": "Bank timing difference"},
    {"type": "anomaly", "category": "OpEx", "description": "No employee cost overhead recorded in August", "impact": 0, "dept": "opex", "action": "Verify with accounting"},
    {"type": "anomaly", "category": "Revenue", "description": "KRAOCS01-AUS — flagged for review", "impact": 0, "dept": "d1", "action": "Investigate billing status"}
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
    {"type": "anomaly", "category": "Margin", "description": "Div 2 Project Labor GP% at -194% — allocatable labor $6,728 exceeds revenue $2,558", "impact": -4972.83, "dept": "d2", "action": "Review project staffing vs billing"},
    {"type": "anomaly", "category": "Margin", "description": "Div 5 Materials GP% at -46% — costs ($9,565) exceed revenue ($6,532)", "impact": -3032.55, "dept": "d5", "action": "Review material procurement margins"},
    {"type": "anomaly", "category": "Margin", "description": "Div 3 Cloud VAR GP% at 20.7% — consistently below 25% target", "impact": 0, "dept": "d3", "action": "Ongoing structural margin issue"},
    {"type": "expense", "category": "OpEx", "description": "Insurance spiked to $2,781 — up from ~$1,157 avg", "impact": 2780.99, "dept": "opex", "action": "Verify if annual renewal or rate increase"},
    {"type": "expense", "category": "OpEx", "description": "Office admin jumped to $1,736 — up from near-zero recent months", "impact": 1735.97, "dept": "opex", "action": "Identify what drove the increase"},
    {"type": "expense", "category": "Growth", "description": "Travel & business at $6,251 — 4x January's $1,554", "impact": 6250.95, "dept": "growth", "action": "Review travel expenses"},
    {"type": "expense", "category": "OpEx", "description": "Ask My Accountant — $4,782 in other expenses", "impact": 4781.65, "dept": "other", "action": "Reclassify to proper expense categories"},
    {"type": "adjustment", "category": "COGS", "description": "Labor overhead returned to $21,213 after $0 in January", "impact": 21213.18, "dept": "unalloc", "action": "January had R&D reclassification; February normalized"}
  ]
};

// Flagged Items — color-coded action/monitor cards per month
var FLAGS = {
  "Feb 26": [
    {"status":"action","title":"Div 2 Project Labor GP% at -194%","desc":"Revenue only $2,558 but allocatable labor at $6,728. Worst Div 2 margin ever recorded.","next":"Review why labor is being allocated to low/no-revenue projects","dept":"Margin / D2"},
    {"status":"action","title":"Div 5 Materials GP% at -46%","desc":"Both non-project and project materials running negative. Combined loss of $3,033.","next":"Review material procurement pricing and client pass-through","dept":"Margin / D5"},
    {"status":"action","title":"Ask My Accountant — $4,782","desc":"Large amount sitting in unclassified 'Ask My Accountant' category.","next":"Work with Bharat to reclassify to proper expense categories","dept":"Other Expenses"},
    {"status":"monitor","title":"Insurance at $2,781 (+140% vs avg)","desc":"Jumped from ~$1,157 average. Could be annual renewal or rate increase.","next":"Verify with accounting","dept":"OPEX"},
    {"status":"monitor","title":"Travel & business at $6,251 (+302% MoM)","desc":"4x increase from January's $1,554. Second highest travel month.","next":"Review if tied to client activity","dept":"Growth / OPEX"},
    {"status":"monitor","title":"Revenue down to $231K (-10% MoM)","desc":"Dropped from $256K in January. Div 1 down $5K, Div 2 down $3K.","next":"Monitor for trend vs seasonal dip","dept":"Revenue"}
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
  "Feb 26": "Revenue at $231K, down 10% from Jan. GP margin at 36.4%. EBITDA margin improved to 9.4%. Net margin at 7.4%. Div 2 and Div 5 both running negative margins. Div 8 Security Platform at $124K remains 54% of total revenue. $4,782 in unclassified 'Ask My Accountant' needs reclassification. Travel & business spiked 4x from January.",
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
