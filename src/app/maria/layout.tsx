import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Maria',
  robots: { index: false, follow: false },
};

export default function MariaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
