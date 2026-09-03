'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronLeft,
  Loader2,
  Network,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NativeSelect } from '@/components/ui/native-select';
import { Textarea } from '@/components/ui/textarea';

const states = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];

const segments = [
  'Tecnologia',
  'Comércio',
  'Serviços',
  'Saúde',
  'Educação',
  'Construção',
  'Agronegócio',
  'Alimentação',
  'Consultoria',
  'Indústria',
  'Outro',
];

const challenges = [
  'Aquisição de clientes',
  'Gestão',
  'Tecnologia',
  'Processos',
  'Pessoas',
  'Finanças',
  'Expansão',
  'Internacionalização',
  'Outro',
];

const initial = {
  name: '',
  email: '',
  phone: '',
  city: '',
  state: '',
  company: '',
  role: '',
  segment: '',
  companySize: '',
  employeeCount: '',
  yearsInBusiness: '',
  businessModel: '',
  website: '',
  challenge: '',
  aiMaturity: '',
  seeks: '',
  offers: '',
};

type FormData = typeof initial;

const stepLabels = [
  'Você e seus contatos',
  'Identidade do negócio',
  'Momento e desafios',
  'Conexões de valor',
];

const stepTitles = [
  'Quem é você?',
  'Conte sobre o seu negócio',
  'Qual é o momento da empresa?',
  'Que conexão faria diferença agora?',
];

const requiredByStep: Record<number, (keyof FormData)[]> = {
  1: ['name', 'email', 'phone', 'city', 'state'],
  2: ['company', 'role', 'segment'],
  3: [
    'companySize',
    'employeeCount',
    'yearsInBusiness',
    'businessModel',
    'challenge',
    'aiMaturity',
  ],
  4: ['seeks', 'offers'],
};

const fieldLabels: Record<keyof FormData, string> = {
  name: 'nome completo',
  email: 'e-mail',
  phone: 'WhatsApp',
  city: 'cidade',
  state: 'estado',
  company: 'empresa',
  role: 'cargo ou função',
  segment: 'segmento',
  companySize: 'tamanho da empresa',
  employeeCount: 'número de colaboradores',
  yearsInBusiness: 'tempo de mercado',
  businessModel: 'modelo de negócio',
  website: 'site ou rede social',
  challenge: 'maior desafio',
  aiMaturity: 'uso de inteligência artificial',
  seeks: 'o que procura na rede',
  offers: 'o que pode oferecer à rede',
};

type SelectFieldProps = {
  label: string;
  name: keyof FormData;
  value: string;
  options: string[];
  onChange: (name: keyof FormData, value: string) => void;
  hint?: string;
};

function SelectField({
  label,
  name,
  value,
  options,
  onChange,
  hint,
}: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      {hint ? <p className="text-xs leading-5 text-slate-500">{hint}</p> : null}
      <NativeSelect
        className="w-full"
        id={name}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        required
      >
        <option value="">Selecione uma opção</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </NativeSelect>
    </div>
  );
}

export function PlatformSections() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initial);
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState('');
  const [stepError, setStepError] = useState('');

  const change = (name: keyof FormData, value: string) => {
    setData((previous) => ({ ...previous, [name]: value }));
    setStepError('');
    if (status === 'error') setStatus('idle');
  };

  const focusField = (field: keyof FormData) => {
    window.setTimeout(() => document.getElementById(field)?.focus(), 0);
  };

  const validateStep = (stepNumber: number) => {
    const missing = requiredByStep[stepNumber].filter(
      (key) => !data[key].trim(),
    );

    if (missing.length) {
      const labels = missing.map((key) => fieldLabels[key]);
      setStepError(`Falta preencher: ${labels.join(', ')}.`);
      focusField(missing[0]);
      return false;
    }

    if (stepNumber === 1 && !/^\S+@\S+\.\S+$/.test(data.email)) {
      setStepError('Digite um e-mail válido para continuar.');
      focusField('email');
      return false;
    }

    setStepError('');
    return true;
  };

  const next = () => {
    if (validateStep(step)) setStep((current) => current + 1);
  };

  const finishSuccessfully = () => {
    setStatus('success');
    setData(initial);
    setStepError('');
  };

  const submit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const invalidStep = Object.keys(requiredByStep)
      .map(Number)
      .find((stepNumber) =>
        requiredByStep[stepNumber].some((key) => !data[key].trim()),
      );

    if (invalidStep) {
      setStep(invalidStep);
      window.setTimeout(() => validateStep(invalidStep), 0);
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      setStep(1);
      setStepError('Digite um e-mail válido para concluir.');
      focusField('email');
      return;
    }

    setStatus('loading');
    setMessage('');

    const isGitHubPages =
      typeof window !== 'undefined' &&
      window.location.hostname.endsWith('.github.io');
    const apiUrl = isGitHubPages
      ? 'https://empreendedores-do-reino-brasil.gustavo-marques-lope.chatgpt.site/api/entrepreneurs'
      : '/api/entrepreneurs';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const body = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (response.ok) {
        finishSuccessfully();
        return;
      }

      setStatus('error');
      setMessage(body.error || 'Não foi possível concluir o cadastro.');
    } catch {
      if (isGitHubPages) {
        try {
          await fetch(apiUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
            body: JSON.stringify(data),
          });
          finishSuccessfully();
          return;
        } catch {
          // A mensagem de recuperação abaixo orienta o usuário sem perder as respostas na tela.
        }
      }

      setStatus('error');
      setMessage(
        'A conexão falhou. Suas respostas continuam aqui; aguarde alguns segundos e tente novamente.',
      );
    }
  };

  return (
    <section
      id="cadastro"
      className="relative overflow-hidden bg-[#091520] px-5 py-24 text-white sm:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(239,182,103,.09),transparent_28%),radial-gradient(circle_at_90%_70%,rgba(75,120,190,.08),transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[.2em] text-[#efb667]">
              Seu próximo passo
            </span>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Entre no mapa da nova geração de empreendedores.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-white/55">
              Responda ao cadastro completo em cerca de três minutos. Suas
              respostas ajudam a rede a entender seu negócio, seus desafios e as
              conexões que podem gerar valor.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs text-white/60">
            <ShieldCheck className="size-4 text-[#efb667]" /> Dados de contato
            protegidos
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[.36fr_.64fr]">
          <aside className="rounded-3xl border border-white/10 bg-white/[.035] p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-white/50">Seu progresso</p>
              <span className="rounded-full bg-[#efb667]/10 px-3 py-1 text-xs font-semibold text-[#efb667]">
                17 respostas
              </span>
            </div>
            <div className="mt-6 space-y-5">
              {stepLabels.map((label, index) => (
                <div key={label} className="flex items-center gap-3">
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-full border ${
                      step > index + 1
                        ? 'border-[#efb667] bg-[#efb667] text-[#15100a]'
                        : step === index + 1
                          ? 'border-white bg-white text-[#071018]'
                          : 'border-white/15 text-white/35'
                    }`}
                  >
                    {step > index + 1 ? (
                      <Check className="size-4" />
                    ) : (
                      index + 1
                    )}
                  </span>
                  <span
                    className={
                      step === index + 1 ? 'text-white' : 'text-white/45'
                    }
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10 border-t border-white/8 pt-6">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#efb667]">
                O que nasce daqui
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/50">
                <li>• Seu perfil no mapa do ecossistema</li>
                <li>• Leitura de maturidade e necessidades</li>
                <li>• Base para futuras conexões de valor</li>
              </ul>
            </div>
          </aside>

          <div className="rounded-3xl bg-[#fbfaf6] p-6 text-[#102c32] shadow-[0_35px_100px_rgba(0,0,0,.24)] sm:p-9">
            {status === 'success' ? (
              <div className="grid min-h-[500px] place-items-center text-center">
                <div>
                  <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-[#07111c] text-[#efb667]">
                    <Check />
                  </span>
                  <h3 className="mt-6 text-3xl font-semibold">
                    Cadastro enviado.
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-slate-600">
                    Recebemos as informações do seu negócio. A partir daqui, a
                    rede poderá aproximar você de oportunidades, conteúdos e
                    conexões mais relevantes.
                  </p>
                  <Button
                    className="mt-7 rounded-xl px-6"
                    onClick={() => {
                      setStatus('idle');
                      setStep(1);
                    }}
                  >
                    Novo cadastro
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="mb-7 flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#9b682b]">
                      Etapa {step} de {stepLabels.length}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">
                      {stepTitles[step - 1]}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      Todos os campos são obrigatórios, exceto quando indicado.
                    </p>
                  </div>
                  <span className="rounded-full bg-[#e9f1ef] px-3 py-1 text-sm font-semibold text-[#123b43]">
                    {Math.round((step / stepLabels.length) * 100)}%
                  </span>
                </div>

                {step === 1 ? (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="name">Nome completo</Label>
                      <Input
                        id="name"
                        autoComplete="name"
                        value={data.name}
                        onChange={(event) => change('name', event.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={data.email}
                        onChange={(event) =>
                          change('email', event.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">WhatsApp</Label>
                      <Input
                        id="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="(61) 99999-9999"
                        value={data.phone}
                        onChange={(event) =>
                          change('phone', event.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade</Label>
                      <Input
                        id="city"
                        autoComplete="address-level2"
                        value={data.city}
                        onChange={(event) => change('city', event.target.value)}
                        required
                      />
                    </div>
                    <SelectField
                      label="Estado"
                      name="state"
                      value={data.state}
                      options={states}
                      onChange={change}
                    />
                  </div>
                ) : null}

                {step === 2 ? (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        autoComplete="organization"
                        value={data.company}
                        onChange={(event) =>
                          change('company', event.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Cargo ou função</Label>
                      <Input
                        id="role"
                        autoComplete="organization-title"
                        value={data.role}
                        onChange={(event) => change('role', event.target.value)}
                        required
                      />
                    </div>
                    <SelectField
                      label="Segmento de atuação"
                      name="segment"
                      value={data.segment}
                      options={segments}
                      onChange={change}
                    />
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="website">
                        Site, Instagram ou LinkedIn (opcional)
                      </Label>
                      <Input
                        id="website"
                        inputMode="url"
                        placeholder="https:// ou @seuperfil"
                        value={data.website}
                        onChange={(event) =>
                          change('website', event.target.value)
                        }
                      />
                    </div>
                  </div>
                ) : null}

                {step === 3 ? (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <SelectField
                      label="Tamanho da empresa"
                      name="companySize"
                      value={data.companySize}
                      options={[
                        'Só eu',
                        '2 a 10 pessoas',
                        '11 a 50 pessoas',
                        '51 a 200 pessoas',
                        'Mais de 200 pessoas',
                      ]}
                      onChange={change}
                    />
                    <div className="space-y-2">
                      <Label htmlFor="employeeCount">
                        Número aproximado de colaboradores
                      </Label>
                      <p className="text-xs leading-5 text-slate-500">
                        Inclua você na contagem.
                      </p>
                      <Input
                        id="employeeCount"
                        type="number"
                        inputMode="numeric"
                        min="1"
                        placeholder="Ex.: 12"
                        value={data.employeeCount}
                        onChange={(event) =>
                          change('employeeCount', event.target.value)
                        }
                        required
                      />
                    </div>
                    <SelectField
                      label="Tempo de mercado"
                      name="yearsInBusiness"
                      value={data.yearsInBusiness}
                      options={[
                        'Em fase de lançamento',
                        'Menos de 1 ano',
                        '1 a 3 anos',
                        '4 a 7 anos',
                        '8 a 15 anos',
                        'Mais de 15 anos',
                      ]}
                      onChange={change}
                    />
                    <SelectField
                      label="Para quem sua empresa vende?"
                      name="businessModel"
                      value={data.businessModel}
                      options={[
                        'B2B — para outras empresas',
                        'B2C — direto para o consumidor',
                        'B2B e B2C — para empresas e consumidores',
                        'Terceiro setor — organizações sociais',
                      ]}
                      hint="Você não precisa conhecer as siglas: escolha a descrição que combina com o negócio."
                      onChange={change}
                    />
                    <SelectField
                      label="Qual é hoje o maior desafio do seu negócio?"
                      name="challenge"
                      value={data.challenge}
                      options={challenges}
                      onChange={change}
                    />
                    <SelectField
                      label="Como sua empresa utiliza inteligência artificial hoje?"
                      name="aiMaturity"
                      value={data.aiMaturity}
                      options={[
                        'Ainda não utiliza',
                        'Uso individual em tarefas pontuais',
                        'Já possui algumas automações',
                        'IA integrada aos processos',
                        'IA faz parte do modelo de negócio',
                      ]}
                      onChange={change}
                    />
                  </div>
                ) : null}

                {step === 4 ? (
                  <div className="grid gap-5">
                    <SelectField
                      label="O que você procura nesta rede?"
                      name="seeks"
                      value={data.seeks}
                      options={[
                        'Parcerias',
                        'Clientes',
                        'Fornecedores',
                        'Mentoria',
                        'Investidores',
                        'Tecnologia',
                        'Internacionalização',
                        'Capacitação',
                        'Networking',
                        'Impacto social',
                      ]}
                      onChange={change}
                    />
                    <div className="space-y-2">
                      <Label htmlFor="offers">
                        O que você pode oferecer à rede?
                      </Label>
                      <Textarea
                        id="offers"
                        value={data.offers}
                        onChange={(event) =>
                          change('offers', event.target.value)
                        }
                        placeholder="Conte brevemente sobre sua experiência, conexões, serviços ou recursos..."
                        required
                        className="min-h-32"
                      />
                    </div>
                    <p className="rounded-2xl bg-[#e9f1ef] p-4 text-sm leading-6 text-slate-600">
                      Ao concluir, você autoriza o uso destes dados para
                      organização da rede e geração de indicadores agregados.
                      Seus dados de contato não aparecem no painel público.
                    </p>
                  </div>
                ) : null}

                {stepError ? (
                  <p
                    className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-950"
                    role="alert"
                  >
                    {stepError}
                  </p>
                ) : null}
                {status === 'error' ? (
                  <p
                    className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                    role="alert"
                  >
                    {message}
                  </p>
                ) : null}

                <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
                  {step > 1 ? (
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => {
                        setStepError('');
                        setStep((current) => current - 1);
                      }}
                    >
                      <ChevronLeft /> Voltar
                    </Button>
                  ) : (
                    <span />
                  )}
                  {step < stepLabels.length ? (
                    <Button
                      type="button"
                      className="h-11 rounded-xl bg-[#123b43] px-6 text-white hover:bg-[#0a2c32]"
                      onClick={next}
                    >
                      Continuar <ArrowRight />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="h-11 rounded-xl bg-[#123b43] px-6 text-white hover:bg-[#0a2c32]"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <Network />
                      )}{' '}
                      {status === 'loading'
                        ? 'Enviando...'
                        : 'Concluir cadastro'}
                    </Button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
