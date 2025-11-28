import Image from "next/image"; // Will be used for hero image and value icons

export default function Home() {
  const values = [
    { title: "SOLIDARNOŚĆ", description: "Odpowiadamy na potrzeby osób w kryzysie." },
    { title: "PARTNERSTWO", description: "Budujemy trwałe relacje, które zwielokrotniają wpływ." },
    { title: "ODWAGA", description: "Działamy tam, gdzie inni się wahają." },
    { title: "SKUTECZNOŚĆ", description: "Łączymy empatię z mierzalnymi rezultatami." },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary-main text-white py-20 px-4 flex flex-col items-center justify-center text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading mb-6 max-w-4xl leading-tight">
            Fundacja Przyjaźń bez Granic. Pomorski Hub współpracy międzynarodowej i działań humanitarnych
          </h1>
          <p className="text-lg md:text-xl font-body mb-8 max-w-3xl">
            Budujemy dwukierunkowe mosty między Pomorzem a światem – wspierając spójność społeczną w regionie i niosąc skuteczną pomoc humanitarną za granicą.
          </p>
          {/* Placeholder for Hero Image */}
          <div className="relative w-full max-w-4xl mx-auto h-64 md:h-96 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
            <span className="text-gray-300 text-xl">Placeholder dla grafiki Hero (Most/Mapa Pomorza)</span>
            {/* When actual image is available, uncomment and replace:
            <Image
              src="/images/hero-map.svg" // Example path, needs to be created
              alt="Abstrakcyjny symbol Mostu/Splotu na tle mapy Pomorza"
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
            */}
          </div>
        </div>
      </section>

      {/* Short Introduction Section (Optional - from spec, but not a separate todo yet) */}
      <section className="bg-neutral-bg py-16 px-4 text-primary-main">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading mb-6">Zorganizowana sprawczość</h2>
          <p className="text-lg font-body max-w-3xl mx-auto">
            Fundacja Przyjaźń bez Granic jest <strong className="font-semibold">niezależnym podmiotem</strong> o silnym etosie humanitarnym i zorganizowanym modelu działania. Łączymy empatię z efektywnością operacyjną, co zapewnia, że nasze działania są nie tylko potrzebne, ale i mierzalne. Nasza misja to <strong className="font-semibold">Solidarność</strong>, którą realizujemy w oparciu o najwyższe standardy, czyniąc nasze procesy transparentnymi i audytowalnymi.
          </p>
          {/* Placeholder for 3 icons */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent-main rounded-full flex items-center justify-center mb-2">
                <span className="text-white">🧑‍🤝‍🧑</span> {/* Placeholder Icon: Ludzie */}
              </div>
              <p className="text-sm font-body">Ludzie</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent-main rounded-full flex items-center justify-center mb-2">
                <span className="text-white">🌉</span> {/* Placeholder Icon: Most */}
              </div>
              <p className="text-sm font-body">Most</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent-main rounded-full flex items-center justify-center mb-2">
                <span className="text-white">🛡️</span> {/* Placeholder Icon: Tarcza */}
              </div>
              <p className="text-sm font-body">Profesjonalizm</p>
            </div>
          </div>
        </div>
      </section>


      {/* Key Values Section */}
      <section className="bg-white py-20 px-4 text-primary-main">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Nasze wartości - fundament działania</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-neutral-bg rounded-card shadow-soft">
                {/* Placeholder for Icon */}
                <div className="w-20 h-20 bg-accent-main rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-3xl">💡</span> {/* Generic Placeholder Icon */}
                </div>
                <h3 className="text-xl font-heading mb-2">{value.title}</h3>
                <p className="font-body text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
