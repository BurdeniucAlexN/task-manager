# Task Manager

Aplicație Frontend realizată cu React și Vite. Permite adăugarea, marcarea ca
finalizată, ștergerea și filtrarea sarcinilor.

## Rulare

```
npm install
npm run dev
```

## Răspunsuri la întrebări

**1. Care este rolul folderului `src`?**
Conține codul sursă al aplicației: componentele React, stilurile și fișierul de
intrare `main.jsx`. Tot ce scriem noi se află aici, iar Vite îl procesează și îl
transformă în fișiere pe care browserul le poate rula.

**2. Ce reprezintă fișierul `App.jsx`?**
Este componenta principală (rădăcină) a aplicației. Celelalte componente
(`TaskForm`, `Task`) sunt afișate prin intermediul ei, iar starea principală
(lista de sarcini) este păstrată aici.

**3. Ce informații sunt păstrate în `package.json`?**
Numele și versiunea proiectului, scripturile (`dev`, `build`, `preview`),
dependențele necesare aplicației (`react`, `react-dom`) și dependențele de
dezvoltare (`vite`, ESLint etc.).

**4. Ce reprezintă folderul `node_modules`?**
Folderul în care `npm install` descarcă toate pachetele de care depinde proiectul
(și dependențele lor). Este generat automat, are dimensiune mare și nu se
încarcă pe GitHub (este trecut în `.gitignore`).

## Structura proiectului

- `public/` — fișiere statice servite direct
- `src/` — codul sursă
- `index.html` — pagina HTML în care este montată aplicația
- `vite.config.js` — configurarea Vite
