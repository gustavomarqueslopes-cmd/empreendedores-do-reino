import { ArrowRight, CheckCircle2, Globe2, GraduationCap } from 'lucide-react';
import { AiHero } from '@/components/ai-hero';
import { FutureIntelligence } from '@/components/future-intelligence';
import { ImpactCases } from '@/components/impact-cases';
import { MissionEngine } from '@/components/mission-engine';
import { PlatformSections } from '@/components/platform-sections';
import { AiEraShowcase } from '@/components/ai-era-showcase';
import { OpenAiBusinessRadar } from '@/components/openai-business-radar';
import { ConversionRail } from '@/components/conversion-rail';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  ['O que é a Rede Empreendedores do Reino?', 'É um ecossistema nacional de empreendedores cristãos criado para conectar propósito, formação, tecnologia, oportunidades e pessoas capazes de gerar impacto.'],
  ['Preciso pagar para me cadastrar?', 'Não. O cadastro inicial é gratuito e serve para mapear seu perfil, entender suas necessidades e organizar as primeiras conexões da rede.'],
  ['Preciso já utilizar inteligência artificial?', 'Não. A rede atende desde quem ainda não sabe por onde começar até empresas que já usam automações e IA em seus processos ou produtos.'],
  ['O que acontece depois do cadastro?', 'Seu perfil passa a compor o mapa do ecossistema. Com o crescimento da rede, você poderá receber convites para encontros, conteúdos, especialistas e conexões alinhadas ao seu momento.'],
  ['Meus dados ficarão públicos?', 'Não. O painel utiliza apenas indicadores agregados. Informações de contato e dados individuais não são exibidos publicamente.'],
];

export default function Home() {
  return <main className="min-h-screen overflow-x-hidden bg-[#f2f0e9] pb-20 text-[#132e35] sm:pb-24">
    <AiHero />

    <section className="relative z-20 -mt-1 bg-white px-5 py-7 sm:px-10 lg:px-16"><div className="mx-auto grid max-w-[1312px] gap-px overflow-hidden rounded-2xl border border-[#d8e4e6] bg-[#d8e4e6] sm:grid-cols-2 lg:grid-cols-4">{[['01','Entenda seu momento'],['02','Aprenda a usar IA'],['03','Encontre conexões'],['04','Transforme em execução']].map(([n,t])=><div key={n} className="bg-[#f8fbfc] p-5"><span className="text-xs font-bold text-[#0c809a]">{n}</span><p className="mt-2 font-semibold text-[#183942]">{t}</p></div>)}</div></section>

    <section id="origem" className="px-5 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-[1312px] gap-14 lg:grid-cols-[.86fr_1.14fr] lg:items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-[.22em] text-[#9a6427]">O que é este movimento</span>
          <h2 className="mt-5 text-4xl font-medium leading-[1.02] tracking-[-.045em] sm:text-6xl">Propósito que vira negócio. Negócios que transformam cidades.</h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-[#5b6e72]">
            <p>A Rede Empreendedores do Reino nasce conectada à visão do MissioEmpreendedor: líderes cristãos chamados a resolver problemas humanos reais, construir negócios sustentáveis e gerar impacto mensurável.</p>
            <p>Ela aproxima empreendedores, universidades, igrejas, investidores, tecnologia, governo, comunidades, mentores e mercados — porque nenhuma transformação relevante acontece de forma isolada.</p>
          </div>
          <div className="mt-9 border-l-2 border-[#d29a55] pl-6"><p className="font-serif text-2xl leading-9 text-[#243f45]">Não começa apenas com uma ideia. Começa com um chamado, encontra um problema humano e transforma visão em execução.</p></div>
        </div>
        <div className="relative"><img src="/event-photo.png" alt="Empresários brasileiros criando conexões durante um encontro" className="aspect-[3/2] w-full rounded-[2rem] object-cover shadow-[0_30px_80px_rgba(22,54,60,.18)]" /><div className="absolute -bottom-7 left-6 right-6 rounded-2xl bg-[#123b43] p-5 text-white shadow-xl sm:left-10 sm:right-auto sm:max-w-sm"><span className="text-xs uppercase tracking-[.18em] text-[#f0c586]">A visão</span><p className="mt-2 text-lg leading-7">Uma rede brasileira conectada a oportunidades globais.</p></div></div>
      </div>
    </section>

    <section id="dr-dan" className="overflow-hidden bg-white px-5 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-[1312px] gap-14 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-[580px] lg:mx-0"><div className="absolute -left-6 -top-6 size-36 border-l border-t border-[#d8a765]" /><img src="/dr-dan-sandoval.png" alt="Retrato do Dr. Dan Sandoval" className="relative aspect-[4/5] w-full object-cover object-top shadow-[0_35px_90px_rgba(20,55,60,.2)]" /><div className="absolute -bottom-7 right-[-10px] max-w-xs bg-[#123b43] p-6 text-white shadow-2xl sm:right-[-28px]"><span className="text-xs font-bold uppercase tracking-[.18em] text-[#f0bd78]">Pesquisa atual</span><p className="mt-2 text-lg leading-7">Empreendedorismo de impacto na era da inteligência artificial.</p></div></div>
        <div className="pt-8 lg:pl-10 lg:pt-0"><span className="text-xs font-bold uppercase tracking-[.22em] text-[#9a6427]">A liderança por trás da visão</span><h2 className="mt-5 text-4xl font-medium leading-[1.02] tracking-[-.045em] sm:text-6xl">Dr. Dan Sandoval</h2><p className="mt-5 text-xl leading-8 text-[#365158]">Estrategista de liderança global, empreendedor, executivo e educador filipino-americano.</p><p className="mt-6 text-lg leading-8 text-[#647679]">Há mais de três décadas, sua trajetória conecta desenvolvimento de líderes, expansão internacional, inovação, transformação digital e iniciativas de impacto. Viveu mais de dez anos em cada um de três continentes, fala quatro idiomas e já esteve em mais de 40 países.</p><p className="mt-5 text-lg leading-8 text-[#647679]">Fundador da <strong className="text-[#173f46]">InnoVenture, MissioPreneur e Tapestry Global</strong>, Dr. Dan combina experiência executiva com formação acadêmica para traduzir grandes mudanças em decisões práticas para empreendedores.</p><div className="mt-9 grid grid-cols-2 gap-y-7 border-y border-[#dbe2df] py-7 sm:grid-cols-4"><div><strong className="block text-3xl tracking-[-.04em]">30+</strong><span className="mt-1 block text-xs text-[#6a7e81]">anos de experiência</span></div><div><strong className="block text-3xl tracking-[-.04em]">40+</strong><span className="mt-1 block text-xs text-[#6a7e81]">países visitados</span></div><div><strong className="block text-3xl tracking-[-.04em]">4</strong><span className="mt-1 block text-xs text-[#6a7e81]">idiomas</span></div><div><strong className="block text-3xl tracking-[-.04em]">3</strong><span className="mt-1 block text-xs text-[#6a7e81]">continentes vividos</span></div></div><div className="mt-7 grid gap-3 sm:grid-cols-2"><div className="flex gap-3"><GraduationCap className="mt-1 size-5 shrink-0 text-[#a66d2d]"/><p className="text-sm leading-6 text-[#607579]">D.Min., MBA e doutorado profissional em Liderança e Gestão Global em andamento na Thunderbird/ASU.</p></div><div className="flex gap-3"><Globe2 className="mt-1 size-5 shrink-0 text-[#a66d2d]"/><p className="text-sm leading-6 text-[#607579]">Experiência em mercados globais, desenvolvimento organizacional e internacionalização.</p></div></div></div>
      </div>
    </section>

    <ImpactCases />

    <MissionEngine />

    <AiEraShowcase />

    <OpenAiBusinessRadar />

    <FutureIntelligence />

    <section id="como-funciona" className="bg-white px-5 py-24 sm:px-10 lg:px-16"><div className="mx-auto max-w-[1312px]"><div className="grid gap-12 lg:grid-cols-[.68fr_1.32fr]"><div><span className="text-xs font-bold uppercase tracking-[.22em] text-[#9a6427]">Do acesso ao impacto</span><h2 className="mt-5 text-4xl font-medium tracking-[-.04em] sm:text-5xl">Hoje não é o fim de um encontro. É o início de um movimento.</h2><Button nativeButton={false} render={<a href="#cadastro" />} className="mt-8 h-13 rounded-full bg-[#123b43] px-7 text-base text-white hover:bg-[#0a2c32]">Juntar-me ao movimento <ArrowRight /></Button></div><div className="divide-y divide-[#dfe4e1]">{[['01','Acesso','Você entra na rede e apresenta seu negócio, seu chamado e seu desafio atual.'],['02','Aprendizado','Conhecimento aplicável aproxima você da nova economia, da IA e de novas possibilidades.'],['03','Conexão','O ecossistema aproxima pessoas, especialistas, parceiros e oportunidades com contexto.'],['04','Aplicação','Visão se transforma em experimento, execução e mudança concreta dentro do negócio.'],['05','Impacto','Resultados alcançam pessoas, fortalecem comunidades e abrem novas jornadas.']].map(([n,t,c])=><article key={n} className="grid gap-4 py-6 sm:grid-cols-[60px_1fr] sm:gap-7"><span className="text-sm font-bold text-[#a66d2d]">{n}</span><div><h3 className="text-xl font-semibold">{t}</h3><p className="mt-2 leading-7 text-[#687a7d]">{c}</p></div></article>)}</div></div></div></section>

    <section id="para-quem" className="bg-[#143f46] px-5 py-20 text-white sm:px-10 lg:px-16"><div className="mx-auto grid max-w-[1312px] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><span className="text-xs font-bold uppercase tracking-[.22em] text-[#f0bc75]">Para quem é</span><h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-.04em] sm:text-5xl">Para quem lidera e decidiu não ficar parado.</h2></div><div className="grid gap-3 sm:grid-cols-2">{['Empreendedores e fundadores','Pequenas e médias empresas','Líderes e gestores','Negócios em transformação digital','Empresas que buscam parceiros','Profissionais dispostos a oferecer valor'].map(item=><div key={item} className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/[.04] p-4"><CheckCircle2 className="size-5 text-[#f0bc75]"/><span>{item}</span></div>)}</div></div></section>

    <PlatformSections />

    <section id="faq" className="bg-[#f2f0e9] px-5 py-24 sm:px-10 lg:px-16"><div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[.6fr_1.4fr]"><div><span className="text-xs font-bold uppercase tracking-[.22em] text-[#9a6427]">Perguntas frequentes</span><h2 className="mt-5 text-4xl font-medium tracking-[-.04em]">Antes de entrar, saiba o essencial.</h2></div><Accordion className="border-y border-[#cfd6d2]">{faqs.map(([q,a],i)=><AccordionItem key={q} value={`faq-${i}`}><AccordionTrigger className="py-5 text-base no-underline hover:no-underline">{q}</AccordionTrigger><AccordionContent className="pb-6 pr-10 text-base leading-7 text-[#647679]">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>

    <footer className="bg-[#07161c] px-5 py-12 text-white sm:px-10 lg:px-16"><div className="mx-auto flex max-w-[1312px] flex-col justify-between gap-7 sm:flex-row sm:items-center"><div className="flex items-center gap-4"><span className="overflow-hidden rounded-2xl border border-white/15 bg-white p-1.5 shadow-[0_18px_45px_rgba(0,0,0,.25)]"><img src="/brand-logo-lockup.png" alt="Empreendedores do Reino" className="h-20 w-auto object-contain sm:h-24" /></span><span className="hidden max-w-[180px] text-xs leading-5 text-white/42 lg:block">Negócios. Tecnologia.<br />Propósito. Impacto.</span></div><p className="max-w-md text-sm leading-6 text-white/45">Uma rede nacional para empresários que querem construir o futuro sem caminhar sozinhos.</p></div></footer>

    <ConversionRail />
  </main>;
}
