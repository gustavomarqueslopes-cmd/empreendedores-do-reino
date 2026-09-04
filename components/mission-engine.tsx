'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Building2,
  Church,
  GraduationCap,
  Landmark,
  Lightbulb,
  Network,
  Rocket,
  Target,
  Users2,
} from 'lucide-react';

const method = [
  {
    number: '01',
    name: 'Identidade',
    question: 'Quem sou e qual é a minha missão?',
    answer:
      'Clareza sobre quem você foi chamado para servir e por que esse trabalho importa.',
    color: '#f0bd73',
    icon: Target,
  },
  {
    number: '02',
    name: 'Insight',
    question: 'Que problema compreendo profundamente?',
    answer:
      'Escuta, contexto e entendimento do problema humano antes de qualquer solução.',
    color: '#63d9e6',
    icon: Lightbulb,
  },
  {
    number: '03',
    name: 'Inovação',
    question: 'Que solução melhor pode existir?',
    answer:
      'Tecnologia e criatividade aplicadas para fazer o que antes parecia impossível.',
    color: '#a8a1ff',
    icon: Rocket,
  },
  {
    number: '04',
    name: 'Implementação',
    question: 'Como vamos executar com excelência?',
    answer:
      'Método, equipe, disciplina e um experimento real que saia do campo das ideias.',
    color: '#74d5a6',
    icon: Building2,
  },
  {
    number: '05',
    name: 'Impacto',
    question: 'Que transformação mensurável ocorre?',
    answer:
      'Resultados que alcançam pessoas, fortalecem negócios e transformam comunidades.',
    color: '#f0bd73',
    icon: Users2,
  },
] as const;

const ecosystem = [
  { name: 'Empreendedores', icon: Users2 },
  { name: 'Universidades', icon: GraduationCap },
  { name: 'Igrejas', icon: Church },
  { name: 'Investidores', icon: Landmark },
  { name: 'Tecnologia', icon: Lightbulb },
  { name: 'Governo', icon: Building2 },
  { name: 'Comunidades', icon: Network },
  { name: 'Mentores', icon: Target },
] as const;

export function MissionEngine() {
  const [view, setView] = useState<'method' | 'ecosystem'>('method');
  const [active, setActive] = useState(0);
  const item = method[active];
  const ActiveIcon = item.icon;

  return (
    <section
      id="metodo"
      className="overflow-hidden bg-[#0e2b3a] px-5 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1312px]">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.22em] text-[#efbd78]">
              A arquitetura do movimento
            </span>
            <h2 className="mt-5 max-w-4xl text-[clamp(3.1rem,6vw,6.6rem)] font-medium leading-[.9] tracking-[-.065em]">
              Propósito é a fundação. Impacto é o destino.
            </h2>
          </div>
          <div>
            <p className="text-xl leading-8 text-white/65">
              Inovação, tecnologia e inteligência artificial ampliam a
              transformação — sempre a serviço das pessoas, da missão e do
              problema humano que precisa ser resolvido.
            </p>
            <div className="mt-7 inline-flex rounded-full border border-white/12 bg-white/[.04] p-1">
              <button
                onClick={() => setView('method')}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${view === 'method' ? 'bg-white text-[#0e2b3a]' : 'text-white/50 hover:text-white'}`}
              >
                Método 5I
              </button>
              <button
                onClick={() => setView('ecosystem')}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${view === 'ecosystem' ? 'bg-white text-[#0e2b3a]' : 'text-white/50 hover:text-white'}`}
              >
                Ecossistema
              </button>
            </div>
          </div>
        </div>

        {view === 'method' ? (
          <div className="mt-14 grid min-h-[610px] animate-in overflow-hidden rounded-[2.25rem] border border-white/12 bg-[#0a2230] fade-in duration-500 lg:grid-cols-[.46fr_.54fr]">
            <div className="relative grid min-h-[430px] place-items-center overflow-hidden border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
              <div className="absolute size-[370px] rounded-full border border-white/8 sm:size-[470px]" />
              <div className="absolute size-[270px] animate-[spin_35s_linear_infinite] rounded-full border border-dashed border-white/10 sm:size-[350px]" />
              <div className="absolute size-[170px] rounded-full bg-[radial-gradient(circle,rgba(99,217,230,.24),rgba(99,217,230,.03)_55%,transparent_70%)] blur-sm sm:size-[230px]" />
              <div
                key={item.name}
                className="relative z-10 animate-in text-center fade-in zoom-in-95 duration-500"
              >
                <span
                  className="mx-auto grid size-20 place-items-center rounded-full border border-white/15 bg-white/[.06]"
                  style={{ boxShadow: `0 0 60px ${item.color}2b` }}
                >
                  <ActiveIcon
                    className="size-9"
                    style={{ color: item.color }}
                  />
                </span>
                <strong className="mt-6 block text-4xl tracking-[-.04em]">
                  {item.name}
                </strong>
                <span className="mt-2 block text-xs uppercase tracking-[.24em] text-white/35">
                  Passo {item.number}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex justify-center gap-2">
                {method.map((step, index) => (
                  <button
                    key={step.name}
                    onClick={() => setActive(index)}
                    aria-label={`Abrir ${step.name}`}
                    className={`h-1.5 rounded-full transition-all ${active === index ? 'w-14' : 'w-7 bg-white/15 hover:bg-white/30'}`}
                    style={
                      active === index
                        ? { backgroundColor: step.color }
                        : undefined
                    }
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col p-7 sm:p-10 lg:p-12">
              <div className="text-xs font-bold uppercase tracking-[.2em] text-white/35">
                Modelo de Impacto 5I · MissioPreneur
              </div>
              <div className="mt-8 divide-y divide-white/10">
                {method.map((step, index) => {
                  const Icon = step.icon;
                  const selected = active === index;
                  return (
                    <button
                      key={step.name}
                      onClick={() => setActive(index)}
                      className={`group grid w-full grid-cols-[48px_1fr_auto] items-center gap-4 py-5 text-left transition ${selected ? 'text-white' : 'text-white/38 hover:text-white/70'}`}
                    >
                      <span
                        className={`grid size-11 place-items-center rounded-xl border ${selected ? 'border-white/15 bg-white/[.08]' : 'border-white/6'}`}
                      >
                        <Icon
                          className="size-5"
                          style={selected ? { color: step.color } : undefined}
                        />
                      </span>
                      <span>
                        <span className="text-[10px] font-bold tracking-[.2em]">
                          {step.number}
                        </span>
                        <strong className="mt-1 block text-lg">
                          {step.name}
                        </strong>
                      </span>
                      <ArrowRight
                        className={`size-4 transition ${selected ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60'}`}
                      />
                    </button>
                  );
                })}
              </div>
              <div
                key={item.question}
                className="mt-auto animate-in border-l-2 pl-6 fade-in slide-in-from-bottom-3 duration-500"
                style={{ borderColor: item.color }}
              >
                <p className="text-2xl font-medium leading-8">
                  {item.question}
                </p>
                <p className="mt-3 leading-7 text-white/56">{item.answer}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative mt-14 min-h-[610px] animate-in overflow-hidden rounded-[2.25rem] border border-white/12 bg-[#0a2230] p-7 fade-in duration-500 sm:p-12">
            <div className="pointer-events-none absolute inset-0 opacity-35 [background:radial-gradient(circle_at_center,rgba(99,217,230,.24),transparent_38%)]" />
            <div className="relative mx-auto flex max-w-5xl flex-col items-center">
              <p className="max-w-4xl text-center text-3xl font-medium leading-tight tracking-[-.035em] sm:text-5xl">
                Nenhum empreendedor transforma o mundo sozinho. A missão exige
                um ecossistema.
              </p>
              <div className="relative mt-16 grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="absolute left-1/2 top-1/2 z-20 hidden size-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#efbd78]/45 bg-[#102f3d] text-center shadow-[0_0_80px_rgba(239,189,120,.2)] lg:grid">
                  <div>
                    <Network className="mx-auto size-7 text-[#efbd78]" />
                    <strong className="mt-2 block">MISSÃO</strong>
                  </div>
                </div>
                {ecosystem.map(({ name, icon: Icon }, index) => (
                  <div
                    key={name}
                    className={`relative z-10 flex min-h-32 flex-col justify-between rounded-2xl border border-white/10 bg-white/[.045] p-5 transition hover:-translate-y-1 hover:border-[#63d9e6]/35 hover:bg-white/[.075] ${index === 3 || index === 4 ? 'lg:col-start-auto' : ''}`}
                  >
                    <Icon className="size-5 text-[#63d9e6]" />
                    <span className="mt-8 font-medium">{name}</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-center text-sm leading-6 text-white/42">
                Mercados e parceiros globais completam a rede, conectando
                conhecimento, capital, tecnologia e capacidade de execução.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
