import { useState } from 'react';
import { BASE_URL } from '../../utils/costants';


// TYPE placeholder
type formData = {
    name: string,
    email: string,
    role: string,
    terms: boolean
}

type formError = {
    name: string,
    email: string,
    role: string,
    terms: string
}


function useFormController() {

    // stato con dati del form boileplate
    const [formData, setFormData] = useState<formData>({
        name: '',
        email: '',
        role: '',
        terms: false
    });

    // stato contenente gli errori dei vari campiS
    const [errors, setErrors] = useState<formError | null>(null);


    // funzione boileplate per cambiamento dei dati tramite gli input dei campi form
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        // gestione avanzata anche per le check e possibili radio buttons
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    // funzione boilerplate di prova da inovacre per validare i campi dello stato formData
    const validate = () => {
        const newErrors: formError = {};
        if (!formData.name.trim()) newErrors.name = 'Il nome è richiesto.';
        if (!formData.email.includes('@')) newErrors.email = 'Email non valida.';
        if (!formData.role) newErrors.role = 'Seleziona un ruolo.';
        if (!formData.terms) newErrors.terms = 'Devi accettare i termini.';
        return newErrors;
    };


    // submit boileplate = CONTROLLO E VALIDAZIONE ERRORI E IN CASO VENGONO ATTRIBUITI ALLO STATO errors
    const handleSubmit = (e) => {

        // preveniamo comportamento default dei form (reload automatico della pagina)
        e.preventDefault();

        // check se i campi sono stati compilati correttamente (se non, assegnazioni oggetto con errori da mostrare nella UI)
        const validationErrors = validate();

        // prendiamo array di chiavi degli errori (se ci sono, settiamo gli errori > 0)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors(null); // settiamo gli errori inesistenti a null
            console.log(`oggetto inviato con successo! ${formData.email}`)
            // ...
        }
    };


    // restituiamo gli stati e le funzioni al componente view "Form.tsx"
    return {
        formData,
        errors,
        handleChange,
        handleSubmit
    }
}


export default useFormController;