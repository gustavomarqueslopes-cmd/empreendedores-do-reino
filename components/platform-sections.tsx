'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, Check, ChevronLeft, Loader2, Network, ShieldCheck } from 'lucide-react';
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
const requiredByStep: Record<number, (keyof FormData)[]> = {
  1: ['name','email','phone','city','state','company','role'],
  2: ['segment','companySize','businessModel','challenge','aiMaturity'],
  3: ['seeks','offers'],
};

function SelectField({ label, name, value, options, onChange }: { label:string; name:keyof FormData; value:string; options:string[]; onChange:(name:keyof FormData,value:string)=>void }) {
  return <div className="space-y-2"><Label htmlFor={name}>{label}</Label><NativeSelect className="w-full" id={name} value={value} onChange={(e)=>onChange(name,e.target.value)} required><option value="">Selecione</option>{options.map(o=><option key={o} value={o}>{o}</option>)}</NativeSelect></div>;
}

export function PlatformSections() {
  const [step,setStep] = useState(1);
  const [data,setData] = useState<FormData>(initial);
  const [status,setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [message,setMessage] = useState('');
  const [stepError,setStepError] = useState('');
  const change=(name:keyof FormData,value:string)=>{ setData(prev=>({...prev,[name]:value})); setStepError(''); };
  const next=()=>{ const missing=requiredByStep[step].some(key=>!data[key].trim()); if(missing){setStepError('Preencha os campos obrigatórios para continuar.');return;} setStepError('');setStep(step+1); };
  const submit=async(e:FormEvent)=>{
    e.preventDefault();
    const missing=Object.values(requiredByStep).flat().some(key=>!data[key].trim());
    if(missing){setStepError('Revise os campos obrigatórios antes de concluir.');return;}
    setStatus('loading');setMessage('');
    try {
      const apiUrl=typeof window!=='undefined'&&window.location.hostname.endsWith('.github.io')
        ? 'https://empreendedores-do-reino-brasil.gustavo-marques-lope.chatgpt.site/api/entrepreneurs'
        : '/api/entrepreneurs';
      const response=await fetch(apiUrl,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
      const body=await response.json();
      if(response.ok){setStatus('success');setData(initial);setStepError('');}
      else{setStatus('error');setMessage(body.error||'Não foi possível concluir.');}
    } catch {
      setStatus('error');setMessage('A conexão falhou. Tente novamente em instantes.');
    }
  };

  return <>
    <section id="cadastro" className="relative overflow-hidden bg-[#091520] px-5 py-24 text-white sm:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(239,182,103,.09),transparent_28%),radial-gradient(circle_at_90%_70%,rgba(75,120,190,.08),transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><span className="text-sm font-semibold uppercase tracking-[.2em] text-[#efb667]">Seu próximo passo</span><h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">Entre no mapa da nova geração de empreendedores.</h2><p className="mt-4 max-w-xl leading-7 text-white/50">Em cerca de três minutos, apresente seu negócio, seu desafio e o valor que pode oferecer. Isso cria a base para diagnósticos, conteúdos e conexões com mais contexto.</p></div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs text-white/55"><ShieldCheck className="size-4 text-[#efb667]" /> Seus dados ficam protegidos</div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[.36fr_.64fr]">
          <aside className="rounded-3xl border border-white/10 bg-white/[.035] p-7"><p className="text-sm text-white/45">Seu progresso</p><div className="mt-6 space-y-5">{['Você e sua empresa','Momento do negócio','Conexões de valor'].map((label,i)=><div key={label} className="flex items-center gap-3"><span className={`grid size-9 place-items-center rounded-full border ${step>i+1?'border-[#efb667] bg-[#efb667] text-[#15100a]':step===i+1?'border-white bg-white text-[#071018]':'border-white/15 text-white/35'}`}>{step>i+1?<Check className="size-4"/>:i+1}</span><span className={step===i+1?'text-white':'text-white/45'}>{label}</span></div>)}</div><div className="mt-10 border-t border-white/8 pt-6"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#efb667]">O que nasce daqui</p><ul className="mt-4 space-y-3 text-sm leading-6 text-white/48"><li>• Seu perfil no mapa do ecossistema</li><li>• Leitura de maturidade e necessidades</li><li>• Base para futuras conexões de valor</li></ul></div></aside>
          <div className="rounded-3xl bg-[#fbfaf6] p-6 text-[#102c32] shadow-[0_35px_100px_rgba(0,0,0,.24)] sm:p-9">
            {status==='success' ? <div className="grid min-h-[440px] place-items-center text-center"><div><span className="mx-auto grid size-16 place-items-center rounded-2xl bg-[#07111c] text-[#efb667]"><Check /></span><h3 className="mt-6 text-3xl font-semibold">Cadastro concluído.</h3><p className="mx-auto mt-3 max-w-md text-slate-600">Seu negócio já faz parte do mapa. A partir daqui, a rede poderá aproximar você de oportunidades, conteúdos e conexões mais relevantes.</p><Button className="mt-7 rounded-xl px-6" onClick={()=>{setStatus('idle');setStep(1)}}>Novo cadastro</Button></div></div> :
            <form onSubmit={submit}>
              <div className="mb-7 flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#9b682b]">Etapa {step} de 3</p><h3 className="mt-2 text-2xl font-semibold">{step===1?'Quem é você e sua empresa?':step===2?'Qual é o momento do seu negócio?':'Que conexão faria diferença agora?'}</h3></div><span className="text-sm text-slate-500">{Math.round(step/3*100)}%</span></div>
              {step===1 && <div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2 sm:col-span-2"><Label htmlFor="name">Nome completo</Label><Input id="name" value={data.name} onChange={e=>change('name',e.target.value)} required/></div><div className="space-y-2"><Label htmlFor="email">E-mail</Label><Input id="email" type="email" value={data.email} onChange={e=>change('email',e.target.value)} required/></div><div className="space-y-2"><Label htmlFor="phone">WhatsApp</Label><Input id="phone" value={data.phone} onChange={e=>change('phone',e.target.value)} required/></div><div className="space-y-2"><Label htmlFor="city">Cidade</Label><Input id="city" value={data.city} onChange={e=>change('city',e.target.value)} required/></div><SelectField label="Estado" name="state" value={data.state} options={states} onChange={change}/><div className="space-y-2"><Label htmlFor="company">Empresa</Label><Input id="company" value={data.company} onChange={e=>change('company',e.target.value)} required/></div><div className="space-y-2"><Label htmlFor="role">Cargo ou função</Label><Input id="role" value={data.role} onChange={e=>change('role',e.target.value)} required/></div></div>}
              {step===2 && <div className="grid gap-5 sm:grid-cols-2"><SelectField label="Segmento" name="segment" value={data.segment} options={segments} onChange={change}/><SelectField label="Tamanho da empresa" name="companySize" value={data.companySize} options={['Só eu','2 a 10 pessoas','11 a 50 pessoas','51 a 200 pessoas','Mais de 200 pessoas']} onChange={change}/><SelectField label="Modelo de negócio" name="businessModel" value={data.businessModel} options={['B2B','B2C','B2B e B2C','Terceiro setor']} onChange={change}/><SelectField label="Maior desafio atual" name="challenge" value={data.challenge} options={challenges} onChange={change}/><div className="sm:col-span-2"><SelectField label="Como sua empresa utiliza inteligência artificial?" name="aiMaturity" value={data.aiMaturity} options={['Não utiliza','Uso individual','Algumas automações','Integrada aos processos','IA faz parte do modelo de negócio']} onChange={change}/></div><div className="space-y-2 sm:col-span-2"><Label htmlFor="website">Site, Instagram ou LinkedIn (opcional)</Label><Input id="website" value={data.website} onChange={e=>change('website',e.target.value)}/></div></div>}
              {step===3 && <div className="grid gap-5"><SelectField label="O que você procura nesta rede?" name="seeks" value={data.seeks} options={['Parcerias','Clientes','Fornecedores','Mentoria','Investidores','Tecnologia','Internacionalização','Capacitação','Networking','Impacto social']} onChange={change}/><div className="space-y-2"><Label htmlFor="offers">O que você pode oferecer à rede?</Label><Textarea id="offers" value={data.offers} onChange={e=>change('offers',e.target.value)} placeholder="Conte brevemente sobre sua experiência, conexões ou recursos..." required className="min-h-32"/></div><p className="rounded-2xl bg-[#e9f1ef] p-4 text-sm leading-6 text-slate-600">Ao concluir, você autoriza o uso destes dados para organização da rede e geração de indicadores agregados. Seus dados de contato não aparecem no painel público.</p></div>}
              {stepError&&<p className="mt-5 rounded-xl bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900" role="alert">{stepError}</p>}
              {status==='error'&&<p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{message}</p>}
              <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">{step>1?<Button type="button" variant="ghost" onClick={()=>{setStepError('');setStep(step-1)}}><ChevronLeft/> Voltar</Button>:<span/>}{step<3?<Button type="button" className="h-11 rounded-xl bg-[#123b43] px-6 text-white hover:bg-[#0a2c32]" onClick={next}>Continuar <ArrowRight/></Button>:<Button type="submit" className="h-11 rounded-xl bg-[#123b43] px-6 text-white hover:bg-[#0a2c32]" disabled={status==='loading'}>{status==='loading'?<Loader2 className="animate-spin"/>:<Network/>} Concluir cadastro</Button>}</div>
            </form>}
          </div>
        </div>
      </div>
    </section>
  </>;
}
