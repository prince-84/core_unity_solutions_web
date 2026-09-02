import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing & Technology Solutions FinTech | CoreUnity Solution',
  description: 'Digital marketing and technology solutions for fintech companies in Dubai. Websites, apps, and campaigns built for trust and growth.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
