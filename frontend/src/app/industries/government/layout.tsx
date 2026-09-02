import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Solutions for Government & Public Sector | CoreUnity Solutions',
  description: 'Secure, accessible digital solutions for government entities in Dubai: websites, platforms, and technology built for public sector needs.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
