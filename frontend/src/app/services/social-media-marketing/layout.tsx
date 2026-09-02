import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency in Dubai | CoreUnity Solutions',
  description: 'Social media marketing services in Dubai that build community, boost engagement, and turn followers into customers. See how we can help.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
