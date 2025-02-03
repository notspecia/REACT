import { type Equipment } from "../models/Equipment.model";



/**
 * recupera l'elenco delle attrezzature da palestra disponibili
 * 
 * questa funzione effettua una richiesta API GET all'endpoint specificato per ottenere 
 * la lista di attrezzature disponibili. Se la richiesta fallisce, viene generato un errore
 * 
 * @param {string} path - URL dell'endpoint API per il recupero delle attrezzature.
 * @returns {Promise<Equipment[]>} -  restituisce un array di oggetti da renderizzare "Equipment.tsx"
 * @throws {Error} - Se la richiesta non va a buon fine.
 */
export const GetEquipments = async (path: string): Promise<Equipment[]> => {

    const response = await fetch(path);

    if (!response.ok) {
        throw new Error("Errore nel recupero degli equipments. Riprova più tardi.");
    }

    // restituisce i dati in formato risposta JSON dalla chiamata HTTP GET
    return response.json();
};


export default GetEquipments;