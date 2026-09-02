import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UI/UX Design Services in Dubai | CoreUnity Solutions',
  description: "User-centered UI/UX design services in Dubai that make digital products intuitive, engaging, and built to convert. Let's design experiences people love.",
};

export default function UiUxDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
