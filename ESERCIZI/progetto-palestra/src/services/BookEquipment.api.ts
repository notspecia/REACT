

/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
export const BookingEquipment = async (equipmentId: number, duration: number, path: string) => {

    // prendiamo il token dal localStorage e lo passiamo nell'authorization header
    const token = localStorage.getItem("token");

    // chiamata api dell'end point POST per aggiungere lo strumento prenotato alla lista degli equipments booked dell'utente
    const response = await fetch(`${path}/${equipmentId}/book`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },

        // prendiamo i minuti dallo state della prenotazione e li convertiamo in JSON per mandarlo come body della POST 
        body: JSON.stringify({ duration }),
    });

    if (!response.ok) {
        throw new Error("Errore prenotazione strumento");
    }
};



export default BookingEquipment;