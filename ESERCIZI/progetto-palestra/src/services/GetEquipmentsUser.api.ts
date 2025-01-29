import { type EquipmentUser } from "../models/EquipmentUser.model";



/**
 * function GetUserEquipments
 * Funzione arrow -> che restiuisce una promise che quando sarà risolta contiene un array di oggetti equipments
 * gestione di errori in caso la fetch ha uno status negativo (arrivata ma respinta)
 * tramite blocco .catch() cattura l'errore in qualsiasi errore generato
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
export const GetUserEquipments = async (path: string): Promise<EquipmentUser[]> => {

    // prendiamo il token dal localStorage for authorization
    const token = localStorage.getItem("token");

    if (!token) {
        console.log("user token not founded");
    }


    // attempt to send a GET request to retrieve the user equipments
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

    return response.json(); // return the requests in JSON format
};


export default GetUserEquipments;