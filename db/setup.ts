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
      employee_count TEXT,
      years_in_business TEXT,
      business_model TEXT NOT NULL,
      challenge TEXT NOT NULL,
      ai_maturity TEXT NOT NULL,
      serves TEXT,
      human_problem TEXT,
      seeks TEXT NOT NULL,
      offers TEXT NOT NULL,
      website TEXT,
      created_at TEXT NOT NULL
    )`),
    env.DB.prepare(
      'CREATE INDEX IF NOT EXISTS idx_entrepreneurs_state ON entrepreneurs(state)',
    ),
    env.DB.prepare(
      'CREATE INDEX IF NOT EXISTS idx_entrepreneurs_segment ON entrepreneurs(segment)',
    ),
    env.DB.prepare(
      'CREATE INDEX IF NOT EXISTS idx_entrepreneurs_created_at ON entrepreneurs(created_at)',
    ),
  ]);

  const tableInfo = await env.DB.prepare(
    'PRAGMA table_info(entrepreneurs)',
  ).all<{ name: string }>();
  const columns = new Set(tableInfo.results.map((column) => column.name));
  const additions = [];

  if (!columns.has('employee_count')) {
    additions.push(
      env.DB.prepare(
        'ALTER TABLE entrepreneurs ADD COLUMN employee_count TEXT',
      ),
    );
  }
  if (!columns.has('years_in_business')) {
    additions.push(
      env.DB.prepare(
        'ALTER TABLE entrepreneurs ADD COLUMN years_in_business TEXT',
      ),
    );
  }
  if (!columns.has('serves')) {
    additions.push(
      env.DB.prepare('ALTER TABLE entrepreneurs ADD COLUMN serves TEXT'),
    );
  }
  if (!columns.has('human_problem')) {
    additions.push(
      env.DB.prepare('ALTER TABLE entrepreneurs ADD COLUMN human_problem TEXT'),
    );
  }
  if (additions.length) await env.DB.batch(additions);

  ready = true;
}
