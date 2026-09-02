import { ArrowRight, Radio } from 'lucide-react';

export function ConversionRail() {
  return (
    <aside className="fixed bottom-3 left-3 right-3 z-50 mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-2xl border border-white/15 bg-[#071722]/92 p-2 pl-4 text-white shadow-[0_20px_70px_rgba(0,0,0,.35)] backdrop-blur-2xl sm:bottom-5 sm:left-1/2 sm:right-auto sm:w-[calc(100vw_-_2rem)] sm:-translate-x-1/2 sm:rounded-full sm:pl-5">
      <div className="min-w-0">
        <p className="flex items-center gap-2 truncate text-xs font-bold uppercase tracking-[.14em] text-[#7ce6ff]"><Radio className="size-3.5 shrink-0" /> Inscrições abertas</p>
        <p className="hidden text-xs text-white/48 sm:block">Gratuito · cerca de 3 minutos · sem login</p>
      </div>
      <a href="#cadastro" className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#f5b85b] px-5 text-sm font-bold text-[#111820] transition hover:bg-[#ffd187]">
        Entrar na rede <ArrowRight className="size-4" />
      </a>
    </aside>
  );
}
