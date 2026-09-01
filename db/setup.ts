import { env } from 'cloudflare:workers';

let ready = false;

export async function ensureDatabase() {
  if (ready) return;
  await env.DB.batch([
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS entrepreneurs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      phone TEXT NOT NULL,
      city TEXT NOT NULL,
      state TEXT NOT NULL,
      company TEXT NOT NULL,
      role TEXT NOT NULL,
      segment TEXT NOT NULL,
      company_size TEXT NOT NULL,
      business_model TEXT NOT NULL,
      challenge TEXT NOT NULL,
      ai_maturity TEXT NOT NULL,
      seeks TEXT NOT NULL,
      offers TEXT NOT NULL,
      website TEXT,
      created_at TEXT NOT NULL
    )`),
    env.DB.prepare('CREATE INDEX IF NOT EXISTS idx_entrepreneurs_state ON entrepreneurs(state)'),
    env.DB.prepare('CREATE INDEX IF NOT EXISTS idx_entrepreneurs_segment ON entrepreneurs(segment)'),
    env.DB.prepare('CREATE INDEX IF NOT EXISTS idx_entrepreneurs_created_at ON entrepreneurs(created_at)'),
  ]);
  ready = true;
}
