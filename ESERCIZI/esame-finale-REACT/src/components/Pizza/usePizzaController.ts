import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Pizza } from '../../models/pizzeria.model';




function usePizzaController() {

    //* stato con flag per mostrare il selettore di quantita della pizza
    const [mostraSelettore, setMostraSelettore] = useState(false);

    const navigate = useNavigate();


    // -----------------

    // funzione per la gestione dello stato e gestione quantita delle pizze
    const handleShowSelettore = () => {
        setMostraSelettore(true);
    }

    // funzione handler per andare al dettaglio della pizza
    const handleGoToPizzaDetail = (pizza: Pizza) => {
        navigate(`/${pizza.id}/pizza`);
    }

    return {
        mostraSelettore,
        setMostraSelettore,
        handleShowSelettore,
        handleGoToPizzaDetail
    }
}


export default usePizzaController;