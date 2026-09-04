'use client';

import { ArrowRight, Check, Globe2, Network, Orbit, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InteractiveGlobe } from '@/components/interactive-globe';

const proofPoints = [
  'Cadastro gratuito',
  'Diagnóstico do negócio',
  'Conexões com contexto',
];

export function AiHero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[880px] overflow-hidden bg-[#06111c] text-white lg:min-h-[940px]"
    >
      <img
        src="/future-earth-hero.png"
        alt="Planeta Terra visto do espaço com o Brasil conectado por rotas digitais e satélites"
        className="hero-earth absolute inset-0 h-full w-full object-cover object-[62%_50%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#06111c_0%,rgba(6,17,28,.97)_28%,rgba(6,17,28,.78)_48%,rgba(6,17,28,.15)_78%,rgba(6,17,28,.2)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,20,.8)_0%,transparent_28%,transparent_70%,#06111c_100%)]" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="absolute inset-y-20 right-0 hidden w-[65%] opacity-55 lg:block">
        <InteractiveGlobe />
      </div>

      <header className="relative z-30 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6 sm:px-10 lg:px-16">
        <a
          href="#inicio"
          className="flex items-center gap-3"
          aria-label="Empreendedores do Reino — início"
        >
          <span className="grid h-11 w-[74px] place-items-center sm:h-12 sm:w-24">
            <img
              src="/brand-logo-symbol.png"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(255,255,255,.18)]"
            />
          </span>
          <span>
            <strong className="block text-sm tracking-[.13em]">
              EMPREENDEDORES
            </strong>
            <span className="block text-[10px] font-semibold tracking-[.34em] text-[#f5b85b]">
              DO REINO
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/68 md:flex">
          <a href="#origem" className="transition hover:text-white">
            O movimento
          </a>
          <a href="#dr-dan" className="transition hover:text-white">
            Dr. Dan
          </a>
          <a href="#como-funciona" className="transition hover:text-white">
            Como funciona
          </a>
          <a
            href="#experiencia-comprovada"
            className="transition hover:text-white"
          >
            Experiência
          </a>
        </nav>
        <Button
          nativeButton={false}
          render={<a href="#cadastro" />}
          className="h-11 rounded-full bg-[#f5b85b] px-5 font-semibold text-[#111820] shadow-[0_0_35px_rgba(245,184,91,.2)] hover:bg-[#ffd187] sm:px-6"
        >
          <span className="hidden sm:inline">Quero entrar</span>
          <span className="sm:hidden">Entrar</span> <ArrowRight />
        </Button>
      </header>

      <div className="relative z-20 mx-auto flex min-h-[700px] max-w-[1440px] items-center px-5 pb-28 pt-16 sm:px-10 lg:px-16 lg:pb-36 lg:pt-24">
        <div className="max-w-[770px]">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#42d6ff]/25 bg-[#071c2c]/72 px-4 py-2 text-[11px] font-bold uppercase tracking-[.18em] text-[#9cecff] backdrop-blur-xl">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#42d6ff] opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-[#42d6ff]" />
            </span>
            Inscrições abertas · nova geração de líderes
          </div>

          <h1 className="mt-7 text-[clamp(3.25rem,6.4vw,6.7rem)] font-semibold leading-[.89] tracking-[-.075em]">
            O futuro dos negócios já começou.
            <span className="ai-gold block">Você vai liderar ou assistir?</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
            Uma rede nacional do movimento Missio Empreendedor para líderes
            cristãos que querem inovar, expandir mercados, construir conexões
            empresariais e transformar propósito em impacto.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              nativeButton={false}
              render={<a href="#cadastro" />}
              className="cta-pulse h-15 rounded-full bg-[#f5b85b] px-8 text-base font-bold text-[#111820] hover:bg-[#ffd187]"
            >
              Quero fazer parte <ArrowRight />
            </Button>
            <Button
              nativeButton={false}
              render={<a href="#origem" />}
              variant="outline"
              className="h-15 rounded-full border-white/20 bg-white/5 px-7 text-base text-white backdrop-blur hover:bg-white/12 hover:text-white"
            >
              Conheça o movimento
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/62">
            {proofPoints.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check className="size-4 text-[#42d6ff]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 right-6 z-20 hidden w-[350px] overflow-hidden rounded-2xl border border-white/14 bg-[#071722]/75 p-5 shadow-[0_30px_80px_rgba(0,0,0,.4)] backdrop-blur-2xl xl:block">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#42d6ff]/12">
              <Network className="size-5 text-[#7ce6ff]" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#7ce6ff]">
                Missio Empreendedor
              </p>
              <p className="mt-1 text-sm leading-6 text-white/68">
                Propósito, inovação, expansão e conexões para transformar o
                mundo dos negócios.
              </p>
            </div>
          </div>
          <Radio className="size-4 shrink-0 text-[#f5b85b]" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center text-[10px] uppercase tracking-[.1em] text-white/45">
          <span>Propósito guia</span>
          <span>Inovação amplia</span>
          <span>Conexões aceleram</span>
        </div>
      </div>

      <div className="relative z-20 overflow-hidden border-y border-white/8 bg-[#06111c]/78 py-4 backdrop-blur-sm">
        <div className="future-ticker flex w-max items-center gap-10 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[.24em] text-white/40">
          {[0, 1].map((group) => (
            <div key={group} className="flex items-center gap-10">
              <span className="text-[#f5b85b]">Propósito</span>
              <span>Inovação</span>
              <span className="text-[#63d9e6]">Conexões empresariais</span>
              <span>Expansão de mercados</span>
              <span>Tecnologia e IA</span>
              <span>Missão</span>
              <span className="text-[#79d4a7]">Impacto</span>
              <Globe2 className="size-4" />
              <Orbit className="size-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
