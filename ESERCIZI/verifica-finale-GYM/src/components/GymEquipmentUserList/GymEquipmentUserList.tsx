
import useAppController from "../../useAppController"; // controller usato per prendere tutti gli equipments tramite GET
import useEquipmentUserList from "./useEquipmentUserListController";
import GymEquipmentUser from "../GymEquipmentUser/GymEquipmentUser";
import { type EquipmentUser } from "../../models/EquipmentUser.model";



/**
 * componente GymEquipmentUserList
 * 
 * visualizza la lista delle attrezzature prenotate dall'utente.
 * 
 * recupera tutti gli equipment disponibili tramite `useAppController`, li confronta con quelli prenotati in base all'ID
 * dall'utente e mostra solo quelli associati a quest'ultimo, associando ogni strumento a nuovo model "EquipmentFiltered[]".
 * 
 * @param {EquipmentUser[]} props.userEquipments - lista degli equipment prenotati dall'utente
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