

// funzione service api che si collega alla pagina Register.tsx, ottiene i dati dei form una volta che sono validi, effettua una API POST per registrare l'utente 

/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
export const LoginUser = async (username: string, password: string, path: string): Promise<string> => {

    const response = await fetch(path, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        // prendiamo i parametri della funzione async {username:"x",password"y"} e li convertiamo in JSON per mandarlo come body delle POST creation
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error("Errore tentativo login. Riprova più tardi!");
    }

    return response.json();
};



export default LoginUser;