# Public review package — release 6, 27 October 2026

## Run the demo and its checks
Python 3 and Node.js 18+ are sufficient; no package installation needed.

```
python3 scripts/build-evidence.py
python3 scripts/verify-evidence.py
node --test tests/*.test.mjs
python3 -m http.server 8000 --directory dist
```
Open http://localhost:8000. Use HTTP rather than file:// for ES modules.

## Data dictionary and provenance
- external_calibration_summary.csv: unchanged results/external_calibration/summary.csv from the retained research package. fpr = alarms / normal frames; recall = alarms / labelled leak frames. Rates are fractions 0–1. Mean/min/max describe six reused role permutations, not confidence intervals.
- external_calibration_run_metrics.csv: unchanged run-level metrics for session variation; no raw spectra.
- external_guard_summary.csv: unchanged results/external_guard/summary.csv. Unconditional recall counts withheld leaks as not alarmed. Conditional recall includes accepted leak frames only. leak_defer_fraction is the fraction of leak frames withheld.
- correlated_noise_summary.csv and correlated_noise_by_family.csv: unchanged synthetic comparison tables. sigma is log-channel-noise scale; rho is shared-channel correlation. Stage/global specify the shared component. Five reused seeds, fixed models and thresholds, assumed covariance.
- reconstruction_summary.json: selected original results/run_summary.json fields. 50° CCW geometry, 29.23% same-forward-model synthetic field error. Obsolete deployment metadata excluded.
- phantom_validation.png: original synthetic phantom validation figure, no measured plasma map.
- benzene_report_cases.csv: explicitly transcribed Group_23.pdf pp. 1 and 11–13; not an Aspen CSV export. GBP millions; TAC annual, capital one-time, NPV 25 years. Target attainment is reported for the optimised case.
- aspen_base_flowsheet.jpg: original embedded Figure 1.0, p. 2, Group 23 report. Preliminary base case. Original 619×286 resolution.
- demo-metrics.json, ../evidence-data.js and N2_matched_policy_comparison.csv: generated from those CSVs. UI percentages = 100 × source fraction; rounding happens for display only.
- manifest.json: SHA-256 of source evidence. verify-evidence.py detects changed evidence and checks numerical agreement.

## Interpretation and reproduction limits
Broader index-127 LR mean AUC is 0.9989; matched calibration-scope AUC is 0.99836. The 37,814 unique future frames are reused across comparisons. Reference acquisition uses 512 dataset-labelled normal frames. Reference frames and preceding early leaks are excluded from future evaluation. Session A still has 33.22% FPR. Valve/time confounding is unresolved.

The included tests audit saved replay decisions and display logic. They do not retrain models from raw N₂ spectra, reproduce private laboratory processing, rerun Aspen, establish absolute electron density or predict OES from pressure/power/gas ratio. Ar synthetic and public N₂ measured studies remain separate. No new scientific performance experiment is claimed.

## Attribution
Public N₂ data: Youngjun Yuk, Mendeley Data v1, https://doi.org/10.17632/9gy9v3h4mp.1, CC BY 4.0. Tables are derived evaluation aggregates.
Process report/flowsheet: University of Manchester CHEN21112 Group 23 team coursework. SNU diagnostics and portfolio evaluation: Yoonseo Lee; existing laboratory CT framework; AI implementation support. No new rights are asserted over third-party or team material.
