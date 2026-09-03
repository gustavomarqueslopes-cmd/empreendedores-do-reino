import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Headphones,
  Megaphone,
  Radio,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const capabilities = [
  'Raciocínio persistente',
  'Uso programático de ferramentas',
  'Coordenação multiagente',
  'Mais eficiência em tarefas complexas',
];

const applications = [
  {
    icon: BriefcaseBusiness,
    area: 'Vendas',
    title: 'Encontrar a próxima oportunidade',
    text: 'Priorizar contas, preparar reuniões, identificar riscos no funil e criar o próximo contato com muito mais contexto.',
    signal: 'Lead → análise → próxima ação',
  },
  {
    icon: Headphones,
    area: 'Atendimento',
    title: 'Responder sem perder o histórico',
    text: 'Resumir conversas, sugerir respostas, classificar solicitações e encaminhar cada caso para quem pode resolver.',
    signal: 'Mensagem → contexto → resolução',
  },
  {
    icon: Megaphone,
    area: 'Marketing',
    title: 'Transformar sinais em campanhas',
    text: 'Pesquisar públicos, criar variações, adaptar mensagens e interpretar o que os resultados estão dizendo.',
    signal: 'Mercado → conteúdo → aprendizado',
  },
  {
    icon: BarChart3,
    area: 'Financeiro',
    title: 'Enxergar antes de decidir',
    text: 'Consolidar planilhas, projetar fluxo de caixa, explicar desvios entre orçamento e realizado e sinalizar anomalias.',
    signal: 'Dados → cenário → decisão',
  },
  {
    icon: Workflow,
    area: 'Operações',
    title: 'Fazer o trabalho atravessar sistemas',
    text: 'Consultar documentos, atualizar registros, acionar etapas de um processo e monitorar as exceções que exigem atenção.',
    signal: 'Pedido → execução → controle',
  },
  {
    icon: BrainCircuit,
    area: 'Gestão',
    title: 'Converter informação em direção',
    text: 'Transformar reuniões em responsáveis e prazos, consolidar indicadores e preparar análises para decisões estratégicas.',
    signal: 'Reunião → plano → acompanhamento',
  },
] as const;

export function OpenAiBusinessRadar() {
  return (
    <section id="openai-negocios" className="relative overflow-hidden bg-[#f5f2ea] px-5 py-24 text-[#102e35] sm:px-10 lg:px-16 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#95b5b6,transparent)]" />
      <div className="relative mx-auto max-w-[1312px]">
        <div className="overflow-hidden rounded-[2.25rem] bg-[#081b28] text-white shadow-[0_40px_110px_rgba(14,48,57,.22)]">
          <div className="relative grid lg:grid-cols-[.9fr_1.1fr]">
            <div className="relative overflow-hidden border-b border-white/10 p-8 sm:p-12 lg:border-b-0 lg:border-r lg:p-14">
              <div className="absolute -left-24 -top-28 size-[420px] rounded-full bg-[#42d6ff]/10 blur-3xl" />
              <div className="absolute -bottom-28 right-[-80px] size-[360px] rounded-full bg-[#f5b85b]/10 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(113,224,244,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(113,224,244,.07)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(135deg,black,transparent_72%)]" />

              <div className="relative">
                <div className="inline-flex items-center gap-3 rounded-full border border-[#64ddf2]/20 bg-[#64ddf2]/8 px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#8cecff]">
                  <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-[#62def4] opacity-70" /><span className="relative inline-flex size-2 rounded-full bg-[#62def4]" /></span>
                  Atualização OpenAI
                </div>

                <p className="mt-10 text-sm font-semibold uppercase tracking-[.22em] text-white/38">Nova família de modelos</p>
                <div className="mt-3 flex items-end gap-3">
                  <strong className="text-[clamp(4.6rem,9vw,8.6rem)] font-medium leading-none tracking-[-.085em]">GPT‑5.6</strong>
                  <Radio className="mb-4 size-5 text-[#f5b85b]" />
                </div>
                <h2 className="mt-8 max-w-xl text-3xl font-medium leading-[1.08] tracking-[-.04em] sm:text-4xl">A IA que apenas responde está dando lugar à IA que trabalha.</h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/62">A OpenAI apresenta o GPT‑5.6 como uma nova referência de qualidade e eficiência para fluxos complexos de produção — com avanços em ferramentas, coordenação de agentes e compreensão de intenção.</p>

                <a href="https://developers.openai.com/api/docs/guides/latest-model" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-[#8cecff] transition hover:text-white">
                  Ver documentação oficial <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>

            <div className="relative flex flex-col justify-center bg-[#0b2531] p-8 sm:p-12 lg:p-14">
              <div className="absolute right-[-95px] top-[-95px] size-[340px] rounded-full border border-white/8">
                <div className="absolute inset-10 rounded-full border border-dashed border-[#62def4]/20 animate-[spin_28s_linear_infinite]">
                  <span className="absolute left-1/2 top-[-5px] size-2.5 rounded-full bg-[#f5b85b] shadow-[0_0_18px_#f5b85b]" />
                </div>
                <div className="absolute inset-[98px] grid place-items-center rounded-full border border-white/10 bg-white/[.03]"><Bot className="size-12 text-[#75e8fb]/25" /></div>
              </div>

              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-[#f5c47d]"><Sparkles className="size-4" /> O salto que importa para empresas</div>
                <h3 className="mt-6 max-w-2xl text-4xl font-medium leading-[1.02] tracking-[-.045em] sm:text-5xl">Do comando isolado para um fluxo inteiro de trabalho.</h3>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">O modelo pode raciocinar sobre um objetivo, acionar ferramentas e sustentar tarefas de várias etapas. É a base para agentes que trabalham com pessoas — dentro de processos, critérios e limites definidos.</p>

                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {capabilities.map((item, index) => <div key={item} className="flex min-h-16 items-center gap-3 rounded-2xl border border-white/10 bg-white/[.045] px-4 py-3"><span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#62def4]/10 text-xs font-bold text-[#8cecff]">0{index + 1}</span><span className="text-sm font-medium text-white/78">{item}</span></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-[.62fr_1.38fr] lg:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.22em] text-[#966126]">A pergunta para todo empreendedor</span>
            <h2 className="mt-5 text-[clamp(3rem,5.5vw,6rem)] font-medium leading-[.92] tracking-[-.06em]">Você sabe o que a IA pode fazer pelo seu negócio?</h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-2xl text-xl leading-8 text-[#536c70]">A pergunta já não é se existe uma ferramenta. É qual problema real você pode resolver primeiro — com mais velocidade, contexto e capacidade de execução.</p>
            <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-[#6b7d7f]"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#1489a2]" /><p>Os exemplos abaixo representam aplicações que já aparecem em fluxos de trabalho publicados pela OpenAI e em operações de empresas.</p></div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {applications.map(({ icon: Icon, area, title, text, signal }, index) => (
            <article key={area} className="group relative overflow-hidden rounded-[1.75rem] border border-[#183f47]/12 bg-white p-6 shadow-[0_18px_45px_rgba(33,68,72,.06)] transition duration-300 hover:-translate-y-1 hover:border-[#178aa3]/30 hover:shadow-[0_24px_60px_rgba(33,68,72,.11)] sm:p-7">
              <div className="absolute right-0 top-0 size-28 rounded-bl-full bg-[#dcebee]/45 transition group-hover:bg-[#cce9ee]/65" />
              <div className="relative flex items-start justify-between gap-4"><span className="grid size-12 place-items-center rounded-2xl bg-[#0e3942] text-white shadow-lg"><Icon className="size-5" /></span><span className="text-xs font-bold tracking-[.18em] text-[#a77a45]">0{index + 1}</span></div>
              <span className="relative mt-8 block text-[10px] font-bold uppercase tracking-[.2em] text-[#18869e]">{area}</span>
              <h3 className="relative mt-3 text-2xl font-semibold leading-7 tracking-[-.025em] text-[#173b42]">{title}</h3>
              <p className="relative mt-4 text-sm leading-6 text-[#667b7e]">{text}</p>
              <div className="relative mt-7 border-t border-[#dce4e1] pt-4 text-[11px] font-semibold uppercase tracking-[.12em] text-[#718587]">{signal}</div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-[#dfeceb] p-6 sm:flex-row sm:items-center sm:p-8">
          <div><span className="text-xs font-bold uppercase tracking-[.18em] text-[#8f602a]">Seu primeiro caso de uso</span><p className="mt-2 max-w-2xl text-xl font-medium leading-7 text-[#173b42]">Entre na rede e descubra onde a IA pode gerar valor primeiro no seu negócio.</p></div>
          <Button nativeButton={false} render={<a href="#cadastro" aria-label="Mapear uma oportunidade de uso de IA no meu negócio" />} className="h-14 w-full shrink-0 rounded-full bg-[#123b43] px-7 text-base font-bold text-white hover:bg-[#0a2b31] sm:w-fit">Mapear minha oportunidade <ArrowRight /></Button>
        </div>

        <p className="mt-5 text-xs leading-5 text-[#74878a]">Fontes: documentação oficial da família GPT‑5.6 e <a href="https://learn.chatgpt.com/use-cases" target="_blank" rel="noreferrer" className="underline decoration-[#178aa3]/35 underline-offset-2 transition hover:text-[#126d82]">biblioteca de casos de uso da OpenAI</a>. Aplicações dependem dos dados, processos, controles e supervisão de cada organização.</p>
      </div>
    </section>
  );
}
