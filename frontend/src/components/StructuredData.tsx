import React from "react";

export function StructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.coreunitysolutions.com/#website",
    "url": "https://www.coreunitysolutions.com/",
    "name": "CoreUnity Solutions",
    "publisher": {
      "@id": "https://www.coreunitysolutions.com/#organization"
    },
    "inLanguage": "en"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.coreunitysolutions.com/#organization",
    "name": "CoreUnity Solutions",
    "url": "https://www.coreunitysolutions.com/",
    "logo": "https://www.coreunitysolutions.com/wp-content/uploads/2026/08/coreunity-logo.png",
    "email": "contact@coreunitysolutions.com",
    "telephone": "+971505559646",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Churchill Tower, Business Bay",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "sameAs": [
      "https://www.facebook.com/coreunitysolutions",
      "https://www.instagram.com/coreunitysolutions/",
      "https://www.youtube.com/@coreunitysolutions",
      "https://www.linkedin.com/company/coreunitysolutions",
      "https://www.tiktok.com/@coreunitysolutions"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
