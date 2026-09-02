import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Branding Agency in Dubai | CoreUnity Solutions',
  description: 'Branding and creative design services in Dubai that give your business a distinctive, memorable identity, from logo to full brand strategy',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
