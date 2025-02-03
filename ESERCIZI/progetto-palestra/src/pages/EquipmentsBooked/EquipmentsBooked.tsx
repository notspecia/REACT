import { Link } from "react-router-dom";
import GymEquipmentUserList from "../../components/GymEquipmentUserList/GymEquipmentUserList";
import useEquipmentsBooked from "./useEquipmentsBookedController";



/**
 * componente EquimentsBooked
 * 
 * renderizza la lista degli attrezzi prenotati dall'utente.  
 * se l'utente non è loggato, viene mostrato un messaggio di avvertimento con un link per effettuare il login. 
 * 
 * se non ci sono errori, vengono visualizzati gli attrezzi prenotati dall'utente tramite il componente `GymEquipmentUserList`.
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