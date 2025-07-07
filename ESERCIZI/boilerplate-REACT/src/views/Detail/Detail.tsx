import useDetailController from "./useDetailController";
import './Detail.css';
import Loader from "../../components/Loader/Loader";


function Detail() {

    // destructuring dell'oggetto (prendiamo l oggetto contenete le cose del dettaglio) 
    const { robaDaFetchare } = useDetailController();


    return (
        <>
            {robaDaFetchare ? (
                <>
                    <h1 className=" text-center my-5 pt-5">Dettaglio del film 🔍</h1>
                    <div className="card mb-5 shadow p-3">
                        <div className="row g-0">
                            <div className="col-md-4 d-flex align-item-center">
                                <img
                                    src={robaDaFetchare.image.medium}
                                    alt={robaDaFetchare.name}
                                    className="img-fluid rounded-start w-75"
                                />
                            </div>
                            {/* Corpo testo */}
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title mb-5">{robaDaFetchare.titolo1}</h3>
                                    <p className="card-text">
                                        <strong>Genere:</strong> {robaDaFetchare.descrizione1}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            ) : (
                <Loader />
            )}
        </>
    )
}


export default Detail