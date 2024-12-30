//! file App.tsx per testare:  1.props / 2.rendering di liste / 3.eventi / 4.useState / 5.child to parent / 6.useEffect

import { useState } from 'react'; // importazione da react lo usestate per poterlo utilizzare
import './App.css' // importiamo lo style CSS iniziale che stilizza i loghi, button...
import Card from './components/Card/Card' // importazione del component CARD per usare e testare le props
import CardForm from "./components/CardForm/CardForm";
import { type City } from "./City.model"; // type della city
import Example from './components/Example/Example';



function App() {

  //*------------------ confronto utilizzo useState e NON, per un counter ------------------

  const [count, setCount] = useState(1); // hook useState per incremento di un numero 

  let conteggio: number = 0; // variabile normale per fare il confronto con useState funziona effettivamente, ma non verrà modificato!



  //*------------------ gestione degli stati del comonente (SPA) ------------------

  const [items, setItems] = useState([1, 2, 3]); // useState per provare con altri tipi (array[]), partiamo con un array di base da modificare
  const itemNew: number = 5;

  // creiamo una funzione e che va ad aggiungere e cambiare lo STATE degli "items"
  function addItem() {
    setItems([...items, itemNew]); // spread operator sull'array aggiungendo il nuovo item, senza perdere lo stato precedente dell'array!
    console.log(items);
  }

  // creiamo una funzione e che va a togliere e cambiare lo STATE degli "items", prima lo rimuoviamo e poi aggiorniamo lo state dell'applicazione!
  function removeItem() {
    items.pop();
    setItems(items);
    console.log(items);
  }



  //*------------------ funzioni che gestiscono eventi e il loro target! --------------------

  function handleClick() {
    alert("ciao");
  }

  function handleChange() {
    console.log("ciao ho cambiato");
    // console.log(e.target.value); // vado a mostrare su console i cambiamenti fatti nell'input 
  }

  // // NON CAMBIA LO STATE DELLA PAGINA CON -> e.preventDefault(); perchè preveniamo il default che è l'invio della pagina tramite form
  // function onSubmit(): void {
  //   e.preventDefault();
  // }



  //*------------ rendering di liste array di oggetti con città + comunicazione CHILD to PARENT ----------------

  // array di oggetti contenente delle città, per rendirizzare una lista comune useremo il metodo .map()
  // andiamo anche ad usare una sorte di rendering condizionale tramite dei valori booleani

  // rendiamolo uno stato per permettere di ricecere dati e memorizzare, memorizziamo come stato iniziali delle città di prova + controllo del :type[]
  const [cities, setCities] = useState<City[]>([
    {
      key: 0,
      name: "Belgium",
      imgURL:
        "https://images.unsplash.com/photo-1721641843496-3c8c60eab024?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Tokyo prova",
      isVisited: false
    },
    {
      key: 1,
      name: "Oland",
      imgURL:
        "https://images.unsplash.com/photo-1721641843496-3c8c60eab024?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Paris prova",
      isVisited: true
    },
    {
      key: 2,
      name: "Egypt",
      imgURL:
        "https://images.unsplash.com/photo-1721641843496-3c8c60eab024?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Italy prova",
      isVisited: false
    },
    {
      key: 3,
      name: "Romenia",
      imgURL:
        "https://images.unsplash.com/photo-1721641843496-3c8c60eab024?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Gernamy prova",
      isVisited: true
    },
  ]);


  // funzione che aggiunge una città tramite il setCities([]) tramite destructuring dell'array prendiamo lo stato precednte + aggiungengo la città
  const addCity = (city: City) => setCities([...cities, city]);




  return (
    <>

      {/* gestione dello stato della single page application / componente
      è ben diverso invece creare un bottone che INCREMENTA UNA VARIABILE NORMALE SENZA USARE useState , non sarà visualizzato
      su schermo l'incremento di quel numero (non funziona usando solo LA LOGICA JS qui su react!) 
      !! perchè la funzione del componente va a esserre riniziallizata e il valore del conteggio ritorna a 0!! */}
      <button className='bg-slate-200 px-10 py-2 text-black mt-10 mr-5' onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      <button className='bg-red-500 px-10 py-2 text-black mt-10 mr-5' onClick={() => conteggio++}>conteggio is {conteggio}</button>

      <button className='bg-green-400 px-10 py-2 text-black mt-10 mr-5' onClick={addItem}>add Item read console()</button>
      <button className='bg-red-400 px-10 py-2 text-black mt-10' onClick={removeItem}>remove Item read console()</button>



      {/* gestione degli EVENTI, inserisco l'evento grazie al formato TSX all'interno delle {}
       se andiamo a submitare un form, la pagina si ricarica perchè la paina viene aggiornata! non vogliamo questo risultato
       perchè è un framework che si basa sulle SPA (che stanno dentro una singola pagina, non vogliamo che "lasciamo la pagina")
       NON VOGLIAMO PERDERE LO STATE DELL'APPLICAZIONE */}
      <button className='bg-slate-200 px-10 py-2 text-black mt-10 rounded-lg' onClick={handleClick}>ciao</button>
      <input type='text' className='block black text-black' onChange={handleChange} />
      {/* <form action="" onSubmit={onSubmit}>
        <button type='submit' className='bg-slate-200 px-10 py-2 text-black mt-10 rounded-lg inline-block'>invia</button>
      </form> */}



      {/* Importazione della CARD component per testare le prop, passando:
      il conteggio(count) + TITLE + IMGURL + PARAGRAPH 
      stiamo dicendo a React che questo elemento ha degli attributi personalizzati passati dal padre (SONO CHIAMATE -> PROP) 
       +
       +
      AGGIUNTA DI CARD citta tramite:
      il RENDERING DI LISTE in maniera intelligente tramite il metodo .map()
      .map() riconosce che ogni elemento oggetto è una città e andiamo a creare per ogni città una nuova Card evitando di
      andare a scrivere tutto manualmente, si può anche applicare un rendering condizionale */}
      <div className='flex flex-row flex-wrap gap-7'>

        {/* 01. tramite props passate al figlio creiamo direttamente la radice dell'elemento in Card.tsx, 
        proviamo anche a passare tramite indice le proprietà di città volendo facendo anche un miscuglio cities[1].name... */}
        <Card conteggio={count} title="Tokyo" imgUrl="https://images.unsplash.com/photo-1733170616326-84000c81fba3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" paragraph="ciao prova"></Card>
        <Card conteggio={count} title="Paris" imgUrl="https://images.unsplash.com/photo-1733170616326-84000c81fba3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" paragraph="ciao prova"></Card>
        <Card conteggio={count} title="Italy" imgUrl="https://images.unsplash.com/photo-1733170616326-84000c81fba3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" paragraph="ciao prova"></Card>
        <Card conteggio={count} title="Germany" imgUrl="https://images.unsplash.com/photo-1733170616326-84000c81fba3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" paragraph="ciao prova"></Card>

        <Card conteggio={count} title={cities[0].name} imgUrl={cities[0].imgURL} paragraph={cities[0].description}></Card>

        {/* 02. usiamo il rendering di liste iterando con .map() ogni città dell'array "cities" passando ad esse le props indicate
        nell'esempio precedente, effettuiamo anche un controllo sulla proprietà delle cities "isVisited", se è stata visitata, verrà mostrata */}
        {cities
          .filter((city) => city.isVisited)
          .map((city, index) => (
            <Card
              key={index} // ID univico che indentifica la Card (buona norma per usare react)
              conteggio={count}
              title={city.name}
              imgUrl={city.imgURL}
              paragraph={city.description}>
            </Card>
          ))}

      </div>



      {/*Componente creato per permettere all'utente di generare delle card comunicando le informazioni da CHILD to PARENT
      - dobbiamo passare la funzione che contiene il metodo per SETTARE LE CITIES = setCities() come riferimento e dire a "CardForm.tsx" 
      di chiamare questa funzione che aggiunge le città, lo facciamo tramite i `prop`

      PER ORA RESTITUISCE SEMPRE UNA CARD CON UNA CITTA FISSA! */}
      <CardForm addCity={addCity}></CardForm>



      {/* componente che contiene degli esempi per testare gli effetti e il funzionamento dell HOOK "useEffect" */}
      <Example></Example>

    </>
  )
}


export default App;