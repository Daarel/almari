import './globals.css';

import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';

import { cn } from '@/lib/utils';

const bricolage_Grotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['300', '800'],
  display: 'swap',
  variable: '--font-bricolage-grotesque',
});

export const metadata: Metadata = {
  title: 'Gleam',
  description:
    'Sebuah e-commerce pakaian (baju, celana, dress) di mana pengguna bisa mengunggah foto mereka untuk mencoba pakaian. Di balik layar, sistem akan menyimulasikan proses AI (VTO) menggunakan arsitektur background job dan polling atau WebSockets, menunjukkan bahwa Anda paham cara menangani long-running tasks di dunia nyata.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={cn(bricolage_Grotesque.variable)}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
