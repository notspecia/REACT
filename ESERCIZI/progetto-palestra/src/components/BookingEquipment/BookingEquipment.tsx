import useReservationEquipmentController from "./useBookingEquipmentController";
import { type Equipment } from "../../models/Equipment.model";



/**
 * componente BookingEquipment
 * modale per la prenotazione di attrezzo da palestra
 * 
 * @param {Equipment} equipment - l'attrezzatura selezionata per la prenotazione.
 * @param {() => void} closeModal - funzione per chiudere la modale.
 */
function BookingEquipment({ equipment, closeModal }: { equipment: Equipment; closeModal: () => void; }) {

    /* 
    destrutturazione dell'oggetto restituito da "useBookingEquipmentController.ts"
    che gestisce stati e funzioni per la gestione del form di prenotazione 
    */
    const { minutes, error, handleMinutesChange, totalPrice, handleBooking } = useReservationEquipmentController({ equipment });

    //* SE L'EQUIPMENT NON è STATO SELEZIONATO, NON ANDRA A REINDIRIZZARE L'ELEMENTO TSX DELLA MODALE dentro il return()
    if (!equipment) return null;


    return (
        <>
            {/* creato al di fuori della modale un overlay che copre tutto lo schermo che porta ad alcuni funzionamenti vantaggiosi:
            01. aggiunto un interazione che al click di ques'ultima (esclusa modale dato che avrà un z-index >) chiuderà la modale
            02. non permette l'interazione con tutto quanto al di fuori della card se non viene chiusa! */}
            <div className="overlay fixed top-0 left-0 w-screen h-screen bg-black/90 z-30" onClick={closeModal}></div >


            {/* modale per la prenotazione dell'equipment */}
            <div className="modal flex flex-col justify-around fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-40 w-2/6 py-10 bg-slate-800 text-zinc-50 rounded-lg">

                <div className="flex flex-col items-center gap-2">
                    <h2 className="font-fira text-3xl text-center">Prenota ora {equipment.name}!</h2>
                    <img src={equipment.image} alt="immagine strumento" className="w-2/4 h-2/4  rounded-xl mb-8" />
                </div>

                <div className="flex flex-col items-center justify-center gap-6 font-roboto p-4 mb-10" >
                    <div className="flex flex-col items-center w-full">
                        <label htmlFor="durata" className="text-center text-lg mb-2">Inserisci la durata di utilizzo (Minuti)</label>
                        <input onChange={handleMinutesChange} type="number" name="durata" id="durata" min="0"
                            className="w-3/4 p-2 text-black rounded-lg border border-gray-300" />
                        {/* errore gestito dal controller se i i minuti sono > di 20 (bloccato dal bakckend) */}
                        {error && (
                            <p className="text-red-500">{error}</p>
                        )}
                    </div>
                    <div className="flex flex-row justify-between w-9/12 items-center gap-3 font-roboto">
                        <p className="text-md font-light">Prezzo totale: <span className="font-bold">{totalPrice.toFixed(2)}€</span></p>
                        <p className="text-md font-light">Prezzo al minuto: <span className="font-semibold">{equipment.pricePerMinute.toFixed(2)}€</span></p>
                    </div>
                </div>
                <div className="flex justify-evenly">
                    {/* basta solamente evocare la funzione di callback che andrà a resettare a "null" il valore
                    dell'equipment selezionato! */}
                    {minutes ? (
                        <button onClick={handleBooking} className="bg-pink-700 hover:bg-pink-900 text-xl px-10 py-2 rounded-lg">Conferma</button>
                    ) : (
                        <button className="bg-pink-400 text-xl text-gray-700 px-10 py-2 rounded-lg" disabled>Conferma</button>
                    )}
                    <button onClick={closeModal} className="bg-gray-600 text-xl px-10 py-2 rounded-lg">Chiudi</button>
                </div>

            </div>
        </>
    );
}


export default BookingEquipment;