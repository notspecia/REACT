import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

interface User {
    id: number;
    username: string;
}

function useHomeController() {

    // stato per registrare la stringa da compilare con l'input per aggiungere utente
    const [userList, setUserList] = useState<User[]>([]);
    const [username, setUsername] = useState<string>("");


    // useEffect al montaggio va a caricare e fare una GET di tutti gli utenti
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/utenti', { method: "GET" });
                const data = await res.json();
                setUserList(data);
            } catch (error) {
                console.error("Errore nel caricamento utenti:", error);
            }
        };

        // evocazione funzione async per PRENDERE utenti
        fetchUsers();
    }, []);


    // funzione per gestire il cambiamento dell username dell utente nuovo da inserire
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    // funzione handle del form per aggiungere utente
    const handleAddUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevenire il comportamento default di un form
        if (!username.trim()) return; // verfica frontend che l'utente non sia vuoto

        // tentativo di aggiungere l'username nuovo con la POST
        try {
            const res = await fetch('http://localhost:3000/api/utenti',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ username: username })
                });

            // aggiorniamo la lista con il ritorno della risposta della POST con il nuovo utente l'array degli utenti
            const newUser = await res.json();
            setUserList([...userList, newUser]);
            // reset del campo field input utente
            setUsername("");
            toast.success("Utente aggiunto con successo!");

        } catch (error) {
            toast.error("errore nel tentativo di aggiungere utente! riprova!")
        }
    }


    // restituiamo gli stati e le funzioni al componente view "Home.tsx"
    return {
        userList,
        username,
        handleChange,
        handleAddUser
    }
}



export default useHomeController;