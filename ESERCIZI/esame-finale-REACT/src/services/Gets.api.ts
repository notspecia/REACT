import { type Pizza, type TableOrderResponse } from "../models/pizzeria.model";


/**
 * Recupera la lista delle pizze dall'endpoint API specificato.
 * Effettua una richiesta HTTP GET all'URL fornito e restituisce un array di oggetti Pizza.
 * 
 * @param {string} path - URL dell'endpoint API per il recupero della lista delle pizze.
 * @returns {Promise<Pizza[]>} - Promessa che risolve con un array di pizze.
 * @throws {Error} - Se la richiesta fallisce (status non OK).
 */
export const GetListaPizze = async (path: string): Promise<Pizza[]> => {

    const response = await fetch(path, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error("Errore nel recupero della lista delle pizze");
    }

    // restituisce i dati in formato risposta JSON dalla chiamata HTTP GET
    return response.json();
};




/**
 * Recupera i dettagli di una singola pizza dall'endpoint API specificato.
 * Effettua una richiesta HTTP GET all'URL fornito e restituisce un oggetto Pizza.
 * 
 * @param {string} path - URL dell'endpoint API per il recupero del dettaglio pizza.
 * @returns {Promise<Pizza>} - Promessa che risolve con i dettagli della pizza.
 * @throws {Error} - Se la richiesta fallisce (status non OK).
 */
export const GetDettaglioPizza = async (path: string): Promise<Pizza> => {

    const response = await fetch(path, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error("Errore nel recupero del dettaglio pizza");
    }

    // restituisce i dati in formato risposta JSON dalla chiamata HTTP GET
    return response.json();
};



/**
 * Recupera la lista degli ordini dall'endpoint API specificato.
 * Effettua una richiesta HTTP GET all'URL fornito e restituisce i dati degli ordini.
 * 
 * @param {string} path - URL dell'endpoint API per il recupero degli ordini.
 * @returns {Promise<any>} - Promessa che risolve con i dati degli ordini (da tipizzare a seconda della struttura).
 * @throws {Error} - Se la richiesta fallisce (status non OK).
 */
export const GetOrdini = async (path: string): Promise<TableOrderResponse[]> => {

    const response = await fetch(path, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error("Errore nel recupero degli ordini");
    }

    // restituisce i dati in formato risposta JSON dalla chiamata HTTP GET
    return response.json();
};