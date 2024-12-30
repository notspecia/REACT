import { useEffect, useState } from "react";


function Example() {

    const [count, setCount] = useState(0); // stato che è in ascolto sull'useEffect  :)
    const [countTwo, setCountTwo] = useState(0); // stato che NON è in ascolto sull'useEffect  :(


    /* 
    al click aumeneta i count del bottone tramite il setCount che tiene memoria del nuovo valore (di entrambi i counter), 
    e vado a cambiare il titolo della pagina con il contatore (solo con il primo count state!!)
    QUESTO NON è IL MODO CORRETTO PERCHE NON SI VA A SINCRONIZZARE IL CAMBIAMENTO DEL TITOLOIN TEMPO REALE AL CLICK DEL BOTTONE */
    const handleClick = () => {
        setCount((count + 1));
        document.title = `conteggio ${count}`; // non cambierà in tempo reale! e non funzionerà
    }

    const handleClicktwo = () => {
        setCountTwo((countTwo + 1));
    }


    /*
    * useEffect -> va a simulare un ciclo di vita del componente, e gli diamo delle DEPENDENCIES che saranno gli stati che permettono l'aggiornamento di useEffect:
    
    * - QUESTA FUNZIONE VIENE GESTITA AUTOMATICAMENTE AL CAMBIAMENTO DELLO STATO DELLE DIPENDENZE (in questo caso "count") 
    * - ogni volta che il "count" viene aggiornato, lo dice all'useEffect che esegue il codice al suo interno (verranno eseguito il console log e cambia il titolo!)
    * - utile PER METTERLO IN ASCOLTO SU DETERMINATE DEPENDECIES escludendo quelle indesiderate (esempio di 2 bottoni con counters diversi!)
    */
    useEffect(() => {
        document.title = `conteggio ${count}`;
        console.log("ciao da useEffect"); // ogni aggiornamento del componente, l'use effect viene rilanciato ALMENO UNA VOLTA con le [] vuote
    }, [count]);



    return (
        <>
            <div>
                <button onClick={handleClick} className="bg-green-500 mr-6">incrementa in ascolto useEffect</button>
                <button onClick={handleClicktwo} className="bg-blue-700">incrementa NON in ascolto</button>
                <p>Conteggio dello state che ascolta: {count}</p>
                <p>Conteggio dello state che NON ascolta: {countTwo}</p>
            </div>
        </>
    )
}


export default Example; // esportiamo questo componente in App.tsx per vedere come funziona useEffect