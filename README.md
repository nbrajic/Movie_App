# Aplikacija za pregled serija i filmova

## Tehnologije:

- react 16.13.1
- react-router-dom 16.13.1
- axios

## Instalacija

Prethodno potrebna instalacija NodeJS (v12.14.0 ili novija)

- Klonirati repozitorijum
- npm install

## Pokretanje projekta

- npm start

## 25-09-2020 

- Na aplikaciju se može ulogovati pomoću bilo kojeg username-a i šifre, i jedini private deo za sada je mogućnost ocenivanja filmova - trenutno samo simulacija.
- Postoji mogućnost pretrage iz navigacije
- Svaka komponenta filma/serije napravljena je pomoću react-flippy biblioteke pri čemu prednja strana predstavlja poster filma/serije, a zadnja sadrži dodatne informacije i link ka info stranici. Na info stranici filmova, deo sa slikama iz filma i deo sa preporučenim filmovima napravljeni su pomoću react-bootstrap/Carousel. Deo sa preporučenim filmovima klikom vodi na info stranicu tog filma.

## Planirane izmene za budućnost:

- Ocenivanje povezano sa API-jem i za filmove i za serije, mogućnost pravljenja watchlist-a nakon logovanja
- Stranica za epizode serija
- Više informacija za serije i filmove