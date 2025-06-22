import { type EquipmentUser } from "../models/EquipmentUser.model";



/**
 * recupera la lista delle attrezzature associate a un utente autenticato, passando il suo Token JWT.
 * 
 * Questa funzione effettua una richiesta API GET all'endpoint specificato per ottenere 
 * la lista di attrezzature dell'utente autenticato.
 * se il token di autenticazione non è presente nel localStorage, viene mostrato un messaggio di errore nel log
 * 
 * @param {string} path - URL dell'endpoint API per il recupero delle attrezzature dell'utente
 * @returns {Promise<EquipmentUser[]>} - restituisce un array di oggetti da filtrare e poi renderizzare "EquipmentUser.tsx"
 * @throws {Error} - se la richiesta non va a buon fine
 */
export const GetUserEquipments = async (path: string): Promise<EquipmentUser[]> => {

    // prendiamo il token dal localStorage for authorization
    const token = localStorage.getItem("token");

    if (!token) {
        console.log("user token not founded");
    }


    // tentiamo di inviare una richiesta GET per recuperare gli equipments dell'utente
    const response = await fetch(path, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("errore nel recupero degli equipments dell'utente.");
    }

    return response.json(); // restituisce i dati della richiesta in formato JSON
};


export default GetUserEquipments;