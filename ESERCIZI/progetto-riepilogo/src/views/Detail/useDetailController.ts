import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { type DetailFilmSerie } from "../../models/DetailFilmSerie.model";
import detailTvmaze from "../../api/detailTvmaze.api";



function useDetailController() {

    const { id } = useParams(); // prendiamo l'id specificato nella rotta dinamica
    const [filmSerie, setFilmSerie] = useState<DetailFilmSerie | null>(null); // oggetto contente il film dettaglio


    // al montaggio del componente esegue funzione useEffect per farre GET del film dettaglio
    useEffect(() => {
        setTimeout(() => {
            if (!id) return
            detailTvmaze(`https://api.tvmaze.com/shows/`, id)
                .then(res => { setFilmSerie(res); console.log(res); })  // successo, salviamo i dati 
                .catch(() => console.error("Errore nel caricamento"));
        }, 1100);
    }, [id]);


    return {
        filmSerie
    };
}



export default useDetailController;