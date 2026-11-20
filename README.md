# Tend

AI built your app. Who keeps it running?

Tend tells you what your app needs this week:

- security holes to patch
- AI models about to be switched off
- runtime versions that no longer get fixes
- packages that have fallen far behind

Each item comes with the prompt to hand your coding agent. The check is free.

## Run it

In your project folder:

```
npx -y github:sree-data/tend
```

Or hand this line to your coding agent:

```
Run `npx -y github:sree-data/tend` in this project and tell me what it says needs fixing this week.
```

It needs Node 18 or newer and nothing else. There is nothing to install or sign up for.

## What you get

This is a real run on the sample app in this repository, shortened:

```
Tend checked tend-sample

Two things need you this week. One more can wait.

This week
  1. lodash has 4 known security holes
     The most serious: Command Injection in lodash. You have 4.17.20. All 4 are fixed in 4.18.0.
     To fix: Update the package lodash from 4.17.20 to 4.18.0 or newer. ...
  2. gpt-image-1-mini is switched off in 11 days
     OpenAI will stop answering requests to this model on 1 December 2026. After that, any part
     of your app that calls it fails. The replacement they recommend is gpt-image-2.6-sunburst
     or gpt-image-2.6-flare.

This month
  3. Node 18 stopped getting security fixes on 30 April 2025
     This is the engine your app runs on. New security holes found in it are no longer repaired.
     The current long-term version is Node 26.
```

Every item comes with a full "To fix" instruction for your coding agent.

## What it reads and what it sends

It reads `package-lock.json`, `package.json` or `requirements.txt` in the folder, and `.nvmrc`, `.node-version`, `.python-version` or `runtime.txt` for the runtime. It looks through your code and settings for the AI models they name. All of that stays on your machine.

It sends package names and versions to public services, and nothing else:

- [OSV.dev](https://osv.dev) for known security holes
- the npm and PyPI registries for the newest versions
- [endoflife.date](https://endoflife.date) for runtime end dates
- [tend.sreeships.com/models.json](https://tend.sreeships.com/models.json) for AI model retirement dates, copied from OpenAI's, Anthropic's and Google's own pages

It changes no files.

## Options

```
npx -y github:sree-data/tend [folder] [--models id,id] [--json]
```

- `folder`: the project to check, if it is not the one you are in
- `--models id,id`: AI models to check as well, if your code does not name them
- `--json`: one JSON object instead of sentences
- `--help`, `--version`

Exit code 0 means nothing needs you this week, 1 means something does, and 2 means the check could not finish. If a lookup fails, Tend says which one and never gives the all-clear.

## Make it a habit

Add this line to your project's `AGENTS.md`, once:

```
At the start of a work session, run `npx -y github:sree-data/tend`. If it lists anything under "This week", tell me before doing anything else.
```

## No Node?

Your agent can do the same check by hand. Give it this line:

```
Read https://tend.sreeships.com/agent.md and follow it for this project.
```

## The page

[tend.sreeships.com](https://tend.sreeships.com) runs the same check in your browser: paste a file, nothing to install. It can also send you the result every Monday.

## What it does not check

Your own code, your hosting, your database and the services you pay for. Tend reads public lists of known problems, so it can miss anything nobody has reported yet.

Made by [Sree](https://sreeships.com).
