/**
 * effettua una richiesta API POST per registrare un nuovo utente.
 * 
 * questa funzione si collega alla pagina "Register.tsx", ottiene i dati del form una volta validati 
 * e invia una richiesta POST all'endpoint specificato per registrare l'utente
 * 
 * @param {string} username - username utente da registrare
 * @param {string} password - password associata all'account
 * @param {string} path - URL dell'endpoint API per la registrazione
 * @returns {Promise<string>} - risposta testuale del server
 * @throws {Error} - se la richiesta non va a buon fine
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