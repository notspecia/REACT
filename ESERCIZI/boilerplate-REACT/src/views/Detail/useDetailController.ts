import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GetSomething from "../../services/Get.api";



function useDetailController() {

    const { id } = useParams(); // prendiamo l'id specificato nella rotta dinamica DALL URL
    const [robaDaFetchare, setrobaDaFetchare] = useState<{} | null>(null); // oggetto contente il film dettaglio


    // al montaggio del componente esegue funzione useEffect per farre GET del film dettaglio
    useEffect(() => {
        setTimeout(() => {
            if (!id) return
            GetSomething(`https://api.tvmaze.com/shows/`, id)
                .then(res => { setrobaDaFetchare(res); console.log(res); })  // successo, salviamo i dati 
                .catch(() => console.error("Errore nel caricamento della roba da fetchare"));
        }, 1100);
    }, [id]);


    return {
        robaDaFetchare
    };
}



export default useDetailController;