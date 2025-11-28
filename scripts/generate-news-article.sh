#!/bin/bash
# Skrypt generujący nowy plik Markdown dla artykułu aktualności

if [ -z "$1" ]; then
  echo "Użycie: $0 <slug-artykulu>"
  exit 1
fi

SLUG=$1
DATE=$(date +%Y-%m-%d)
FILE_PATH="strona-dla-fpbg/content/news/${SLUG}.md"

mkdir -p strona-dla-fpbg/content/news

cat << EOF > "${FILE_PATH}"
---
title: "Tytuł Artykułu"
date: "${DATE}"
category: "Ogólne" # np. "FEP", "Humanitarny", "Wydarzenia"
author: "Fundacja Przyjaźń bez Granic"
heroImage: "/images/news/${SLUG}/hero.webp" # Opcjonalnie: ścieżka do obrazu hero
altText: "Opis obrazu hero"
---

## Wprowadzenie

Tutaj umieść treść artykułu aktualności.
EOF

echo "Utworzono nowy plik artykułu aktualności: ${FILE_PATH}"
