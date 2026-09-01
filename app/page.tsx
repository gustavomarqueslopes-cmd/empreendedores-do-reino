import { ArrowRight, Bot, BrainCircuit, CheckCircle2, Cpu, Network, ScanSearch, Sparkles, Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { PlatformSections } from '@/components/platform-sections';

const outcomes = [
  ['Conexões estratégicas', 'Encontre clientes, parceiros, fornecedores e mentores em todo o Brasil.'],
  ['Inteligência de mercado', 'Descubra tendências, desafios e oportunidades a partir dos dados da própria rede.'],
  ['IA aplicada ao negócio', 'Avance da curiosidade para automações e decisões que aumentam produtividade.'],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050a12] text-white">
      <header className="absolute inset-x-0 top-0 z-30 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6 sm:px-10">
        <a href="#inicio" aria-label="Início" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,.16)]"><Network className="size-5" /></span>
          <span><strong className="block text-sm tracking-[.14em]">EMPREENDEDORES</strong><span className="block text-[10px] font-semibold tracking-[.34em] text-cyan-300">DO REINO</span></span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex"><a href="#porque" className="hover:text-white">Por que participar</a><a href="#inteligencia" className="hover:text-white">Ecossistema</a><a href="#cadastro" className="hover:text-white">Cadastro</a></nav>
        <Button nativeButton={false} render={<a href="#cadastro" />} className="h-10 rounded-xl bg-cyan-300 px-5 text-[#041018] shadow-[0_0_28px_rgba(34,211,238,.2)] hover:bg-cyan-200">Entrar na rede <ArrowRight /></Button>
      </header>

      <section id="inicio" className="relative isolate min-h-[820px] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_70%_30%,rgba(21,117,143,.34),transparent_26%),radial-gradient(circle_at_45%_65%,rgba(82,45,145,.23),transparent_36%),linear-gradient(135deg,#050a12_0%,#071827_55%,#050a12_100%)]" />
        <div className="tech-grid absolute inset-0 -z-10 opacity-40" />
        <div className="absolute left-[72%] top-[23%] -z-10 size-80 -translate-x-1/2 rounded-full border border-cyan-300/15 shadow-[0_0_120px_rgba(34,211,238,.16),inset_0_0_70px_rgba(34,211,238,.08)]" />
        <div className="absolute left-[72%] top-[23%] -z-10 size-52 -translate-x-1/2 rounded-full border border-violet-400/20" />
        <div className="mx-auto grid min-h-[820px] max-w-[1440px] items-center gap-14 px-5 pb-20 pt-32 sm:px-10 lg:grid-cols-[1.06fr_.94fr]">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-cyan-200"><Sparkles className="size-4" /> A nova geração de empreendedores começa aqui</div>
            <h1 className="text-[clamp(3.4rem,7vw,7.4rem)] font-semibold leading-[.88] tracking-[-.07em]">Conecte seu negócio ao <span className="ai-gradient block">futuro com IA.</span></h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">Uma rede nacional para empresários que querem crescer, aplicar inteligência artificial e construir negócios capazes de transformar mercados, cidades e pessoas.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button nativeButton={false} render={<a href="#cadastro" />} className="h-14 rounded-xl bg-cyan-300 px-7 text-base text-[#031016] shadow-[0_0_34px_rgba(34,211,238,.22)] hover:bg-cyan-200">Quero fazer parte <ArrowRight /></Button><Button nativeButton={false} render={<a href="#porque" />} variant="outline" className="h-14 rounded-xl border-white/15 bg-white/5 px-7 text-base text-white hover:bg-white/10">Entenda a proposta</Button></div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">{['Cadastro gratuito','Leva menos de 3 minutos','Presença nacional'].map(item=><span key={item} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-cyan-300" />{item}</span>)}</div>
          </div>

          <div className="relative mx-auto w-full max-w-[570px]">
            <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/12 bg-[#07131f]/88 p-5 shadow-[0_35px_100px_rgba(0,0,0,.5)] backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5"><div><span className="text-xs uppercase tracking-[.2em] text-cyan-300">Mapa de oportunidades</span><h2 className="mt-1 text-xl font-semibold">Inteligência da Rede</h2></div><span className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300"><span className="size-1.5 rounded-full bg-emerald-300" /> Ao vivo</span></div>
              <div className="mt-5 grid grid-cols-3 gap-3">{[['327','membros'],['18','estados'],['42','setores']].map(([value,label])=><div key={label} className="rounded-xl border border-white/8 bg-white/[.035] p-4"><strong className="block text-2xl text-white">{value}</strong><span className="text-xs text-slate-500">{label}</span></div>)}</div>
              <div className="mt-4 rounded-2xl border border-white/8 bg-white/[.025] p-5"><div className="flex items-center justify-between"><span className="text-sm text-slate-300">O que empresários mais buscam</span><BrainCircuit className="size-5 text-violet-300" /></div><div className="mt-5 space-y-4">{[['Aplicar IA','74%'],['Gerar novos negócios','61%'],['Conexões estratégicas','48%']].map(([label,value],i)=><div key={label}><div className="mb-2 flex justify-between text-xs"><span className="text-slate-400">{label}</span><span className="text-white">{value}</span></div><div className="h-1.5 overflow-hidden rounded-full bg-white/8"><div className={`h-full rounded-full ${i===1?'bg-violet-400':'bg-cyan-300'}`} style={{width:value}} /></div></div>)}</div></div>
              <div className="mt-4 flex items-center gap-4 rounded-2xl border border-cyan-300/15 bg-cyan-300/[.06] p-4"><span className="grid size-11 place-items-center rounded-xl bg-cyan-300/10 text-cyan-300"><Bot /></span><div><strong className="block text-sm">Diagnóstico inteligente</strong><span className="text-xs text-slate-400">Sua jornada começa pelo seu momento atual.</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="porque" className="bg-[#07111c] px-5 py-24 sm:px-10"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><span className="text-sm font-semibold uppercase tracking-[.2em] text-cyan-300">Mais que networking</span><h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">Entre para uma rede que transforma dados em conexões e conexões em crescimento.</h2></div><div className="mt-14 grid gap-4 md:grid-cols-3">{outcomes.map(([title,copy],i)=>{const Icon=[Network,ScanSearch,Cpu][i];return <article key={title} className="group rounded-2xl border border-white/10 bg-white/[.035] p-7 transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[.05]"><Icon className="size-7 text-cyan-300"/><span className="mt-10 block text-xs font-semibold tracking-[.2em] text-slate-500">0{i+1}</span><h3 className="mt-3 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-slate-400">{copy}</p></article>})}</div></div></section>

      <section id="inteligencia" className="border-y border-white/10 bg-[#050a12] px-5 py-20 sm:px-10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row"><div className="max-w-2xl"><span className="flex items-center gap-2 text-sm font-semibold text-violet-300"><Zap className="size-4" /> A inteligência cresce com cada novo membro</span><h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Você não entra apenas em uma lista. Você ajuda a construir o mapa empresarial do Brasil.</h2></div><Button nativeButton={false} render={<a href="#cadastro" />} className="h-14 shrink-0 rounded-xl bg-violet-400 px-7 text-base text-white hover:bg-violet-300">Cadastrar meu negócio <ArrowRight /></Button></div></section>

      <PlatformSections />
    </main>
  );
}
