import { FormEventHandler, useState } from "react";
import { useNavigate } from 'react-router-dom'; // una volta compilato correttamente il form di login, rinvia l'utente alla pagina degli oggetti prenotati

import LoginUser from "../../services/LoginUser.api";



/**
 * Controller useLoginController
 * 
 * gestisce lo stato e la logica del form di login, inclusi l'inserimento dei dati di accesso 
 * e la gestione delle risposte dalla chiamata API di login
 * 
 * se il login ha successo, memorizza il token nel localStorage e reindirizza l'utente appena loggao alla home.
 * in caso di errore viene mostrato il messaggio di errore.
 * 
 * @returns {Object} - restituisce l'oggetto con gli stati e le funzioni da utilizzare nel form di login
 * @returns {Object} dataLogin - stato contenente username e password dell'utente
 * @returns {null | string} dataError - stato che contiene eventuali messaggi di errore riscontrati durante il login
 * @returns {Function} handleInputChange - funzione per aggiornare lo stato dei campi di input
 * @returns {Function} handleSubmit - funzione per gestire il submit del form
 */
function useLoginController() {

    //* stato iniziale del form di login con i campi nel form con stringa vuota, verranno modificati tramite handleInputChange() degli input
    //* stato inziale di un errore in caso ci fossero problematiche durante il login nel form
    const [dataLogin, setDataLogin] = useState({ username: "", password: "" });
    const [dataError, setDataError] = useState<null | string>(null);

    //* importato da react-router permette se inserito un path dei router dentro App.tsx, di rendirizzare l'utente dove si voglia
    const navigate = useNavigate();

    // ---------------------------------------------------------------------------------------

    // al cambiamento degli input USERNAME&PASSWORD, settiamo i nuovi dati tramite setFormData() dinamicamente da poi passare alla fetch POST all'interno del body in JSON
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target; // ricava il nome del campo (username/password) e il valore inserito
        setDataLogin(prev => ({ ...prev, [name]: value }));
    };


    /* al submit del form andiamo ad eseguire la fetch POST di login ricevendo un token per l'utente
    il token sarà successivamente memorizzato come cookie lato client per poi utilizzarlo come chiave per prenotare e vedere i propri oggetti da palestra 
    una volta submitato il form, rendirizzera alla pagina: EquipmentsBooked.tsx */
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {

        // prevenire il comportamento default di un form
        e.preventDefault();

        try {
            const res = await LoginUser(dataLogin.username, dataLogin.password,
                "https://d3660g9kardf5b.cloudfront.net/api/login"
            );

            // memorizziamo il token nel localStorage per poi utilizzarlo come chiave per prenotare e vedere i propri oggetti da palestra e veniamo renderizzati alla pagina agli strumenti dell'utente
            localStorage.setItem("token", res.token);
            navigate("/");

            // gestione errori di autenticazione da mostrare all'utente settato tramite setDataError()
        } catch (err) {
            setDataError(err.message)
        }
    }


    // restituiamo gli stati e le funzioni al componente "Login.tsx"
    return {
        dataLogin,
        dataError,
        handleInputChange,
        handleSubmit
    }
}

export default useLoginController;