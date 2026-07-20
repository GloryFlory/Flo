import { Montserrat, Lora } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${montserrat.variable} ${lora.variable}`}>
      {children}
    </div>
  );
}
