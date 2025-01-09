import { type Equipment } from "../models/Equipment.model";


// Funzione arrow -> che restiuisce una promise che quando sarà risolta contiene un array di oggetti equipments
// gestione di errori in caso la fetch ha uno status negativo (arrivata ma respinta)
// tramite blocco .catch() cattura l'errore in qualsiasi errore generato
export const fetchEquipments = (): Promise<Equipment[]> => {

    // viene effettuata una richiesta HTTP fetch, GET all'endpoint specificato
    return fetch('https://d3660g9kardf5b.cloudfront.net/api/equipment')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`errore di stato della fetch: ${response.status}`); //
            } else {
                return response.json();
            }
        })
        .catch((err) => {
            console.error(`errore nella richiesta di fetch! ${err}`);
            throw err;
        });

}

export default fetchEquipments;