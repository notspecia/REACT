import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

interface User {
    id: number;
    username: string;
}

function useHomeController() {

    // stato per registrare la stringa da compilare con l'input per aggiungere utente
    const [userList, setUserList] = useState<User[] | undefined>(undefined);
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
            setUserList(prev => [...prev, newUser]);
            // reset del campo field input utente
            setUsername("");
            toast.success("Utente aggiunto con successo!");

        } catch {
            toast.error("errore nel tentativo di aggiungere utente! riprova!")
        }
    }

    // funzione handle per cancellare uno specifico utente ricvendo il suo ID
    const handleDelete = async (user: User) => {
        try {
            const res = await fetch(`http://localhost:3000/api/utenti/${user.id}`,
                {
                    method: "DELETE"
                });
            if (res.ok) {
                setUserList(prev => prev?.filter(u => u.id !== user.id));
                toast.success(`Utente eliminato con successo`);
            } else {
                toast.error("Errore durante l'eliminazione dell'utente.");
            }
        } catch {
            toast.error("Errore di rete durante la cancellazione.");
        }
    }


    // restituiamo gli stati e le funzioni al componente view "Home.tsx"
    return {
        userList,
        username,
        handleChange,
        handleAddUser,
        handleDelete
    }
}



export default useHomeController;