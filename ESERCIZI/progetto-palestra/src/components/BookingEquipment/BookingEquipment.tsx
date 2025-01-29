import useReservationEquipmentController from "./useBookingEquipmentController";
import { type Equipment } from "../../models/Equipment.model";



/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function BookingEquipment({ equipment, closeModal }: { equipment: Equipment; closeModal: () => void; }) {

    // destructuring dell'oggetto restituito ed importato qui dentro da "useLoginController.ts" contenente stati e logica con funzioni handle degli inputs/form
    const { handleMinutesChange, totalPrice, handleBooking, minutes } = useReservationEquipmentController({ equipment });

    //* SE L'EQUIPMENT NON è STATO SELEZIONATO, NON ANDRA A REINDIRIZZARE L'ELEMENTO TSX DELLA MODALE dentro il return()
    if (!equipment) return null;


    return (
        <>
            {/* creato al di fuori della modale un overlay che copre tutto lo schermo che porta ad alcuni funzionamenti vantaggiosi:
            01. aggiunto un interazione che al click di ques'ultima (esclusa modale dato che avrà un z-index >) chiuderà la modale
            02. non permette l'interazione con tutto quanto al di fuori della card se non viene chiusa! */}
            <div className="overlay fixed top-0 left-0 w-screen h-screen bg-black/90 z-30" onClick={closeModal}></div >


            {/* modale per la prenotazione dell'equipment */}
            <div className="modal flex flex-col justify-around fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-40 w-2/6 h-2/3 bg-slate-800 text-zinc-50 px-2 rounded-lg">

                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-4xl text-center">Prenota ora {equipment.name}!</h1>
                    <h2 className="text-xl font-light text-center">{equipment.claim}</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-6 p-4">
                    <div className="flex flex-col items-center w-full">
                        <label htmlFor="durata" className="text-center text-xl mb-2">Inserisci la durata di utilizzo (Minuti)</label>
                        <input onChange={handleMinutesChange} type="number" name="durata" id="durata" min="0"
                            className="w-3/4 p-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500" />
                    </div>
                    <div className="flex flex-row justify-between w-9/12 items-center gap-3">
                        <p className="text-md font-light">Prezzo totale: <span className="font-bold">{totalPrice.toFixed(2)}€</span></p>
                        <p className="text-md font-light">Prezzo al minuto: <span className="font-semibold">{equipment.pricePerMinute.toFixed(2)}€</span></p>
                    </div>
                </div>
                <div className="flex justify-around">
                    {/* basta solamente evocare la funzione di callback che andrà a resettare a "null" il valore
                    dell'equipment selezionato! */}
                    {minutes ? (
                        <button onClick={handleBooking} className="bg-lime-700 hover:bg-lime-900 text-xl px-10 py-1 rounded-lg">Conferma</button>
                    ) : (
                        <button className="bg-lime-700 text-xl text-gray-700 px-10 py-1 rounded-lg" disabled>Conferma</button>
                    )}
                    <button onClick={closeModal} className="bg-red-500  hover:bg-red-700 text-xl px-10 py-1 rounded-lg">Chiudi</button>
                </div>

            </div>
        </>
    );
}


export default BookingEquipment;