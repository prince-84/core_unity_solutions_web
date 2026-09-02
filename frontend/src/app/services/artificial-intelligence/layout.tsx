import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artificial Intelligence Development Company in Dubai | CoreUnity Solutions',
  description: 'Custom AI solutions in Dubai that automate processes, unlock insights, and drive smarter business decisions. Explore our AI development services.',
};

export default function ArtificialIntelligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
