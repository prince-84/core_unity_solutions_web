import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GEO Services in Dubai | CoreUnity Solutions',
  description: 'Stay visible as search evolves. Our GEO services in Dubai optimize your brand for AI search engines and generative answer platforms',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
