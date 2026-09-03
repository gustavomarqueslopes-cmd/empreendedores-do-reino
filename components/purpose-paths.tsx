import { ArrowRight, Check, Target } from 'lucide-react';

const traditionalPath = [
  'Oportunidade',
  'Produto',
  'Cliente',
  'Receita',
  'Crescimento',
];

const missionPath = [
  'Propósito',
  'Problema humano',
  'Solução regeneradora',
  'Negócio sustentável',
  'Transformação',
];

const impactFormula = [
  ['Propósito', 'A razão pela qual você existe'],
  ['Empreendedorismo', 'A estrutura que você constrói'],
  ['Inovação', 'A solução que você cria'],
  ['Execução', 'A disciplina que você aplica'],
  ['Impacto', 'A transformação que você gera'],
];

export function PurposePaths() {
  return (
    <section
      id="diferencial"
      className="relative overflow-hidden bg-[#edf2ef] px-5 py-24 text-[#12363d] sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(54,190,205,.13),transparent_25%),radial-gradient(circle_at_10%_90%,rgba(218,164,91,.13),transparent_27%)]" />
      <div className="relative mx-auto max-w-[1312px]">
        <div className="grid gap-12 lg:grid-cols-[.84fr_1.16fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.22em] text-[#9a6427]">
              <Target className="size-4" /> A diferença que nos move
            </span>
            <h2 className="mt-6 text-[clamp(3.1rem,6.4vw,6.8rem)] font-medium leading-[.9] tracking-[-.065em]">
              Que problema você foi chamado para resolver?
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-xl leading-8 text-[#566f73]">
              A Rede Empreendedores do Reino é a plataforma brasileira que
              transforma a visão do Movimento MissioEmpreendedor em entrada,
              diagnóstico e conexões de valor.
            </p>
            <p className="mt-5 border-l-2 border-[#d09a52] pl-5 text-base leading-7 text-[#657b7e]">
              Não começa apenas com uma oportunidade de mercado. Começa com um
              chamado, encontra um problema humano e constrói uma solução capaz
              de gerar transformação.
            </p>
          </div>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-[#183e45]/12 bg-white shadow-[0_28px_80px_rgba(27,64,69,.1)] lg:grid-cols-2">
          <article className="p-7 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[.19em] text-[#76888a]">
              Caminho tradicional
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-.025em]">
              Crescer é o destino final.
            </h3>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {traditionalPath.map((item, index) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="rounded-full border border-[#d8dfdc] bg-[#f3f5f3] px-4 py-2 text-sm text-[#657679]">
                    {item}
                  </span>
                  {index < traditionalPath.length - 1 ? (
                    <ArrowRight className="size-4 text-[#a7b1af]" />
                  ) : null}
                </div>
              ))}
            </div>
          </article>

          <article className="relative overflow-hidden bg-[#0d2c39] p-7 text-white sm:p-10">
            <div className="pointer-events-none absolute right-[-80px] top-[-100px] size-72 rounded-full bg-[#3ed4df]/15 blur-3xl" />
            <p className="relative text-xs font-bold uppercase tracking-[.19em] text-[#efbd78]">
              Caminho movido por missão
            </p>
            <h3 className="relative mt-4 text-2xl font-semibold tracking-[-.025em]">
              Transformar é o destino.
            </h3>
            <div className="relative mt-8 flex flex-wrap items-center gap-2">
              {missionPath.map((item, index) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="rounded-full border border-white/14 bg-white/[.07] px-4 py-2 text-sm text-white/78">
                    {item}
                  </span>
                  {index < missionPath.length - 1 ? (
                    <ArrowRight className="size-4 text-[#63d9e6]" />
                  ) : null}
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-[#d7dfdc] bg-[#d7dfdc] sm:grid-cols-2 lg:grid-cols-5">
          {impactFormula.map(([title, description], index) => (
            <div key={title} className="relative bg-[#f9fbf9] p-5">
              <div className="flex items-center justify-between gap-3">
                <strong className="text-sm">{title}</strong>
                {index === impactFormula.length - 1 ? (
                  <Check className="size-4 text-[#9a6427]" />
                ) : (
                  <span className="text-lg text-[#9a6427]">+</span>
                )}
              </div>
              <p className="mt-2 text-xs leading-5 text-[#708184]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
