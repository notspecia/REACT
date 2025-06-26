import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";



function useNotfoundController() {

    // usiamo useNavigate collegandolo al bottone per tornare alla rotta HOME principale
    const navigate = useNavigate();

    // useEffect che al montaggio del componente, entro 5 secondi riporta alla rotta HOME automaticamente
    useEffect(() => {
        const timeoutID = setTimeout(() => {
            navigate('/');
        }, 5000)
        return () => clearTimeout(timeoutID); // pulizia del timeout come return dell'useEffect
    }, []);


    // restituiamo gli stati e le funzioni al componente view "Notfound.tsx"
    return {
        navigate
    }
}



export default useNotfoundController;