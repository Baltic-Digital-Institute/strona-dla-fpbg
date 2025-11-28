"use client";

import { useState } from "react";
import Image from "next/image";

export default function StrategyPage() {
  const [activePillar, setActivePillar] = useState("pillar1"); // pillar1, pillar2, pillar3

  const renderPillarContent = () => {
    switch (activePillar) {
      case "pillar1":
        return (
          <div className="p-6 bg-white rounded-card shadow-soft">
            <h3 className="text-2xl font-heading text-primary-main mb-4">„Witaj w domu” - Integracja i nowe kompetencje</h3>
            <p className="text-lg font-body text-gray-700 mb-4">
              <strong className="font-semibold">Misja:</strong> Budowanie mostów międzykulturowych w regionie, w oparciu o sprawdzony model działania i stabilne finansowanie.
            </p>
            <p className="text-lg font-body text-gray-700 mb-4">
              <strong className="font-semibold">Kluczowe Inicjatywy:</strong> Centrum Usług Integracyjnych (Projekt FEP 2025–2026), Inicjatywy Dialogu Międzykulturowego.
            </p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-heading text-accent-main">65</span>
              <span className="text-xl font-body text-gray-700">osób (w tym 43 z krajów trzecich)</span>
            </div>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-heading text-accent-main">100%</span>
              <span className="text-xl font-body text-gray-700">wskaźnik kwalifikacji do końca 2026 r.</span>
            </div>
            <div className="bg-neutral-bg h-48 flex items-center justify-center rounded-card shadow-soft mb-6">
              <span className="text-gray-500">Placeholder: Ikonografia wsparcia edukacyjnego/interkulturowego</span>
              {/* Replace with actual image:
              <Image src="/images/pillar1-icon.svg" alt="Ikonografia symbolizująca wsparcie edukacyjne/interkulturowe" width={200} height={100} objectFit="contain" />
              */}
            </div>

            <h4 className="text-xl font-heading text-primary-main mb-4">Filar I: Detal – Poradnictwo w Centrach Wsparcia</h4>
            <p className="text-lg font-body text-gray-700 mb-4">
              <strong className="font-semibold">W ramach projektu Fundusze Europejskie dla Pomorza (FEP)</strong>, Zapewniamy kompleksowe wsparcie jako ludzki interfejs dla <strong className="font-semibold">partnerów projektowych</strong>.
            </p>
            <p className="text-lg font-body text-gray-700">
              Nasza rola eksperta w pracy z grupami wrażliwymi została ugruntowana dzięki zarządzaniu projektem Fundusze Europejskie dla Pomorza (FEP), co dało nam unikalne kompetencje w dostarczaniu <strong className="font-semibold">Poradnictwa w Centrach Wsparcia</strong> (prawnego, psychologicznego, zawodowego) oraz asysty logistycznej, stanowiące obecnie nasz kluczowy fundament operacyjny.
            </p>
            <div className="bg-neutral-bg h-48 flex items-center justify-center rounded-card shadow-soft mt-6">
              <span className="text-gray-500">Placeholder: Zdjęcie spotkania doradczego lub grupy warsztatowej</span>
              {/* Replace with actual image:
              <Image src="/images/pillar1-detail.webp" alt="Zdjęcie przedstawiające spotkanie doradcze lub grupę warsztatową" width={600} height={300} objectFit="cover" />
              */}
            </div>
          </div>
        );
      case "pillar2":
        return (
          <div className="p-6 bg-white rounded-card shadow-soft">
            <h3 className="text-2xl font-heading text-primary-main mb-4">„Mosty” - partnerstwa i mobilność międzynarodowa</h3>
            <p className="text-lg font-body text-gray-700 mb-4">
              <strong className="font-semibold">Misja:</strong> Proaktywne tworzenie i wspieranie międzynarodowej współpracy, pozycjonowanie Fundacji jako międzynarodowego ramienia dla <strong className="font-semibold">lokalnych podmiotów i partnerów strategicznych</strong>.
            </p>
            <p className="text-lg font-body text-gray-700 mb-4">
              <strong className="font-semibold">Kluczowe Inicjatywy:</strong> Programy Wymiany (Erasmus+, EKS), Misje Gospodarcze i Kulturalne.
            </p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-heading text-accent-main">3</span>
              <span className="text-xl font-body text-gray-700">misje gospodarcze do 2028 r.</span>
            </div>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-heading text-accent-main">5</span>
              <span className="text-xl font-body text-gray-700">nowych partnerstw międzynarodowych do 2028 r.</span>
            </div>
            <div className="bg-neutral-bg h-48 flex items-center justify-center rounded-card shadow-soft">
              <span className="text-gray-500">Placeholder: Ikonografia globalnego zasięgu (mapa, kontynenty)</span>
              {/* Replace with actual image:
              <Image src="/images/pillar2-icon.svg" alt="Ikonografia symbolizująca globalny zasięg" width={200} height={100} objectFit="contain" />
              */}
            </div>
          </div>
        );
      case "pillar3":
        return (
          <div className="p-6 bg-white rounded-card shadow-soft">
            <h3 className="text-2xl font-heading text-primary-main mb-4">„Pomocna Dłoń” - interwencje humanitarne</h3>
            <p className="text-lg font-body text-gray-700 mb-4">
              <strong className="font-semibold">Misja:</strong> Reaktywacja i profesjonalizacja działań z zakresu pomocy humanitarnej i rozwojowej, stanowiąca moralny fundament Fundacji.
            </p>
            <p className="text-lg font-body text-gray-700 mb-4">
              <strong className="font-semibold">Kluczowe Inicjatywy:</strong> Kryzysowe Interwencje (Konwoje, Zbiórki), Partnerstwa Międzynarodowe.
            </p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-heading text-accent-main">2</span>
              <span className="text-xl font-body text-gray-700">konwoje humanitarne do Ukrainy do końca 2026 r.</span>
            </div>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-heading text-accent-main">1</span>
              <span className="text-xl font-body text-gray-700">formalne partnerstwo z dużą, międzynarodową organizacją humanitarną do końca 2027 r.</span>
            </div>
            <div className="bg-neutral-bg h-48 flex items-center justify-center rounded-card shadow-soft">
              <span className="text-gray-500">Placeholder: Ikonografia pomocy humanitarnej (dłonie, transport)</span>
              {/* Replace with actual image:
              <Image src="/images/pillar3-icon.svg" alt="Ikonografia symbolizująca pomoc humanitarną" width={200} height={100} objectFit="contain" />
              */}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-heading text-primary-main text-center mb-12">Nasza Strategia</h1>

      {/* Introduction Section */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-heading text-primary-main mb-6">Strategia rozwoju 2025-2028: skuteczność i skalowalność</h2>
        <p className="text-lg font-body text-gray-700 max-w-3xl mx-auto">
          Nasza Strategia wyznacza ewolucję w kierunku Pomorskiego Huba Współpracy Międzynarodowej. Działamy w oparciu o plan, który łączy misję społeczną z mierzalnymi celami i ładem operacyjnym.
        </p>
        <div className="bg-neutral-bg h-48 flex items-center justify-center rounded-card shadow-soft mt-8">
          <span className="text-gray-500">Placeholder: Wizualizacja 3 kół lub filarów strategicznych</span>
          {/* Replace with actual image:
          <Image src="/images/strategy-visualization.svg" alt="Wizualizacja 3 kół lub filarów strategicznych" width={600} height={200} objectFit="contain" />
          */}
        </div>
      </section>

      {/* Interactive Pillars Section */}
      <section className="mb-12">
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActivePillar("pillar1")}
            className={`px-6 py-3 mx-2 rounded-button font-body text-lg transition-colors duration-200 ${
              activePillar === "pillar1"
                ? "bg-accent-main text-white"
                : "bg-gray-200 text-primary-main hover:bg-gray-300"
            }`}
          >
            Filar I: Spójność Społeczna
          </button>
          <button
            onClick={() => setActivePillar("pillar2")}
            className={`px-6 py-3 mx-2 rounded-button font-body text-lg transition-colors duration-200 ${
              activePillar === "pillar2"
                ? "bg-accent-main text-white"
                : "bg-gray-200 text-primary-main hover:bg-gray-300"
            }`}
          >
            Filar II: Pomorska Brama
          </button>
          <button
            onClick={() => setActivePillar("pillar3")}
            className={`px-6 py-3 mx-2 rounded-button font-body text-lg transition-colors duration-200 ${
              activePillar === "pillar3"
                ? "bg-accent-main text-white"
                : "bg-gray-200 text-primary-main hover:bg-gray-300"
            }`}
          >
            Filar III: Solidarność
          </button>
        </div>

        <div>{renderPillarContent()}</div>
      </section>
    </main>
  );
}
