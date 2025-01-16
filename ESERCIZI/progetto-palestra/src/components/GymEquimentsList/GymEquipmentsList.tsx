import { useState } from 'react';

import GymEquipment from "../GymEquipment/GymEquipment";
import { type Equipment } from "../../models/Equipment.model";

import ReservationEquipment from "../ReservationEquipment/ReservationEquipment";



// componente che riceve come props la lista degli equipments
function GymEquipmentsList({ equipments }: { equipments: Equipment[] }) {


    //* stato per tenere traccia dell'equipment da palestra selezionato dentro il figlio `GymEquipment.tsx` da mostrare nella modale `ReservationEquipment.tsx`!
    //* inizialmente lo stato dell'equipment selzionato sarà null, se poi verrà selezionato cambierà con esso permettendo di mostrare la modale
    const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);


    // FUNZIONE DI CALLBACK "openModal": click del bottone che permetterà di selezionare quell'equipment che verrà passato come parametro
    // cambierà lo stato del selectedEquipment e verrà mostrata la modale con successo dato con all'interno i dati di quell'equipment
    const openModal = (equipment: Equipment) => {
        setSelectedEquipment(equipment);
    }

    // FUNZIONE DI CALLBACK "closeModal": che permette una volta aperta, di chiudere la modale, 
    // e resettare il valore a "null" dell'equipment scelto permettendo di nascondere la modale dall'UI dell'utente
    const closeModal = () => {
        setSelectedEquipment(null);
    }



    return (
        <>
            <div className="flex flex-wrap justify-around gap-y-24 py-10">
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
                <ReservationEquipment
                    equipment={selectedEquipment}
                    closeModal={closeModal}
                />
            )}
        </>
    );
}

export default GymEquipmentsList;