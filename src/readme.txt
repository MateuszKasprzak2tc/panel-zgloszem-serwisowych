# Panel Zgłoszeń Serwisowych

## Opis
Aplikacja webowa do zarządzania zgłoszeniami serwisowymi. Umożliwia przeglądanie listy zgłoszeń z informacjami o kliencie, urządzeniu, usterce, statusie i priorytecie.

## Cechy Graficzne
- **Animowany gradient tła** - dynamiczne przejścia kolorów
- **Świecące efekty (glow)** - elementy z aura światła
- **Orby poruszające się** - rozmyte kule światła w tle
- **Glassmorphism** - przezroczyste karty z efektem blur
- **Gładkie animacje** - przesuwanie, pulsowanie, unoszenie się elementów
- **Responsywny design** - optymalizacja dla urządzeń mobilnych


## Struktura Projektu
- `src/components/TicketCard.jsx` - Komponent wyświetlający pojedyncze zgłoszenie
- `src/components/TicketList.jsx` - Komponent listy zgłoszeń
- `src/readne.txt` - Ten plik

## Funkcjonalności:
### Filtrowanie Zgłoszeń
- Filtr: "Wszystkie", "Nowe", "W trakcie", "Zakończone"
- Kolorowe przyciski z animacją hover
- Animowany gradient w nagłówku filtru

### Wyświetlanie Zgłoszeń
- **Imię klienta** - z gradientowym tekstem
- **Urządzenie**
- **Usterka**
- **Status** - z kodowanym kolorem (nowe/w trakcie/zakończone)
- **Priorytet** - z kodowanym kolorem (niski/średni/wysoki)

Każde zgłoszenie ma:
- Animację slide-up przy pojawieniu
- Efekt shimmer (świecenie)
- Hover efekt - podnoszenie i zmiana kolorów
- Przebiegającą linię świetlną

### Formularz Dodawania
- Input dla imienia klienta
- Input dla urządzenia
- Input dla opisu usterki
- Select dla statusu
- Select dla priorytetu
- Przycisk z animacją buttonHover

Inputy mają:
- Jasne białe tło dla lepszej czytelności
- Czarny tekst
- Animacja glow przy focusie
- Smooth transitions

## Animacje

| Animacja | Opis |
|----------|------|
| `gradientShift` | Zmiana pozycji gradientu tła |
| `float` | Unoszenie się elementów w górę i dół |
| `pulse` | Mruganie opacości |
| `slideInLeft` | Pojawienie z lewej strony |
| `slideInRight` | Pojawienie z prawej strony |
| `slideUp` | Pojawienie z dołu |
| `glow` | Pulsujące świecenie |
| `shimmer` | Wielokrotne świecenie |
| `orb-move-1/2` | Poruszanie się orb w tle |
| `inputFocus` | Świecenie przy focusie input |
| `buttonHover` | Świecenie przycisku |
| `formSlideIn` | Pojawienie formularza |



## Jak Uruchomić

### Wymagania
- Node.js (v14+)
- npm lub yarn

### Instalacja
```bash
npm install