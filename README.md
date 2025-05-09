This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Live website

https://streaming-app-fgsw.vercel.app/

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Environment variables

To run locally, create a .env.local file and add:

NEXT_PUBLIC_API_BASE_URL=http://localhost:3000

## Architecture

Routing & Pages: Uses Next.js App Router (app/ directory)

State Management: React Context (PlayerContext)

Manages selected content, playback status, playback progress, and user favorites.

React Context was chosen for its simplicity and suitability for small-to-medium projects.

Video Streaming: ReactPlayer

Data Layer: Mock API served via /api/content

Types: All models defined in types.ts for type safety.

## Libraries used

| Library              | Purpose                               |
|----------------------|---------------------------------------|
| Next.js              | App framework with API support        |
| ReactPlayer          | Embedded video playback               |
| Framer Motion        | Declarative animations                |
| Tailwind CSS         | Styling and layout                    |
| React Icons          | Iconography                           |
| React Testing Library| Unit tests                            |

## Design

Fully responsive layout

Utilizes CSS Flexbox extensively for flexible layouts

Clean and accessible UI with TailwindCSS

Hover animations and transitions with Framer Motion

"Add to favorites" icon on each movie card

Navbar with links for Homepage and user's favorites page

Playback history saved in global state for each streaming item. 

"Play from the beginning" button in StreamingDetail component in order to give the user the option to restart the movie.

Heart icon in StreamingDetail component as an indicator that the current item is in user's favorites list.



