-- Ejecuta esto en Supabase → SQL Editor → New query → Run

create table if not exists leads (
  id          uuid primary key,
  name        text not null,
  company     text not null,
  email       text not null,
  phone       text,
  country     text not null,
  service     text not null,
  status      text not null default 'prospecto',
  value       numeric,
  notes       text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Permite acceso público (la app usa anon key)
alter table leads enable row level security;

create policy "allow all" on leads for all using (true) with check (true);
