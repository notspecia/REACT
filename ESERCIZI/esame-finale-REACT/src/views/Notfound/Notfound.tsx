
import useNotfoundController from "./useNotfoundController";
import './Notfound.css';


function Notfound() {

    const { navigate } = useNotfoundController();



    return (
        <>
            {/*componente NOTFOUND per rotte non specificate, redirect alla home prenotazioni dopo 5sec */}
            <div className=" alert alert-card-modern text-center py-5 shadow-lg" role="alert">
                <h2 className="text-danger fs-1">Errore 404</h2>
                <p>La pagina che stai cercando non esiste.</p>
                <hr />
                <span>Verrai reindirizzato alla home tra pochi secondi... </span>
                <div className="spinner-border spinner-border-sm text-primary ms-1" role="status">
                    <span className="visually-hidden">caricamento...</span>
                </div>
                <button className="d-block my-0 mx-auto btn btn-outline-danger py-2 px-4 mt-3" onClick={() => navigate('/')}>
                    Torna subito alla Home
                </button>
            </div>
        </>
    );
}



export default Notfound;