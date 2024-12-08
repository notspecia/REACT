import { useState, useEffect } from "react";


// Definizione dei tipi
type PokemonResult = {
    name: string;
    url: string;
};

type PokemonApiResponse = {
    count: number;
    results: PokemonResult[];
};


const DEFAULT_MAX_RESULTS = 10; // valore di default in caso non venisse passato



//* funzione che una volta chiamata restituisce restituisce i parametri in fondo di essa nel RETURN{}
const usePokeApi = (maxResults = DEFAULT_MAX_RESULTS) => {

    // Stati hooks
    const [pokemon, setPokemon] = useState<PokemonResult[]>([]); // Array di Pokémon
    const [page, setPage] = useState(0); // Pagina corrente
    const [totPages, setTotPages] = useState(0); // Totale delle pagine


    // Effetto: chiama l'API quando cambia la pagina
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page * maxResults}&limit=${maxResults}`)
            .then((res) => res.json() as Promise<PokemonApiResponse>)
            .then((data) => {
                console.log(data);
                setPokemon(data.results);
                setTotPages(Math.ceil(data.count / maxResults)); // calcolo per mostrare tot pokemon sulla pagina in base al parametro di `maxResults` 
            });
    }, [page, maxResults]); // Dipendenza dalla pagina



    //* Funzioni per la navigazione tra le pagine
    const goToNextPage = () => {
        if (page < totPages - 1) {
            setPage(page + 1);
        }
    };

    const goToPreviousPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };


    //* Controlli per abilitare/disabilitare i pulsanti
    // funzione che nel momento in cui si arriva al numero delle pagine totali, va a disabilitare in button di NEXT PAGE o vicerversa
    const hasNextPage = (): boolean => {
        if (page < totPages - 1) {
            return false;
        }
        return true;
    }

    const hasPrevoiusPage = (): boolean => {
        if (page > 0) {
            return false;
        }
        return true;
    }

    //* esportiamo un oggetto con i valori e le funzioni all'interno del componente App.tsx
    return {
        pokemon,
        page,
        totPages,
        goToNextPage,
        goToPreviousPage,
        hasNextPage,
        hasPrevoiusPage,
    };
};

export default usePokeApi;
