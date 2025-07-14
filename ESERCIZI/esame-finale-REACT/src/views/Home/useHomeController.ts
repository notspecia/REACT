import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



function useHomeController() {

    //* stato per tenere traccia dei cambiamenti del numero del tavolo prenotato
    const [tableNumber, setTableNumber] = useState<string>('');

    //* stato per tenere conto in caso di errori nella prenotazione sull'inserimento del tavolo prenotato
    const [error, setError] = useState<null | string>(null);

    // permette navigazione dopo aver confermato prenotazione del numero del tavolo
    const navigate = useNavigate();

    // -----------------------------------------------

    // evento per tenere aggiornato l'input per la prenotazione del tavolo
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const value = event.target.value; // value modificato dall'input passato come evento

        // controllo che il valore sia number e che siano 3 numeri minimo
        if (/^\d{0,3}$/.test(value)) {
            setTableNumber(value);
            setError(null);
        } else {
            setError('Inserisci solo numeri (max 3 cifre)');
            toast.error('Inserisci solo numeri (max 3 cifre)');
        };
    }

    // al submit tramite bottone, verificato se la cifra inserita sia valida
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!tableNumber || !/^\d{3}$/.test(tableNumber)) {
            setError('Inserisci un numero di tavolo valido!');
            toast.error('Inserisci un numero di tavolo valido!');
            return;
        }

        // toast di successo!
        toast.success(`Tavolo N.${tableNumber} prenotato!`);

        // se confermata la regex di validazione, inserimento nell'URL e redirect alla rotta della lista pizze con id della prenotazione
        navigate(`${tableNumber}/menu`);
    };

    // restituiamo gli state e le funzioni evocate dal form all'iterno del file Login.tsx
    return {
        tableNumber,
        error,
        handleChange,
        handleSubmit,
    }
}


export default useHomeController;