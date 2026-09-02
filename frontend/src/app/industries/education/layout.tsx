import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing & Web Solutions Education | CoreUnity Solutions',
  description: 'Digital marketing and web development for schools, universities, and training institutes in Dubai, built to attract and enroll students.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
