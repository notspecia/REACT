import { useState, useEffect } from 'react';
import { BASE_URL } from '../../utils/costants';


function useHomeController() {

    // stato per registrare la visibilità della modale
    const [showModal, setShowModal] = useState(false);

    // funzioni da passare come callback per cambiare lo stato della visibilità modale
    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    // restituiamo gli stati e le funzioni al componente view "Home.tsx"
    return {
        showModal,
        closeModal,
        openModal
    }
}



export default useHomeController;