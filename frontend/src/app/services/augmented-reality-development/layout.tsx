import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AR Development Company in Dubai| CoreUnity Solutions',
  description: 'Custom augmented reality development in Dubai for interactive marketing, retail, and product experiences. Discover our AR development services.',
};

export default function AugmentedRealityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
