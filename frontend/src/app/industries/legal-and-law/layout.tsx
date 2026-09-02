import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing & Web Solutions for Law Firms | CoreUnity Solutions',
  description: 'Digital marketing and website development for law firms in Dubai, built to build trust, generate leads, and grow your practice.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
