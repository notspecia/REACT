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
                <h1 className="text-red-700 text-3xl text-center mt-48">{error}</h1>
            ) : (
                <GymEquipmentUserList userEquipments={userEquipments} />
            )}

            {console.log(userEquipments)}
        </>
    );

}

export default EquimentsBooked;