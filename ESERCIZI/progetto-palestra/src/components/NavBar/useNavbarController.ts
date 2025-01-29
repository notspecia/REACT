import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function useNavbarController() {

    //* stato per tenere traccia tramite funzione se l'utente è loggato o no, in caso sia loggato, mostro il bottone di logout
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //* importato da react-router permette se inserito un path dei router dentro App.tsx, di rendirizzare l'utente dove si voglia
    const navigate = useNavigate();

    // ------------------------------------

    // al montaggio del componente navbar, andiamo a verificare se l'utente è loggato o no e cambiamo lo stato di esso
    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem("token"));
    }, [localStorage.getItem("token")]);

    // al click del bottone di logout, rimuoviamo il token dal localStorage e rendiamo l'utente non loggato
    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/login"); // renderizziamoo l'utente alla pagina di login
    };


    // restituiamo gli state e le funzioni evocate dal form all'iterno del file Login.tsx
    return {
        isLoggedIn,
        handleLogout
    }
}

export default useNavbarController;