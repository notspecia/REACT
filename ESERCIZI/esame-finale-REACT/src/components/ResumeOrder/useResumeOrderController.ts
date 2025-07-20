import { useState } from 'react';




function useResumeOrderController() {

    //* stato per gestire la visibilità del riepilogo ordine (nascosta o visibile)
    const [isOrderVisible, setIsOrderVisible] = useState(true);

    // -----------------

    // funzione per cambiare lo stato di visibilità del riepilogo ordine passando booleano 
    const hideOrder = (show: boolean): void => {
        setIsOrderVisible(show); // revert da false a true e viceversa
    }


    // return stato e funzioni che possono essere utilizzati dalla componente
    return {
        isOrderVisible,
        hideOrder
    }
}


export default useResumeOrderController;