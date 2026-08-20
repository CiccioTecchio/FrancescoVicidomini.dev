import App from "../src/App";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://francescovicidomini.dev/#website",
      url: "https://francescovicidomini.dev/",
      name: "Francesco Vicidomini",
      alternateName: ["CiccioTecchio", "CiccioTecchio.dev"],
      publisher: { "@id": "https://francescovicidomini.dev/#person" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://francescovicidomini.dev/#profile-page",
      url: "https://francescovicidomini.dev/",
      name: "Francesco Vicidomini | Front-End Developer",
      isPartOf: { "@id": "https://francescovicidomini.dev/#website" },
      mainEntity: { "@id": "https://francescovicidomini.dev/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://francescovicidomini.dev/#person",
      name: "Francesco Vicidomini",
      alternateName: "CiccioTecchio",
      url: "https://francescovicidomini.dev/",
      image: "https://francescovicidomini.dev/Propic-CV.jpg",
      email: "mailto:fr.vicidomini94@gmail.com",
      telephone: "+39 327 5684733",
      jobTitle: "Front-End Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Salerno",
        addressCountry: "IT",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Università degli Studi di Salerno",
      },
      knowsAbout: [
        "Angular",
        "RxJS",
        "TypeScript",
        "React",
        "NgRx",
        "Front-end architecture",
        "UI/UX",
        "Web performance",
        "Cybersecurity applications",
      ],
      sameAs: [
        "https://github.com/CiccioTecchio",
        "https://www.linkedin.com/in/francesco-vicidomini/",
      ],
      mainEntityOfPage: {
        "@id": "https://francescovicidomini.dev/#profile-page",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <App />
    </>
  );
}
