import { toast } from "react-toastify";
import useHomeController from "./useHomeController";
import './Home.css'


function Home() {

    const { userList, username, handleChange, handleAddUser } = useHomeController();

    return (
        <>
            <h1 className="mb-3">React + NODEJS + SQLITE</h1>
            <form onSubmit={handleAddUser}>
                <label htmlFor="nomeUtente">Nome del nuovo utente</label>
                <input type="text" id="nomeUtente" value={username} onChange={handleChange} placeholder="inserisci nome utente" />
                <button type="submit" className="btn btn-success">CONFERMA</button>
            </form>

            <p>lista degli utenti</p>
            <ul>
                {userList.map((u, i) => (
                    <li key={i}>{u.username}</li>
                ))}
            </ul>
        </>
    )
}



export default Home;