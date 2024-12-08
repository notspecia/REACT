//! file App.tsx resettata per testare:  1.props / 2.eventi / 3.useState / 4.child to parent / 5.useEffect

import './App.css' // importiamo lo style CSS iniziale che stilizza i loghi, button...
import Card from './components/Card/Card' // importazione del component CARD per usare e testare le props
import { useState } from 'react'; // importazione da react lo usestate per poterlo utilizzare
import CardForm from './components/CardForm/CardForm';



function App() {

  //*------------ funzioni che gestiscono eventi ----------------
  function handleClick(): void {
    alert("ciao");
  }

  function handleChange(): void {
    console.log("ciao ho cambiato");
    // console.log(e.target.value); vado a mostrare su console i cambiamenti fatti nell'input 
  }

  // // NON CAMBIA LO STATE DELLA PAGINA CON -> e.preventDefault(); perchè preveniamo il default che è l'invio della pagina tramite form
  // function onSubmit(): void {
  //   e.preventDefault();
  // }


  //*----------- gestione dello stato del comonente (SPA) ---------------
  const [count, setCount] = useState(1); // hook useState per incremento di un numero 
  const [items, setItems] = useState([1, 2, 3]); // useState per provare con altri tipi (array[])
  let conteggio: number = 0; // variabile normale per fare il confronto con useState unziona effettivamente, ma non verrà modificato!

  // creiamo una funzione e che va incrementare e togliere e cambiare lo STATE degli items
  function addItem() {
    const itemNew = 5;
    setItems([...items, itemNew]); // spread operator sull'array aggiungendo il nuovo item, senza perdere lo stato precedente dell'array!
    console.log(items);
  }


  function removeItem() {
    items.pop();
    setItems(items);
    console.log(items);
  }



  return (
    <>

      {/*  */}
      <CardForm></CardForm>


      {/* Importazione della CARD component per testare le prop, passando il TITLE + IMGSRC stiamo dicendo a React che questo elemento 
      ha degli attributi personalizzati (SONO CHIAMATE -> PROP) */}
      <div className='flex flex-row gap-7'>
        <Card conteggio={count} title="Tokyo" imgUrl="https://images.unsplash.com/photo-1733170616326-84000c81fba3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" paragraph="ciao prova"></Card>
        <Card conteggio={count} title="Paris" imgUrl="https://images.unsplash.com/photo-1733170616326-84000c81fba3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" paragraph="ciao prova"></Card>
        <Card conteggio={count} title="Italy" imgUrl="https://images.unsplash.com/photo-1733170616326-84000c81fba3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" paragraph="ciao prova"></Card>
        <Card conteggio={count} title="Germany" imgUrl="https://images.unsplash.com/photo-1733170616326-84000c81fba3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" paragraph="ciao prova"></Card>
      </div>


      {/* gestione degli EVENTI, inserisco l'evento grazie al formato TSX all'interno delle {}
       se andiamo a submitare un form, la pagina si ricarica perchè la paina viene aggiornata! non vogliamo questo risultato
       perchè è un framework che si basa sulle SPA (che stanno dentro una singola pagina, non vogliamo che "lasciamo la pagina")
       NON VOGLIAMO PERDERE LO STATE DELL'APPLICAZIONE */}
      <button className='bg-slate-200 px-10 py-2 text-black mt-10 rounded-lg' onClick={handleClick}>ciao</button>
      <input type='text' className='block black text-black' onChange={handleChange} />
      {/* <form action="" onSubmit={onSubmit}>
        <button type='submit' className='bg-slate-200 px-10 py-2 text-black mt-10 rounded-lg inline-block'>invia</button>
      </form> */}


      {/* gestione dello stato della single page application / componente
      è ben diverso invece creare un bottone che INCREMENTA UNA VARIABILE NORMALE SENZA USARE useState , non sarà visualizzato
      su schermo l'incremento di quel numero (non funziona usando solo LA LOGICA JS qui su react!) perchè la funzione del
      componente va a esserre riniziallizata e il valore del conteggio ritorna a 0  */}
      <button className='bg-slate-200 px-10 py-2 text-black mt-10 mr-5' onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      <button className='bg-red-500 px-10 py-2 text-black mt-10 mr-5' onClick={() => conteggio++}>conteggio is {conteggio}</button>

      <button className='bg-green-400 px-10 py-2 text-black mt-10 mr-5' onClick={addItem}>add Item read console()</button>
      <button className='bg-red-400 px-10 py-2 text-black mt-10' onClick={removeItem}>remove Item read console()</button>
    </>
  )
}


export default App;