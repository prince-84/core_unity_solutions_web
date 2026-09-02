import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development Company in Dubai | CoreUnity Solutions',
  description: 'Custom iOS and Android app development in Dubai, built for performance, usability, and business growth. Turn your app idea into reality.',
};

export default function MobileAppDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
