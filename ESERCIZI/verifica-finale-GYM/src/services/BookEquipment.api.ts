/**
 * effettua la prenotazione di un'attrezzatura
 * 
 * questa funzione invia una richiesta API POST all'endpoint specificato per prenotare un'attrezzatura, 
 * associandola all'utente autenticato. il token di autenticazione viene prelevato dal localStorage e 
 * incluso nell'header della richiesta.
 * 
 * @param {number} equipmentId - id dell'attrezzatura da prenotare
 * @param {number} duration - durata della prenotazione in minuti
 * @param {string} path - URL dell'endpoint api per la prenotazione
 * @returns {Promise<void>} - la promessa si risolve quando la prenotazione è completata con successo
 * @throws {Error} - se la richiesta non va a buon fine
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