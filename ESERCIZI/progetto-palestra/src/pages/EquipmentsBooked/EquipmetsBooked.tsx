import { Link } from "react-router-dom";
import GymEquipmentUserList from "../../components/GymEquipmentUserList/GymEquipmentUserList";
import useEquipmentsBooked from "./useEquipmetsBookedController";



/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function EquimentsBooked() {

    // destructuring dell'oggetto restituito da "useEquipmentsBookedController"
    const { userEquipments, error } = useEquipmentsBooked();


    return (
        <>
            {/* 
            - in caso il value di "errore" sia != da null andrà a reinidirizzare la lista degli equipments dell'utente,
            */}
            {error ? (
                <h1 className="text-white text-3xl text-center underline underline-offset-1 mt-48">
                    <Link to="/LOGIN">{error}</Link>
                </h1>
            ) : (
                <GymEquipmentUserList userEquipments={userEquipments} />
            )}
        </>
    );

}

export default EquimentsBooked;