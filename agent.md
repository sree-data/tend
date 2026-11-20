# Tend, for coding agents

You are a coding agent working inside a project. Your user wants to know what their app needs to keep running.

## The short way

If the machine has Node 18 or newer, run this in the project folder and report what it prints:

```
npx -y github:sree-data/tend
```

It reads the dependency files, looks through the code for the AI models it names, asks the public services listed below, and prints what needs doing this week. It changes no files and sends only package names and versions. Add `--json` for one JSON object. Exit code 0 means nothing needs your user this week, 1 means something does, 2 means the check could not finish.

## The long way, without Node

Follow these steps yourself. You read the project's own files and ask the public services below. Never send source code anywhere. Send only package names and versions.

### 1. Find what the app is made of

- JavaScript: `package-lock.json` if it exists (exact versions), otherwise `package.json`.
- Python: `requirements.txt`, using the pinned lines.
- The engine: `engines.node` in `package.json`, `.nvmrc`, `.python-version` or `runtime.txt`.
- AI models the app calls: search the code and config for model ids. Step 3 has the list to match them against.

### 2. Known security holes

POST `https://api.osv.dev/v1/querybatch` with

```json
{"queries": [{"package": {"name": "NAME", "ecosystem": "npm"}, "version": "VERSION"}]}
```

Use `"PyPI"` as the ecosystem for Python. For each id that comes back, GET `https://api.osv.dev/v1/vulns/ID` to read the summary, the severity and the version that fixes it. Skip any entry that has a `withdrawn` date.

### 3. AI models being switched off

GET `https://tend.sreeships.com/models.json`. It holds retirement dates copied from each provider's own page, and the date they were last read (`checked`). Match the models you found in step 1 against `models[].id`. If a model is not in the list, say it was not found. Do not guess a date.

### 4. Engine support

GET `https://endoflife.date/api/nodejs.json` or `https://endoflife.date/api/python.json` and find the release line in use. Report it if its end-of-life date has passed or is within 90 days.

### 5. Far behind

For direct dependencies only, GET `https://registry.npmjs.org/NAME/latest` (write the slash in a scoped name as `%2F`) or `https://pypi.org/pypi/NAME/json`. Report a package that is two or more major versions behind.

## How to report

Start with one sentence: how many things need attention this week. Then three groups.

- This week: security holes rated high or critical, models switched off within 30 days or already off, engines past end of life.
- This month: moderate security holes, models switched off within 90 days, engines ending within 90 days.
- Can wait: everything else.

For each item say what it is, why it matters in one line, and the exact change you propose. Ask before you change anything.

## Rules

- If a lookup fails, say which one. Never say the app is fine when a lookup did not finish.
- Do not invent advisories, dates or versions. Report what the services returned.
- If you can schedule yourself, run this again every Monday and report only what changed.

Tend is made by Sree. The page for people is https://tend.sreeships.com/
