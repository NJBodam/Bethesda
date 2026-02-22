# Bethesda House of Grace

Church website with an admin panel for managing content.

## Features

- **Public website** – Hero, About, Service Times, Recent Sermons, Upcoming Events, Contact
- **Admin panel** – Secure login, dashboard, and full CRUD management

## Admin Panel

| Feature | URL |
|---|---|
| Login | `/admin/login` |
| Dashboard | `/admin` |
| Sermons | `/admin/sermons` |
| Events | `/admin/events` |
| Homepage Editor | `/admin/homepage` |

**Default credentials:** username `admin`, password `admin123`

> ⚠️ Change the password hash before deploying to production (see `.env.local.example`).

## Getting Started

```bash
npm install
cp .env.local.example .env.local   # edit with your values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

| Variable | Description |
|---|---|
| `NEXTAUTH_URL` | Full URL of your deployment (e.g. `http://localhost:3000`) |
| `NEXTAUTH_SECRET` | Random secret for JWT signing — use `openssl rand -base64 32` |
| `ADMIN_USERNAME` | Admin login username |
| `ADMIN_PASSWORD_HASH` | bcrypt hash of the admin password — note: escape `$` with `\$` in the file |

Generate a new password hash:
```bash
node -e "const b=require('bcryptjs'); b.hash('yourpassword',10).then(console.log)"
```

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Auth:** NextAuth.js v4 (credentials provider)
- **Data:** JSON files in `src/data/` (replace with a database for production)
