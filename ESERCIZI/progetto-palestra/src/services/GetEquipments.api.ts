import { type Equipment } from "../models/Equipment.model";



/**
 * const GetEquipments = async()
 * Funzione arrow -> che restiuisce una promise che quando sarà risolta contiene un array di oggetti equipments
 * gestione di errori in caso la fetch ha uno status negativo (arrivata ma respinta)
 * tramite blocco .catch() cattura l'errore in qualsiasi errore generato
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
export const GetEquipments = async (path: string): Promise<Equipment[]> => {

    const response = await fetch(path);

    if (!response.ok) {
        throw new Error("Errore nel recupero degli equipments. Riprova più tardi.");
    }

    return response.json(); // Restituisce i dati in formato risposta JSON dalla chiamata HTTP GET
};


export default GetEquipments;