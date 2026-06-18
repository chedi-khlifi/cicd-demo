# CI/CD Demo — React + GitHub Actions + GitHub Pages

A minimal React app demonstrating a real CI/CD pipeline: every `git push` to `main` triggers automated tests, build, and deployment to GitHub Pages.

## Pipeline

```
git push main
    ↓
GitHub Actions
    ↓
npm test + eslint   (test job)
    ↓
npm run build       (deploy job, runs only on main)
    ↓
GitHub Pages        (live URL)
```

## Setup (5 minutes)

### 1. Create the repo

```bash
gh repo create cicd-demo --public --source=. --push
```

Or manually:
```bash
git init
git add .
git commit -m "feat: initial CI/CD demo"
git remote add origin https://github.com/YOUR_USERNAME/cicd-demo.git
git push -u origin main
```

### 2. Enable GitHub Pages

Go to **Settings → Pages → Source** and select:
- Branch: `gh-pages`
- Folder: `/ (root)`

### 3. Update homepage in package.json

Replace `YOUR_USERNAME` with your actual GitHub username:
```json
"homepage": "https://YOUR_USERNAME.github.io/cicd-demo"
```

Commit and push → the pipeline runs automatically.

### 4. Watch it live

Go to **Actions** tab in your repo to see the pipeline running in real time.

Your app will be live at: `https://YOUR_USERNAME.github.io/cicd-demo`

## Local dev

```bash
npm install
npm start       # dev server at localhost:3000
npm test        # run tests
npm run build   # production build
```
