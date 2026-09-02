import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Dubai | CoreUnity Solutions',
  description: 'Full-service digital marketing agency in Dubai. SEO, PPC, social media, and more. Strategies built to grow your brand and your bottom line',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
