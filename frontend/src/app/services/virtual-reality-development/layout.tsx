import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VR Development Company in Dubai | CoreUnity Solutions',
  description: 'Custom virtual reality development in Dubai for immersive training, marketing, and customer experiences. Explore our VR development services.',
};

export default function VirtualRealityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
