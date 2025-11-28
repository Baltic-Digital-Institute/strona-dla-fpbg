#!/bin/bash
# Skrypt generujący nowy plik Markdown dla karty projektu

if [ -z "$1" ]; then
  echo "Użycie: $0 <slug-projektu>"
  exit 1
fi

SLUG=$1
DATE=$(date +%Y-%m-%d)
FILE_PATH="strona-dla-fpbg/content/projects/${SLUG}.md"

mkdir -p strona-dla-fpbg/content/projects

cat << EOF > "${FILE_PATH}"
---
title: "Tytuł Projektu"
date: "${DATE}"
status: "W toku" # Dostępne: "Zrealizowany", "W toku"
period: "${DATE}-YYYY"
strategicPillar: "Filar I" # Dostępne: "Filar I", "Filar II", "Filar III"
heroImage: "/images/projects/${SLUG}/hero.webp" # Ścieżka do obrazu hero
altText: "Opis obrazu hero"
impactMetrics:
  - value: "0"
    label: "wartość"
beneficiaries: "Opis grupy docelowej"
fundingSources: [] # np. - name: "FEP"  logo: "fep.svg"
partners: [] # np. - name: "Fundacja XYZ"  logo: "xyz.svg"
auditLinks: [] # np. - title: "Express Kaszubski"  url: "https://example.com"
---

## Geneza Projektu

Tutaj umieść kontekst projektu i wyjaśnij problem, który Fundacja Przyjaźń bez Granic rozwiązuje.

## Opis Działań

Szczegółowy opis działań podjętych w ramach projektu, skupiający się na empatycznej narracji.

## Rezultaty i Wpływ

Podsumowanie osiągniętych rezultatów i wpływu projektu na beneficjentów oraz społeczność.
EOF

echo "Utworzono nowy plik karty projektu: ${FILE_PATH}"
