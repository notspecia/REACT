import { Link } from 'react-router-dom';
import useLoginController from "./useLoginController.ts";



/**
 * Nome della funzione
 * Pagina di login che permette all'utente di riceverei il suo token JWT per poter effettuare chiamate API
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function Login() {

    // destructuring dell'oggetto restituito ed importato qui dentro da "useLoginController.ts" contenente stati e logica con funzioni handle degli inputs/form
    const { dataLogin, dataError, handleInputChange, handleSubmit } = useLoginController();


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
                    <div className="mb-10">
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
                        <p className="text-red-600 text-center text-md pb-4">{dataError}</p>
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