import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Influencer Marketing Agency in Dubai | CoreUnity Solutions',
  description: 'Influencer marketing services in Dubai that connect your brand with the right voices, driving authentic reach, trust, and conversions',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
