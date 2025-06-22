import { type Equipment } from "../../models/Equipment.model";
import { type EquipmentReservation } from "../../models/EquipmentReservation.model";



/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function useEquipmentController({ equipment, openModal }: { equipment: Equipment; openModal: EquipmentReservation["openModal"] }) {

    // chiama la funzione dentro `GymEquipmentsList.tsx` PASSANDO come parametro questo equipment selezionato tramite callback
    const handleClick = () => {
        openModal(equipment);
    }


    // restituiamo gli state e le funzioni evocate dal form all'iterno del file Login.tsx
    return {
        handleClick
    }
}

export default useEquipmentController;