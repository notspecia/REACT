import { useState, useEffect } from 'react';
import type { Pizza, TableOrderRequestBody } from '../../models/pizzeria.model';
import { BASE_URL } from '../../utils/costants';
import { GetListaPizze } from '../../services/Gets.api';
import { BookingPizze } from '../../services/Posts.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


function useListaPizzeController() {

    //* prendiamo tramite fetch GET, la lista delle pizze nel menu
    const [listaPizze, setListaPizze] = useState<Pizza[]>([]);

    //* stato caricamento della fetch GET API in attesa di caricamento della lista pizze
    const [isLoading, setIsLoading] = useState<boolean>(true);

    //* stato per tenere traccia delle quantità ordinate per ogni pizza, passando l'id delle pizze selezionate da ordinare
    const [ordini, setOrdini] = useState<{ [pizzaId: string]: number }>({});

    const { idPrenotazione } = useParams();
    const navigate = useNavigate();


    // -----------------------

    // montaggio del componente mandata richiesta GET per ottenere le pizze + simulazione ritardo chiamata per loader component
    useEffect(() => {
        const timerID = setTimeout(() => {
            GetListaPizze(`${BASE_URL}/pizzas`)
                .then(res => {
                    setListaPizze(res);
                    console.log("Risposta API:", res);
                })
                .catch(() => console.error("Errore nel caricamento delle pizze! Riprova più tardi."))
                .finally(() => {
                    setIsLoading(false);
                });
        }, 500);

        return () => clearTimeout(timerID);

    }, []);


    // ------------------------


    // calcolo del numero totale pizze ordinate e prezzo complessivo sommato con tutte le pizze
    const totalePizze = Object.values(ordini).reduce((acc, q) => acc + q, 0);

    // calcolo del prezzo totale confrontando la lista delle pizze e l'array con le pizze ordinate
    const prezzoTotale = listaPizze.reduce((acc, pizza) => {
        const q = ordini[pizza.id] || 0;
        return acc + pizza.price * q;
    }, 0);


    // ----------------------------


    // funzione per aggiornare quantità per una pizza (passata al componente figlio come funzione di handler)
    const aggiornaQuantita = (pizzaId: number, quantita: number) => {
        setOrdini((prev) => ({
            ...prev,
            [pizzaId]: quantita,
        }));
    };


    // funzione per effettuare la POST al server per mandare la prenotazione delle pizze assegnate al tavolo x 
    const handleOrdination = async () => {
        try {
            // creazione body della richiesta per mandare gli ordini {id, q}
            const orderData: TableOrderRequestBody[] = Object.entries(ordini).map(([pizzaId, quantity]) => ({
                pizza_id: parseInt(pizzaId),  // Assicurati che pizzaId sia un numero
                quantity,
            }));

            await BookingPizze(`${BASE_URL}/tables/${idPrenotazione}/orders`, orderData);
            // toast notification + redirect alla pgaina dell'ordine fatto 
            toast.success(`Ordine per tavolo ${idPrenotazione} confermato! Totale: €${prezzoTotale.toFixed(2)}`)
            navigate(`/${idPrenotazione}/order`);

        } catch (error) {
            console.error("Errore nell'ordinazione:", error);
            alert(`Errore nell'ordinazione: ${error.message}`);
        }
    };



    // restituzione degli stati della lista pizze e funzioni di handler
    return {
        idPrenotazione,
        listaPizze,
        isLoading,
        ordini,
        totalePizze,
        prezzoTotale,
        aggiornaQuantita,
        handleOrdination,
        navigate
    }
}


export default useListaPizzeController;