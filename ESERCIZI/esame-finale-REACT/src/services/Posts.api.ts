import type { TableOrderRequestBody } from "../models/pizzeria.model";

/**
 * Effettua una richiesta API POST per inviare l'ordinazione delle pizze.
 *
 * @param {string} path - URL dell'endpoint API per la registrazione.
 * @param {Array} orderData - Dati dell'ordine da inviare.
 * @returns {Promise<string>} - Risposta testuale del server.
 * @throws {Error} - Se la richiesta non va a buon fine.
 */
export const BookingPizze = async (path: string, orderData: TableOrderRequestBody[]) => {

    const response = await fetch(path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
    });

    if (!response.ok) {
        throw new Error('Errore nell\'invio dell\'ordinazione delle pizze! Riprova!');
    }

    // Restituisce i dettagli della risposta della chiamata HTTP POST
    return response.text();
};