


/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
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