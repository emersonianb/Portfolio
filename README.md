# Emerson Sousa — AI Engineering & Research Portfolio

A responsive portfolio built with Next.js, TypeScript and custom CSS. It includes project pages, research, about/contact pages, theme switching, project search/filtering and an AI portfolio assistant powered by the Groq API.

## Requirements

- Node.js 20+
- npm
- A Groq API key for the AI assistant (the rest of the portfolio works without it)

## Run locally

```bash
npm install
cp .env.example .env.local
```

Add your Groq API key to `.env.local`:

```env
GROQ_API_KEY=your_key_here
GROQ_MODEL=llama-3.3-70b-versatile
```

Then:

```bash
npm run dev
```

Open http://localhost:3000.

## Personalize before publishing

1. Replace `public/profile.jpg` with a professional portrait of Emerson. Keep the filename `profile.jpg`.
2. Open `lib/portfolio.ts` and update:
   - Email address
   - LinkedIn URL
   - Exact degree names, campus and expected graduation date
   - Exchange dates and programme description
   - Project repository and demo URLs
   - Project implementation details and validated results
3. Add your CV as `public/Emerson-Sousa-CV.pdf` and add a download link in the navigation or home page if desired.
4. Verify all project descriptions. In particular, separate completed Scriptia features from proposed features, and do not claim COMUM learning outcomes before evaluation.
5. Replace the generic GitHub links on project detail pages with each project's exact repository.

## AI assistant

The `Ask Emerson` chat sends recent conversation messages to `/api/chat`. The API route adds a server-side knowledge context assembled from `lib/portfolio.ts` and calls Groq.

- The API key is read only on the server from `GROQ_API_KEY`.
- Never add the key to a `NEXT_PUBLIC_` variable or commit `.env.local`.
- The assistant is instructed not to invent missing facts and to distinguish completed, ongoing and planned work.
- Add only verified facts to `lib/portfolio.ts`; that file is the assistant's knowledge base.

For a public deployment, add basic rate limiting and abuse protection to `/api/chat` before sharing the site widely. Consider logging usage without storing visitors' sensitive messages.

## Deploy

Deploy the repository to Vercel, add `GROQ_API_KEY` and `GROQ_MODEL` under Project Settings → Environment Variables, then redeploy.

## Important placeholders

- `public/profile.jpg` is intentionally not included. Add your own photo.
- Contact email and LinkedIn are placeholders.
- Project repository/demo links need to be replaced with the correct URLs.
- The LLM Evaluation Framework is marked as planned, not completed.
