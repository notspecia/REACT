import { useState, useEffect } from 'react';
import type { Pizza } from '../../models/pizzeria.model';
import { BASE_URL } from '../../utils/costants';
import { GetDettaglioPizza } from '../../services/Gets.api';
import { useParams } from 'react-router-dom';




function usePizzaDetailController() {

    //* prendiamo tramite fetch GET, la pizza richiesta nel dettaglio
    const [pizza, setPizza] = useState<Pizza | null>(null);

    //* stato caricamento della fetch GET API in attesa di caricamento del dettaglio pizza
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const { idPizza } = useParams(); // prendiamo l'id della pizza dettaglio specificata nella rotta dinamica


    // -----------------------

    useEffect(() => {
        const timerID = setTimeout(() => {
            GetDettaglioPizza(`${BASE_URL}/pizzas/${idPizza}`)
                .then(res => { setPizza(res); console.log(res); })  // successo, salviamo i dati della pizza richiesta nel dettaglio
                .catch(() => console.error("Errore nel caricamento dettaglio pizza"))
                .finally(() => {
                    setIsLoading(false);
                });
        }, 500);

        return () => clearTimeout(timerID);

    }, []);



    return {
        pizza,
        isLoading
    }
}


export default usePizzaDetailController; 