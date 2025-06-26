


function Modal({ show, closeModal }) {

    if (!show) return null;

    return (
        <>
            <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} onClick={closeModal}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Titolo della Modale</h5>
                            <button type="button" className="btn-close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            <p>Contenuto della modale.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeModal}>
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