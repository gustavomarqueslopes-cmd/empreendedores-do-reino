import { ArrowRight, Globe2, Network, Sparkles, Users2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlatformSections } from '@/components/platform-sections';

const numbers = [
  { value: '327', label: 'empreendedores' },
  { value: '18', label: 'estados alcançados' },
  { value: '42', label: 'segmentos' },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-x-0 top-0 z-0 h-[760px] bg-[radial-gradient(circle_at_82%_12%,rgba(207,162,69,.18),transparent_30%),radial-gradient(circle_at_20%_35%,rgba(45,91,73,.14),transparent_34%)]" />
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a className="flex items-center gap-3" href="#inicio" aria-label="Início">
          <span className="grid size-11 place-items-center rounded-full border border-primary/25 bg-primary text-primary-foreground shadow-sm"><Network className="size-5" /></span>
          <span className="leading-tight"><strong className="block font-heading text-sm tracking-[.14em]">EMPREENDEDORES</strong><span className="block text-[10px] font-semibold tracking-[.3em] text-primary">DO REINO</span></span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#movimento" className="transition-colors hover:text-foreground">O movimento</a>
          <a href="#impacto" className="transition-colors hover:text-foreground">Nosso impacto</a>
          <a href="#visao" className="transition-colors hover:text-foreground">Visão</a>
        </nav>
        <Button className="h-10 rounded-full px-5" render={<a href="#cadastro" />}>Fazer parte <ArrowRight data-icon="inline-end" /></Button>
      </header>

      <section id="inicio" className="relative z-10 mx-auto grid min-h-[670px] max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:pt-20">
        <div className="max-w-3xl">
          <Badge variant="outline" className="mb-7 h-8 border-primary/25 bg-white/60 px-3 text-primary backdrop-blur"><Sparkles /> Uma rede brasileira conectada a oportunidades globais</Badge>
          <h1 className="font-heading text-[clamp(3.3rem,8vw,7.2rem)] font-semibold leading-[.86] tracking-[-.065em]">Negócios com<span className="block font-serif font-normal italic text-primary">propósito.</span>Impacto real.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">Conectamos empreendedores que transformam empresas, cidades e pessoas — compartilhando oportunidades, conhecimento e valores que permanecem.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button className="h-13 rounded-full px-7 text-base" render={<a href="#cadastro" />}>Quero fazer parte da rede <ArrowRight data-icon="inline-end" /></Button>
            <Button variant="outline" className="h-13 rounded-full border-primary/20 bg-white/50 px-7 text-base" render={<a href="#movimento" />}>Conheça o movimento</Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
          <div className="absolute -inset-10 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-[#17372c] p-7 text-white shadow-[0_35px_90px_rgba(22,55,44,.23)] sm:p-9">
            <div className="absolute -right-16 -top-16 size-56 rounded-full border border-white/10" /><div className="absolute -right-4 -top-4 size-36 rounded-full border border-[#d5af61]/35" />
            <div className="relative">
              <div className="flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[.18em] text-[#e0c17e]">Rede Brasil</span><Globe2 className="size-6 text-[#e0c17e]" /></div>
              <p className="mt-14 max-w-sm font-serif text-3xl leading-tight">“Não construa apenas um produto. Construa um ecossistema.”</p>
              <div className="mt-12 grid grid-cols-3 gap-3 border-t border-white/15 pt-6">{numbers.map((item) => <div key={item.label}><strong className="block text-2xl text-[#f2d89e]">{item.value}</strong><span className="mt-1 block text-xs leading-4 text-white/60">{item.label}</span></div>)}</div>
            </div>
          </div>
          <div className="absolute -bottom-7 -left-5 flex items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-xl sm:-left-10"><span className="grid size-10 place-items-center rounded-xl bg-accent text-primary"><Users2 /></span><span><strong className="block text-sm">Rede em movimento</strong><span className="text-xs text-muted-foreground">Conexões que geram valor</span></span></div>
        </div>
      </section>

      <section id="movimento" className="relative z-10 border-y border-border/70 bg-white/70 py-6 backdrop-blur"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 text-xs font-semibold uppercase tracking-[.16em] text-muted-foreground sm:justify-between sm:px-8"><span>Acesso</span><span className="text-primary">→</span><span>Aprendizado</span><span className="text-primary">→</span><span>Conexão</span><span className="text-primary">→</span><span>Aplicação</span><span className="text-primary">→</span><span>Impacto</span></div></section>

      <section id="impacto" className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><span className="text-sm font-semibold uppercase tracking-[.2em] text-primary">Uma rede de valor</span><h2 className="mt-5 max-w-xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Quem entra encontra. Quem participa, oferece.</h2></div><div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">{[['Conexões','Encontre parceiros, clientes, fornecedores e mentores em todo o Brasil.'],['Inteligência','Entenda desafios, maturidade digital e oportunidades do ecossistema.'],['Capacitação','Acesse conhecimento prático para transformar gestão, vendas e tecnologia.'],['Impacto','Some sua experiência a iniciativas que fortalecem negócios e comunidades.']].map(([title,copy]) => <article key={title} className="bg-card p-7 sm:p-8"><span className="mb-8 block size-2 rounded-full bg-[#c79b43]" /><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{copy}</p></article>)}</div></div></section>
      <PlatformSections />
    </main>
  );
}
