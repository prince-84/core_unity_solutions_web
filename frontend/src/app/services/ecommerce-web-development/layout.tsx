import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ecommerce Website Development Company in Dubai | CoreUnity Solutions',
  description: 'Custom ecommerce website development in Dubai across Shopify, WooCommerce, and Magento. Built for seamless shopping experiences and higher conversions',
};

export default function EcommerceWebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
