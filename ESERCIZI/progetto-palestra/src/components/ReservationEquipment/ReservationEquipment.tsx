import React, { useState } from "react";

import { type Equipment } from "../../models/Equipment.model";




function ReservationEquipment({ equipment, closeModal }: { equipment: Equipment; closeModal: () => void; }) {

    //* stato per tenere traccia dei cambiamenti dei minuti di utilizzo inseriti dall'utente
    const [minutes, setMinutes] = useState(0);


    // a ogni aggiornamento del componente, la moltiplicazione data dal (prezzoXminuto * minutiInseriti) cambia dinamicamente
    const totalPrice = equipment.pricePerMinute * minutes;

    // settiamo ogni volta il valore dei minuti diverso ad ogni aggiornamento del component, passando l'evento dell'input come parametro
    const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinutes(parseInt(event.target.value) || 0); // trasformiamo il valore dell'input da stringa a NUMBER
    }

    // quando viene prenotato l'equipment
    const handleBooking = () => {
        console.log(equipment.name);
        console.log("implement the POST of the equipment booked");
    }


    //* SE L'EQUIPMENT NON è STATO SELEZIONATO, NON ANDRA A REINDIRIZZARE L'ELEMENTO TSX DELLA MODALE dentro il return()
    if (!equipment) return null;



    return (
        <>
            {/* creato al di fuori della modale un overlay che copre tutto lo schermo che porta ad alcuni funzionamenti vantaggiosi:
            01. aggiunto un interazione che al click di ques'ultima (esclusa modale dato che avrà un z-index >) chiuderà la modale
            02. non permette l'interazione con tutto quanto al di fuori della card se non viene chiusa! */}
            <div className="overlay fixed top-0 left-0 w-screen h-screen bg-black/90 z-30" onClick={closeModal}></div >


            {/* modale per la prenotazione dell'equipment */}
            <div className="modal flex flex-col justify-around fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-40 w-2/5 h-2/3 bg-slate-800 text-zinc-50 px-5 rounded-3xl">

                <div className="flex flex-col items-center">
                    <h1 className="text-4xl text-center">Prenota ora {equipment.name}!</h1>
                    <h2 className="text-xl font-light text-center">{equipment.claim}</h2>
                </div>

                <div className="flex flex-col items-center justify-center gap-6 p-4">
                    <div className="flex flex-col items-center w-full">
                        <label htmlFor="durata" className="text-center text-lg mb-2">Inserisci la durata di utilizzo (Minuti)</label>
                        <input
                            onChange={handleMinutesChange}
                            type="number"
                            name="durata"
                            id="durata"
                            min="0"
                            className="w-3/4 p-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <p className="text-lg font-medium">Prezzo totale: <span className="font-bold">{totalPrice}€</span></p>
                        <p className="text-lg font-light">Prezzo al minuto: <span className="font-semibold">{equipment.pricePerMinute.toFixed(2)}€</span></p>
                    </div>
                </div>


                <div className="flex justify-between">
                    {/* basta solamente evocare la funzione di callback che andrà a resettare a "null" il valore
                    dell'equipment selezionato! */}
                    {minutes ? (
                        <button onClick={handleBooking} className="bg-lime-700 hover:bg-lime-900 text-xl px-4 py-1 rounded-lg">Conferma prenotazione</button>
                    ) : (
                        <button onClick={handleBooking} className="bg-lime-700 text-xl text-gray-700 px-4 py-1 rounded-lg" disabled>Conferma prenotazione</button>
                    )}
                    <button onClick={closeModal} className="bg-red-500  hover:bg-red-700 text-xl px-4 py-1 rounded-lg">Chiudi</button>
                </div>

            </div>
        </>
    );
}
export default ReservationEquipment;