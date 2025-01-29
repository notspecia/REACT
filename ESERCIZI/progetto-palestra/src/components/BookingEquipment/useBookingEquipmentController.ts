import { useState } from "react";
import { BookingEquipment } from "../../services/BookEquipment.api";
import { useNavigate } from "react-router-dom";
import { type Equipment } from "../../models/Equipment.model";



/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function useReservationEquipmentController({ equipment }: { equipment: Equipment }) {

    //* stato per tenere traccia dei cambiamenti dei minuti di utilizzo inseriti dall'utente
    const [minutes, setMinutes] = useState(0);

    //* importato da react-router permette se inserito un path dei router dentro App.tsx, di rendirizzare l'utente dove si voglia
    //* in caso non si è ancora registrato l'utente (non esiste il token JWT) lo rendirizziamo alla pagina LOGIN
    //* in caso la prenotazione viene effetuata con successo renederizziamo l'utente alla pagina delle sue prenotazioni  
    const navigate = useNavigate();

    // -----------------------------------------------

    // a ogni aggiornamento del componente, la moltiplicazione data dal (prezzoXminuto * minutiInseriti) cambia dinamicamente
    const totalPrice = equipment.pricePerMinute * minutes;

    // settiamo ogni volta il valore dei minuti diverso ad ogni aggiornamento del component, passando l'evento dell'input come parametro
    const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinutes(parseInt(event.target.value) || 0); // trasformiamo il valore dell'input da stringa a NUMBER
    }


    /* event eseguito quando l'utente ha inserito i minuti con cui vuole utilizzare l'equipment selezionato, 
    sarà effettuata una POST API aggiungendo quell'equipmet alla lista degli equipments booked di quell'utente
    passando in autorizathion il token dell'utente loggato per associarlo ad esso */
    const handleBooking = async () => {

        // controllo se l'utente è loggato, se non lo è lo portiamo alla route di LOGIN
        if (!localStorage.getItem("token")) {
            navigate("/login");
        }

        try {
            // mostriamo su console per ora un messaggio di successo e poi renderizziamo esso alla sezione degli equipments booked
            await BookingEquipment(equipment.id, minutes,
                "https://d3660g9kardf5b.cloudfront.net/api/equipment"
            );

            console.log(`prenotazione di ${equipment.name} avvenuta con successo!`);
            navigate("/equipments-booked");

        } catch (error) {
            console.log(error);
        }
    }



    // restituiamo gli state e le funzioni evocate dal form all'iterno del file Login.tsx
    return {
        minutes,
        handleMinutesChange,
        totalPrice,
        handleBooking,
    }
}


export default useReservationEquipmentController;