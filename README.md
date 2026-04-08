# Grand Badminton Family

Website for **Grand Badminton Family Incorporated** — built with Next.js 14, TypeScript, and Tailwind CSS.

---

## Local Development

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Adding Gallery Images

1. Place image files (`.jpg`, `.png`, `.webp`) in:
   ```
   /public/images/gallery/
   ```

2. Register each image in `content/gallery.ts`:
   ```ts
   images: [
     {
       src: 'your-image.jpg',
       alt: 'A descriptive alt text for accessibility',
       caption: 'Optional caption shown on hover',
     },
   ]
   ```

Images are displayed in a responsive grid with a lightbox viewer.

---

## Updating Content

All editable content is stored in `/content/`:

| File | What it controls |
|---|---|
| `content/site.ts` | Site name, nav links, contact details |
| `content/home.ts` | Home page hero, features, club highlight |
| `content/about.ts` | About page copy, board members |
| `content/contact.ts` | Contact info, form subjects |
| `content/gallery.ts` | Gallery images list |

Edit these files to update copy, contact details, and team information without touching component code.

---

## Deploying to Netlify

### First deploy

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. Log in to [Netlify](https://netlify.com) and click **Add new site → Import an existing project**.
3. Connect your repository.
4. Netlify auto-detects the build settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Click **Deploy site**.

### Subsequent deploys

Push to your main branch — Netlify deploys automatically.

---

## How Netlify Forms Works

The contact form uses [Netlify Forms](https://docs.netlify.com/forms/setup/) for zero-config form handling.

- During build, Netlify detects the `<form name="contact" data-netlify="true">` attribute and registers the form.
- On submission, the form posts to Netlify's servers directly — no backend or API route required.
- View submissions in the Netlify dashboard under **Forms**.
- You can configure email notifications in **Forms → Settings → Form notifications**.

> **Note:** Netlify Forms only works on Netlify-hosted deployments. In local development, the form will not submit (an error state is shown). Test form submissions after deploying.

---

## Domain

Update the `metadataBase` URL in `app/layout.tsx` with your real domain once it is set up:

```ts
metadataBase: new URL('https://yourdomain.org.nz'),
```
