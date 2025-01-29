import useEquipmentController from "./useEquipmentController";
import { type Equipment } from "../../models/Equipment.model";
import { type EquipmentReservation } from "../../models/EquipmentReservation.model";

import "./GymEquipment.css";



/**
 * Nome della funzione
 * componente card dell'equipment singolo, che riceve i suoi dati associati (nome, descrizione, prezzo...) 
 * e la funzione di callback che contiene il metodo che contiene il "SetselectedEquipment", 
 * che permette di selezionare questo strumento da palestra, otterrà come parametro l'equipment
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function GymEquipment({ equipment, openModal }: { equipment: Equipment; openModal: EquipmentReservation["openModal"] }) {

    // destructuring dell'oggetto restituito ed importato qui dentro da "useLoginController.ts" contenente stati e logica con funzioni handle degli inputs/form
    const { handleClick } = useEquipmentController({ equipment, openModal });


    return (
        <>
            <div className="equipment flex flex-col items-center w-128 shadow-2xl bg-gradient-to-r from-sky-500/30 to-indigo-500/30 text-slate-100 py-5 px-6 rounded-lg">
                <h2 className="text-4xl font-serif text-center font-bold mb-3">{equipment.name}</h2>
                <h3 className="text-lg font-light text-center mb-6">{equipment.claim}</h3>
                <img src={equipment.image} alt="immagine strumento" className="w-11/12 h-72 rounded-xl mb-8" />
                <div className="flex flex-row justify-between items-center w-full">
                    <button onClick={handleClick} className="bg-pink-700 text-xl px-6 py-1 border-2 border-t-gray-300 rounded-md">Prenota!</button>
                    <p>prezzo al minuto: {equipment.pricePerMinute.toFixed(2)}€</p>
                </div>
            </div >
        </>
    );
}

export default GymEquipment;