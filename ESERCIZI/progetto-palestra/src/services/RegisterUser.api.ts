
// funzione service api che si collega alla pagina Register.tsx, ottiene i dati dei form una volta che sono validi, effettua una API POST per registrare l'utente 

/**
 * const RegisterUser = async () 
 * funzione service api che si collega alla pagina Register.tsx, ottiene i dati dei form una volta che sono validi, 
 * effettua una API POST per registrare l'utente 
 * @param {string} username - DescrizioneInput1
 * @param {string} password - DescrizioneInput2
 * @param {string} path - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
export const RegisterUser = async (username: string, password: string, path: string) => {

    const response = await fetch(path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // prendiamo i parametri della funzione {username:"x",password"y"} e li convertiamo in JSON per mandarlo come body della POST 
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error("Errore nella registrazione. Riprova più tardi!");
    }

    // restituisce i dettagli della risposta della chiamata HTTP POST per la registrazione di un nuovo utente
    return response.text();
};


export default RegisterUser;