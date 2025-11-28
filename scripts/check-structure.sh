#!/bin/bash
# Skrypt sprawdzający podstawową strukturę katalogów projektu

echo "Sprawdzanie struktury katalogów projektu..."

declare -a DIRS=("app" "components" "content" "public" "scripts")
BASE_DIR="strona-dla-fpbg"

for DIR in "${DIRS[@]}"; do
    if [ ! -d "${BASE_DIR}/${DIR}" ]; then
        echo "Brak wymaganego katalogu: ${BASE_DIR}/${DIR}"
        exit 1
    fi
done

echo "Wszystkie wymagane katalogi istnieją."
exit 0
