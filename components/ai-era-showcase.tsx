import { ArrowRight, Bot, BrainCircuit, Cpu, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const shifts = [
  { icon: BrainCircuit, title: 'Agentes que executam', text: 'A IA deixa de apenas responder e passa a pesquisar, organizar, decidir e concluir tarefas sob supervisão humana.' },
  { icon: Bot, title: 'Robôs no mundo físico', text: 'Inteligência, sensores e automação começam a transformar logística, indústria, saúde, varejo e serviços.' },
  { icon: Cpu, title: 'Empresas redesenhadas', text: 'Processos, funções e modelos de negócio serão reconstruídos para times formados por pessoas e agentes.' },
];

export function AiEraShowcase() {
  return (
    <section id="era-ia" className="overflow-hidden bg-[#eef6f8] px-5 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1312px]">
        <div className="grid overflow-hidden rounded-[2rem] bg-[#071722] shadow-[0_35px_100px_rgba(12,43,54,.2)] lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative min-h-[460px] lg:min-h-[720px]">
            <img src="/ai-robot-collaboration.png" alt="Empreendedora brasileira colaborando com um robô humanoide e agentes de inteligência artificial" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(5,17,27,.9)_100%)]" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-[#071722]/72 p-5 text-white backdrop-blur-xl sm:left-8 sm:right-auto sm:max-w-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#7ce6ff]"><Sparkles className="size-4" /> O humano continua no comando</div>
              <p className="mt-2 text-lg leading-7 text-white/78">A vantagem não será substituir pessoas. Será ampliar pessoas capazes de liderar a transformação.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 text-white sm:p-10 lg:p-14">
            <span className="text-xs font-bold uppercase tracking-[.22em] text-[#f5b85b]">A nova economia já está em movimento</span>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-.05em] sm:text-5xl">A inteligência artificial está saindo da tela e entrando no mundo.</h2>
            <p className="mt-5 text-lg leading-8 text-white/62">Não estamos falando apenas de chatbots. Estamos falando de agentes, robôs e sistemas capazes de operar partes inteiras de um negócio.</p>

            <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {shifts.map(({ icon: Icon, title, text }) => <article key={title} className="grid grid-cols-[42px_1fr] gap-4 py-5"><span className="grid size-10 place-items-center rounded-xl border border-[#42d6ff]/20 bg-[#42d6ff]/8"><Icon className="size-5 text-[#7ce6ff]" /></span><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-white/52">{text}</p></div></article>)}
            </div>

            <Button nativeButton={false} render={<a href="#cadastro" />} className="mt-8 h-14 w-full rounded-full bg-[#f5b85b] px-7 text-base font-bold text-[#111820] hover:bg-[#ffd187] sm:w-fit">
              Preparar meu negócio agora <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
