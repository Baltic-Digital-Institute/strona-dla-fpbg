import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-heading text-primary-main text-center mb-12">Polityka Prywatności</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-heading text-primary-main mb-4">1. Wstęp</h2>
        <p className="text-lg font-body text-gray-700 mb-4">
          Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych oraz informuje o stosowanych środkach bezpieczeństwa w związku z korzystaniem ze strony internetowej Fundacji Przyjaźń bez Granic.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-heading text-primary-main mb-4">2. Brak gromadzenia danych osobowych</h2>
        <p className="text-lg font-body text-gray-700 mb-4">
          Informujemy, że strona internetowa Fundacji Przyjaźń bez Granic została zaprojektowana jako statyczna witryna informacyjna. Oznacza to, że <strong className="font-semibold">nie zbieramy, nie przetwarzamy ani nie przechowujemy żadnych danych osobowych</strong> użytkowników odwiedzających naszą stronę.
        </p>
        <ul className="list-disc list-inside text-lg font-body text-gray-700 ml-4">
          <li>Nie używamy formularzy kontaktowych.</li>
          <li>Nie zbieramy adresów e-mail ani innych danych identyfikacyjnych.</li>
          <li>Nie stosujemy plików cookie do śledzenia aktywności użytkowników ani zbierania danych osobowych.</li>
          <li>Nie korzystamy z żadnych zewnętrznych narzędzi analitycznych, które gromadziłyby dane osobowe.</li>
        </ul>
        <p className="text-lg font-body text-gray-700 mt-4">
          Państwa prywatność jest dla nas priorytetem, a brak gromadzenia danych ma na celu zapewnienie maksymalnego bezpieczeństwa i anonimowości podczas przeglądania naszej witryny.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-heading text-primary-main mb-4">3. Pliki Cookies</h2>
        <p className="text-lg font-body text-gray-700 mb-4">
          Nasza strona internetowa nie wykorzystuje plików cookies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-heading text-primary-main mb-4">4. Zewnętrzne linki</h2>
        <p className="text-lg font-body text-gray-700 mb-4">
          Strona może zawierać linki do zewnętrznych stron internetowych (np. do portali informacyjnych, serwisów społecznościowych, Google Drive). Fundacja Przyjaźń bez Granic nie ponosi odpowiedzialności za politykę prywatności ani zawartość tych stron. Zalecamy zapoznanie się z polityką prywatności każdej odwiedzanej witryny zewnętrznej.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-heading text-primary-main mb-4">5. Kontakt</h2>
        <p className="text-lg font-body text-gray-700 mb-4">
          W przypadku pytań dotyczących niniejszej polityki prywatności prosimy o kontakt za pośrednictwem ogólnych danych kontaktowych Fundacji dostępnych w sekcji {" "}
          <Link href="/kontakt" className="text-accent-main hover:underline">
            Kontakt
          </Link>.
        </p>
      </section>

      <section>
        <p className="text-sm font-body text-gray-500 text-center">
          Ostatnia aktualizacja: 28 listopada 2025 r.
        </p>
      </section>
    </main>
  );
}
