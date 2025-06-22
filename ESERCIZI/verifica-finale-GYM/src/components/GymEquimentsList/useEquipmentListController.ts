import { useState } from "react";
import { type Equipment } from "../../models/Equipment.model";



/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function useEquipmentListController() {

    //* stato per tenere traccia dell'equipment da palestra selezionato dentro il figlio `GymEquipment.tsx` da mostrare nella modale `ReservationEquipment.tsx`!
    //* inizialmente lo stato dell'equipment selzionato sarà null, se poi verrà selezionato cambierà con esso permettendo di mostrare la modale
    const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);


    // FUNZIONE DI CALLBACK "openModal": click del bottone che permetterà di selezionare quell'equipment che verrà passato come parametro
    // cambierà lo stato del selectedEquipment e verrà mostrata la modale con successo dato con all'interno i dati di quell'equipment
    const openModal = (equipment: Equipment) => {
        setSelectedEquipment(equipment);
    }

    // FUNZIONE DI CALLBACK "closeModal": che permette una volta aperta, di chiudere la modale e fare l'unmount del componente, 
    // e resettare il valore a "null" dell'equipment scelto permettendo di nascondere la modale dall'UI dell'utente
    const closeModal = () => {
        setSelectedEquipment(null);
    }


    // restituiamo gli state e le funzioni evocate dal form all'iterno del file Login.tsx
    return {
        selectedEquipment,
        openModal,
        closeModal,
    }
}

export default useEquipmentListController;