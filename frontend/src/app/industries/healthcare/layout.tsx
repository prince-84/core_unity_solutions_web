import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing & Web Solutions Healthcare | CoreUnity Solutions',
  description: 'Healthcare digital marketing and web development in Dubai. Patient-friendly websites, SEO, and marketing built for clinics and hospitals.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
