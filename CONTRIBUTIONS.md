# Contributing to Biological Codes

Contributions that improve the site or help explain and model biological processes are welcome. This guide applies to code, documentation, data, and educational content.

## Ways to contribute

- **Propose:** suggest a new biological topic, simulation, dataset, or site improvement.
- **Contribute:** implement the proposal, improve an existing project, or update documentation.
- **Review:** check a change for correctness, clarity, reproducibility, and appropriate attribution.

You do not need to provide private personal information. Include a contributor ID or public handle with your submission so the work can be attributed; do not include private contact details in source files or public documentation.

## Before submitting

For a proposal, describe the biological question or process, intended audience, and how the work could fit the cellular, genetic, or gross anatomy sections. Check existing pages and open proposals first where possible.

For code or content, provide:

- A concise explanation of what it does and what changed.
- Run instructions, inputs, expected outputs, and known limitations.
- Required packages and versions, with official installation links where available. Do not add dependencies without documenting them.
- Sources for scientific claims, datasets, images, and adapted code. Identify the license or permission for each third-party asset.
- A contributor ID or public handle for attribution. Multiple contributors are welcome; list each contributor and their role.

Do not submit secrets, credentials, private personal information, or data about people without a clear legal basis and consent. Avoid collecting personal information in contributed code. Use synthetic or properly licensed public data when possible.

## Code expectations

- Keep changes focused and follow the existing Django project structure.
- Explain biological assumptions and distinguish a simplified model from experimentally validated results.
- Make simulations reproducible where practical by documenting parameters, inputs, and random seeds.
- Keep user-facing text and instructions clear, and make reasonable efforts to support accessible pages.
- Do not claim that a model is clinically useful or scientifically validated unless evidence supports that claim.

## Review and submission

1. Open an issue or proposal describing substantial new work before investing in a large change.
2. Make the change in a focused branch and include any required documentation or dependency updates.
3. Run the relevant checks locally. For Django changes, at minimum run `python bio_codes/manage.py check`; for behavior changes, add or update appropriate tests and explain how to exercise the feature.
4. Submit a pull request with a summary, verification steps and results, sources, dependencies, limitations, and contributor attribution. Link the related proposal when applicable.
5. Respond to review feedback and update the contribution if needed. Reviewers should focus on correctness, clarity, reproducibility, safety, licensing, and scope.

## Licensing and attribution

This repository currently has no license file, so do not assume that its contents are available for reuse or commercial use. Contributors must have the right to submit their work and should state its applicable license and attribution requirements. Do not copy material with unclear permissions. The project maintainers should add or confirm a repository license before contributions are represented as generally reusable.
