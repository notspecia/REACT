import { FormEventHandler, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import LoginUser from "../../services/LoginUser.api";




// Pagina di login che permette all'utente di riceverei il suo token JWT per poter effettuare chiamate API
function Login() {

    //* stato iniziale del form di login con i campi nel form con stringa vuota, verranno modificati tramite handleInputChange() degli input
    //* stato inziale di un errore in caso ci fossero problematiche durante il login nel form
    const [dataLogin, setDataLogin] = useState({ username: "", password: "" });
    const [dataError, setDataError] = useState<null | string>(null);

    //* importato da react-router permette se inserito un path dei router dentro App.tsx, di rendirizzare l'utente dove si voglia
    const navigate = useNavigate();


    // ---------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------


    // al cambiamento degli input USERNAME&PASSWORD, settiamo i nuovi dati tramite setFormData() dinamicamente da poi passare alla fetch POST all'interno del body in JSON
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target; // ricava il nome del campo (username/password) e il valore inserito
        setDataLogin({ ...dataLogin, [name]: value });
    };


    // al submit del form andiamo a prevenire il comportamento default di un form ed eseguiamo la fetch POST di registrazione
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        try {
            const token = await LoginUser(dataLogin.username, dataLogin.password, "https://d3660g9kardf5b.cloudfront.net/api/login");
            navigate("/equipments-booked");
            console.log(token)

            // gestione errori di autenticazione da mostrare all'utente settato tramite setDataError()
        } catch (err) {
            setDataError(`Errore tentativo login! Riprova: ${err}`)
        }

    }




    return (
        <>
            <div className="w-full max-w-xl fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-gradient-to-r from-sky-500/20 to-indigo-500/10 p-12 rounded-lg shadow-lg">

                <h1 className="text-4xl font-bold text-white text-center mb-6">Login</h1>

                {/* quando andiamo a submittare il login, eseguiamo la POST  */}
                <form onSubmit={handleSubmit}>
                    {/* campo input Username*/}
                    <div className="mb-6">
                        <label htmlFor="username" className="block text-lg font-light text-white mb-2">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={dataLogin.username}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 text-md text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Inserisci il tuo username"
                            required
                        />
                    </div>

                    {/* campo input Password*/}
                    <div className="mb-14">
                        <label htmlFor="password" className="block text-lg font-light text-white mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={dataLogin.password}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 text-md text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Inserisci la tua password"
                            required
                        />
                    </div>

                    {/*!! se l'errore è una stringa quindi valore true, e non + null (falsey), viene mostrato sotto il form di login come errore */}
                    {dataError && (
                        <p className=" text-red-600 text-center text-md pb-4">{dataError}</p>
                    )}

                    {/* bottone submit form login */}
                    <div className="flex justify-center mb-4">
                        <button type="submit" className="w-3/4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition">
                            Login
                        </button>
                    </div>

                    {/* link Route che porta alla pagina registrazione se non si è ancora registrati */}
                    <div className=" text-slate-300 text-center text-md font-light underline">
                        <Link to="/register">Non hai un account? crealo subito!</Link>
                    </div>

                </form>

            </div >
        </>
    );

}

export default Login;