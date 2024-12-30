import React, { useState } from "react";

import { type Equipment } from "../../models/Equipment.model";

import './ReservationEquipment.css';





function ReservationEquipment({ equipment, closeModal }: { equipment: Equipment; closeModal: () => void; }) {

    //* stato per tenere traccia dei cambiamenti dei minuti di utilizzo inseriti dall'utente
    const [minutes, setMinutes] = useState(0);

    // a ogni aggiornamento del componente, la moltiplicazione data dal (prezzoXminuto * minutiInseriti) cambia dinamicamente
    const totalPrice = equipment.pricePerMinute * minutes;

    // settiamo ogni volta il valore dei minuti diverso ad ogni aggiornamento del component
    const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinutes(parseInt(event.target.value) || 0)
    }


    //* SE L'EQUIPMENT NON è STATO SELEZIONATO, NON ANDRA A REINDIRIZZARE L'ELEMENTO TSX DELLA MODALE!!
    if (!equipment) return null;



    return (
        <>
            {/* creato al di fuori della modale un overlay che copre tutto lo schermo che porta ad alcuni funzionamenti vantaggiosi:
            01. aggiunto un interazione che al click di ques'ultima (esclusa modale dato che avrà un z-index >) chiuderà la modale
            02. non permette l'interazione con tutto quanto al di fuori della card se non viene chiusa! */}
            <div className="overlay fixed top-0 left-0 w-screen h-screen bg-black/90 z-10" onClick={closeModal}></div >


            {/* modale per la prenotazione dell'equipment */}
            <div className="modal flex flex-col justify-between fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-20 w-2/6 h-2/3 bg-slate-950 text-zinc-50 p-5
                rounded-3xl">
                <div>
                    <h1 className="text-3xl text-center">Prenota ora {equipment.name}!</h1>
                    <h2 className="text-lg text-center">{equipment.claim}</h2>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="durata">Durata utilizzo (Minuti)</label>
                    <input onChange={handleMinutesChange} type="number" name="durata" id="durata" min="0" className="w-1/2 p-1 text-black mb-12" />
                    <p>prezzo: {totalPrice}€</p>
                </div>



                <div className="flex justify-between">
                    {/* basta solamente evocare la funzione di callback che andrà a resettare a "null" il valore
                     dell'equipment selezionato! */}
                    <button onClick={closeModal} className="bg-red-500 px-4 py-1">Chiudi</button>
                    <button className="bg-lime-500 px-4 py-1">Conferma prenotazione</button>
                </div>
            </div>
        </>
    );
}

export default ReservationEquipment;