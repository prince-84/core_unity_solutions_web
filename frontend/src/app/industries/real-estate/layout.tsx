import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing & Web Solutions for Real Estate | CoreUnity Solutions',
  description: 'Digital marketing and technology solutions for real estate brands in Dubai :websites, virtual tours, PPC, and lead generation that convert.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
