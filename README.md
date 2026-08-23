# JoyLab-SEO

JoyLab-SEO is a GitHub-ready workspace for SEO research, content production, automation, and repeatable publishing workflows.

## Repository Goals

- Turn SEO ideas into reproducible workflows.
- Keep prompts, source files, code, tests, and documentation together.
- Make ChatGPT/Codex edits easy to review and verify.
- Prefer evidence-based changes over ad-hoc edits.

## Standard Structure

```text
JoyLab-SEO/
├─ README.md
├─ AGENTS.md
├─ .gitignore
├─ docs/
├─ src/
├─ tests/
└─ scripts/
```

## GitHub Save Workflow

When the user says **"깃헙에 저장해줘"** and the target repository is clear, use this workflow:

1. Inspect the target repository and current branch.
2. Create or update the requested files.
3. Include/update README and AGENTS when the project structure or operating rules materially change.
4. Add or update tests when executable logic changes and tests are feasible.
5. Commit with a descriptive message.
6. Re-fetch the saved files and verify the expected content.
7. Report repository, branch, changed files, commit SHA, and verification result.

If the target repository is ambiguous, resolve the destination before writing.

## Verification Standard

A save is considered complete only when:

- GitHub write succeeds.
- The saved file can be fetched again.
- The fetched content matches the intended change.

## Status

Initialized as a GitHub-ready JoyLab repository on 2026-08-23.
