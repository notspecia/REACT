import ChangeView from "../../components/ChangeView/ChangeView";
import Loader from "../../components/Loader/Loader";
import useOrdineController from "./useOrdineController";




function Ordine() {
    const { order, isLoading, idPrenotazione, handleGoToListaPizze } = useOrdineController();

    return (
        <>
            {/* possiamo solo tornare indietro al menu */}
            <ChangeView goBoth={false} />
            <h2 className="text-center mb-4 mt-4">Ordine per tavolo n° {idPrenotazione}</h2>
            {/* se non sono presenti ordini, bottone che redirecta alla pagina dei menu  */}
            {isLoading ? (
                <Loader />
            ) : order.length === 0 ? (
                <div className="text-center mt-5">
                    <p className="fs-5 ligth">Nessuna pizza ordinata per questo tavolo.</p>
                    <button
                        className="btn btn-danger mt-3 fs-5 px-5"
                        onClick={handleGoToListaPizze}
                    >
                        Torna al menu delle pizze
                    </button>
                </div>
            ) : (
                // show di tutti gli ordini con rendering del bollino stato ordinazione dinamico
                <div className="row">
                    {order.map((item) => (
                        <div key={item.id} className="col-md-4 mb-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Pizza ID: {item.pizza_id}</h5>
                                    <p className="card-text">Quantità: {item.quantity}</p>
                                    <p className="card-text">
                                        Stato:{" "}
                                        <span
                                            className={`badge ${item.status === "pending"
                                                ? "bg-warning text-dark"
                                                : "bg-success"
                                                }`}
                                        >
                                            {item.status === "pending"
                                                ? "In attesa"
                                                : "Consegnata"}
                                        </span>
                                    </p>
                                    <p className="card-text text-muted">
                                        Ordinato il:{" "}
                                        {new Date(item.created_at).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>

    );

}

export default Ordine;
