import Image from "next/image"; // Will be used for partner logos

export default function ContactPage() {
  // Placeholder data for partner logos (reusing from Footer logic for consistency)
  const partnerLogos = [
    { name: "Baltic Digital Institute", src: "/images/placeholders/bdi.svg", alt: "Baltic Digital Institute Logo" },
    { name: "Fundacja Pomorska", src: "/images/placeholders/fundacja-pomorska.svg", alt: "Fundacja Pomorska Logo" },
    { name: "Gmina Zdołbica", src: "/images/placeholders/gmina-zdolbica.svg", alt: "Gmina Zdołbica Logo" },
    { name: "Fundacja Viktoriia", src: "/images/placeholders/fundacja-viktoriia.svg", alt: "Fundacja Viktoriia Logo" },
    { name: "Stowarzyszenie Otwarte Kaszuby", src: "/images/placeholders/otwarte-kaszuby.svg", alt: "Stowarzyszenie Otwarte Kaszuby Logo" },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-heading text-primary-main text-center mb-12">Współpracuj / Kontakt</h1>

      {/* Partnerzy Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-heading text-primary-main text-center mb-6">Partnerzy</h2>
        <p className="text-lg font-body text-gray-700 text-center max-w-3xl mx-auto mb-8">
          Jesteśmy integralną częścią szerszego ekosystemu, który zapewnia nam stabilność, wsparcie technologiczne i regionalne zakorzenienie.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="w-28 h-20 bg-gray-600 flex items-center justify-center rounded-lg">
              {/* Placeholder for actual logo image */}
              <span className="text-xs text-center leading-tight p-1 text-white">{logo.name}</span>
              {/* When actual images are available, replace the span with:
              <Image
                src={logo.src}
                alt={logo.alt}
                width={112} // Tailwind w-28 = 112px
                height={80}  // Tailwind h-20 = 80px
                objectFit="contain"
              />
              */}
            </div>
          ))}
        </div>
      </section>

      {/* Kontakt Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-heading text-primary-main text-center mb-6">Skontaktuj się z Pomorskim Hubem</h2>
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 text-lg font-body text-gray-700">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="mb-2"><strong className="font-semibold">Adres:</strong> 80-321 Gdańsk, ul. Hołdu Pruskiego 6</p>
            <p className="mb-2"><strong className="font-semibold">E-mail:</strong> biuro@fpbg.org (placeholder)</p>
            <p className="mb-2"><strong className="font-semibold">Telefon:</strong> +48 XXX XXX XXX (placeholder)</p>
          </div>
          <div className="md:w-1/2 w-full h-64 bg-neutral-bg flex items-center justify-center rounded-card shadow-soft">
            <span className="text-gray-500">Placeholder: Statyczna mapa dojazdu</span>
            {/* Replace with actual map embed or static image of map */}
          </div>
        </div>
      </section>
    </main>
  );
}
