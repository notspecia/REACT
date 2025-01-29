import { useEffect, useState } from "react";
import useAppController from "../../useAppController"; // controller usato per prendere tutti gli equipments tramite GET
import { type EquipmentUser } from "../../models/EquipmentUser.model";





/**
 * Nome della funzione
 * componente card dell'equipment singolo, che riceve i suoi dati associati (nome, descrizione, prezzo...) 
 * e la funzione di callback che contiene il metodo che contiene il "SetselectedEquipment", 
 * che permette di selezionare questo strumento da palestra, otterrà come parametro l'equipment
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function GymEquipmentUserList({ userEquipments }: { userEquipments: EquipmentUser[] }) {

    /* destructuring dell'oggetto restituito da "useAppController", per ricevere di nuovo tutti gli equipments per poi andarli a
    comparare con quelli dell'utente e mostrare solo quelli di esso */
    const { equipments, error } = useAppController();






    return (
        <>

            {/* 
            - in caso il value di "errore" sia != da null andrà a reinidirizzare la lista degli equipments,
            andiamo a mostrare come elmento principale il componente che riceve gli equipments, che verranno
            mappati sottoforma di lista mostrando ognuno singolarmente, passiamo gli equipments tramite props (equipments)
            */}
            {error ? (
                <h1 className='text-3xl text-red-700 text-center'>{error}</h1>
            ) : (
                <div id="list" className="flex flex-wrap justify-around gap-y-20 py-10"></div>
            )}


            {console.log(userEquipments)}
            {console.log(equipments)}
        </>
    );
}


export default GymEquipmentUserList;