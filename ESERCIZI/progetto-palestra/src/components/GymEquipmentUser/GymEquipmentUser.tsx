import { type Equipment } from "../../models/Equipment.model";



/**
 * Nome della funzione
 * componente card dell'equipment singolo, che riceve i suoi dati associati (nome, descrizione, prezzo...) 
 * e la funzione di callback che contiene il metodo che contiene il "SetselectedEquipment", 
 * che permette di selezionare questo strumento da palestra, otterrà come parametro l'equipment
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function GymEquipmentUser({ equipment }: { equipment: Equipment }) {

    // destructuring dell'oggetto restituito ed importato qui dentro da "useLoginController.ts" contenente stati e logica con funzioni handle degli inputs/form



    return (
        <>
            <p>{equipment.name}</p>
        </>
    );
}

export default GymEquipmentUser;