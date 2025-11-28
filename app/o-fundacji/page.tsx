import Image from "next/image";
import Link from "next/link";

export default function AboutFoundationPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-heading text-primary-main text-center mb-12">O Fundacji</h1>

      {/* Misja i Wizja Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-heading text-primary-main mb-6">Pomorski Hub współpracy międzynarodowej</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg font-body text-gray-700 mb-4">
              <strong className="font-semibold">Misja:</strong> Fundacja Przyjaźń bez Granic buduje dwukierunkowe mosty między Pomorzem a światem. Wewnętrznie tworzymy spójne społeczeństwo. Zewnętrznie - jesteśmy bramą dla współpracy międzynarodowej i kanałem pomocy humanitarnej.
            </p>
            <p className="text-lg font-body text-gray-700">
              <strong className="font-semibold">Wizja:</strong> Pomorze jako rozpoznawalny w regionie Morza Bałtyckiego lider solidarności i globalnego zaangażowania.
            </p>
          </div>
          <div className="bg-neutral-bg h-64 flex items-center justify-center rounded-card shadow-soft">
            <span className="text-gray-500">Placeholder: Zdjęcie Zarządu i zespołu</span>
            {/* Replace with actual image:
            <Image
              src="/images/zarzad-zespol.webp"
              alt="Profesjonalne zdjęcie Zarządu i zespołu Fundacji"
              width={600}
              height={400}
              objectFit="cover"
              className="rounded-card"
            />
            */}
          </div>
        </div>
      </section>

      {/* Nasze DNA: Historia i Korzenie Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-heading text-primary-main mb-6">Nasze DNA: Historia i Korzenie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-neutral-bg h-64 flex items-center justify-center rounded-card shadow-soft">
            <span className="text-gray-500">Placeholder: Symboliczny diagram Polska-Ukraina</span>
            {/* Replace with actual image:
            <Image
              src="/images/dna-diagram.svg"
              alt="Symboliczny diagram ilustrujący Polskę i Ukrainę, podkreślający dwukierunkowy charakter mostów"
              width={600}
              height={400}
              objectFit="contain"
              className="rounded-card"
            />
            */}
          </div>
          <div>
            <h3 className="text-2xl font-heading text-primary-main mb-4">Od pomocy humanitarnej po rozwój systemowy</h3>
            <p className="text-lg font-body text-gray-700 mb-4">
              Nasza historia sięga działań transgranicznych. Posiadamy udokumentowaną zdolność do prowadzenia operacji poza Polską, czego dowodem jest formalne utworzenie i akredytacja <strong className="font-semibold">filii Fundacji w Ukrainie</strong> (decyzja z 1 sierpnia 2023 r.). Obecna strategia to profesjonalizacja i powrót do autentycznych korzeni organizacji.
            </p>
          </div>
        </div>
      </section>

      {/* Dane Formalne (Wsad Grantowy) Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-heading text-primary-main mb-6">Dane Formalne (Wsad Grantowy)</h2>
        <p className="text-lg font-body text-gray-700 mb-4">
          Poniżej znajdą Państwo komplet danych formalnych Fundacji, zgodnie z wymogami ładu korporacyjnego.
        </p>
        <div className="overflow-x-auto bg-neutral-bg p-6 rounded-card shadow-soft">
          <table className="min-w-full text-left text-gray-800 font-body">
            <tbody>
              <tr>
                <th className="py-2 px-4 border-b border-gray-300">Nazwa:</th>
                <td className="py-2 px-4 border-b border-gray-300">Fundacja Przyjaźń bez Granic</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border-b border-gray-300">Adres:</th>
                <td className="py-2 px-4 border-b border-gray-300">80-321 Gdańsk, ul. Hołdu Pruskiego 6</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border-b border-gray-300">NIP:</th>
                <td className="py-2 px-4 border-b border-gray-300">5842835506</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border-b border-gray-300">REGON:</th>
                <td className="py-2 px-4 border-b border-gray-300">525383411</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border-b border-gray-300">KRS:</th>
                <td className="py-2 px-4 border-b border-gray-300">**** (do uzupełnienia)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Dokumenty Kluczowe */}
      <section className="mb-12">
        <h2 className="text-3xl font-heading text-primary-main mb-6">Dokumenty Kluczowe</h2>
        <ul className="list-disc list-inside text-lg font-body text-gray-700 ml-4">
          <li>
            Statut Fundacji (aktualny jednolity tekst):{" "}
            <Link
              href="https://drive.google.com/file/d/1KDoCbSbMrn8VOZtt5S5-a29_0aKPhrD6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-main hover:underline"
            >
              [Link do Statutu]
            </Link>
          </li>
          {/* Add more documents as needed */}
        </ul>
      </section>

      {/* Organy i Zespół Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-heading text-primary-main mb-6">Organy i Zespół</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-heading text-primary-main mb-4">Zarząd:</h3>
            <ul className="list-disc list-inside text-lg font-body text-gray-700 ml-4">
              <li>Krzysztof Lizak</li>
              <li>Oksana Antsyferova</li>
            </ul>
          </div>
          {/* Placeholder for images of board members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-neutral-bg h-48 flex items-center justify-center rounded-card shadow-soft">
              <span className="text-gray-500">Krzysztof Lizak (zdjęcie)</span>
            </div>
            <div className="bg-neutral-bg h-48 flex items-center justify-center rounded-card shadow-soft">
              <span className="text-gray-500">Oksana Antsyferova (zdjęcie)</span>
            </div>
          </div>
        </div>
        {/* Add Rada Fundacji if applicable */}
      </section>
    </main>
  );
}
