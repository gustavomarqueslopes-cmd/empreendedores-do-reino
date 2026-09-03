import { desc, sql } from 'drizzle-orm';
import { getDb } from '@/db';
import { entrepreneurs } from '@/db/schema';
import { ensureDatabase } from '@/db/setup';

const GITHUB_PAGES_ORIGIN = 'https://gustavomarqueslopes-cmd.github.io';

function corsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get('origin');
  return origin === GITHUB_PAGES_ORIGIN
    ? { 'Access-Control-Allow-Origin': origin, Vary: 'Origin' }
    : {};
}

export async function OPTIONS(request: Request) {
  return new Response(null, {
    status: 204,
    headers: {
      ...corsHeaders(request),
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Max-Age': '86400',
    },
  });
}

export async function GET(request: Request) {
  await ensureDatabase();
  const db = getDb();
  const [total] = await db
    .select({ count: sql<number>`count(*)` })
    .from(entrepreneurs);
  const byState = await db
    .select({ name: entrepreneurs.state, value: sql<number>`count(*)` })
    .from(entrepreneurs)
    .groupBy(entrepreneurs.state)
    .orderBy(desc(sql`count(*)`))
    .limit(8);
  const bySegment = await db
    .select({ name: entrepreneurs.segment, value: sql<number>`count(*)` })
    .from(entrepreneurs)
    .groupBy(entrepreneurs.segment)
    .orderBy(desc(sql`count(*)`))
    .limit(8);
  return Response.json(
    { total: total?.count ?? 0, byState, bySegment },
    { headers: corsHeaders(request) },
  );
}

export async function POST(request: Request) {
  await ensureDatabase();
  const data = (await request.json()) as Record<string, string>;
  const required = [
    'name',
    'email',
    'phone',
    'city',
    'state',
    'company',
    'role',
    'segment',
    'companySize',
    'employeeCount',
    'yearsInBusiness',
    'businessModel',
    'challenge',
    'aiMaturity',
    'serves',
    'humanProblem',
    'seeks',
    'offers',
  ];
  if (required.some((key) => !data[key]?.trim()))
    return Response.json(
      { error: 'Preencha todos os campos obrigatórios.' },
      { status: 400, headers: corsHeaders(request) },
    );
  try {
    await getDb()
      .insert(entrepreneurs)
      .values({
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        phone: data.phone.trim(),
        city: data.city.trim(),
        state: data.state,
        company: data.company.trim(),
        role: data.role.trim(),
        segment: data.segment,
        companySize: data.companySize,
        employeeCount: data.employeeCount.trim(),
        yearsInBusiness: data.yearsInBusiness,
        businessModel: data.businessModel,
        challenge: data.challenge,
        aiMaturity: data.aiMaturity,
        serves: data.serves.trim(),
        humanProblem: data.humanProblem.trim(),
        seeks: data.seeks,
        offers: data.offers.trim(),
        website: data.website?.trim() || null,
        createdAt: new Date().toISOString(),
      });
    return Response.json(
      { ok: true },
      { status: 201, headers: corsHeaders(request) },
    );
  } catch (error) {
    if (String(error).toLowerCase().includes('unique'))
      return Response.json(
        { error: 'Este e-mail já faz parte da rede.' },
        { status: 409, headers: corsHeaders(request) },
      );
    return Response.json(
      { error: 'Não foi possível concluir o cadastro.' },
      { status: 500, headers: corsHeaders(request) },
    );
  }
}
