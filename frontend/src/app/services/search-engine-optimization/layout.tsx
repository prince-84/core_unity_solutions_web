import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Services in Dubai | CoreUnity Solutions',
  description: 'SEO services in Dubai that drive real organic growth: technical SEO, content, and link building strategies built to rank and convert.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
