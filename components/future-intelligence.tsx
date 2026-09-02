'use client';

import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Building2,
  Check,
  ChevronRight,
  Factory,
  Network,
  Radar,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Workflow,
} from 'lucide-react';

const signals = [
  {
    eyebrow: 'Sinal 01 · infraestrutura',
    title: 'Agentes saem do chat e entram no fluxo de trabalho.',
    short: 'Do chat para a execução',
    statement: 'Pesquisar, consultar arquivos, usar sistemas e concluir tarefas em várias etapas já faz parte da arquitetura dos agentes.',
    business: 'A oportunidade não é “ter um chatbot”. É redesenhar um processo inteiro: do pedido à decisão, com contexto e supervisão.',
    sourceLabel: 'OpenAI · ferramentas para agentes',
    source: 'https://openai.com/index/new-tools-for-building-agents/',
    accent: '#63d9e6',
    icon: Bot,
  },
  {
    eyebrow: 'Sinal 02 · organização',
    title: 'O novo time combina pessoas, agentes e critérios claros.',
    short: 'Times humano + agente',
    statement: 'A adoção já aparece em todos os setores, mas as empresas avançadas documentam fluxos, revisões, padrões de qualidade e responsabilidades.',
    business: 'Quem aprender a delegar à IA e revisar com rigor ganha capacidade. Quem apenas “testar ferramentas” continua sem escala.',
    sourceLabel: 'Microsoft · Work Trend Index 2026',
    source: 'https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization',
    accent: '#f2b96d',
    icon: Network,
  },
  {
    eyebrow: 'Sinal 03 · trabalho',
    title: 'As funções começam a mudar antes de desaparecer.',
    short: 'Trabalho redesenhado',
    statement: 'Dados de uso real mostram a IA atuando tanto em automação quanto, com maior frequência no recorte inicial, em colaboração com profissionais.',
    business: 'O valor migra da execução repetitiva para direção, julgamento, relacionamento e conhecimento específico do negócio.',
    sourceLabel: 'Anthropic · Economic Index',
    source: 'https://www.anthropic.com/news/the-anthropic-economic-index',
    accent: '#9da9ff',
    icon: BrainCircuit,
  },
  {
    eyebrow: 'Sinal 04 · vantagem',
    title: 'Conhecimento próprio vira o ativo mais difícil de copiar.',
    short: 'Inteligência proprietária',
    statement: 'Agentes ficam mais úteis quando recebem processos, critérios, histórico e contexto que pertencem à própria organização.',
    business: 'A próxima vantagem não será apenas acesso à IA, mas a capacidade de transformar experiência acumulada em um sistema que aprende.',
    sourceLabel: 'Microsoft · inteligência organizacional',
    source: 'https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization',
    accent: '#79d4a7',
    icon: ShieldCheck,
  },
] as const;

const scenarios = {
  'Serviços': {
    icon: Building2,
    opportunity: 'Um agente acompanha o cliente do primeiro contato ao pós-venda, prepara propostas e sinaliza riscos antes que virem problemas.',
    workflow: ['Entender a demanda', 'Buscar contexto', 'Preparar resposta', 'Humano aprova'],
    firstStep: 'Escolha uma jornada de cliente repetitiva e documente as decisões que hoje dependem da memória da equipe.',
  },
  'Comércio': {
    icon: ShoppingBag,
    opportunity: 'Demanda, estoque, atendimento e campanhas passam a conversar, criando respostas mais rápidas e ofertas com melhor contexto.',
    workflow: ['Ler demanda', 'Cruzar estoque', 'Sugerir ação', 'Medir resultado'],
    firstStep: 'Conecte um objetivo comercial a duas fontes de dados que sua equipe já consulta todos os dias.',
  },
  'Indústria': {
    icon: Factory,
    opportunity: 'Agentes organizam ocorrências, consultam manuais, apoiam manutenção e transformam dados operacionais em decisões acionáveis.',
    workflow: ['Captar ocorrência', 'Consultar padrão', 'Recomendar rota', 'Registrar aprendizado'],
    firstStep: 'Comece por um gargalo com histórico disponível e revisão obrigatória de um responsável técnico.',
  },
  'Ecossistemas': {
    icon: Network,
    opportunity: 'Perfis, necessidades e ofertas são interpretados para revelar conexões que uma busca comum não conseguiria encontrar.',
    workflow: ['Mapear perfis', 'Identificar afinidade', 'Explicar o match', 'Aproximar pessoas'],
    firstStep: 'Defina quais sinais tornam uma conexão realmente valiosa — setor, desafio, região, oferta e momento.',
  },
} as const;

const readiness = [
  'Os processos mais importantes estão documentados?',
  'Os dados necessários estão organizados e acessíveis?',
  'Existe um problema de negócio claramente priorizado?',
  'Alguém é responsável por revisar qualidade e risco?',
];

type Sector = keyof typeof scenarios;

export function FutureIntelligence() {
  const [activeSignal, setActiveSignal] = useState(0);
  const [sector, setSector] = useState<Sector>('Serviços');
  const [answers, setAnswers] = useState<number[]>([0, 0, 0, 0]);
  const signal = signals[activeSignal];
  const scenario = scenarios[sector];
  const SectorIcon = scenario.icon;
  const SignalIcon = signal.icon;

  const score = useMemo(() => Math.round((answers.reduce((sum, answer) => sum + answer, 0) / 8) * 100), [answers]);
  const verdict = score < 25
    ? { level: 'Fundação', text: 'Seu melhor primeiro movimento é organizar um processo e um objetivo antes de escolher tecnologia.' }
    : score < 55
      ? { level: 'Pronto para piloto', text: 'Já existe base para testar um agente em um fluxo pequeno, mensurável e supervisionado.' }
      : score < 80
        ? { level: 'Escala com método', text: 'Sua empresa pode conectar novos fluxos, desde que formalize avaliação, segurança e responsáveis.' }
        : { level: 'Operação agente-first', text: 'A base está madura para redesenhar jornadas inteiras e transformar aprendizado em vantagem proprietária.' };

  function updateAnswer(question: number, value: number) {
    setAnswers(current => current.map((answer, index) => index === question ? value : answer));
  }

  return (
    <section id="radar-ia" className="relative overflow-hidden bg-[#eaf1ef] px-5 py-24 text-[#102e35] sm:px-10 lg:px-16 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(20,63,70,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(20,63,70,.045)_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="relative mx-auto max-w-[1312px]">
        <div className="grid gap-8 border-b border-[#b8c9c5] pb-12 lg:grid-cols-[.55fr_1.45fr] lg:items-end">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-[#8d5c26]"><Radar className="size-4" /> Radar da nova economia</div>
          <div>
            <h2 className="max-w-5xl text-[clamp(3.2rem,6.7vw,7.2rem)] font-medium leading-[.88] tracking-[-.07em]">O mercado não está esperando.</h2>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-[#4f686c]">Explore os sinais que estão redesenhando empresas agora — e veja onde o seu negócio pode entrar nessa transformação.</p>
          </div>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-[#234e55]/15 bg-[#102c3c] text-white shadow-[0_35px_90px_rgba(24,62,66,.18)] lg:grid-cols-[.38fr_.62fr]">
          <div className="border-b border-white/10 bg-[#0c2533] p-4 lg:border-b-0 lg:border-r lg:p-6">
            <div className="mb-5 flex items-center justify-between px-2 text-[10px] font-bold uppercase tracking-[.2em] text-white/35"><span>Sinais monitorados</span><span>04</span></div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {signals.map((item, index) => {
                const Icon = item.icon;
                const selected = index === activeSignal;
                return <button key={item.short} onClick={() => setActiveSignal(index)} className={`group flex min-h-20 items-center gap-4 rounded-2xl border px-4 text-left transition duration-300 ${selected ? 'border-white/16 bg-white/[.1] shadow-[inset_3px_0_0_var(--signal)]' : 'border-transparent text-white/48 hover:border-white/8 hover:bg-white/[.04] hover:text-white/80'}`} style={{ '--signal': item.accent } as React.CSSProperties}>
                  <span className={`grid size-10 shrink-0 place-items-center rounded-xl transition ${selected ? 'bg-white/10' : 'bg-white/[.04]'}`}><Icon className="size-5" style={{ color: selected ? item.accent : 'currentColor' }} /></span>
                  <span className="flex-1"><span className="block text-[10px] tracking-[.18em] text-white/30">0{index + 1}</span><strong className="mt-1 block text-sm font-medium leading-5">{item.short}</strong></span>
                  <ChevronRight className={`size-4 transition ${selected ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60'}`} />
                </button>;
              })}
            </div>
          </div>

          <div className="relative min-h-[570px] overflow-hidden p-7 sm:p-10 lg:p-12">
            <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_78%_20%,var(--signal),transparent_26%)]" style={{ '--signal': signal.accent } as React.CSSProperties} />
            <div className="absolute right-[-70px] top-[-80px] size-[330px] rounded-full border border-white/8">
              <div className="absolute inset-10 rounded-full border border-dashed border-white/10 animate-[spin_24s_linear_infinite]">
                <span className="absolute left-1/2 top-[-5px] size-2.5 rounded-full" style={{ backgroundColor: signal.accent, boxShadow: `0 0 20px ${signal.accent}` }} />
              </div>
              <div className="absolute inset-[92px] grid place-items-center rounded-full border border-white/10 bg-white/[.035]"><SignalIcon className="size-12 text-white/20" /></div>
            </div>
            <div key={signal.title} className="relative flex h-full animate-in flex-col fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em]" style={{ color: signal.accent }}><span className="size-2 animate-pulse rounded-full" style={{ backgroundColor: signal.accent }} />{signal.eyebrow}</div>
              <h3 className="mt-9 max-w-3xl text-[clamp(2.4rem,4.7vw,5.1rem)] font-medium leading-[.94] tracking-[-.055em]">{signal.title}</h3>
              <div className="mt-auto grid gap-7 pt-14 md:grid-cols-2">
                <div><span className="text-[10px] font-bold uppercase tracking-[.19em] text-white/35">O que já mudou</span><p className="mt-3 text-base leading-7 text-white/72">{signal.statement}</p></div>
                <div className="border-l border-white/12 pl-6"><span className="text-[10px] font-bold uppercase tracking-[.19em] text-white/35">O que isso significa para você</span><p className="mt-3 text-base leading-7 text-white/88">{signal.business}</p></div>
              </div>
              <a href={signal.source} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 text-xs text-white/38 transition hover:text-white">Ver fonte primária · {signal.sourceLabel}<ArrowUpRight className="size-3" /></a>
            </div>
          </div>
        </div>

        <div className="mt-28 grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-10">
            <span className="text-xs font-bold uppercase tracking-[.22em] text-[#8d5c26]">Simulador de oportunidade</span>
            <h3 className="mt-5 text-4xl font-medium leading-[1.02] tracking-[-.045em] sm:text-6xl">Como essa virada pode aparecer no seu setor?</h3>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#607579]">Escolha o contexto. A experiência reorganiza um cenário possível e mostra um primeiro passo realista.</p>
            <p className="mt-5 text-xs leading-5 text-[#74878a]">Cenários estratégicos, não previsões ou garantia de resultado.</p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(scenarios) as Sector[]).map(item => {
                const Icon = scenarios[item].icon;
                return <button key={item} onClick={() => setSector(item)} className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition ${sector === item ? 'border-[#153e46] bg-[#153e46] text-white shadow-lg' : 'border-[#b8c9c5] bg-white/60 text-[#526a6e] hover:border-[#153e46] hover:text-[#153e46]'}`}><Icon className="size-4" />{item}</button>;
              })}
            </div>

            <div key={sector} className="mt-5 animate-in overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_70px_rgba(27,67,70,.1)] fade-in slide-in-from-bottom-3 duration-500">
              <div className="relative min-h-[310px] overflow-hidden bg-[#c6d9d4] p-7 sm:p-10">
                <img src="/ai-business-photo.png" alt="Empresários analisando oportunidades de inteligência artificial" className="absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#c7d9d4_0%,rgba(199,217,212,.92)_48%,rgba(199,217,212,.35)_100%)]" />
                <div className="relative max-w-2xl">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#123b43] text-white"><SectorIcon /></span>
                  <p className="mt-12 text-2xl font-medium leading-9 tracking-[-.02em] text-[#143a41] sm:text-3xl sm:leading-10">{scenario.opportunity}</p>
                </div>
              </div>
              <div className="p-7 sm:p-10">
                <span className="text-[10px] font-bold uppercase tracking-[.19em] text-[#8d5c26]">Fluxo possível</span>
                <div className="mt-5 grid gap-2 md:grid-cols-4">
                  {scenario.workflow.map((step, index) => <div key={step} className="relative flex items-center gap-3 rounded-xl border border-[#dde5e2] bg-[#f7f8f5] p-4 md:block">
                    <span className="text-xs font-bold text-[#9b6a32]">0{index + 1}</span><span className="text-sm font-medium text-[#24474d] md:mt-8 md:block">{step}</span>
                    {index < 3 && <ChevronRight className="absolute -right-3 top-1/2 z-10 hidden size-5 -translate-y-1/2 rounded-full bg-white text-[#85a19d] md:block" />}
                  </div>)}
                </div>
                <div className="mt-7 flex items-start gap-3 rounded-2xl bg-[#edf3f0] p-5"><Sparkles className="mt-0.5 size-5 shrink-0 text-[#9b6a32]" /><div><strong className="text-sm">Primeiro movimento recomendado</strong><p className="mt-1 text-sm leading-6 text-[#5e7376]">{scenario.firstStep}</p></div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-28 overflow-hidden rounded-[2.25rem] bg-[#123b43] text-white shadow-[0_35px_90px_rgba(24,62,66,.2)]">
          <div className="grid lg:grid-cols-[.82fr_1.18fr]">
            <div className="relative overflow-hidden border-b border-white/10 p-8 sm:p-12 lg:border-b-0 lg:border-r">
              <div className="absolute -bottom-28 -left-28 size-80 rounded-full bg-[#efb667]/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-[#efc185]"><Workflow className="size-4" /> Diagnóstico interativo</div>
                <h3 className="mt-6 text-4xl font-medium leading-[1.02] tracking-[-.045em] sm:text-5xl">Sua empresa está pronta para trabalhar com agentes?</h3>
                <div className="mt-12 flex items-end gap-3"><span className="text-7xl font-medium tracking-[-.07em] sm:text-8xl">{score}</span><span className="pb-3 text-xl text-white/35">/100</span></div>
                <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-[linear-gradient(90deg,#63d9e6,#efb667)] transition-all duration-700" style={{ width: `${score}%` }} /></div>
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[.055] p-5"><span className="text-xs font-bold uppercase tracking-[.18em] text-[#efc185]">{verdict.level}</span><p className="mt-3 leading-7 text-white/72">{verdict.text}</p></div>
              </div>
            </div>
            <div className="bg-[#0e3037] p-6 sm:p-10 lg:p-12">
              <div className="space-y-7">
                {readiness.map((question, questionIndex) => <div key={question}>
                  <div className="flex gap-3"><span className="pt-0.5 text-xs font-bold text-[#efc185]">0{questionIndex + 1}</span><p className="text-base font-medium leading-6">{question}</p></div>
                  <div className="mt-3 grid grid-cols-3 gap-2 pl-7">
                    {['Ainda não', 'Em parte', 'Sim'].map((label, value) => <button key={label} onClick={() => updateAnswer(questionIndex, value)} className={`rounded-xl border px-2 py-2.5 text-xs transition ${answers[questionIndex] === value ? 'border-[#efb667] bg-[#efb667] font-semibold text-[#162a2d]' : 'border-white/10 bg-white/[.035] text-white/52 hover:border-white/25 hover:text-white'}`}>{answers[questionIndex] === value && <Check className="mr-1 inline size-3" />}{label}</button>)}
                  </div>
                </div>)}
              </div>
              <a href="#cadastro" className="mt-9 flex h-14 items-center justify-between rounded-full bg-white px-6 font-semibold text-[#123b43] transition hover:bg-[#f3e7d5]">Levar meu diagnóstico para a rede <ArrowUpRight className="size-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
