import { useState, useEffect } from 'react';
import type { TableOrderResponse } from '../../models/pizzeria.model';
import { BASE_URL } from '../../utils/costants';
import { GetOrdini } from '../../services/Gets.api';
import { useNavigate, useParams } from 'react-router-dom';




function useOrdineController() {

    //* stato contenete l'array degl iordini relativi all'idPrenotazione nel path
    const [order, setOrder] = useState<TableOrderResponse[]>([]);

    //* stato caricamento della fetch GET API in attesa di caricamento del dettaglio pizza
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const { idPrenotazione } = useParams(); // prendiamo l'idPrenotazione specificato nella rotta dinamica
    const navigate = useNavigate();


    // mount del componente fetch degli ordini passando l'ID della prenotazione dall'url
    useEffect(() => {
        GetOrdini(`${BASE_URL}/tables/${idPrenotazione}/orders`)
            .then(res => { setOrder(res); console.log(res); })  // successo, salamo i dati della pizza richiesta nel dettaglio
            .catch(() => console.error("Errore nel caricamento degli ordini"))
            .finally(() => setIsLoading(false));
    }, [idPrenotazione]);

    // funzione per gestire il click sul bottone che porta alla lista delle pizze
    const handleGoToListaPizze = () => {
        navigate(`/${idPrenotazione}/menu`);
    };


    return {
        order,
        isLoading,
        idPrenotazione,
        handleGoToListaPizze
    }
}


export default useOrdineController; 