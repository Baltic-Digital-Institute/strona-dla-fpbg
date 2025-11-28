"use client";

import Link from "next/link";
// import Image from "next/image"; // Uncomment when actual images are used

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Placeholder data for grantor logos
  const grantorLogos = [
    { name: "Baltic Digital Institute", src: "/images/placeholders/bdi.svg", alt: "Baltic Digital Institute Logo" },
    { name: "Fundacja Pomorska", src: "/images/placeholders/fundacja-pomorska.svg", alt: "Fundacja Pomorska Logo" },
    { name: "Gmina Zdołbica", src: "/images/placeholders/gmina-zdolbica.svg", alt: "Gmina Zdołbica Logo" },
    { name: "Fundacja Viktoriia", src: "/images/placeholders/fundacja-viktoriia.svg", alt: "Fundacja Viktoriia Logo" },
    { name: "Stowarzyszenie Otwarte Kaszuby", src: "/images/placeholders/otwarte-kaszuby.svg", alt: "Stowarzyszenie Otwarte Kaszuby Logo" },
  ];

  return (
    <footer className="bg-primary-main text-white py-8">
      <div className="container mx-auto px-4">
        {/* Grantor Logos Section */}
        <div className="mb-8 border-b border-gray-700 pb-6">
          <h3 className="text-center text-lg font-heading mb-4">Nasi Partnerzy i Grantodawcy</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {grantorLogos.map((logo, index) => (
              <div key={index} className="w-24 h-16 bg-gray-600 flex items-center justify-center rounded-lg">
                {/* Placeholder for actual logo image */}
                <span className="text-xs text-center leading-tight p-1">{logo.name}</span>
                {/* When actual images are available, replace the span with:
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={96} // Adjust width as needed
                  height={64} // Adjust height as needed
                  objectFit="contain"
                />
                */}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-body">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {currentYear} Fundacja Przyjaźń bez Granic. Wszelkie prawa zastrzeżone.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/polityka-prywatnosci" className="hover:text-accent-main">
              Polityka Prywatności
            </Link>
            <Link href="/deklaracja-dostepnosci" className="hover:text-accent-main">
              Deklaracja Dostępności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
