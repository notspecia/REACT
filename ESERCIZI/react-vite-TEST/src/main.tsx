// include del codice HTML + JS (TXS)

import { StrictMode } from 'react'  // importiamo nel file `main.tsx` REACT dai `node_modules`
import { createRoot } from 'react-dom/client'
import App from './App.tsx' // ci permette di importa "<app>" che contiene tutta la mia applicazione di react!
import './index.css'


/* 
01. si utilizza la funzione createRoot per il rendering del componente principale <App /> in un elemento DOM.

02. Seleziona l'elemento HTML con l'id root, che solitamente è definito in `index.html` come -> <div id="root"></div>

03. Il ! (not-null assertion) è una caratteristica di TypeScript, 
che comunica al compilatore che siamo sicuri che l'elemento esista e non sarà MAI di type null. 

* mi prendi la <root> dall'index.html e qui dentro in questo file (main.tsx) creo l'inizio della mia applicazione react tramite <app>
* successivamente vado a rendirizzare (.render) questa <app> che contiene tutta la mia applicazione  */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
