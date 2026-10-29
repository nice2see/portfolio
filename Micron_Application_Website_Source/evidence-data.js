window.REVIEW_EVIDENCE = {
  "schema_version": 1,
  "scope": "Saved aggregate replay; macro means across six reused role permutations, not pooled rates or fresh training.",
  "policies": {
    "transferred": {
      "name": "Transferred threshold",
      "fpr": 50.0,
      "recall": 61.09251899881475,
      "withheld": 0.0,
      "decision": "High ranking AUC does not establish a transferable alarm threshold."
    },
    "calibrated": {
      "name": "Normal-reference calibration",
      "fpr": 13.556612091704931,
      "recall": 99.38646029422019,
      "withheld": 0.0,
      "decision": "The 512-frame dataset-labelled normal reference improves this comparison. Session A still has 33.22% false alarms."
    },
    "guard": {
      "name": "Calibration + 3% support guard",
      "fpr": 9.97427137038487,
      "recall": 52.55671531352824,
      "withheld": 46.82974498069194,
      "decision": "Reject automatic veto: 46.83% of labelled leak frames are withheld. Retain a support flag for review."
    }
  },
  "benzene": {
    "base": {
      "cost": 121.96,
      "capital": 50.49,
      "npv": -704.5,
      "target": "Target attainment is reported for the optimised case."
    },
    "optimised": {
      "cost": 98.75,
      "capital": 47.61,
      "npv": -327.8,
      "target": "Final simulation: 162 kmol/h benzene at 99.9 mol% purity."
    }
  }
};
