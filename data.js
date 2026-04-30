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
      "d1": {
        "rev": 43054.81,
        "cogs": 26247.98,
        "gp": 16806.83,
        "gpM": 39.04
      },
      "d2": {
        "rev": 10722.6,
        "cogs": 5172.26,
        "gp": 5550.34,
        "gpM": 51.76
      },
      "d3": {
        "rev": 51127.73,
        "cogs": 30134.37,
        "gp": 20993.36,
        "gpM": 41.06
      },
      "d4": {
        "rev": 1372.36,
        "cogs": 0,
        "gp": 1372.36,
        "gpM": 100
      },
      "d5": {
        "rev": 11517.19,
        "cogs": 10467.79,
        "gp": 1049.4,
        "gpM": 9.11
      },
      "d6": {
        "rev": 3156.25,
        "cogs": 995.57,
        "gp": 2160.68,
        "gpM": 68.46
      },
      "d8": {
        "rev": 85118.8,
        "cogs": 36809.51,
        "gp": 48309.29,
        "gpM": 56.76
      }
    },
    "detail": {
      "d2": {
        "cogsAllocatable": 4355.68,
        "cogsNonAllocatable": 816.58
      },
      "d5": {
        "revNonProject": 3631.99,
        "revProject": 7885.2,
        "revShipping": 0,
        "cogsNonProject": 2883.73,
        "cogsProject": 7584.06,
        "cogsShipping": 0
      },
      "d8": {
        "cogsCloud": 13058.91,
        "cogsLabor": 23750.6,
        "cogsResold": 0
      }
    },
    "unalloc": {
      "loh": 21804.45,
      "rd": 0
    },
    "totRev": 206069.74,
    "totCogs": 131631.93,
    "gp": 74437.81,
    "gpM": 36.12,
    "opex": 33134.53,
    "growth": 28476.34,
    "ebitda": 12826.94,
    "ebitdaM": 6.22,
    "netIncome": 12826.94
  },
  {
    "month": "Feb 25",
    "d": {
      "d1": {
        "rev": 35895.23,
        "cogs": 19257.61,
        "gp": 16637.62,
        "gpM": 46.35
      },
      "d2": {
        "rev": 9301.99,
        "cogs": 2596.56,
        "gp": 6705.43,
        "gpM": 72.09
      },
      "d3": {
        "rev": 43681.11,
        "cogs": 35160.3,
        "gp": 8520.81,
        "gpM": 19.51
      },
      "d4": {
        "rev": 1788.85,
        "cogs": 0,
        "gp": 1788.85,
        "gpM": 100
      },
      "d5": {
        "rev": 17543.76,
        "cogs": 14669.6,
        "gp": 2874.16,
        "gpM": 16.38
      },
      "d6": {
        "rev": 3100,
        "cogs": 875.04,
        "gp": 2224.96,
        "gpM": 71.77
      },
      "d8": {
        "rev": 83328.2,
        "cogs": 30309.91,
        "gp": 53018.29,
        "gpM": 63.63
      }
    },
    "detail": {
      "d2": {
        "cogsAllocatable": 1794.24,
        "cogsNonAllocatable": 802.32
      },
      "d5": {
        "revNonProject": 9675.36,
        "revProject": 7868.4,
        "revShipping": 0,
        "cogsNonProject": 8331.29,
        "cogsProject": 6338.31,
        "cogsShipping": 0
      },
      "d8": {
        "cogsCloud": 11364.24,
        "cogsLabor": 18945.67,
        "cogsResold": 0
      }
    },
    "unalloc": {
      "loh": 21076.66,
      "rd": 0
    },
    "totRev": 194639.14,
    "totCogs": 123945.68,
    "gp": 70693.46,
    "gpM": 36.32,
    "opex": 29971.64,
    "growth": 28892.72,
    "ebitda": 11829.1,
    "ebitdaM": 6.08,
    "netIncome": 11829.1
  },
  {
    "month": "Mar 25",
    "d": {
      "d1": {
        "rev": 40898.15,
        "cogs": 18080.3,
        "gp": 22817.85,
        "gpM": 55.79
      },
      "d2": {
        "rev": 4824.84,
        "cogs": 2288.08,
        "gp": 2536.76,
        "gpM": 52.58
      },
      "d3": {
        "rev": 41893.06,
        "cogs": 31881.29,
        "gp": 10011.77,
        "gpM": 23.9
      },
      "d4": {
        "rev": 4497.46,
        "cogs": 0,
        "gp": 4497.46,
        "gpM": 100
      },
      "d5": {
        "rev": 30473.41,
        "cogs": 21069.53,
        "gp": 9403.88,
        "gpM": 30.86
      },
      "d6": {
        "rev": 3100,
        "cogs": 747.83,
        "gp": 2352.17,
        "gpM": 75.88
      },
      "d8": {
        "rev": 82408.2,
        "cogs": 29140.79,
        "gp": 53267.41,
        "gpM": 64.64
      }
    },
    "detail": {
      "d2": {
        "cogsAllocatable": 1540.25,
        "cogsNonAllocatable": 747.83
      },
      "d5": {
        "revNonProject": 23318.08,
        "revProject": 7155.33,
        "revShipping": 0,
        "cogsNonProject": 17306.07,
        "cogsProject": 3763.46,
        "cogsShipping": 0
      },
      "d8": {
        "cogsCloud": 10403.44,
        "cogsLabor": 18737.35,
        "cogsResold": 0
      }
    },
    "unalloc": {
      "loh": 17828.99,
      "rd": 0
    },
    "totRev": 208095.12,
    "totCogs": 121036.81,
    "gp": 87058.31,
    "gpM": 41.84,
    "opex": 36896.58,
    "growth": 24120.58,
    "ebitda": 26041.15,
    "ebitdaM": 12.51,
    "netIncome": 26041.15
  },
  {
    "month": "Apr 25",
    "d": {
      "d1": {
        "rev": 49359.05,
        "cogs": 17529.42,
        "gp": 31829.63,
        "gpM": 64.49
      },
      "d2": {
        "rev": 6463.88,
        "cogs": 4829,
        "gp": 1634.88,
        "gpM": 25.29
      },
      "d3": {
        "rev": 49957.85,
        "cogs": 40989.24,
        "gp": 8968.61,
        "gpM": 17.95
      },
      "d4": {
        "rev": 1665.58,
        "cogs": 0,
        "gp": 1665.58,
        "gpM": 100
      },
      "d5": {
        "rev": 3603.08,
        "cogs": 3704.93,
        "gp": -101.85,
        "gpM": -2.83
      },
      "d6": {
        "rev": 5366.25,
        "cogs": 2037.83,
        "gp": 3328.42,
        "gpM": 62.03
      },
      "d8": {
        "rev": 83624.86,
        "cogs": 30594.81,
        "gp": 53030.05,
        "gpM": 63.41
      }
    },
    "detail": {
      "d2": {
        "cogsAllocatable": 4083.73,
        "cogsNonAllocatable": 745.27
      },
      "d5": {
        "revNonProject": 3568.55,
        "revProject": 34.53,
        "revShipping": 0,
        "cogsNonProject": 3754.83,
        "cogsProject": -49.9,
        "cogsShipping": 0
      },
      "d8": {
        "cogsCloud": 10462.76,
        "cogsLabor": 20132.05,
        "cogsResold": 0
      }
    },
    "unalloc": {
      "loh": 20649.23,
      "rd": 0
    },
    "totRev": 200040.55,
    "totCogs": 120334.46,
    "gp": 79706.09,
    "gpM": 39.84,
    "opex": 31749.98,
    "growth": 28177.23,
    "ebitda": 19778.88,
    "ebitdaM": 9.89,
    "netIncome": 19778.88
  },
  {
    "month": "May 25",
    "d": {
      "d1": {
        "rev": 38961.5,
        "cogs": 19592.01,
        "gp": 19369.49,
        "gpM": 49.71
      },
      "d2": {
        "rev": 2125.03,
        "cogs": 2667.52,
        "gp": -542.49,
        "gpM": -25.53
      },
      "d3": {
        "rev": 41930.04,
        "cogs": 32735.27,
        "gp": 9194.77,
        "gpM": 21.93
      },
      "d4": {
        "rev": 1506.79,
        "cogs": 0,
        "gp": 1506.79,
        "gpM": 100
      },
      "d5": {
        "rev": 22078.11,
        "cogs": 18699.8,
        "gp": 3378.31,
        "gpM": 15.3
      },
      "d6": {
        "rev": 3325,
        "cogs": 1536.55,
        "gp": 1788.45,
        "gpM": 53.79
      },
      "d8": {
        "rev": 85612.08,
        "cogs": 35123.94,
        "gp": 50488.14,
        "gpM": 58.97
      }
    },
    "detail": {
      "d2": {
        "cogsAllocatable": 1549.61,
        "cogsNonAllocatable": 1117.91
      },
      "d5": {
        "revNonProject": 22078.11,
        "revProject": 0,
        "revShipping": 0,
        "cogsNonProject": 18699.8,
        "cogsProject": 0,
        "cogsShipping": 0
      },
      "d8": {
        "cogsCloud": 10747.49,
        "cogsLabor": 24376.45,
        "cogsResold": 0
      }
    },
    "unalloc": {
      "loh": 17112.65,
      "rd": 0
    },
    "totRev": 195538.55,
    "totCogs": 127467.74,
    "gp": 68070.81,
    "gpM": 34.81,
    "opex": 26881.84,
    "growth": 31899.16,
    "ebitda": 9289.81,
    "ebitdaM": 4.75,
    "netIncome": 9289.81
  },
  {
    "month": "Jun 25",
    "d": {
      "d1": {
        "rev": 44676.51,
        "cogs": 17208.91,
        "gp": 27467.6,
        "gpM": 61.48
      },
      "d2": {
        "rev": 10077.76,
        "cogs": 5430.84,
        "gp": 4646.92,
        "gpM": 46.11
      },
      "d3": {
        "rev": 57672.48,
        "cogs": 45227.39,
        "gp": 12445.09,
        "gpM": 21.58
      },
      "d4": {
        "rev": 1500.15,
        "cogs": 0,
        "gp": 1500.15,
        "gpM": 100
      },
      "d5": {
        "rev": 46924.05,
        "cogs": 38438.13,
        "gp": 8485.92,
        "gpM": 18.08
      },
      "d6": {
        "rev": 5330,
        "cogs": 1732.54,
        "gp": 3597.46,
        "gpM": 67.49
      },
      "d8": {
        "rev": 95776.44,
        "cogs": 34561.41,
        "gp": 61215.03,
        "gpM": 63.91
      }
    },
    "detail": {
      "d2": {
        "cogsAllocatable": 4685.57,
        "cogsNonAllocatable": 745.27
      },
      "d5": {
        "revNonProject": 26643.33,
        "revProject": 20280.72,
        "revShipping": 0,
        "cogsNonProject": 22018.8,
        "cogsProject": 16419.33,
        "cogsShipping": 0
      },
      "d8": {
        "cogsCloud": 10778.83,
        "cogsLabor": 23782.58,
        "cogsResold": 0
      }
    },
    "unalloc": {
      "loh": 15917.25,
      "rd": 0
    },
    "totRev": 261957.39,
    "totCogs": 158516.47,
    "gp": 103440.92,
    "gpM": 39.49,
    "opex": 33105.31,
    "growth": 28071.81,
    "ebitda": 42263.8,
    "ebitdaM": 16.13,
    "netIncome": 42263.8
  },
  {
    "month": "Jul 25",
    "d": {
      "d1": {
        "rev": 37894,
        "cogs": 22265.96,
        "gp": 15628.04,
        "gpM": 41.24
      },
      "d2": {
        "rev": 13362.7,
        "cogs": 12738.32,
        "gp": 624.38,
        "gpM": 4.67
      },
      "d3": {
        "rev": 45100.64,
        "cogs": 36886.77,
        "gp": 8213.87,
        "gpM": 18.21
      },
      "d4": {
        "rev": 1757.25,
        "cogs": 0,
        "gp": 1757.25,
        "gpM": 100
      },
      "d5": {
        "rev": 27675.86,
        "cogs": 24541.58,
        "gp": 3134.28,
        "gpM": 11.32
      },
      "d6": {
        "rev": 5220,
        "cogs": 1961.18,
        "gp": 3258.82,
        "gpM": 62.43
      },
      "d8": {
        "rev": 92014.9,
        "cogs": 33514.57,
        "gp": 58500.33,
        "gpM": 63.58
      }
    },
    "detail": {
      "d2": {
        "cogsAllocatable": 11993.05,
        "cogsNonAllocatable": 745.27
      },
      "d5": {
        "revNonProject": 13718,
        "revProject": 13957.86,
        "revShipping": 0,
        "cogsNonProject": 11566.53,
        "cogsProject": 12975.05,
        "cogsShipping": 0
      },
      "d8": {
        "cogsCloud": 10685.88,
        "cogsLabor": 22828.69,
        "cogsResold": 0
      }
    },
    "unalloc": {
      "loh": 12899.06,
      "rd": 0
    },
    "totRev": 223025.35,
    "totCogs": 144807.44,
    "gp": 78217.91,
    "gpM": 35.07,
    "opex": 32221.72,
    "growth": 29393.67,
    "ebitda": 16602.52,
    "ebitdaM": 7.44,
    "netIncome": 16602.52
  },
  {
    "month": "Aug 25",
    "d": {
      "d1": {
        "rev": 38036.25,
        "cogs": 19880.97,
        "gp": 18155.28,
        "gpM": 47.73
      },
      "d2": {
        "rev": 32302.9,
        "cogs": 19374.84,
        "gp": 12928.06,
        "gpM": 40.02
      },
      "d3": {
        "rev": 41078.12,
        "cogs": 32052.46,
        "gp": 9025.66,
        "gpM": 21.97
      },
      "d4": {
        "rev": 1623.4,
        "cogs": 0,
        "gp": 1623.4,
        "gpM": 100
      },
      "d5": {
        "rev": 9781.83,
        "cogs": 8333.72,
        "gp": 1448.11,
        "gpM": 14.8
      },
      "d6": {
        "rev": 4780,
        "cogs": 896.26,
        "gp": 3883.74,
        "gpM": 81.25
      },
      "d8": {
        "rev": 92394.6,
        "cogs": 34921.84,
        "gp": 57472.76,
        "gpM": 62.2
      }
    },
    "detail": {
      "d2": {
        "cogsAllocatable": 18629.57,
        "cogsNonAllocatable": 745.27
      },
      "d5": {
        "revNonProject": 8450.43,
        "revProject": 1331.4,
        "revShipping": 0,
        "cogsNonProject": 6624.64,
        "cogsProject": 1709.08,
        "cogsShipping": 0
      },
      "d8": {
        "cogsCloud": 10693.16,
        "cogsLabor": 24228.68,
        "cogsResold": 0
      }
    },
    "unalloc": {
      "loh": 16388.45,
      "rd": 0
    },
    "totRev": 219997.1,
    "totCogs": 131848.54,
    "gp": 88148.56,
    "gpM": 40.07,
    "opex": 27945.28,
    "growth": 26701.7,
    "ebitda": 33501.58,
    "ebitdaM": 15.23,
    "netIncome": 33501.58
  },
  {
    "month": "Sep 25",
    "d": {
      "d1": {
        "rev": 34725.97,
        "cogs": 18562.82,
        "gp": 16163.15,
        "gpM": 46.54
      },
      "d2": {
        "rev": 10280,
        "cogs": 8626.91,
        "gp": 1653.09,
        "gpM": 16.08
      },
      "d3": {
        "rev": 50876.08,
        "cogs": 40102.18,
        "gp": 10773.9,
        "gpM": 21.18
      },
      "d4": {
        "rev": 4909.65,
        "cogs": 0,
        "gp": 4909.65,
        "gpM": 100
      },
      "d5": {
        "rev": 62788.49,
        "cogs": 53974.22,
        "gp": 8814.27,
        "gpM": 14.04
      },
      "d6": {
        "rev": 8262.5,
        "cogs": 2962.4,
        "gp": 5300.1,
        "gpM": 64.15
      },
      "d8": {
        "rev": 98518.81,
        "cogs": 40068.53,
        "gp": 58450.28,
        "gpM": 59.33
      }
    },
    "detail": {
      "d2": {
        "cogsAllocatable": 7881.64,
        "cogsNonAllocatable": 745.27
      },
      "d5": {
        "revNonProject": 17320.52,
        "revProject": 45467.97,
        "revShipping": 0,
        "cogsNonProject": 14330,
        "cogsProject": 39644.22,
        "cogsShipping": 0
      },
      "d8": {
        "cogsCloud": 10959.68,
        "cogsLabor": 29108.85,
        "cogsResold": 0
      }
    },
    "unalloc": {
      "loh": 11008.97,
      "rd": 0
    },
    "totRev": 270361.5,
    "totCogs": 175306.03,
    "gp": 95055.47,
    "gpM": 35.16,
    "opex": 35165.76,
    "growth": 29215.54,
    "ebitda": 30674.17,
    "ebitdaM": 11.35,
    "netIncome": 30674.17
  },
  {
    "month": "Oct 25",
    "d": {
      "d1": {
        "rev": 32094.86,
        "cogs": 16530.78,
        "gp": 15564.08,
        "gpM": 48.49
      },
      "d2": {
        "rev": 13370.17,
        "cogs": 7947.14,
        "gp": 5423.03,
        "gpM": 40.56
      },
      "d3": {
        "rev": 43920.27,
        "cogs": 36045.19,
        "gp": 7875.08,
        "gpM": 17.93
      },
      "d4": {
        "rev": 1501.14,
        "cogs": 0,
        "gp": 1501.14,
        "gpM": 100
      },
      "d5": {
        "rev": 13485.78,
        "cogs": 7739.5,
        "gp": 5746.28,
        "gpM": 42.61
      },
      "d6": {
        "rev": 6485,
        "cogs": 2599.29,
        "gp": 3885.71,
        "gpM": 59.92
      },
      "d8": {
        "rev": 96369.63,
        "cogs": 36703.69,
        "gp": 59665.94,
        "gpM": 61.91
      }
    },
    "detail": {
      "d2": {
        "cogsAllocatable": 6829.24,
        "cogsNonAllocatable": 1117.9
      },
      "d5": {
        "revNonProject": 9437.5,
        "revProject": 4048.28,
        "revShipping": 0,
        "cogsNonProject": 3920.16,
        "cogsProject": 3819.34,
        "cogsShipping": 0
      },
      "d8": {
        "cogsCloud": 10197.2,
        "cogsLabor": 26506.49,
        "cogsResold": 0
      }
    },
    "unalloc": {
      "loh": 16236.51,
      "rd": 0
    },
    "totRev": 207226.85,
    "totCogs": 123802.1,
    "gp": 83424.75,
    "gpM": 40.26,
    "opex": 28419,
    "growth": 32097.87,
    "ebitda": 22907.88,
    "ebitdaM": 11.05,
    "netIncome": 22907.88
  },
  {
    "month": "Nov 25",
    "d": {
      "d1": {
        "rev": 31396,
        "cogs": 10800.79,
        "gp": 20595.21,
        "gpM": 65.6
      },
      "d2": {
        "rev": 1053.32,
        "cogs": 1719.24,
        "gp": -665.92,
        "gpM": -63.22
      },
      "d3": {
        "rev": 49826.94,
        "cogs": 38566.44,
        "gp": 11260.5,
        "gpM": 22.6
      },
      "d4": {
        "rev": 2511.95,
        "cogs": 0,
        "gp": 2511.95,
        "gpM": 100
      },
      "d5": {
        "rev": 1450,
        "cogs": 1173.74,
        "gp": 276.26,
        "gpM": 19.05
      },
      "d6": {
        "rev": 4780,
        "cogs": 2286.48,
        "gp": 2493.52,
        "gpM": 52.17
      },
      "d8": {
        "rev": 119774.19,
        "cogs": 41876.54,
        "gp": 77897.65,
        "gpM": 65.04
      }
    },
    "detail": {
      "d2": {
        "cogsAllocatable": 973.97,
        "cogsNonAllocatable": 745.27
      },
      "d5": {
        "revNonProject": 1450,
        "revProject": 0,
        "revShipping": 0,
        "cogsNonProject": 1173.74,
        "cogsProject": 0,
        "cogsShipping": 0
      },
      "d8": {
        "cogsCloud": 11425.16,
        "cogsLabor": 30451.38,
        "cogsResold": 0
      }
    },
    "unalloc": {
      "loh": 17299.39,
      "rd": 0
    },
    "totRev": 210792.4,
    "totCogs": 113722.62,
    "gp": 97069.78,
    "gpM": 46.05,
    "opex": 35920.84,
    "growth": 27920.02,
    "ebitda": 33228.92,
    "ebitdaM": 15.76,
    "netIncome": 33228.92
  },
  {
    "month": "Dec 25",
    "d": {
      "d1": {
        "rev": 35122.19,
        "cogs": 11389.98,
        "gp": 23732.21,
        "gpM": 67.57
      },
      "d2": {
        "rev": 1588.87,
        "cogs": 1964.88,
        "gp": -376.01,
        "gpM": -23.67
      },
      "d3": {
        "rev": 45843.86,
        "cogs": 36348.61,
        "gp": 9495.25,
        "gpM": 20.71
      },
      "d4": {
        "rev": 652.53,
        "cogs": 0,
        "gp": 652.53,
        "gpM": 100
      },
      "d5": {
        "rev": 65180.48,
        "cogs": 57030.68,
        "gp": 8149.8,
        "gpM": 12.5
      },
      "d6": {
        "rev": 4780,
        "cogs": 1852.85,
        "gp": 2927.15,
        "gpM": 61.24
      },
      "d8": {
        "rev": 125042.65,
        "cogs": 40771.02,
        "gp": 84271.63,
        "gpM": 67.39
      }
    },
    "detail": {
      "d2": {
        "cogsAllocatable": 1219.61,
        "cogsNonAllocatable": 745.27
      },
      "d5": {
        "revNonProject": 61360.93,
        "revProject": 3819.55,
        "revShipping": 0,
        "cogsNonProject": 53250.35,
        "cogsProject": 3780.33,
        "cogsShipping": 0
      },
      "d8": {
        "cogsCloud": 11118.52,
        "cogsLabor": 29652.5,
        "cogsResold": 0
      }
    },
    "unalloc": {
      "loh": 17243.65,
      "rd": 0
    },
    "totRev": 278210.58,
    "totCogs": 166601.67,
    "gp": 111608.91,
    "gpM": 40.12,
    "opex": 34750.11,
    "growth": 30296.72,
    "ebitda": 46562.08,
    "ebitdaM": 16.74,
    "netIncome": 46562.08
  },
  {
    "month": "Jan 26",
    "d": {
      "d1": {
        "rev": 35442.5,
        "cogs": 13255.45,
        "gp": 22187.05,
        "gpM": 62.6
      },
      "d2": {
        "rev": 5375.52,
        "cogs": 4460.62,
        "gp": 914.9,
        "gpM": 17.02
      },
      "d3": {
        "rev": 49901.2,
        "cogs": 39990.55,
        "gp": 9910.65,
        "gpM": 19.86
      },
      "d4": {
        "rev": 4065.28,
        "cogs": 0,
        "gp": 4065.28,
        "gpM": 100
      },
      "d5": {
        "rev": 31631.82,
        "cogs": 26858.52,
        "gp": 4773.3,
        "gpM": 15.09
      },
      "d6": {
        "rev": 5110,
        "cogs": 2788.68,
        "gp": 2321.32,
        "gpM": 45.43
      },
      "d8": {
        "rev": 124772.53,
        "cogs": 40103.15,
        "gp": 84669.38,
        "gpM": 67.86
      }
    },
    "detail": {
      "d2": {
        "cogsAllocatable": 3642.66,
        "cogsNonAllocatable": 817.96
      },
      "d5": {
        "revNonProject": 11125.91,
        "revProject": 18240.9,
        "revShipping": 2265.01,
        "cogsNonProject": 11269.28,
        "cogsProject": 15052.83,
        "cogsShipping": 536.41
      },
      "d8": {
        "cogsCloud": 5038.34,
        "cogsLabor": 27723.06,
        "cogsResold": 7342.75
      }
    },
    "unalloc": {
      "loh": 0,
      "rd": 25856.46
    },
    "totRev": 256298.85,
    "totCogs": 153313.43,
    "gp": 102985.42,
    "gpM": 40.18,
    "opex": 44279.83,
    "growth": 39033.75,
    "ebitda": 19671.84,
    "ebitdaM": 7.68,
    "netIncome": 19671.84
  },
  {
    "month": "Feb 26",
    "d": {
      "d1": {
        "rev": 30688.39,
        "cogs": 13342.13,
        "gp": 17346.26,
        "gpM": 56.52
      },
      "d2": {
        "rev": 2557.85,
        "cogs": 7530.68,
        "gp": -4972.83,
        "gpM": -194.41
      },
      "d3": {
        "rev": 55803.96,
        "cogs": 44248.08,
        "gp": 11555.88,
        "gpM": 20.71
      },
      "d4": {
        "rev": 4851.31,
        "cogs": 0,
        "gp": 4851.31,
        "gpM": 100
      },
      "d5": {
        "rev": 6532,
        "cogs": 9564.55,
        "gp": -3032.55,
        "gpM": -46.43
      },
      "d6": {
        "rev": 6805,
        "cogs": 3017.4,
        "gp": 3787.6,
        "gpM": 55.66
      },
      "d8": {
        "rev": 123701.74,
        "cogs": 47918.33,
        "gp": 75783.41,
        "gpM": 61.26
      }
    },
    "detail": {
      "d2": {
        "cogsAllocatable": 6728.36,
        "cogsNonAllocatable": 802.32
      },
      "d5": {
        "revNonProject": 4136,
        "revProject": 2396,
        "revShipping": 0,
        "cogsNonProject": 6142.35,
        "cogsProject": 3422.2,
        "cogsShipping": 0
      },
      "d8": {
        "cogsCloud": 12525.82,
        "cogsLabor": 35392.51,
        "cogsResold": 0
      }
    },
    "unalloc": {
      "loh": 21213.18,
      "rd": 0
    },
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
  "Bank charges": [
    5151.06,
    4876.79,
    6830.99,
    5456.56
  ],
  "Bonus": [
    0,
    0,
    0,
    0
  ],
  "Commissions": [
    1340.1,
    2683.18,
    2683.18,
    1663.48
  ],
  "Consulting": [
    0,
    0,
    0,
    0
  ],
  "Employee benefits": [
    546.24,
    450.75,
    751.98,
    628.7
  ],
  "Financial admin": [
    5380.6,
    5512.1,
    7293.31,
    4957.88
  ],
  "HR": [
    1400,
    1400,
    1400,
    1400
  ],
  "Insurance": [
    1743.16,
    1156.64,
    1156.64,
    2780.99
  ],
  "Legal & professional": [
    1117.9,
    4419.27,
    745.27,
    802.32
  ],
  "Office space": [
    1419.36,
    1419.36,
    1419.36,
    1419.36
  ],
  "Office admin": [
    249.28,
    78.66,
    0,
    1735.97
  ],
  "Operational services": [
    9646.48,
    12487.45,
    8768.35,
    6811.23
  ],
  "QB payments": [
    424.82,
    1436.64,
    3701.03,
    800.42
  ],
  "Taxes & licenses": [
    0,
    0,
    0,
    0
  ],
  "Utilities": [
    0,
    0,
    0,
    0
  ]
};

// Growth expense detail (last 4 months)
var grwD = {
  "Advertising": [
    8691.72,
    8525.22,
    8376.05,
    6730.53
  ],
  "Business advisory (COO)": [
    5399,
    5452.69,
    10621.85,
    10403.1
  ],
  "Business development": [
    7135.82,
    6390.54,
    6390.54,
    6587.98
  ],
  "Marketing": [
    5146.24,
    4689.48,
    2609.48,
    3275.26
  ],
  "R&D": [
    1117.9,
    745.27,
    745.27,
    802.32
  ],
  "Travel & business": [
    4607.19,
    2116.82,
    1553.53,
    6250.95
  ]
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
