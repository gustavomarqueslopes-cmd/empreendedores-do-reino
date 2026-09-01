import { desc, sql } from 'drizzle-orm';
import { getDb } from '@/db';
import { entrepreneurs } from '@/db/schema';
import { ensureDatabase } from '@/db/setup';

export async function GET() {
  await ensureDatabase();
  const db = getDb();
  const [total] = await db.select({ count: sql<number>`count(*)` }).from(entrepreneurs);
  const byState = await db.select({ name: entrepreneurs.state, value: sql<number>`count(*)` }).from(entrepreneurs).groupBy(entrepreneurs.state).orderBy(desc(sql`count(*)`)).limit(8);
  const bySegment = await db.select({ name: entrepreneurs.segment, value: sql<number>`count(*)` }).from(entrepreneurs).groupBy(entrepreneurs.segment).orderBy(desc(sql`count(*)`)).limit(8);
  return Response.json({ total: total?.count ?? 0, byState, bySegment });
}

export async function POST(request: Request) {
  await ensureDatabase();
  const data = await request.json() as Record<string, string>;
  const required = ['name','email','phone','city','state','company','role','segment','companySize','businessModel','challenge','aiMaturity','seeks','offers'];
  if (required.some((key) => !data[key]?.trim())) return Response.json({ error: 'Preencha todos os campos obrigatórios.' }, { status: 400 });
  try {
    await getDb().insert(entrepreneurs).values({
      name: data.name.trim(), email: data.email.trim().toLowerCase(), phone: data.phone.trim(), city: data.city.trim(), state: data.state,
      company: data.company.trim(), role: data.role.trim(), segment: data.segment, companySize: data.companySize, businessModel: data.businessModel,
      challenge: data.challenge, aiMaturity: data.aiMaturity, seeks: data.seeks, offers: data.offers.trim(), website: data.website?.trim() || null,
      createdAt: new Date().toISOString(),
    });
    return Response.json({ ok: true }, { status: 201 });
  } catch (error) {
    if (String(error).toLowerCase().includes('unique')) return Response.json({ error: 'Este e-mail já faz parte da rede.' }, { status: 409 });
    return Response.json({ error: 'Não foi possível concluir o cadastro.' }, { status: 500 });
  }
}
