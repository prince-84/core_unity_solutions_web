import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing & Web Development Services | CoreUnity',
  description: 'Explore our services: web development, SEO, PPC, social media marketing, branding & AI solutions. Full-service digital agency serving Dubai & the UAE.',
  keywords: ['digital marketing services Dubai', 'web development services', 'SEO services Dubai', 'branding agency UAE'],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
