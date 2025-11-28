#!/bin/bash
# Skrypt sprawdzający pliki konfiguracyjne Next.js i Tailwind CSS

echo "Sprawdzanie plików konfiguracyjnych..."

BASE_DIR="strona-dla-fpbg"

if [ ! -f "${BASE_DIR}/next.config.ts" ]; then
    echo "Brak wymaganego pliku: ${BASE_DIR}/next.config.ts"
    exit 1
fi

if [ ! -f "${BASE_DIR}/tailwind.config.ts" ]; then
    echo "Brak wymaganego pliku: ${BASE_DIR}/tailwind.config.ts"
    exit 1
fi

echo "Wszystkie wymagane pliki konfiguracyjne istnieją."
exit 0
