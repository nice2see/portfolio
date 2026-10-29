# Release 6 verification — 27 October 2026

- Original evidence-file SHA-256 checks: passed.
- CSV-to-UI FPR, unconditional recall, withheld fraction and TAC arithmetic: passed.
- Each EN/KR saved-replay suite: 2,520 unique cases and 10,080 model decisions passed; shared data, not independent experiments.
- Policy controller tests: all three states, invalid query fallback, exclusive active state, exported CSV values: passed.
- Process controller: all four decision panels and base/optimised case switching: passed.
- Browser preview: three N₂ policies, CSV download, four process buttons, optimised case and evidence page inspected successfully.
- 390px iframe layout: process, semiconductor and evidence body width 375px = scroll width 375px. This is narrow-desktop browser QA, not physical mobile-device testing.
- Two executive summaries: two pages each, visually rendered and checked. Original full portfolios preserved, with one evidence appendix each (8 process / 11 semiconductor pages).
- No new model training, independent performance experiment, causal leak validation, Aspen re-run, physical-mobile or screen-reader audit was performed.

The public ZIP includes release HTML/JS/CSS/PDF files (excluding this ZIP itself and the layout-test page), original aggregate evidence, generation/verification scripts and tests. No Git history, credentials or unpublished raw laboratory spectra are included.
