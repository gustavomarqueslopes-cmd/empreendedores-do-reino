import type { Metadata } from 'next';
import { Geist, Lora } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });
const lora = Lora({ variable: '--font-lora', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Empreendedores do Reino',
  description: 'Uma rede brasileira de empreendedores conectada a oportunidades globais.',
  openGraph: {
    title: 'Empreendedores do Reino',
    description: 'Negócios com propósito. Impacto real.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Empreendedores do Reino',
    description: 'Negócios com propósito. Impacto real.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${geist.variable} ${lora.variable} antialiased`}>{children}</body></html>;
}
