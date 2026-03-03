# Joja Labs

Portfolio site for Joja Labs, an independent product studio by Joon Jang.

Built with Next.js (App Router), React, and TypeScript.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run start  # Run production server
npm run lint   # Run ESLint
```

## Deploy to Vercel

Recommended flow: GitHub first, then Vercel.

1. Push this project to GitHub:

```bash
git add .
git commit -m "Update portfolio"
git push -u origin main
```

2. In Vercel, import the GitHub repository and deploy.

3. If this app is inside a parent repo/folder structure, set Vercel Root Directory to `jojalabs`.

## Direct CLI Deploy (Optional)

```bash
npx vercel
npx vercel --prod
```
