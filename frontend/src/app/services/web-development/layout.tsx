import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Company in Dubai | CoreUnity Solutions',
  description: 'Custom web development services in Dubai built for speed, scalability, and results. From business websites to complex web apps — we build it right',
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
