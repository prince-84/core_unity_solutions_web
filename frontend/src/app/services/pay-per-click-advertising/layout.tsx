import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PPC Advertising Agency in Dubai | CoreUnity Solutions',
  description: 'PPC management services in Dubai that turn ad spend into real ROI. Google Ads, Meta Ads, and full-funnel campaign management',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
