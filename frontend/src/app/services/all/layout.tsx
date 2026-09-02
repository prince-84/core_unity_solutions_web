import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Marketing Services in Dubai | CoreUnity Solutions',
  description: 'Drive growth with Facebook, X, Instagram, and LinkedIn marketing services in Dubai. CoreUnity Solutions delivers targeted campaigns and measurable results.',
};

export default function AllServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
