# Yoonseo Lee — Micron application portfolio

Static export based on the existing semiconductor portfolio. No installation, build step or API key required.

## Main files
- index.html: Micron application landing page (semiconductor case and measured alarm explorer).
- lab-en.html / lab-ko.html: interactive saved-result OES demo.
- portfolio.css / style.css: layouts and styling.
- app-en.mjs / app.mjs, core-en.mjs / core.mjs: demo UI and selection logic.
- data.js: saved synthetic cases. This is not live physical simulation.
- decision-explorer.js / evidence-data.js: saved alarm-policy comparison.
- evidence.html / evidence/: aggregate CSVs, figures and methodological limits.
- Two semiconductor PDFs: full portfolio and recruiter Highlights.

## Publish
Extract this archive and put its CONTENTS in the repository root, with index.html at the top level. Do not upload only the ZIP. Configure the hosting service to serve this root directory. Relative asset links support repository subpaths. Keep .nojekyll when using GitHub Pages.

## Local preview
Run `python3 -m http.server 8000` in this folder and open http://localhost:8000. Use HTTP, not a file:// double-click, for JavaScript modules.

## Scope
This is a separate application-facing export; the existing hosted portfolio is unchanged. The research results and full PDFs are retained, not recomputed. Existing PDF links refer to the original public portfolio; replace those PDF annotations after the new production URL is known. No made-up GitHub URL is included.

The original laboratory spectra, full CT code and private research inputs are absent. Evidence includes public N2 derived aggregates and attributed team-coursework material; see evidence/README.md for provenance and limits. Public availability does not itself establish reuse rights over third-party material.

The original reproduction instructions describe the broader research export. This compact deployment contains the UI and evidence, not the complete research or test pipeline. Its checks cover link completeness and JavaScript syntax. No new browser or scientific validation is claimed for this export.
