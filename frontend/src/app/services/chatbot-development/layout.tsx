import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chatbot Development Services in Dubai | CoreUnity Solutions',
  description: 'Custom AI chatbot development in Dubai for smarter customer support, lead generation, and 24/7 engagement. Built for your business, not a template.',
};

export default function ChatbotDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
