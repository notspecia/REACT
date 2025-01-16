

// funzione service api che si collega alla pagina Register.tsx, ottiene i dati dei form una volta che sono validi, effettua una API POST per registrare l'utente 
export const RegisterUser = async (username: string, password: string, path: string) => {

    const response = await fetch(path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // prendiamo i parametri della funzione {username:"x",password"y"} e li convertiamo in JSON per mandarlo come body delle POST creation
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error("Errore nella registrazione. Riprova più tardi!");
    }

    return response.text(); // Restituisce i dettagli la risposta della chiamata HTTP POST
};


export default RegisterUser;