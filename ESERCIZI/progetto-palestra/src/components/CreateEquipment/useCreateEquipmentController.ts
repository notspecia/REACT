import { useState } from "react";
import { type Equipment } from "../../models/Equipment.model";



/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function useCreateEquipmentController({ equipments }: { equipments: Equipment[] }) {

    // stato dei dati input del form per la creazione dell'equipment, inizialmente vuoti da riempire tramite associati dal value
    const [dataEquipment, setDataEquipment] = useState<Equipment>({
        id: Math.random(),
        name: "",
        claim: "",
        icon: "",
        image: "",
        pricePerMinute: 0
    });

    // funzione per gestire il submit del form aggiungendo l'equipment alla lista degli equipment presi dalla GET API
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target; // prendiamo dal target dell'input modicato il name del value, e il valore nuovo inserito
        setDataEquipment({ ...dataEquipment, [name]: value }); // destruggiamo l'oggetto dataEquipment e aggiungiamo la proprietà name con il valore value
    }

    // funzione per gestire i cambiamenti nell'input del form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // evitiamo il comportamento di default del form

        equipments.push(dataEquipment); // aggiungiamo l'equipment alla lista degli equipment (temporaneamente)
    }


    // restituiamo gli state e le funzioni evocate dal form all'iterno del file CreateEquipment.tsx
    return {
        dataEquipment,
        handleSubmit,
        handleInputChange
    }
}


export default useCreateEquipmentController;