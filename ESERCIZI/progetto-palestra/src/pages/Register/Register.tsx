import { Link } from "react-router-dom";
import useRegisterController from "./useRegisterController";


// 

/**
 * componente Register
 * 
 * questa pagina contiene un form di registrazione per consentire all'utente di creare un nuovo 
 * account, ottenere un token JWT e accedere alla prenotazione degli strumenti in palestra.
 * 
 * il form raccoglie username e password e, al submit, esegue la registrazione tramite 
 * il servizio API gestito nel controller.
 * 
 */
function Register() {

    // destructuring dell'oggetto restituito ed importato qui dentro da "useRegisterController.ts" contenente stati e logica con funzioni handle degli inputs/form
    const { dataRegister, dataError, handleInputChange, handleSubmit } = useRegisterController();


    return (
        <>
            <div className="w-full max-w-xl fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-gradient-to-r from-sky-500/20 to-indigo-500/10 p-12 rounded-lg shadow-lg">

                <h1 className="text-4xl font-fira font-bold text-white text-center mb-6">Registrati</h1>

                {/* quando il form viene submittato, eseguiamo la POST passando i dati di username e passsword al servecies
                andiamo a prevenire lo stato di default quando finito di compilare e reindiriziammo tramite useNavigate() da react-router alla pagina home */}
                <form onSubmit={handleSubmit}>
                    {/* campo input Username*/}
                    <div className="mb-6">
                        <label htmlFor="username" className="block text-lg font-light text-white mb-2">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={dataRegister.username}
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
                            value={dataRegister.password}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 text-md text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Inserisci la tua password"
                            required
                        />
                    </div>

                    {/* segnalare all'utente eventuali errori durante la compilazione del form */}
                    {dataError.map((error, index) => (
                        <p key={index} className=" text-red-600 text-center text-md pb-4">{error}</p>
                    ))}

                    {/* bottone submit form register */}
                    <div className="flex justify-center mb-4">
                        <button type="submit" className="w-3/4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition">
                            Registrati!
                        </button>
                    </div>

                    {/* link Route che porta alla pagina login se l'utente ha già un account */}
                    <div className=" text-slate-300 text-center text-md font-light underline">
                        <Link to="/login">Hai già un account? accedi subito!</Link>
                    </div>

                </form>

            </div >
        </>
    );
}


export default Register;