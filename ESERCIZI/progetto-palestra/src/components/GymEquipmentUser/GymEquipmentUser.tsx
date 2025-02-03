import { type EquipmentFiltered } from "../../models/Equipment.model";
import "./GymEquipmentUser.css";



/**
 * componente GymEquipmentUser
 * 
 * componente che mostra le informazioni di un equipment prenotato dall'utente.
 * 
 * @param {EquipmentFiltered} props.equipmentUser - dati dell'attrezzatura prenotata dall'utente
 */
function GymEquipmentUser({ equipmentUser }: { equipmentUser: EquipmentFiltered }) {


    return (
        <>
            <div className="equipmentUser relative w-80 md:w-96 flex flex-col items-center shadow-lg bg-white/10 text-white py-6 px-8 rounded-lg border border-white/20">
                <span className="absolute top-4 right-4 bg-sky-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {equipmentUser.pricePerMinute.toFixed(2)}€
                </span>
                <h2 className="text-2xl font-bold mb-3 text-center">{equipmentUser.name}</h2>
                <div className="relative w-40 h-40 flex justify-center items-center bg-indigo-800/20 rounded-full shadow-md">
                    <img src={equipmentUser.image} alt="equipment user" className="w-10/12" />
                </div>
                <p className="text-center text-sm mt-4 px-4">{equipmentUser.claim}</p>
                <div className="flex flex-row justify-between items-center w-full">
                    <p className="text-center text-sm mt-4 px-4">{new Date(equipmentUser.start_date,).getHours()}:{new Date(equipmentUser.start_date).getMinutes().toString().padStart(2, "0")}:{new Date(equipmentUser.start_date).getSeconds().toString().padStart(2, "0")}</p>
                    <p className="text-center text-sm mt-4 px-4">{new Date(equipmentUser.end_date,).getHours()}:{new Date(equipmentUser.end_date).getMinutes().toString().padStart(2, "0")}:{new Date(equipmentUser.end_date).getSeconds().toString().padStart(2, "0")}</p>
                </div>
            </div>
        </>
    );
}


export default GymEquipmentUser;