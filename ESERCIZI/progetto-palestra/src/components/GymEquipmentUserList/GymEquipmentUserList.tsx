
import useAppController from "../../useAppController"; // controller usato per prendere tutti gli equipments tramite GET
import useEquipmentUserList from "./useEquipmentUserListController";
import { type EquipmentUser } from "../../models/EquipmentUser.model";
import GymEquipmentUser from "../GymEquipmentUser/GymEquipmentUser";




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

    /* 
    destructuring dell'oggetto restituito da "useAppController", per ricevere di nuovo tutti gli equipments 
    per poi andarli a comparare con quelli dell'utente e mostrare solo quelli di esso, 
    mostrato errore in caso l'API GET per prendere tutti gli equipments fallisce 
    */
    const { equipments, error } = useAppController();

    /* 
    destructuring dell'oggetto restituito da "useEquipmentUserListController", in cui riceviamo gli equipments dell'utente
    con il nuovo model che espande al model Equipment[] con le sue proprietà olte a "start_date / end_date" 
    */
    const { filteredEquipments } = useEquipmentUserList({ userEquipments, equipments });


    return (
        <>

            {/* 
            in caso il value di "errore" sia != da null andrà a reinidirizzare la lista degli equipments,
            andiamo a mostrare come elmento principale il componente che riceve gli equipments, che verranno
            mappati sottoforma di lista mostrando ognuno singolarmente, passiamo gli equipments tramite props (equipments)
            */}
            {error ? (
                <h1 className="text-xl text-red-700 text-center mt-48">{error}</h1>
            ) : (
                <div className="flex flex-wrap justify-around gap-y-20 py-10 mt-48">
                    {filteredEquipments.map((equipmentUser, index) => (
                        <GymEquipmentUser key={index} equipmentUser={equipmentUser} />
                    ))}
                </div>
            )}
        </>
    );
}


export default GymEquipmentUserList;