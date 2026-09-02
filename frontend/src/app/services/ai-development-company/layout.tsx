import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Development Company in Dubai |CoreUnity Solutions',
  description: 'As a leading AI development company in Dubai, we build custom AI solutions that automate, optimize, and scale your business operations.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
