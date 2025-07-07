import { type some } from "../models/Equipment.model";


/**
 * recupera 
 * 
 * questa funzione effettua una richiesta API GET all'endpoint specificato per ottenere 
 * 
 * 
 * @param {string} path - URL dell'endpoint API per il recupero.
 * @returns {Promise<some[]>} -  restituisce un a
 * @throws {Error} - Se la richiesta non va a buon fine.
 */
export const GetSomething = async (path: string): Promise<some[]> => {

    const response = await fetch(path, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error("Errore...");
    }

    // restituisce i dati in formato risposta JSON dalla chiamata HTTP GET
    return response.json();
};


export default GetSomething;