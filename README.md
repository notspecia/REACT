# Appunti generici


## Comandi per la creazione del progetto react+vite, avvio del server

- `npm create vite@latest nome-del-progetto`:
    - Seleziona il framework React e la variante (ad esempio JavaScript o TypeScript).

- `npm run dev`:
    - Avvia il server di sviluppo, Questo aprirà il progetto in un URL simile a http://localhost:5173.


## Struttura del progetto React + Vite
```html
my-app/
├── node_modules/          # `Dipendenze installate` automaticamente (non da modificare) tramite npm i
├── public/                # File pubblici statici (robots.txt, sitemaps), anche i logo, fiveicon...
│   └── vite.svg           # Logo o immagine usata nel progetto
├── src/                   # !Codice sorgente principale, qui troviamo tutto il codice
│   ├── assets/            # Risorse statiche specifiche (es: immagini, icone)
│   ├── App.css            # Stili CSS per il componente principale App
│   ├── App.tsx            # Componente principale del applicazione React
│   ├── index.css          # File di stili globali (applicati a tutto il progetto)
│   ├── main.tsx           # `Punto di ingresso dell'app React` (monta App su index.html)
│   └── vite-env.d.ts      # Tipi TypeScript generati automaticamente da Vite
├── .gitignore             # Elenco di file/cartelle da ignorare da Git
├── eslint.config.js       # Configurazione per ESLint (linter per il codice) ci va a forzare a scrivere il codice in un det.modo
├── index.html             # File `HTML principale servito al browser`, contiene `<div id="root">` 
├── package-lock.json      # File di blocco delle dipendenze (versioni esatte)
├── package.json           # Configurazione del progetto: dipendenze e script da utilizzare con node
├── README.md              # Documentazione del progetto (per spiegazioni iniziali)
├── tsconfig.app.json      # Configurazione TypeScript per l'applicazione
├── tsconfig.json          # Configurazione principale di TypeScript
├── tsconfig.node.json     # Configurazione TypeScript per Node.js
└── vite.config.ts         # Configurazione di Vite
```


---


 
# Lifecycle dei componenti
Sapere il ciclo di vita di un componente è fondamentale nello sviluppo di applicazioni, in particolare in contesti come React, dove i componenti sono modulari e possono subire vari cambiamenti nel corso della loro esistenza nel DOM. 
Il ciclo di vita ti permette di gestire eventi, risorse, e aggiornamenti in modo efficiente, evitando errori e memory leaks.

 **MOUNT** <br>
 facciamo una connessione socket e aggiungiamo un event listener al DOM (chiamata del socket monta la connessione)
 -----------------------------------------------------------------

 **UPDATE** <br>
 socket listening/update (questo flusso smette di aggiornarsi quando l'utente smette di interagire con la socket)
 -----------------------------------------------------------------

 **UNMOUNT** <br>
 dealoccare la comunicazione della connessione socket (qui chiudiamo la connessione definitivamente con la socket)
 se non l'andassi a distruggere/smontare rimane ancora aperta
 -----------------------------------------------------------------

1. **componentDidMount**: Questa fase avviene quando il componente viene creato e aggiunto al DOM per la prima volta, es:
- Stabilire connessioni (es. socket o API)
- Aggiungere event listeners al DOM
- Impostare lo stato iniziale basato su dati esterni

2. **componentDidUpdate**:  Questa fase avviene quando lo stato interno o le props di un componente cambiano, causando un re-render.
bisogna reagire agli aggiornamenti delle props o dello stato:
- Aggiornare la logica di una connessione socket se cambiano i dati dell'utente;
- Applicare modifiche al DOM che dipendono dalle nuove props o dallo stato.

3. **componentWillUnmount**: Viene smontato il componente nel momento in cui viene tolto dal DOM, viene eseguito prima di quando viene smontato.
Liberare le risorse per evitare memory leaks, ad esempio:
- Chiudere connessioni socket;
- Rimuovere event listeners;
- Annullare timer o richieste in corso.



---



# src/ la folder padre dell'applicazione!

### introduzione a cosa serve
**il progetto viene costruito effettivamente qui dentro**, qui c'è tutto il codice che scriviamo per appunto creare pagine e applicazioni, tutto quello che c'è fuori (package.json, index.html. eslint.config...) sono solo delle preparazioni per il progetto, le risorse...
- contiene anche gli `assets/` possiamo usare immagini video...


## File principali

1. **index.html**: Questo è il punto dove React monterà la tua applicazione e la pagina che vedremo quando avviamo il server tramite il comando `npm run dev`, viene detto anche **ENTRY POINT**
```html
<div id="root"></div>
```
2. **main.tsx**: È il file principale che collega il DOM con il componente React,
    - monta il componente `<App />` sull'elemento con *`id root`* che è presente dentro l'html.

3. **app.tsx**: È il componente principale, che definisce cosa viene mostrato nella pagina

4. **App.css o index.css**: Puoi modificare il design aggiornando i file CSS

5. **package.json**: questo è il file che oltre contenere gli script contiene le `dependencies` (che sono quelle fondamentali per far funzionare il progetto) e le `devDependencies` (servono a noi che scriviamo il codice).

per + informazioni guardare i commenti dentro il progetto di prova  `react-viste-TEST/`



--- 



## Componenti in react -> https://react.dev/learn
esempio con l'html, senza componenti usando html normale, dovremmo andare a creare per ogni pagina la stessa navbar, footer ad esempio, se poi mettiamo che dobbiamo andare a fare dei cambiamenti su tutti diventerebbe scomodo, quindi sorge il dubbio es ("non posso creare la navbar una sola volta e basta, per poi poterla utilizzare per tutte le pagine che ho nel mio progetto/sito?")

**REACT** ci viene in soccorso per toglierci ogni dubbio e risolvere i nostri problemi da programmatori.


### cos'è quindi un componente?
è un file a parte, che definisce una volta IL NOSTRO COMPONENTE, e lo importiamo dove vogliamo, e utilizzarlo di conseguenza dove vogliamo! sono riutilizzabili, proviamo a creare nel progetto test, un componente menu da utilizzare + volte!

- in react i componenti NON sono HTML, ma sono `funzioni typescript` che usa delle cose al suo interno, che poi generano e ritornano del'HTML + TS tramite il `return()`


### Creazione di componenti
meglio creare una cartella appostita in SRC/ come `components/` dove andiamo a creare i nostri componenti

- importante, se volessimo creare del contenuto apposito all'interno di un componente (FIGLI DIRETTI SENZA COMPONENTI COME ABBIAMO FATTO CON I LINK DENTRO NAVBAR) quindi magari un paragrafo, non si può fare normalmetne come si potrebbe fare con l'HTML!! se volessimo usufruire di questa funzione dobbiamo usare i `props`!

ecco un esempio della logica che non si può applicare su react:
```html
<NavBar><p> </p></NavBar>
```


---



## TSX/JSX come utilizzarlo -> https://react.dev/learn#writing-markup-with-jsx

1. **return()** -> le parentesi servono soltanto quando dobbiamo ritornare su più righe il codice HTML, se avessimo solo una riga allora non sarebbe stato necessario delle parentesi ( ) (come su JS che ritorniamo un singolo valore).
il `return` deve essere UN unico elemento HTML, questo elemento poi magari può contenere al suo interno altri elementi HTML, ma bisogna racchiudere tutto in un SINGOLO tag; in questo esempio sarà `return del div` che è detto `ELEMENTO RADICE`!!
```tsx
return(
<div>
    <ul>
        <li> </li>
        <li> </li>
    </ul>
</div>
)
``` 

2. **frammenti**
react ci mette a disposizione dei `FRAMMENTI: <> </>` tag vuoti che vengono riconosciuti come tag elemento, ma non vengono rendirizzati dall'HTML, per far contento REACT nel caso non volessimo renderizzare come nell'esempio di prima il `<div>` perchè ci serviva solo come elemento radice per racchiudere il tutto, ecco come diventerebbe e funzionerebbe lo stesso:
```tsx
return(
<>
    <ul>
        <li> </li>
        <li> </li>
    </ul>
</>
)
``` 
TSX vuole anche che andiamo a chiudere elementi che generalmente non hanno bisogno di tag di chiusura come l'immagine, in TSX diventerebbe cosi `<img src="" alt="" />`.

attenzione che magari le alcuni attributi standard in HTML, nei file tsx le cose camabiano, non utilizza pià il kebab-case `gabriele-speciale` ma usa il kamelCase `gabrieleSpeciale`.
- ed alcuni attributi cambiano radicalmente, ad esempio:
    - per la *classe* si usa `className`, perchè ovviamente dato che stiamo lavorando in file typescript, con class andrebbe a creare la classe secondo il modello, ed è una parola chiave di javascript.


2. **{ } all'interno di TSX**
in sostanza, dentro mettiamo `un valore dinamico` per poi inserire all'interno dei tag HTML con le `{}`. 
e come mi stessi isolando al loro interno dal codice HTML e metto dentro dei valori JS/TS, li dentro ho dei valori, codice che deriva esclusivamente da JS

```tsx
const num = 1000;

<p>{num}</p>
```
per andare ad inserire dello style inline, dovremmo metterre delle doppie {{}} le prime sono codice TS/JS, le seconde indicano che è un oggetto



---



## Style CSS in React

### Alcune regole da ricodare

- l'index.css va a coprire lo style in maniera GLOBALE, se andiamo a definire dello style per il singolo componente; lo style GLOBALE vincerà sullo style del singolo component.

- lo style del component singolo, non è LOCALE, andrà ad infulire lo style anche sugli elementi che sono figli diretti di APP.tsx, quindi non è circoscritto al singolo componente

- per andare a definire lo style inline o con oggetti con proprietà di style, possiamo andare a lavorare dinamicamente con operatori ternari, e variabili
```tsx
const x = 2;
<img style={{height: x < 10 ? "300px" : "500px" >}}/>
```


### Lo style inline in React (TSX)
non accetta dei valori tutti letterali come lo style inline che si faceva in HTML, ma dobbiamo usare delle graffe `{{}}`
esempio di come si scrive in react dello style inline:
```tsx
<h4 style={{ fontFamily: "Verdana" }}> </h4>
```


### Lo style tramite oggetti con proprietà di style
si potrebbero anche dei creare degli oggetti TS sopra contente proprietà di style
```tsx
const linkStyle = {
    color: "red",
    backgroundColor: "yellow",
    borderRadius: "20px",
}

<a href="#" style={linkStyle}>
```


### Lo style con className in React (TSX)
in React si puo applicare lo style anche attraverso le classi come HTML CSS, ma l'attributo della classe in react va inserito con `className`.
per la *classe* si usa `className`, perchè ovviamente dato che stiamo lavorando in file typescript, con class andrebbe a creare la classe secondo il modello, ed è una parola chiave di javascript. vediamo un esempio:
```tsx
<h4 style={{ fontFamily: "Verdana" }}> </h4>
```


### Tailwind + React
non sarà compreso l'installazione di tailwind su react direttamente, ma tramite il Build Tools che stiamo utilizzando ossia `vite`

[clicca per la guida di installazione](https://tailwindcss.com/docs/guides/vite)

- comando per l'installazione di Tailwind nelle DevDependecies: `npm install -D tailwindcss postcss autoprefixer`

- comando per inizializzare di Tailwind: `npx tailwindcss init -p`

- aggiungere quel pezzo di codice dentro il `tailwind.config.ts` che è mostrato nella guida, sostituendolo con il "content[]"

- aggiungere all'`index.css` la parte inserita nella guida per importare Tailwind nel nostro progetto



---



## Props
è il diminutivo di properties, un sinonimo è `attributes` (come l'href dell'elemento `<a>`), queste props al loro interno dopo = andiamo ad inserire il valore.

- userò come esempio all'interno dei `REACT-VITE-TEST-INTERMEDIO` tramite un componente CARD! per gli esempi

tramite delle variabile definite all'interno della funzione del componente rendendo gli elementi HTML al suo interno dinamici integrando il contenuto o gli attributi di essi DINAMICI, al cambiamento di una variabile cambieranno comportamento tutti quanti!, ecco un esempio:
```tsx
const description: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet vitae obcaecati tempora nat!";
<p>{description}</p>
```

sapendo questo, ora possiamo passare i valori in maniera dinamica direttamente dall `App.tsx` i vari valori tramite le props che sono degli attributi all'interno dei components, ecco un esempio di props personalizzate, nell App principale:
```tsx
// App.tsx
<Card title="Tokyo" imgUrl="https://plus.unsplash.com/premium_photo-1675714692779-0c451bbd796a?q=80&w=2070&auto"></Card>

// Card.tsx
function Card(props: CardProps) {

    // parametri ottenuti dalle props passate dall'App.tsx con gli attributi personalizzati
    const title: string = props.title;
    const description: string = "Lorem ipsum cati tempora nat!";
    const imgUrl: string = props.imgUrl;
}
```
importante creare un type di supporto tramite un file `model.ts` che va a definire esplicitamente i tipi per le props, viene chiamata `interface` e anch'essa se si trova in un file diverso dal component va esportata!

- se provassimo a scrivere tutto il tsx (HTML dentro il return) del Card.tsx in mezzo all'elemento `<Card>QUI</Card>`, non si vedrebbe e non verrebbe rendirizzato nulla! questo perchè nel componente di Card andiamo a `RETURNARE DEI FRAGEMENT VUOTI -> <></>`, quindi per forza dobbiamo usare e passare `il Children come prop` per permettere di fare questo passaggio:
```tsx
<>{children}</>
```



---



## Rendering di liste
Il rendering di liste è un concetto fondamentale in React (e nella programmazione in generale) che consente di `mostrare dinamicamente una serie di elementi basati su dati strutturati`, come array o oggetti. In un'applicazione React, il rendering di liste viene utilizzato per creare componenti ripetuti senza doverli scrivere manualmente.

un esempio di base su come implementare rendering di liste:
```tsx
const products = ['Laptop', 'Smartphone', 'Tablet'];

function App() {
  return (
    <ul>
      {products.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  );
}
```


---


## Gestione degli Eventi

per adesso gestione esclusivamente di cosa succede quando premiamo un bottone e in cui possiamo decidere di gestire un'evento, un esempio banale di un evento in linea al click del bottone con funzione arrow anonima che contiene il codice che verrà eseguito al click del bottone:
```tsx
   <button onClick={() => { alert("ciao") }}>ciao</button>
```
- se non usassi l'arrow function, l'alert partirebbe subito!

CONSIGLIO: lavorare con delle funzioni separate e non in linea, creare una funzione Handler sopra prima del return(), per invocare la funzione di callback, NON BISOGNA METTERE LE ()
```tsx
function handleClick(e): void {
    alert("ciao");
    console.log(e);
  }

<button onClick={handleClick}>ciao</button>
```

- possiamo passare come parametro alla funzione l'evento che ci mostra svariate info di quando è successo, le cordinate del mouse...

ulteriori test sempre nel progetto `REACT-VITE-TEST-INTERMEDIO`, per + info leggere anche i commenti



---



## Gestione dello Stato 

useState è un hook utilizzato per gestire lo stato nei componenti funzionali. Consente ai componenti di "ricordare" informazioni tra i rendering, come contatori, input dell'utente o altri dati dinamici.

useState NON va a cambiare ad esempio da un valore iniziale 0 per trasformarlo in 1, ma creerà un nuovo stato con il counter che è a 1, e lo stato precedente viene buttato via per andare a favore di un nuovo stato, e viene notificato a React di ridisegnare il componente e di reindizzarsi, lo state viene memorizzato e lo ricorda che era in quello stato il componente in questo esempio `COMPONENTE: <App>`.

OGNI VOLTA CHE CI SONO DEGLI UPDATE AGLI STATI, ALLORA IL COMPONENTE SI AGGIORNA E VIENE REINDIRIZZATO, QUINDI FA RIPARTIRE TUTTO E VA A CAMBAIRE QUELLA COSA CHE E STATA AGGIORNATA

per usare lo useState bisogna importarlo da React:
```tsx
import React, { useState } from 'react';
```

**Cosa fa useState?**
- `state`: il valore corrente dello stato.
- `setState`: una funzione che permette di aggiornare lo stato, in questo caso "state".
- `initialValue`: il valore iniziale dello stato.
**Caratteristiche principali**
Ogni chiamata a useState gestisce un pezzo indipendente di stato.
L'aggiornamento dello stato tramite setState provoca il re-rendering del componente per riflettere i cambiamenti.

un esempio di inizializzazione di uno State classico:
```tsx
const [state, setState] = useState(initialValue);
```



---



## Comunicazione Child -> Parent
come possiamo mandare i DATI da un FIGLIO a un componente PADRE, fino ad adesso abbiamo passato i dati dal padre al figlio tramite i props all'interno di `App.tsx`, proviamo tramite un form che va ad aggiungere una CARD alla nostra lista delle città (creazione di un componente apposito per creare delle card).

come facciamo a fare uscire questi dati dal Child del form?
- dobbiamo rendere l'array con gli oggetti delle varie ciità uno STATO per permettere che si aggiorni con la pagina correttamente senza che i dati vadano persi
- rimettiamo come state iniziale le vecchie città usate tramite le props, quelle successive verranno aggiunte in `cities[] con setCities()`

ci permette questa funzione di accettare una CITTA IN ENTRATA che ci verrà passata e la inseriamo all'interno delle cities[] tenendo memoria anche dello stato precedente di esso!
```tsx
const addCity = (city) => setCities([...cities, city]);
```

**come chiamare questa funzione dal figlio CardForm.tsx (FIGLIO)?**
ovviamente il figlio CardForm non è in grado di gestire lo stato del genitore App.tsx, dobbiamo passare la funzione come riferimento e dire a CardForm di chiamare questa funzione che aggiunge le città, lo facciamo tramite i `prop`


---



## Utilizzo di useEffect (() => { })
lo state è qualcosa che invoco, l'effetto è qualcosa che viene eseguito quando viene succede qualcosa
un effetto accade e basta, non va a modificare lo stato del componente

`UseEffect` viene eseguito OGNI MOUNT del componente, quindi anche se riaggiorniamo la pagina verrà eseguito sempre al suo mount,
- se io invece registro anche degli altri stati del componente nelle [], quando io aggiorno lo stato (click del bottone) vengono eseguti ancche quelli correlati ad esso
- se lascio vuote le [] senza delle dipendenze, l'useEffect verrà eseguito SOLO AL MONATAGGIO DEL COMPONENTE
```js
 UseEffect(() => console.log("count updated whit useEffect"), [count])
```



---



## Hooks
I React Hooks sono una funzionalità introdotta in React 16.8 che permette di utilizzare lo stato e altre funzionalità di React nei componenti funzionali, senza dover scrivere classi.


## [Custom Hooks](https://usehooks.com/)
I Custom Hooks in React sono un modo per incapsulare e riutilizzare logiche che utilizzano gli Hook standard come useState, useEffect, ecc. Sono semplicemente funzioni che seguono una convenzione di naming (use...) e permettono di condividere logica tra componenti in modo elegante.

**Perché usare Custom Hooks?**
- Per evitare codice duplicato.
- Per separare la logica del componente dalla sua interfaccia.
- Per migliorare la leggibilità e il riutilizzo del codice.

li creiamo in una cartella apposita dentro src/ -> `hooks/`



---


## Gestione di form dinamici

Lavorare con i form sfruttiamo tutto ciò che abbiamo imparato fino ad ora. Ad esempio, prendiamo il progetto finale e mettiamo una modale form per aggiungere nuovi corsi per la palestra.

### Step per creare un form dinamico:

- **Creare un componente form**: 
  - Aggiungiamo un evento di `onSubmit={handleSubmit}`, in cui una volta cliccato il bottone di invio, viene invocata la funzione `handleSubmit` che gestisce la logica di invio del form.

- **Aggiungere i campi input**: 
  - Inseriamo campi con le proprietà dei corsi della palestra (nome, descrizione, prezzo/m, ...).
  - Creiamo un oggetto unico che contiene tutti i dati necessari per creare un corso.

- **Gestire lo stato del form**: 
  - Creiamo un oggetto `formData` che inizialmente è vuoto, ma con almeno i nomi delle proprietà del corso.
  - Ogni volta che l'utente modifica un campo del form, aggiorniamo lo stato di `formData` con i nuovi valori degli input tramite il setter `setFormData`.

- **Aggiungere il value agli input**:
  - Aggiungiamo il `value` agli input per sincronizzarli con lo stato del form.
  - Questo assicura che il valore mostrato nell'input sia sempre quello nello stato.
  - Quando si modifica l'input, scatterà l'evento `handleChange`, che aggiornerà `formData`.

  ```tsx
  <input type="text" name="name" value={formData.name} onChange={handleChange} />
  ```

- **Gestire il cambiamento degli input**:
  - Aggiungiamo un evento `onChange={handleChange}` agli input.
  - Ogni volta che un utente modifica un input, viene invocata `handleChange`, che aggiorna lo stato del form con i nuovi valori.



---



## React Routing

Il routing in React ci consente di "instradare" i nostri utenti all'interno dell'applicazione:
- In un sito vanilla, questo sarebbe equivalente a creare diverse pagine HTML (ad esempio: `home.html`, `about.html`, `contacts.html`) tra cui è possibile navigare.
- In React, essendo un'applicazione SPA (Single Page Application), non cambiamo mai realmente pagina. Anche se "instradiamo" l'utente su un'altra parte dell'applicazione, la pagina rimane tecnicamente la stessa.

Grazie al **routing**, possiamo simulare la navigazione tra pagine diverse senza ricaricare il browser.

### Come si applica il routing in React

### 1. Installazione di React Router[https://reactrouter.com/]
React Router è *la libreria* che ci consente di gestire il routing in React, con tanto di documentazione e informazioni in +
Esegui questo comando per installarlo:

```bash
npm install react-router-dom
```

### 2. Configurare il Router
Nel file principale (es. `App.tsx`), importa i componenti necessari da `react-router-dom`:

```tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
```

Ora puoi configurare le tue rotte:

```tsx
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### 3. Creare le Pagine
Ogni "pagina" dell'applicazione sarà un componente React, Esempio:

#### Home.tsx
```tsx
const Home: React.FC = () => {
  return <h1>Benvenuti nella Home Page</h1>;
};

export default Home;
```

#### About.tsx
```tsx
const About: React.FC = () => {
  return <h1>Pagina About</h1>;
};

export default About;
```

#### Contacts.tsx
```tsx
const Contacts: React.FC = () => {
  return <h1>Contatti</h1>;
};

export default Contacts;
```

### 4. Collegare le Rotte
Usa il componente `Link` di React Router per creare collegamenti tra le pagine, implementazione tramite un componente `Navbar.tsx` in cui i path sia dei <Routes> che quelli di <NavBar> devono corrispondere per creare un collegamento:

#### NavBar.tsx
```tsx
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
```

### 5. Passaggio di Parametri
React Router permette anche di passare parametri tramite l'URL.

#### Rotta con Parametro
```tsx
<Route path="/user/:id" element={<UserProfile />} />
```

#### Accesso al Parametro
Nel componente `UserProfile`:
```tsx
import { useParams } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const { id } = useParams();

  return <h1>Profilo Utente: {id}</h1>;
};

export default UserProfile;
```

### 6. Gestione delle Rotte Non Trovate
Puoi gestire una pagina "Not Found" per rotte inesistenti:

```tsx
<Route path="*" element={<NotFound />} />
```

#### NotFound.tsx
```tsx
const NotFound: React.FC = () => {
  return <h1>404 - Pagina non trovata</h1>;
};

export default NotFound;
```

### Vantaggi del Routing in React

- **Navigazione senza ricaricare la pagina**: migliora le prestazioni e l'esperienza utente.
- **Gestione delle rotte dinamiche**: puoi creare URL personalizzati e gestire parametri facilmente.
- **Componentizzazione**: ogni pagina è un componente React separato, rendendo il codice modulare e riutilizzabile.

React Router è un potente strumento che rende la gestione della navigazione nelle SPA semplice e intuitiva.





---



## [React router](https://reactrouter.com/)
è una libreria molto utilizzata per la gestione del routing nelle applicazioni React. Consente agli sviluppatori di creare e gestire la navigazione all'interno di un'app React.

per utilizzarlo dobbiamo installarlo sulla nostra macchina tramite il comando `npm i react-router` che ci permtte di scaricare la LIBRERIA!

SUCCESSIVAMENTE seguire la [guida](https://reactrouter.com/start/library/installation) per andare intergrare la libreria all'interno del nostro progetto react.

- se prima avevamo la nostra APP con i nostri componenti dentro
- andremo ad avere un APP che al suo interno avrà un oggetto di ROTTE e all'interno di esso avrà delle ROTTE in cui in base all'url andremo a splittare le 2 pagine e a seconda di esso andrà a scegliere quale pagina rendirizzare (ogni pagina avrà i suoi componenti che veranno montati di conseguenza quando visualizzo la pagina!)












## recap del progetto pokedex con REACT fatto in classe!
- importiamo il font che arrviva da google da una libreria all'interno del `main.tsx`, dobbiamo usare il @ts-expect-errror sotto commento per non causare problemi con esso
```js
// @ts-expect-error
```

- prendiamo l'entry point che renderizza il nostro contenitore della view `<App>`

- useState(limit) che ci permtette di gestire il numero massimo di pokemon visualizzabili in pagina, il primo elemento eè un getter il secondo è un setter, quando distruggo il componente sparisce 

- usePokeApi è un custom hook (funzione) che contiene degli altri hooks e al suo interno che ha un useState(), anche se è una funzione hook separato, verrà distrutto quando viene distrutto il suo genitore

- creato un componente custom semplice che <title> ha la particolarità in cui vado a tipizzare le props tramite le `PropsWhitchChildren` da REACT, in cui sto usando un children all'interno del componente, invece all'interno di <pagination> contiene dei props variabili, chiamate agli hooks esterni

- PokeCard, è un oggetto (un falso componente!) che ritorna 2 elementi `Element: PokeCardElement○` / `Container: `lo andiamo semplicemente a rinomianre creazione di un alias per poi utilizzarli con la forma dell'oggetto ma è sempre quello!

- Utilizziamo anche un componente apposito per mettere il path all'immagine all'interno di `PokeCard.tsx` che va a importare al suo intenro l'assets contente l'immagine, per poi usare questo componente da altre parti esportandolo
```js
import PokeIcon from "../../assets/pokemonIcon.svg
```

- useEffect() per dare quell'effetto di caricamento quando si cambia pagina della lista dei pokemon del pokedex, contiene un setTimeOut() e dentro esso ha un setInternalLoading, esempio di un return che funziona come esempio di unmount del component





# PROGETTO FINALE DA CONSEGNARE

## [Componenti già costruiti UX/UI](https://mui.com/material-ui/)

## [Host locale per la cartella dist/](https://app.netlify.com/drop)





## recap finale di come si lavora su un progetto spa
- *`raccolta di informazioni e requisiti`*: bisogna raccoglierle in maniera precisa e dettagliata, in modo da avere una visione chiara del progetto e delle sue caratteristiche, iniziamo a guardare il progetto e a dare un occhio, dobbiamo tenere conto del:
  - *contesto?*: se non ci viene passato, andrebbe chiesto al project manager, sapere cosa si utilizza e che tecnlogia si va a riscontrare, sapere anche cosa fa quella applicazione (gestionale? landin page? e-commerce?), evitiamo troppe domande per il motivo di sovraccaricare la mente con troppe informazioni ancora inutili per qualcuno che non sa nemmeno come gira il progetto.
  - *individuare problemi bloccanti*: faccio un paio di tentativi per provare a riparare il problema, se non riesco a risolverlo, lo segnalo al project manager e alzo la mano!
  - *ispezionare i dev tools X network*: utilizzare i dev tools di chrome, sopratutto per i frontendisti che usano REACT ANGULAR, in cui le informazioni passano attraverso dev tools.

- *`chiedere le metodologie di lavoro`*: iniziamo a chiedere le metodologie di lavoro, se è un progetto che si sta facendo in team o se è un progetto che si sta facendo da solo, quali sono i modi per sviluppare (AGILE, PR, VERSIONING PARTICOLARE) 

## riassunto finale del corso di REACT 
[swiper](https://swiperjs.com/): carosello libreria per potereì creali (il migliore secondo il prof)
  - documentazione x REACT: https://swiperjs.com/react