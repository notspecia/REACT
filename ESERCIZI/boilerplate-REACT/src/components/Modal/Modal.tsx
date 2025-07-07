import { useEffect } from "react";



function Modal({ show, handleVisibilityModal }) {


    // se la modale è mostrata disabilitato scroll sullo schermo o viceversa
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [show]);

    // se è false, il componente non viene renderizzato
    if (!show) return null;

    return (
        <>
            <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} onClick={() => handleVisibilityModal(false)}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Titolo della Modale</h5>
                            <button type="button" className="btn-close" onClick={() => handleVisibilityModal(false)}></button>
                        </div>
                        <div className="modal-body">
                            <p>Contenuto della modale.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => handleVisibilityModal(false)}>
                                Chiudi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Modal;