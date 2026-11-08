# Wedding Invitation App

This project is ready to deploy with a free-tier setup:

- Frontend: Vercel
- Backend API: Render
- Database: Supabase

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the app locally:
   ```bash
   npm run dev
   ```
3. The frontend uses the local Vite proxy for `/api/*` while the Express server runs on port 4000.

## Production deployment setup

### 1) Frontend on Vercel

- Import this repository into Vercel.
- Set the build command to:
  ```bash
  npm run build
  ```
- Set the output directory to:
  ```bash
  dist
  ```
- Add environment variable:
  ```bash
  VITE_API_URL=https://your-render-app-name.onrender.com/api/wishes
  ```

### 2) Backend API on Render

- Create a new Web Service on Render using this repo.
- Set the start command to:
  ```bash
  npm run server
  ```
- Add environment variables:
  ```bash
  PORT=4000
  SUPABASE_URL=https://your-project.supabase.co
  SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
  ```

### 3) Supabase free database

Create a Supabase project and run this SQL:

```sql
create table if not exists wishes (
  id uuid primary key,
  name text not null,
  attendance text default 'both',
  marriage_guests integer default 1,
  reception_guests integer default 1,
  message text not null,
  created_at timestamptz default now()
);
```

Then create a policy so the backend can insert and read records:

```sql
alter table wishes enable row level security;

create policy "Allow insert wishes" on wishes
for insert with check (true);

create policy "Allow read wishes" on wishes
for select using (true);
```

## Free-tier notes

This app is designed so that:

- local dev keeps using the local JSON file when Supabase is not configured
- production uses Supabase automatically when the env vars exist
- the frontend remains static on Vercel and connects to the Render API over HTTP

## Environment file example

Use `.env.example` as a template for local setup, but do not commit real secrets.
