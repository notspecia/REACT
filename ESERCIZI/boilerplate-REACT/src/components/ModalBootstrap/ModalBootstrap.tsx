function ModalBootstrap() {


    return (
        <>
            {/* bottoni per apertura delle modali */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                Apri Modale 1
            </button>

            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Apri Modale 2
            </button>

            {/* modali bootstrap*/}
            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="modal1Label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal1Label">Titolo Modale 1</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Chiudi"></button>
                        </div>
                        <div className="modal-body">
                            Contenuto della prima modale.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="modal2Label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal2Label">Titolo Modale 2</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Chiudi"></button>
                        </div>
                        <div className="modal-body">
                            Contenuto della seconda modale.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default ModalBootstrap;