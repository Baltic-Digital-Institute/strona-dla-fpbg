export default function AccessibilityStatementPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-heading text-primary-main text-center mb-12">Deklaracja Dostępności</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-heading text-primary-main mb-4">1. Wstęp</h2>
        <p className="text-lg font-body text-gray-700 mb-4">
          Fundacja Przyjaźń bez Granic zobowiązuje się zapewnić dostępność swojej strony internetowej zgodnie z przepisami ustawy z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych. Niniejsza deklaracja dostępności dotyczy strony [adres strony].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-heading text-primary-main mb-4">2. Status pod względem zgodności z ustawą</h2>
        <p className="text-lg font-body text-gray-700 mb-4">
          Strona internetowa Fundacji Przyjaźń bez Granic jest <strong className="font-semibold">zgodna</strong> z wymaganiami dostępności cyfrowej zgodnie ze standardem WCAG 2.2 na poziomie AA. Stale dążymy do utrzymania tego poziomu i poprawy wszelkich wykrytych niezgodności.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-heading text-primary-main mb-4">3. Ułatwienia na stronie internetowej</h2>
        <p className="text-lg font-body text-gray-700 mb-4">
          Strona została zaprojektowana z myślą o osobach z różnymi niepełnosprawnościami. Wdrożyliśmy następujące ułatwienia:
        </p>
        <ul className="list-disc list-inside text-lg font-body text-gray-700 ml-4">
          <li>
            <strong className="font-semibold">Kontrast:</strong> Zapewniliśmy odpowiedni kontrast między tekstem a tłem, zgodnie z wytycznymi WCAG 2.2 na poziomie AA (min. 4.5:1 dla tekstu standardowego).
          </li>
          <li>
            <strong className="font-semibold">Nawigacja klawiaturą:</strong> Cała strona jest w pełni dostępna i możliwa do obsługi za pomocą klawiatury. Elementy interaktywne mają widoczny fokus (obramowanie).
          </li>
          <li>
            <strong className="font-semibold">Tekst alternatywny dla obrazów (Alt Text):</strong> Wszystkie obrazy i elementy graficzne posiadają opis alternatywny, aby treści wizualne były dostępne dla osób korzystających z czytników ekranu.
          </li>
          <li>
            <strong className="font-semibold">Responsywność:</strong> Strona jest w pełni responsywna i dostosowuje się do różnych rozmiarów ekranów (komputery, tablety, smartfony), a tekst można powiększyć do 200% bez utraty treści czy funkcjonalności.
          </li>
          <li>
            <strong className="font-semibold">Struktura nagłówków:</strong> Treści są logicznie uporządkowane za pomocą nagłówków (H1-H6), ułatwiając nawigację.
          </li>
          <li>
            <strong className="font-semibold">Język strony:</strong> Język strony jest zadeklarowany, co pomaga czytnikom ekranu w poprawnej interpretacji treści.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-heading text-primary-main mb-4">4. Przygotowanie deklaracji</h2>
        <p className="text-lg font-body text-gray-700 mb-4">
          Niniejsza deklaracja została sporządzona dnia 28 listopada 2025 r.
        </p>
        <p className="text-lg font-body text-gray-700 mb-4">
          Deklarację sporządzono na podstawie samooceny przeprowadzonej przez Fundację Przyjaźń bez Granic.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-heading text-primary-main mb-4">5. Dane kontaktowe</h2>
        <p className="text-lg font-body text-gray-700 mb-4">
          W przypadku problemów z dostępnością strony internetowej prosimy o kontakt. Osobą kontaktową jest [Imię Nazwisko], e-mail: [adres email], telefon: [numer telefonu]. Tą samą drogą można składać wnioski o udostępnienie informacji niedostępnej oraz składać żądania zapewnienia dostępności.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-heading text-primary-main mb-4">6. Postępowanie odwoławcze</h2>
        <p className="text-lg font-body text-gray-700 mb-4">
          Każdy ma prawo do wystąpienia z żądaniem zapewnienia dostępności cyfrowej strony internetowej lub jakiegoś jej elementu. Można również żądać udostępnienia informacji w formach alternatywnych, np. odczytanie niedostępnego cyfrowo dokumentu, opisanie zawartości filmu bez audiodeskrypcji itp. Żądanie powinno zawierać dane osoby zgłaszającej, wskazanie, o którą stronę internetową chodzi oraz sposób kontaktu. Jeżeli osoba żądająca zgłasza potrzebę otrzymania informacji w formie alternatywnej, powinna także określić formę tej informacji.
        </p>
        <p className="text-lg font-body text-gray-700 mb-4">
          Rozpatrzenie zgłoszenia powinno nastąpić niezwłocznie, najpóźniej w ciągu 7 dni. Jeżeli w tym terminie nie jest możliwe zapewnienie dostępności, albo zapewnienie dostępu w alternatywnej formie, powinno nastąpić najpóźniej w ciągu 2 miesięcy od daty zgłoszenia.
        </p>
        <p className="text-lg font-body text-gray-700 mb-4">
          Skargi i odwołania w sprawie zapewnienia dostępności cyfrowej strony internetowej można składać do Rzecznika Praw Obywatelskich.
        </p>
      </section>
    </main>
  );
}
