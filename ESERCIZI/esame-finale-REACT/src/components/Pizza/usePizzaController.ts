import { useState } from 'react';




function usePizzaController() {

    //* stato con flag per mostrare il selettore di quantita della pizza
    const [mostraSelettore, setMostraSelettore] = useState(false);


    // -----------------
    // funzioni per la gestione dello stato e gestione quantita

    const handleShowSelettore = () => {
        setMostraSelettore(true);
    }


    return {
        mostraSelettore,
        setMostraSelettore,
        handleShowSelettore,
    }
}


export default usePizzaController;