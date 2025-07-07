import { useState, useEffect } from 'react';
import { BASE_URL } from '../../utils/costants';


function useHomeController() {

    // stato per registrare la visibilità della modale
    const [showModal, setShowModal] = useState(false);

    // funzione da passare come callback per cambiare lo stato della visibilità modale
    const handleVisibilityModal = (show: boolean) => {
        setShowModal(show);
    }

    // restituiamo gli stati e le funzioni al componente view "Home.tsx"
    return {
        showModal,
        handleVisibilityModal
    }
}


export default useHomeController;