/**
 * effettua una richiesta API POST per autenticare un utente e ottenere un token di autenticazione di esso
 * 
 * questa funzione si collega all'endpoint specificato, inviando le credenziali dell'utente 
 * per ottenere un token di autenticazione
 * 
 * @param {string} username - nome utente per l'accesso
 * @param {string} password - password associata all'account
 * @param {string} path - URL dell'endpoint API per l'autenticazione dell'utente
 * @returns {Promise<{ token: string }>} - oggetto contenente il token di autenticazione restituito dal server di BACKEND
 * @throws {Error} - se la richiesta non va a buon fine, ad esempio in caso di credenziali errate
 */
export const LoginUser = async (username: string, password: string, path: string): Promise<{ token: string }> => {

    // chiamata api dell'end point POST per registrare un nuovo utente
    const response = await fetch(path, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },

        // prendiamo gli argomenti della funzione {username:"x",password"y"} e li convertiamo in JSON per mandarlo come body della POST 
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error("Credenziali inserite errate! riprova!");
    }

    // restituiamo il token ricevuto dalla chiamata api in formato JSON {"token"}
    return response.json();
};



export default LoginUser;