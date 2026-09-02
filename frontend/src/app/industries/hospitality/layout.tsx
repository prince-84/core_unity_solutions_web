import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing & Web Solutions Hospitality | CoreUnity Solutions',
  description: 'Digital marketing and web development for hotels, restaurants, and hospitality brands in Dubai, built to drive bookings and brand loyalty.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
