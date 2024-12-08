import { useState, useEffect } from "react";


//? Definizione del tipo per la risposta dettagliata dell'API Pokemon
// Contiene informazioni specifiche recuperate dall'endpoint Pokemon
type PokemonDetailResponse = {
    name: string;     // Nome del Pokemon
    weight: number;   // Peso del Pokemon
    sprites: {        // Oggetto contenente gli URL delle immagini
        front_default: string;  // Immagine frontale standard 
        back_default: string;   // Immagine posteriore standard
    };
};

//? Tipo personalizzato per il risultato ottimizzato per il frontend
// Semplifica e standardizza i dati ricevuti dall'API
type PokemonDetailResult = {
    name: string;         // Nome del Pokemon
    weight: number;       // Peso del Pokemon
    mainImageUrl: string; // URL dell'immagine principale
};


//* Funzione di trasformazione per adattare la risposta dell'API 
// al formato specifico richiesto dal frontend
const mapPokemonDetailToClient = (pokemonApiRes: PokemonDetailResponse): PokemonDetailResult => {
    return {
        name: pokemonApiRes.name,
        weight: pokemonApiRes.weight,
        mainImageUrl: pokemonApiRes.sprites.front_default
    };
};



//* Custom hook personalizzato per recuperare i dettagli di un Pokemon
const UsePokeDetailApi = (name: string) => {

    // Stato per memorizzare i dettagli del Pokemon dopo la trasformazione
    const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailResult>();
    // Stato per gestire il caricamento (opzionale ma consigliato)
    const [isLoading, setIsLoading] = useState(false);



    //* Hook per gestire il recupero dei dati quando cambia il nome del Pokemon
    useEffect(() => {
        // Verifica che sia stato fornito un nome valido
        if (name) {
            // Recupera i dettagli del Pokemon dall'API
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then(res => res.json())
                .then((data: PokemonDetailResponse) => {
                    // Trasforma i dati grezzi e aggiorna lo stato
                    const pokemonForClient = mapPokemonDetailToClient(data);
                    setPokemonDetail(pokemonForClient);
                    setIsLoading(false)
                });
        }
    }, [name]); //* Riesegue la fetch quando cambia il nome


    // Restituisce i dettagli del Pokemon processati e che se c'è un loading screen
    return { pokemonDetail, isLoading };
};


export default UsePokeDetailApi;