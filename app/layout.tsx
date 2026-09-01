import type { Metadata } from 'next';
import { Geist, Lora } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });
const lora = Lora({ variable: '--font-lora', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://empreendedores-do-reino-brasil.gustavo-marques-lope.chatgpt.site'),
  title: 'Empreendedores do Reino',
  description: 'Conecte seu negócio ao futuro com IA. Faça parte de uma rede nacional de empresários, oportunidades e transformação.',
  openGraph: {
    title: 'Empreendedores do Reino',
    description: 'Conecte seu negócio ao futuro com IA.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Empreendedores do Reino — Conecte seu negócio ao futuro com IA.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Empreendedores do Reino',
    description: 'Conecte seu negócio ao futuro com IA.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${geist.variable} ${lora.variable} antialiased`}>{children}</body></html>;
}
