import type { Metadata } from 'next';
import { Geist, Lora } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });
const lora = Lora({ variable: '--font-lora', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://empreendedores-do-reino-brasil.gustavo-marques-lope.chatgpt.site',
  ),
  title: 'Empreendedores do Reino',
  description:
    'Uma rede do movimento Missio Empreendedor para líderes cristãos que unem propósito, inovação, expansão e conexões empresariais para transformar o mundo.',
  icons: { icon: '/brand-logo-symbol.png' },
  openGraph: {
    title: 'Empreendedores do Reino',
    description:
      'Propósito, inovação, expansão e conexões empresariais para transformar o mundo.',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Empreendedores do Reino — Propósito, inovação, conexões, expansão e impacto.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Empreendedores do Reino',
    description:
      'Propósito, inovação, expansão e conexões empresariais para transformar o mundo.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
