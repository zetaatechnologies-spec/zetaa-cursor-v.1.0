# ZETAA Technologies — Booking Platform

Full-stack service booking platform for security & smart automation (CCTV, smart locks, biometric, access control, home automation). Built with Next.js 15, Supabase, Tailwind CSS, and Razorpay.

## Features

- **Public site**: Service catalog, detail pages, booking flow, contact, WhatsApp integration
- **Auth**: Email/password via Supabase with role-based access (customer, provider, admin)
- **Dashboards**: Separate portals for customers, providers, and admins
- **Payments**: Razorpay order creation and signature verification
- **Reviews & notifications**: Customer reviews with admin moderation

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [Supabase](https://supabase.com/) (Auth, PostgreSQL, Storage)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/) + React Hook Form
- [Razorpay](https://razorpay.com/)
- [Zustand](https://zustand-demo.pmnd.rs/) (booking draft state)

## Prerequisites

- Node.js 18+
- Supabase project
- Razorpay account (test keys for development)

## Setup

### 1. Clone and install

```bash
cd "0.1. ZETAA2 CURSUR"
npm install
```

### 2. Environment variables

```bash
cp .env.example .env.local
```

Fill in your Supabase and Razorpay credentials in `.env.local`.

### 3. Database

1. Open your [Supabase](https://supabase.com/dashboard) project
2. Go to **SQL Editor**
3. Run the contents of `supabase/schema.sql`
4. Enable Email auth under **Authentication → Providers**

### 4. Storage

The schema creates a `bookings` storage bucket. Verify it exists under **Storage** in Supabase.

### 5. Create an admin user

After registering a user via `/register`:

```sql
UPDATE users SET role = 'admin' WHERE email = 'your@email.com';
```

### 6. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description          |
|----------------|----------------------|
| `npm run dev`  | Start dev server     |
| `npm run build`| Production build     |
| `npm run start`| Start production     |
| `npm run lint` | Run ESLint           |

## Project Structure

```
app/
  (public)/          # Marketing pages
  (dashboard)/       # Role-based dashboards
  api/               # REST API routes
components/          # UI components
hooks/               # Client hooks
lib/                 # Supabase, auth, validations
services/            # Static service content
supabase/schema.sql  # Database schema
```

## Deployment

Deploy to [Vercel](https://vercel.com) and set all environment variables from `.env.example`.

## License

Private — ZETAA Technologies
