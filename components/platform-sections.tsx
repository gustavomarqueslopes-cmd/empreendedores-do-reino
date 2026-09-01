'use client';

import { FormEvent, useEffect, useState } from 'react';
import { ArrowRight, BarChart3, Check, ChevronLeft, Globe2, Loader2, MapPin, Network, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NativeSelect } from '@/components/ui/native-select';
import { Textarea } from '@/components/ui/textarea';

const states = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
const segments = ['Tecnologia','Comércio','Serviços','Saúde','Educação','Construção','Agronegócio','Alimentação','Consultoria','Indústria','Outro'];
const challenges = ['Aquisição de clientes','Gestão','Tecnologia','Processos','Pessoas','Finanças','Expansão','Internacionalização'];
const initial = { name:'', email:'', phone:'', city:'', state:'', company:'', role:'', segment:'', companySize:'', businessModel:'', website:'', challenge:'', aiMaturity:'', seeks:'', offers:'' };
type FormData = typeof initial;
type Stats = { total:number; byState:{name:string;value:number}[]; bySegment:{name:string;value:number}[] };

function SelectField({ label, name, value, options, onChange }: { label:string; name:keyof FormData; value:string; options:string[]; onChange:(name:keyof FormData,value:string)=>void }) {
  return <div className="space-y-2"><Label htmlFor={name}>{label}</Label><NativeSelect className="w-full" id={name} value={value} onChange={(e)=>onChange(name,e.target.value)} required><option value="">Selecione</option>{options.map(o=><option key={o} value={o}>{o}</option>)}</NativeSelect></div>;
}

export function PlatformSections() {
  const [view,setView] = useState<'form'|'dashboard'>('form');
  const [step,setStep] = useState(1);
  const [data,setData] = useState<FormData>(initial);
  const [status,setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [message,setMessage] = useState('');
  const [stats,setStats] = useState<Stats>({ total:0, byState:[], bySegment:[] });
  const change=(name:keyof FormData,value:string)=>setData(prev=>({...prev,[name]:value}));
  const loadStats=()=>fetch('/api/entrepreneurs').then(r=>r.json()).then(setStats).catch(()=>{});
  useEffect(()=>{ if(view==='dashboard') loadStats(); },[view]);
  const submit=async(e:FormEvent)=>{ e.preventDefault(); setStatus('loading'); const response=await fetch('/api/entrepreneurs',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}); const body=await response.json(); if(response.ok){setStatus('success');setData(initial);loadStats();}else{setStatus('error');setMessage(body.error||'Não foi possível concluir.');} };
  const demoStates = stats.byState.length ? stats.byState : [{name:'DF',value:87},{name:'SP',value:62},{name:'GO',value:34},{name:'MG',value:28},{name:'RJ',value:21}];
  const demoSegments = stats.bySegment.length ? stats.bySegment : [{name:'Tecnologia',value:78},{name:'Serviços',value:65},{name:'Comércio',value:52},{name:'Educação',value:41},{name:'Consultoria',value:36}];
  const displayedTotal = stats.total || 327;

  return <>
    <section id="cadastro" className="bg-[#15342a] px-5 py-24 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><span className="text-sm font-semibold uppercase tracking-[.2em] text-[#d9b96f]">Faça parte</span><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">O próximo encontro começa com o seu cadastro.</h2></div>
          <div className="flex rounded-full border border-white/15 bg-white/5 p-1"><button onClick={()=>setView('form')} className={`rounded-full px-5 py-2 text-sm ${view==='form'?'bg-white text-[#17372c]':'text-white/70'}`}>Entrar na rede</button><button onClick={()=>setView('dashboard')} className={`rounded-full px-5 py-2 text-sm ${view==='dashboard'?'bg-white text-[#17372c]':'text-white/70'}`}>Painel Brasil</button></div>
        </div>

        {view==='form' && <div className="grid gap-8 lg:grid-cols-[.36fr_.64fr]">
          <aside className="rounded-3xl border border-white/10 bg-white/5 p-7"><p className="text-sm text-white/55">Seu progresso</p><div className="mt-6 space-y-5">{['Você e sua empresa','Momento do negócio','Conexões de valor'].map((label,i)=><div key={label} className="flex items-center gap-3"><span className={`grid size-9 place-items-center rounded-full border ${step>i+1?'border-[#d9b96f] bg-[#d9b96f] text-[#17372c]':step===i+1?'border-white bg-white text-[#17372c]':'border-white/20 text-white/40'}`}>{step>i+1?<Check className="size-4"/>:i+1}</span><span className={step===i+1?'text-white':'text-white/50'}>{label}</span></div>)}</div><p className="mt-10 border-t border-white/10 pt-6 text-sm leading-6 text-white/55">Leva cerca de 3 minutos. Seus dados ajudam a revelar onde estão as oportunidades da rede.</p></aside>
          <div className="rounded-3xl bg-[#fbf8f1] p-6 text-[#17372c] sm:p-9">
            {status==='success' ? <div className="grid min-h-[440px] place-items-center text-center"><div><span className="mx-auto grid size-16 place-items-center rounded-full bg-[#17372c] text-white"><Check /></span><h3 className="mt-6 text-3xl font-semibold">Bem-vindo à rede.</h3><p className="mx-auto mt-3 max-w-md text-[#586b63]">Seu cadastro foi recebido. Você agora faz parte de um ecossistema que conecta propósito, conhecimento e oportunidades.</p><Button className="mt-7 rounded-full px-6" onClick={()=>{setStatus('idle');setStep(1)}}>Novo cadastro</Button></div></div> :
            <form onSubmit={submit}>
              <div className="mb-7 flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#9b7734]">Etapa {step} de 3</p><h3 className="mt-2 text-2xl font-semibold">{step===1?'Conte-nos quem você é':step===2?'Onde seu negócio está hoje':'Como a rede pode gerar valor?'}</h3></div><span className="text-sm text-[#718078]">{Math.round(step/3*100)}%</span></div>
              {step===1 && <div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2 sm:col-span-2"><Label htmlFor="name">Nome completo</Label><Input id="name" value={data.name} onChange={e=>change('name',e.target.value)} required/></div><div className="space-y-2"><Label htmlFor="email">E-mail</Label><Input id="email" type="email" value={data.email} onChange={e=>change('email',e.target.value)} required/></div><div className="space-y-2"><Label htmlFor="phone">WhatsApp</Label><Input id="phone" value={data.phone} onChange={e=>change('phone',e.target.value)} required/></div><div className="space-y-2"><Label htmlFor="city">Cidade</Label><Input id="city" value={data.city} onChange={e=>change('city',e.target.value)} required/></div><SelectField label="Estado" name="state" value={data.state} options={states} onChange={change}/><div className="space-y-2"><Label htmlFor="company">Empresa</Label><Input id="company" value={data.company} onChange={e=>change('company',e.target.value)} required/></div><div className="space-y-2"><Label htmlFor="role">Cargo ou função</Label><Input id="role" value={data.role} onChange={e=>change('role',e.target.value)} required/></div></div>}
              {step===2 && <div className="grid gap-5 sm:grid-cols-2"><SelectField label="Segmento" name="segment" value={data.segment} options={segments} onChange={change}/><SelectField label="Tamanho da empresa" name="companySize" value={data.companySize} options={['Só eu','2 a 10 pessoas','11 a 50 pessoas','51 a 200 pessoas','Mais de 200 pessoas']} onChange={change}/><SelectField label="Modelo de negócio" name="businessModel" value={data.businessModel} options={['B2B','B2C','B2B e B2C','Terceiro setor']} onChange={change}/><SelectField label="Maior desafio atual" name="challenge" value={data.challenge} options={challenges} onChange={change}/><div className="sm:col-span-2"><SelectField label="Como sua empresa utiliza inteligência artificial?" name="aiMaturity" value={data.aiMaturity} options={['Não utiliza','Uso individual','Algumas automações','Integrada aos processos','IA faz parte do modelo de negócio']} onChange={change}/></div><div className="space-y-2 sm:col-span-2"><Label htmlFor="website">Site, Instagram ou LinkedIn (opcional)</Label><Input id="website" value={data.website} onChange={e=>change('website',e.target.value)}/></div></div>}
              {step===3 && <div className="grid gap-5"><SelectField label="O que você procura nesta rede?" name="seeks" value={data.seeks} options={['Parcerias','Clientes','Fornecedores','Mentoria','Investidores','Tecnologia','Internacionalização','Capacitação','Networking','Impacto social']} onChange={change}/><div className="space-y-2"><Label htmlFor="offers">O que você pode oferecer à rede?</Label><Textarea id="offers" value={data.offers} onChange={e=>change('offers',e.target.value)} placeholder="Conte brevemente sobre sua experiência, conexões ou recursos..." required className="min-h-32"/></div><p className="rounded-2xl bg-[#edf1ea] p-4 text-sm leading-6 text-[#586b63]">Ao concluir, você autoriza o uso destes dados para organização da rede e geração de indicadores agregados. Seus dados de contato não aparecem no painel público.</p></div>}
              {status==='error'&&<p className="mt-5 text-sm text-red-700">{message}</p>}
              <div className="mt-8 flex items-center justify-between border-t border-[#e6e0d3] pt-6">{step>1?<Button type="button" variant="ghost" onClick={()=>setStep(step-1)}><ChevronLeft/> Voltar</Button>:<span/>}{step<3?<Button type="button" className="rounded-full px-6" onClick={()=>setStep(step+1)}>Continuar <ArrowRight/></Button>:<Button type="submit" className="rounded-full px-6" disabled={status==='loading'}>{status==='loading'?<Loader2 className="animate-spin"/>:<Network/>} Entrar para a rede</Button>}</div>
            </form>}
          </div>
        </div>}

        {view==='dashboard' && <div className="rounded-[2rem] bg-[#f8f5ed] p-5 text-[#17372c] sm:p-8"><div className="flex flex-col justify-between gap-4 border-b border-[#ded8c9] pb-6 sm:flex-row sm:items-center"><div><p className="text-sm text-[#6c7b73]">Visão geral do ecossistema</p><h3 className="mt-1 text-2xl font-semibold">Painel Brasil</h3></div><span className="flex items-center gap-2 text-sm text-[#6c7b73]"><span className="size-2 rounded-full bg-emerald-500"/> Atualizado em tempo real</span></div><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[[displayedTotal,'Empreendedores',Users2],[stats.byState.length||18,'Estados',MapPin],[stats.bySegment.length||42,'Segmentos',BarChart3],['31%','Buscam IA',Globe2]].map(([value,label,Icon])=><article key={String(label)} className="rounded-2xl border border-[#e4ded0] bg-white p-5"><Icon className="size-5 text-[#ad853d]"/><strong className="mt-6 block text-3xl">{value}</strong><span className="mt-1 block text-sm text-[#6c7b73]">{String(label)}</span></article>)}</div><div className="mt-5 grid gap-5 lg:grid-cols-2"><Chart title="Presença por estado" data={demoStates}/><Chart title="Segmentos em destaque" data={demoSegments}/></div><p className="mt-5 text-center text-xs text-[#7b887f]">Enquanto a rede está em demonstração, o painel usa dados ilustrativos. Cadastros reais passam a alimentar os indicadores automaticamente.</p></div>}
      </div>
    </section>
    <footer id="visao" className="bg-[#0d241d] px-5 py-10 text-white/65 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center"><div className="flex items-center gap-3 text-white"><Network/><strong className="tracking-wider">EMPREENDEDORES DO REINO</strong></div><p className="text-sm">Negócios que transformam cidades. Pessoas que transformam o mundo.</p></div></footer>
  </>;
}

function Chart({title,data}:{title:string;data:{name:string;value:number}[]}){ const max=Math.max(...data.map(d=>Number(d.value)),1); return <article className="rounded-2xl border border-[#e4ded0] bg-white p-6"><h4 className="font-semibold">{title}</h4><div className="mt-6 space-y-4">{data.slice(0,5).map(d=><div key={d.name} className="grid grid-cols-[90px_1fr_36px] items-center gap-3 text-sm"><span className="truncate text-[#53645b]">{d.name}</span><span className="h-2 overflow-hidden rounded-full bg-[#edf0e9]"><span className="block h-full rounded-full bg-[#bd9349]" style={{width:`${Math.max(8,Number(d.value)/max*100)}%`}}/></span><strong className="text-right">{d.value}</strong></div>)}</div></article> }
