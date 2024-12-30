import { useState } from "react";

import { type Equipment } from "../../models/Equipment.model";
import { type EquipmentReservation } from "../../models/EquipmentReservation.model";

import "./GymEquipment.css";




// componente card dell'equipment singolo, che riceve i suoi dati associati (nome, descrizione, prezzo...) e la funzione di callback
// che contiene il metodo che contiene il "SetselectedEquipment", che permette di selezionare questo strumento da palestra, otterrà come parametro l'equipment
function GymEquipment({ equipment, openModal }: { equipment: Equipment; openModal: EquipmentReservation["openModal"] }) {


    const handleClick = () => {
        openModal(equipment); // chiama la funzione dentro `GymEquipmentsList.tsx` con il parametro corretto
    }



    return (
        <>
            <div className="equipment flex flex-col items-center w-128 bg-slate-900 text-slate-100 py-5 px-6 rounded-xl">
                <h2 className="text-4xl text-center font-bold mb-3">{equipment.name}</h2>
                <h3 className="text-lg font-light text-center mb-6">{equipment.claim}</h3>
                <img src={equipment.image} alt="immagine strumento" className="w-100 h-72 rounded-xl mb-8" />
                <div className="flex flex-row justify-between items-center w-full">
                    <button onClick={handleClick} className="bg-red-900 text-l px-5 py-1 border-2 border-white rounded-xl ">Noleggia subito!</button>
                    <p>prezzo al minuto: {equipment.pricePerMinute.toFixed(2)}€</p>
                </div>
            </div >
        </>
    );
}

export default GymEquipment;