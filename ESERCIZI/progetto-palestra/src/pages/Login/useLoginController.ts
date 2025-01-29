import { FormEventHandler, useState } from "react";
import { useNavigate } from 'react-router-dom'; // una volta compilato correttamente il form di login, rinvia l'utente alla pagina degli oggetti prenotati

import LoginUser from "../../services/LoginUser.api";



/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
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
        setDataLogin({ ...dataLogin, [name]: value });
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
            navigate("/equipments-booked");

            // gestione errori di autenticazione da mostrare all'utente settato tramite setDataError()
        } catch (err) {
            setDataError(err.message)
        }
    }


    // restituiamo gli state e le funzioni evocate dal form all'iterno del file Login.tsx
    return {
        dataLogin,
        dataError,
        handleInputChange,
        handleSubmit
    }
}

export default useLoginController;