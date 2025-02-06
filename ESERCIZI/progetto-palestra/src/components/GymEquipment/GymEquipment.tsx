import useEquipmentController from "./useEquipmentController";
import { type Equipment } from "../../models/Equipment.model";
import { type EquipmentReservation } from "../../models/EquipmentReservation.model";
import "./GymEquipment.css";



/**
 * componente GymEquipment 
 * 
 * Mostra una card per un singolo attrezzo, con il nome, la descrizione, il prezzo e un'opzione per prenotarlo.
 * Il componente accetta anche una funzione `openModal` per gestire la prenotazione.
 * 
 * @param {Equipment} equipment - Oggetto attrezzo contenente dettagli come nome, immagine, prezzo, ecc.
 * @param {Function} openModal - Funzione di callback che apre la modale di prenotazione.
 */
function GymEquipment({ equipment, openModal }: { equipment: Equipment; openModal: EquipmentReservation["openModal"] }) {

    // destrutturazione e ottenimento della funzione handleClick dal hook useEquipmentController
    const { handleClick } = useEquipmentController({ equipment, openModal });


    return (
        <>
            <div className="equipment flex flex-col items-center w-120 shadow-2xl bg-gradient-to-r from-sky-500/30 to-indigo-500/30 text-slate-100 py-5 px-6 rounded-lg">
                <h2 className="text-4xl text-center font-fira font-bold mb-3">{equipment.name}</h2>
                <div className="flex flex-row items-center mb-6">
                    <h3 className="text-lg font-light font-roboto text-center">{equipment.claim}</h3>
                    <svg dangerouslySetInnerHTML={{ __html: equipment.icon }} className="w-12 h-10"></svg>
                </div>
                <img src={equipment.image} alt="immagine strumento" className="w-10/12 h-72 rounded-xl mb-8" />
                <div className="flex flex-row justify-between items-center w-full">
                    <button onClick={handleClick} className="bg-pink-700 font-fira text-lg px-6 py-1 rounded-md">Prenota!</button>
                    <p className="font-roboto">prezzo al minuto: {equipment.pricePerMinute.toFixed(2)}€</p>
                </div>
            </div >
        </>
    );
}

export default GymEquipment;