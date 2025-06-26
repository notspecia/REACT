/**
 * effettua una richiesta API POST per 
 * 
 * 
 * @param {*} * -
 * @param {string} path - URL dell'endpoint API per la registrazione
 * @returns {Promise<string>} - risposta testuale del server
 * @throws {Error} - se la richiesta non va a buon fine
 */
export const PostSomething = async (x: string, y: string, path: string) => {

    const response = await fetch(path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // prendiamo i parametri della e li convertiamo in JSON per mandarlo come body della POST 
        body: JSON.stringify({ x, y }),
    });

    if (!response.ok) {
        throw new Error("Errore...");
    }

    // restituisce i dettagli della risposta della chiamata HTTP POST per 
    return response.text();
};

export default PostSomething;