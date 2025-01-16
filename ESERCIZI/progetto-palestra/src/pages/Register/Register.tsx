import { FormEventHandler, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // una volta compilato correttamente il form di regitrazione, rinvia l'utente all'homepage
import RegisterUser from "../../services/RegisterUser.api";




// pagina Routing contenente un form di registrazione per permettere all'utente di creare un suo nuovo token JWT e registrarsi per prenotare strumenti da palestra
function Register() {

    //* stato iniziale del form di registrazione con i campi nel form con stringa vuota, verranno modificati tramite handleInputChange() degli input
    //* stato inziale di un errore in caso ci fossero problematiche durante la registrazione nel form
    const [dataRegister, setDataRegister] = useState({ username: "", password: "" });
    const [dataError, setDataError] = useState<string[]>([]);

    //* importato da react-router permette se inserito un path dei router dentro App.tsx, di rendirizzare l'utente dove si voglia
    const navigate = useNavigate();


    // ---------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------


    // al cambiamento degli input USERNAME&PASSWORD, settiamo i nuovi dati tramite setFormData() dinamicamente da poi passare alla fetch POST all'interno del body in JSON
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target; // ricava il nome del campo (username/password) e il valore inserito
        setDataRegister({ ...dataRegister, [name]: value });
    };


    // validazione degli input quando viene submitato, se ci sono errori vegono settati gli errori tramite setFormError()
    const validateForm = (): boolean => {
        const errors: string[] = []; // Variabile temporanea per gli errori

        if (dataRegister.username.trim() === "") {
            errors.push("Inserisci un username valido!");
        }

        if (dataRegister.password.length < 6 || dataRegister.password.trim() === "") {
            errors.push("Inserisci una password valida che abbia almeno 6 caratteri!");
        }

        setDataError(errors);
        return errors.length === 0; // restituisci true se non ci sono errori, false se sono presenti
    };


    // al submit del form vengono effettuati i controlli degli input username password, se sono validi la POST va a buon fine e si viene reinidirizzati all'home page
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {

        e.preventDefault();

        // validazione dei campi
        if (!validateForm()) {
            return;
        }

        try {
            // chiamata al servizio di registrazione
            const res = await RegisterUser(dataRegister.username, dataRegister.password, "https://d3660g9kardf5b.cloudfront.net/api/register");
            console.log(`${res}, dati del tuo nuovo utente: ${dataRegister.username} ${dataRegister.password}`);
            // pulizia degli errori e reindirizzamento alla homepage
            setDataError([]);
            navigate("/");

            // gestione errori di rete, aggiunto nell'array state degli errori tramite setDataError()
        } catch (err) {
            setDataError([`Errore nella registrazione utente! Riprova più tardi: ${err}`]);
        }
    };



    return (
        <>
            <div className="w-full max-w-xl fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-gradient-to-r from-sky-500/20 to-indigo-500/10 p-12 rounded-lg shadow-lg">

                <h1 className="text-4xl font-bold text-white text-center mb-6">Registrati</h1>

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

                    {/* !! segnalare all'utente eventuali errori durante la compilazione del form */}
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