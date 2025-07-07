import useHomeController from "./useHomeController";
import './Home.css';



function Home() {
    const { userList, username, handleChange, handleAddUser, handleDelete } = useHomeController();

    return (
        <>
            <h1 className="mb-3">React + NODEJS + SQLITE</h1>

            {/* form collegato con le api generate dal backend/ in node.js */}
            <form onSubmit={handleAddUser} className="mb-4">
                <div className="mb-3">
                    <label htmlFor="campo" className="form-label">Il tuo campo</label>
                    <input
                        type="text"
                        id="campo"
                        value={username}
                        onChange={handleChange}
                        className="form-control form-control-lg rounded-3 shadow-sm"
                        placeholder="Scrivi qui"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>

            <h2>Lista degli utenti</h2>
            {userList ? (
                <ul>
                    {userList.map((u, i) => (
                        <li key={i} className="mb-4 fs-3" onClick={() => handleDelete(u)}>
                            {u.username}
                            <button className="btn btn-danger ms-4">DELETE utente</button>
                        </li>

                    ))}
                </ul>
            ) : (
                <p>Caricamento...</p>
            )}
        </>
    );
}

export default Home;
