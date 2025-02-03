import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


/**
 * controller useNavbarController
 *
 * controller che gestisce lo stato di autenticazione dell'utente e la navigazione nel componente Navbar *
 * @returns {Object} - stato dell'utente e funzione di logout
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


    // restituiamo gli state e le funzioni al componente "Navbar.tsx"
    return {
        isLoggedIn,
        handleLogout
    }
}

export default useNavbarController;