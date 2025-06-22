import { useState, useEffect } from 'react';
import GetEquipments from './services/GetEquipments.api'; // funzione con promise per la richiesta HTTP GET di tutti gli equipments
import { type Equipment } from './models/Equipment.model';



/**
 * controller che gestisce il recupero e la gestione dello stato degli equipments della palestra
 * effettua una richiesta HTTP GET per ottenere la lista degli equipment e gestisce eventuali errori durante la chiamata
 * 
 * @returns {{ equipments: Equipment[], error: string | null }} - restituisce lo stato degli equipment e un eventuale messaggio di errore.
 */
function useAppController() {

    //* prendiamo tramite fetch GET, gli equipments della palestra da passare al Route <Home></Home>
    const [equipments, setEquipments] = useState<Equipment[]>([]);

    //* in caso la fetch GET degli equipments non va a buon fine, verrà settato un errore da mostrare nella Route <Home></Home>
    const [error, setError] = useState<string | null>(null);


    /* 
    al montaggio dell'App.tsx sarà avviato l'useEffect che fa una richiesta HTTP fetch per ricevere gli equipments per poi passarli al Route <Home></Home>
    richiamiamo la chiamata fetch che risolve la Promise che è stata restituita, con i dati equipments / errori
    01. i dati ricevuti con successo saranno settati tramite il setEquipments cambiano lo stato dell'App.tsx
    02. gli errori ricevuti dal fallimento della fetch o stato di errore, gestiti tramite lo stato apposito di App.tsx setError 
    */
    useEffect(() => {
        GetEquipments("https://d3660g9kardf5b.cloudfront.net/api/equipment")
            .then(res => { setEquipments(res); console.log(equipments) })  // successo, salviamo i dati 
            .catch(() => setError("Errore nel caricamento degli equipments! Riprova più tardi.")) // gestiamo errori da mostrare all'utente
    }, []);



    // restituzione degli stati degli equipment e degli errori
    return {
        equipments,
        error,
    }
}

export default useAppController;