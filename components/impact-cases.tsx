'use client';

import { useState } from 'react';
import { ArrowRight, Building2, Globe2, HeartHandshake, TrendingUp } from 'lucide-react';

const cases = [
  {
    short: 'Operação global',
    eyebrow: 'Caso 01 · Hope Clinic Worldwide',
    title: 'Da operação no Arizona à expansão internacional em Bali.',
    metric: 'Bali',
    metricLabel: 'nova unidade internacional apoiada em 2024',
    role: 'CEO e COO · Scottsdale, Arizona',
    detail: 'Dr. Dan liderou expansão organizacional e internacional, melhoria de sistemas e desenvolvimento de equipes, contribuindo também para o crescimento de receita.',
    proof: 'Capacidade demonstrada de transformar visão em estrutura, equipe e operação internacional.',
    icon: Building2,
    accent: '#63d9e6',
  },
  {
    short: 'Novos mercados',
    eyebrow: 'Caso 02 · White’s Electronics',
    title: 'Uma ponte comercial construída através da América Latina.',
    metric: '6',
    metricLabel: 'canais de distribuição abertos na América Latina',
    role: 'Diretor e representante de expansão internacional',
    detail: 'Conduziu a abertura de canais, treinou distribuidores e contribuiu para um desempenho recorde em vendas internacionais.',
    proof: 'Experiência prática em encontrar parceiros, preparar redes comerciais e entrar em novos mercados.',
    icon: Globe2,
    accent: '#efb667',
  },
  {
    short: 'Impacto em escala',
    eyebrow: 'Caso 03 · Drug-Free World',
    title: 'Conhecimento transformado em capacidade para comunidades.',
    metric: '2.000+',
    metricLabel: 'educadores, líderes e representantes capacitados',
    role: 'Embaixador Global · campanha “A Verdade sobre as Drogas”',
    detail: 'Participou da implementação da campanha internacional e da formação de agentes comunitários e representantes do setor público em prevenção ao uso de drogas.',
    proof: 'Capacidade de mobilizar pessoas, transferir conhecimento e ampliar impacto por meio de uma rede.',
    icon: HeartHandshake,
    accent: '#79d4a7',
  },
] as const;

export function ImpactCases() {
  const [active, setActive] = useState(0);
  const item = cases[active];
  const Icon = item.icon;

  return (
    <section id="experiencia-comprovada" className="relative overflow-hidden bg-[#eef3f1] px-5 py-24 text-[#12363d] sm:px-10 lg:px-16 lg:py-32">
      <div className="pointer-events-none absolute inset-0 [background:linear-gradient(110deg,transparent_0%,rgba(99,217,230,.07)_42%,transparent_67%)]" />
      <div className="relative mx-auto max-w-[1312px]">
        <div className="grid gap-8 lg:grid-cols-[.58fr_1.42fr] lg:items-end">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.22em] text-[#9a6427]"><TrendingUp className="size-4" /> Experiência comprovada</div>
          <div><h2 className="text-[clamp(3rem,6vw,6.7rem)] font-medium leading-[.9] tracking-[-.065em]">Não é apenas uma visão sobre o futuro. É uma trajetória de execução.</h2><p className="mt-7 max-w-3xl text-xl leading-8 text-[#5c7377]">Três experiências documentadas mostram a capacidade necessária para liderar uma rede que opera, internacionaliza e gera impacto.</p></div>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2.25rem] border border-[#183e45]/12 bg-[#0c2634] text-white shadow-[0_35px_90px_rgba(21,60,65,.18)]">
          <div className="grid lg:grid-cols-[.34fr_.66fr]">
            <div className="border-b border-white/10 p-4 sm:p-6 lg:border-b-0 lg:border-r">
              <div className="mb-5 px-3 text-[10px] font-bold uppercase tracking-[.2em] text-white/32">Selecione uma evidência</div>
              <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
                {cases.map((entry, index) => {
                  const EntryIcon = entry.icon;
                  const selected = active === index;
                  return <button key={entry.short} onClick={() => setActive(index)} className={`group flex min-h-24 items-center gap-4 rounded-2xl border px-4 text-left transition duration-300 ${selected ? 'border-white/15 bg-white/[.09]' : 'border-transparent text-white/42 hover:border-white/8 hover:bg-white/[.035] hover:text-white/75'}`}>
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/[.055]"><EntryIcon className="size-5" style={selected ? { color: entry.accent } : undefined} /></span>
                    <span className="flex-1"><span className="text-[10px] tracking-[.2em] text-white/28">0{index + 1}</span><strong className="mt-1 block text-sm">{entry.short}</strong></span>
                    <ArrowRight className={`size-4 transition ${selected ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60'}`} />
                  </button>;
                })}
              </div>
            </div>

            <div className="relative min-h-[610px] overflow-hidden p-7 sm:p-11 lg:p-14">
              <div className="absolute -right-32 -top-32 size-[480px] rounded-full opacity-20 blur-3xl" style={{ backgroundColor: item.accent }} />
              <div className="absolute bottom-0 right-0 h-1/2 w-2/3 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:38px_38px] [mask-image:linear-gradient(to_top,black,transparent)]" />
              <div key={item.title} className="relative flex h-full animate-in flex-col fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em]" style={{ color: item.accent }}><span className="size-2 rounded-full" style={{ backgroundColor: item.accent, boxShadow: `0 0 18px ${item.accent}` }} />{item.eyebrow}</div>
                <h3 className="mt-8 max-w-4xl text-[clamp(2.5rem,5vw,5.2rem)] font-medium leading-[.93] tracking-[-.055em]">{item.title}</h3>
                <div className="mt-10 grid gap-8 md:grid-cols-[.42fr_.58fr] md:items-end">
                  <div><strong className="block text-[clamp(4.8rem,9vw,8.5rem)] font-medium leading-none tracking-[-.08em]" style={{ color: item.accent }}>{item.metric}</strong><span className="mt-3 block max-w-xs text-sm leading-6 text-white/48">{item.metricLabel}</span></div>
                  <div className="border-l border-white/12 pl-6"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.17em] text-white/36"><Icon className="size-4" />{item.role}</div><p className="mt-4 text-lg leading-8 text-white/72">{item.detail}</p></div>
                </div>
                <div className="mt-auto pt-10"><div className="border-t border-white/10 pt-6"><span className="text-[10px] font-bold uppercase tracking-[.19em] text-white/30">O que este caso comprova</span><p className="mt-3 max-w-3xl text-lg leading-7 text-white/88">{item.proof}</p></div></div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-5 text-xs leading-5 text-[#74878a]">Informações extraídas do perfil acadêmico-executivo fornecido para este projeto. Os documentos não apresentam valores financeiros ou percentuais detalhados; por isso, nenhum resultado foi estimado.</p>
      </div>
    </section>
  );
}
