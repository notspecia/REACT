import './ChangeView.css';
import useChangeViewController from './useChangeViewController';


const ChangeView = ({ goBoth }: { goBoth: boolean }) => {

    // hook controller che gestisce la logica dei bottoni per cambiare rotta di navigazione della prenotazione tavolo o dell'ordine
    const { idPrenotazione, navigate } = useChangeViewController();

    return (
        <>
            {/* se goBoth è true, mostra entrambi i bottoni per muoversi dal menu all'ordine/numero prenotazione tavolo*/}
            {goBoth ? (
                <div className="buttons-navigate d-flex flex-column flex-md-row gap-3 gap-md-0 justify-content-between align-items-center pt-5 fs-5 text-danger">
                    <p onClick={() => navigate(`/`)}><i className="bi bi-arrow-left-circle me-2"></i>Prenotazione Tavolo</p>
                    <p onClick={() => navigate(`/${idPrenotazione}/order`)}>Visualizza Ordine {idPrenotazione} <i className="bi bi-arrow-right-circle ms-2"></i></p>
                </div>
            ) : (
                <div className="buttons-navigate d-flex flex-column flex-md-row gap-3 gap-md-0 justify-content-start align-items-center pt-5 fs-5 text-danger">
                    <p onClick={() => navigate(`/${idPrenotazione}/menu`)}><i className="bi bi-arrow-left-circle me-2"></i>Menu Pizze</p>
                </div>
            )}
        </>
    );
};


export default ChangeView;