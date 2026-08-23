# ChatGPT Codex Connector Write Test

- Repository: `ohbeopseok-ops/JoyLab-SEO`
- Purpose: Verify ChatGPT GitHub connector read/write access.
- Test date: 2026-08-23 (KST)
- Expected result: File is created on the default branch and can be fetched again by ChatGPT.

## JoyLab GitHub Save Standard

When the user says **"깃헙에 저장해줘"**, treat it as the following standard workflow when repository context is clear:

1. Identify the target repository.
2. Create or update the requested project files.
3. Commit the changes with a clear commit message.
4. Re-fetch or otherwise verify the saved files.
5. Report the repository, branch, changed files, and verification result.

If the target repository is ambiguous, confirm the destination before writing.
