import Link from "next/link";

export default function CorporateGovernancePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-heading text-primary-main text-center mb-12">Ład Korporacyjny</h1>
      <p className="text-lg font-body text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Poniżej znajdą Państwo komplet danych formalnych Fundacji, sprawozdania oraz dokumenty dotyczące ładu korporacyjnego, zgodnie z wymogami transparentności i audytowalności.
      </p>

      {/* Dane Formalne i Rejestry */}
      <section className="mb-12 p-6 bg-neutral-bg rounded-card shadow-soft">
        <h2 className="text-3xl font-heading text-primary-main mb-6">1. Dane Formalne i Rejestry</h2>
        <ul className="list-disc list-inside text-lg font-body text-gray-700 ml-4">
          <li className="mb-2">
            <strong className="font-semibold">Statut:</strong>{" "}
            <Link href="/documents/statut-fundacji.txt" className="text-accent-main hover:underline" target="_blank" rel="noopener noreferrer">
              Pobierz aktualny Statut Fundacji (PDF - placeholder)
            </Link>
          </li>
          <li className="mb-2">
            <strong className="font-semibold">Odpis KRS:</strong>{" "}
            <Link href="/documents/odpis-krs.txt" className="text-accent-main hover:underline" target="_blank" rel="noopener noreferrer">
              Pobierz aktualny Odpis KRS (PDF - placeholder)
            </Link>
          </li>
          <li className="mb-2">
            <strong className="font-semibold">REGON:</strong>{" "}
            <Link href="/documents/regon.txt" className="text-accent-main hover:underline" target="_blank" rel="noopener noreferrer">
              Pobierz numer REGON (PDF - placeholder)
            </Link>
          </li>
        </ul>
      </section>

      {/* Sprawozdawczość Finansowa */}
      <section className="mb-12 p-6 bg-neutral-bg rounded-card shadow-soft">
        <h2 className="text-3xl font-heading text-primary-main mb-6">2. Sprawozdawczość Finansowa</h2>
        <ul className="list-disc list-inside text-lg font-body text-gray-700 ml-4">
          <li className="mb-2">
            <strong className="font-semibold">Sprawozdanie finansowe za rok 2023:</strong>{" "}
            <Link href="/documents/sprawozdanie-finansowe-2023.txt" className="text-accent-main hover:underline" target="_blank" rel="noopener noreferrer">
              Pobierz (PDF - placeholder)
            </Link>
          </li>
          {/* Add more financial reports as they become available */}
        </ul>
      </section>

      {/* Organy Zarządzające */}
      <section className="mb-12 p-6 bg-neutral-bg rounded-card shadow-soft">
        <h2 className="text-3xl font-heading text-primary-main mb-6">3. Organy Zarządzające</h2>
        <p className="text-lg font-body text-gray-700 mb-4">
          Informacje o składzie Zarządu i Rady Fundacji oraz zasadach ich funkcjonowania.
        </p>
        <ul className="list-disc list-inside text-lg font-body text-gray-700 ml-4">
          <li className="mb-2">
            <strong className="font-semibold">Skład Zarządu i Rady Fundacji:</strong> Dostępne na stronie{" "}
            <Link href="/o-fundacji" className="text-accent-main hover:underline">
              O Fundacji
            </Link>
          </li>
          <li className="mb-2">
            <strong className="font-semibold">Regulamin Zarządu:</strong>{" "}
            <Link href="/documents/regulamin-zarzadu.txt" className="text-accent-main hover:underline" target="_blank" rel="noopener noreferrer">
              Pobierz (PDF - placeholder)
            </Link>
          </li>
          <li className="mb-2">
            <strong className="font-semibold">Regulamin Rady Fundacji:</strong>{" "}
            <Link href="/documents/regulamin-rady.txt" className="text-accent-main hover:underline" target="_blank" rel="noopener noreferrer">
              Pobierz (PDF - placeholder)
            </Link>
          </li>
        </ul>
      </section>

      {/* Zamówienia i Przetargi */}
      <section className="mb-12 p-6 bg-neutral-bg rounded-card shadow-soft">
        <h2 className="text-3xl font-heading text-primary-main mb-6">4. Zamówienia i Przetargi</h2>
        <p className="text-lg font-body text-gray-700 mb-4">
          Rejestr aktualnych i archiwalnych zapytań ofertowych oraz zamówień publicznych.
        </p>
        <ul className="list-disc list-inside text-lg font-body text-gray-700 ml-4">
          <li className="mb-2">
            <strong className="font-semibold">Rejestr Zamówień Publicznych / Zapytań Ofertowych:</strong>{" "}
            <Link href="/documents/rejestr-zamowien.txt" className="text-accent-main hover:underline" target="_blank" rel="noopener noreferrer">
              Pobierz (PDF - placeholder)
            </Link>
          </li>
          {/* Add specific tenders/inquiries here */}
        </ul>
      </section>
    </main>
  );
}
