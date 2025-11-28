#!/bin/bash
# Skrypt inicjujący projekt (instalacja zależności)

echo "Instalowanie zależności projektu..."
npm install

if [ $? -eq 0 ]; then
  echo "Zależności zainstalowane pomyślnie."
else
  echo "Wystąpił błąd podczas instalacji zależności."
  exit 1
fi
