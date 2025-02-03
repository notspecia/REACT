import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom"; // una volta compilato correttamente il form di regitrazione, rinvia l'utente all'homepage

import RegisterUser from "../../services/RegisterUser.api";



/**
 * Controller useRegisterController
 * 
 * gestisce la logica del form di registrazione, includendo la gestione dello stato 
 * degli input, la validazione dei dati, la chiamata API per la registrazione e il reindirizzamento 
 * dell'utente dopo una registrazione avvenuta con successo
 * 
 * @returns {object} - stato e funzioni necessarie per la gestione del form di registrazione in "Regisrter.tsx"
 */
function useRegisterController() {

    //* stato iniziale del form di registrazione con i campi nel form con stringa vuota, verranno modificati tramite handleInputChange() degli input
    //* stato inziale di un errore in caso ci fossero problematiche durante la registrazione nel form
    const [dataRegister, setDataRegister] = useState({ username: "", password: "" });
    const [dataError, setDataError] = useState<string[]>([]);

    //* importato da react-router permette se inserito un path dei router dentro App.tsx, di rendirizzare l'utente dove si voglia
    const navigate = useNavigate();

    // ---------------------------------------------------------------------------------------

    // validazione degli input quando viene submitato, se ci sono errori vegono settati gli errori tramite setFormError()
    const validateForm = (): boolean => {
        const errors: string[] = []; // Variabile temporanea per gli errori

        if (dataRegister.username.trim() === "") {
            errors.push("Inserisci un username valido!");
        }

        if (dataRegister.password.length < 6 || dataRegister.password.trim() === "") {
            errors.push("Inserisci una password valida che abbia almeno 6 caratteri!");
        }

        setDataError(errors);
        return errors.length === 0; // restituisci true se non ci sono errori, false se sono presenti
    };


    // al cambiamento degli input USERNAME&PASSWORD, settiamo i nuovi dati tramite setFormData() dinamicamente da poi passare alla fetch POST all'interno del body in JSON
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target; // ricava il nome del campo (username/password) e il valore inserito
        setDataRegister({ ...dataRegister, [name]: value });
    };


    // al submit del form vengono effettuati i controlli degli input username password, se sono validi la POST va a buon fine e si viene reinidirizzati all'home page
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {

        e.preventDefault();

        // validazione dei campi
        if (!validateForm()) {
            return;
        }

        try {
            // chiamata al servizio di registrazione
            const res = await RegisterUser(dataRegister.username, dataRegister.password, "https://d3660g9kardf5b.cloudfront.net/api/register");
            console.log(`${res}, dati del tuo nuovo utente: ${dataRegister.username} ${dataRegister.password}`);
            // pulizia degli errori e reindirizzamento alla homepage
            setDataError([]);
            navigate("/login");

            // gestione errori per la registrazione
        } catch (err) {
            setDataError(errors => [...errors, err.message]);
        }
    };


    // restituiamo gli stati e le funzioni al componente Register.tsx
    return {
        dataRegister,
        dataError,
        handleInputChange,
        handleSubmit
    }
}


export default useRegisterController;