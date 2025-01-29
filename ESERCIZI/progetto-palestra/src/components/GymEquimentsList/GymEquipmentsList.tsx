import GymEquipment from "../GymEquipment/GymEquipment";
import BookingEquipment from "../ReservationEquipment/BookingEquipment";
import useEquipmentListController from "./useEquipmentListController";
import { type Equipment } from "../../models/Equipment.model";



/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function GymEquipmentsList({ equipments }: { equipments: Equipment[] }) {

    // destructuring dell'oggetto restituito ed importato qui dentro da "useLoginController.ts" contenente stati e logica con funzioni handle degli inputs/form
    const { selectedEquipment, openModal, closeModal } = useEquipmentListController();


    return (
        <>
            <div id="list" className="flex flex-wrap justify-around gap-y-24 py-10 pt-40">
                {/* looppiamo tramite il metodo .map() e andiamo a creare per ogni oggetto {equipment}, un componente apposito 
                 passiamo come props anche una callback function che permette di passare dati e informazioni (in questo caso aggiornamento
                dello stato di "selectedEquipment", che cambia da "null" all'equipment selezionato dall'utente */}
                {equipments.map((equipment, index) => (
                    <GymEquipment key={index} equipment={equipment} openModal={openModal} />
                ))}
            </div>


            {/* mostra la modale solo se c'è un'attrezzatura selezionata dal figlio `GymEquipment.tsx` tramite bottone
            INSERITA CONDIZIONE && se il valore di selectedEquipment è falsy (null), allora NON andrà secondo questo operatore a 
            reindirizzare il component `ReservationEquipment.tsx` fino a quando l'equipment non ricerverà un equipment selezionato
            
            passiamo come props oltre all'equipment selezionato, anche una CALLBACKFUNCTION che permette di resettare il valore
            a "null" quando verrà cliccato un bottone associato ad essa */}
            {selectedEquipment && (
                <BookingEquipment
                    equipment={selectedEquipment}
                    closeModal={closeModal}
                />
            )}
        </>
    );
}

export default GymEquipmentsList;