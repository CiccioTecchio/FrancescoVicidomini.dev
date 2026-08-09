import App from "../src/App";

export const dynamic = "force-dynamic";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Francesco Vicidomini",
  url: "https://cicciotecchio.dev/",
  image: "https://cicciotecchio.dev/Propic-CV.jpg",
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
  mainEntityOfPage: "https://cicciotecchio.dev/",
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
