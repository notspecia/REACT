import { FormEventHandler, useState } from "react";
import { type FilmSerie } from "../../models/FilmSerie.model";
import tvmaze from "../../api/tvmaze.api";



function useSearchBarController(onResults: (results: FilmSerie[]) => void) {

    const [query, setQuery] = useState<string>("");  // query di ricerca della barra

    // al cambiamento degli input USERNAME&PASSWORD, settiamo i nuovi dati tramite setFormData() dinamicamente da poi passare alla fetch POST all'interno del body in JSON
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        onResults([]);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        // prevenire il comportamento default di un form
        e.preventDefault();

        try {
            const res = await tvmaze(query, "https://api.tvmaze.com/search/shows");
            onResults(res);

            // gestione errori di autenticazione da mostrare all'utente settato tramite setDataError()
        } catch (err) {
            console.log(err);
        }
    }

    // restituiamo gli stati e le funzioni al componente "SearchBar.tsx"
    return {
        query,
        handleInputChange,
        handleSubmit
    }
}



export default useSearchBarController;