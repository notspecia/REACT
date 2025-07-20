import useResumeOrderController from "./useResumeOrderController";
import "./ResumeOrder.css";


function ResumeOrder({
    totalePizze,
    prezzoTotale,
    handleOrdination,
    handleCancelOrdination
}: {
    totalePizze: number,
    prezzoTotale: number,
    handleOrdination: () => void,
    handleCancelOrdination: () => void
}) {

    // hook per gestire lo stato e le azioni della componente
    const { isOrderVisible, hideOrder } = useResumeOrderController();


    return (
        <>
            {/* template con container visibile ocn riepilogo ordine */}
            {isOrderVisible ? (
                <>
                    <div className="position-fixed bottom-0 end-0 z-3 bg-black text-light text-center py-4 riepilogo-ordine">
                        {/* toggle in alto a sinistra del container di riepilogo per ridurre ad icona il riepilogo */}
                        <i className="bi bi-dash fs-3 toggle" onClick={() => hideOrder(false)}></i>
                        <h2 className="fs-3">Riepilogo ordine <i className="bi bi-cart-check"></i></h2>
                        <p className="fs-6">
                            Numero pizze selezionate: <strong>{totalePizze}</strong>
                        </p>
                        <p className="fs-6">
                            Prezzo complessivo: <strong>€{prezzoTotale.toFixed(2)}</strong>
                        </p>
                        <div className="d-flex justify-content-evenly align-items-center">
                            <button className="btn btn-secondary px-3 py-1" onClick={handleCancelOrdination}>Annulla ordine</button>
                            <button className="btn btn-danger px-3 py-1" onClick={handleOrdination}>Conferma Ordine</button>
                        </div>
                    </div>
                </>
            ) : (
                // template con contenitore minimi con bottone per riaprire il riepilogo ordine
                <div className="position-fixed bottom-0 end-0 z-3 bg-black text-light text-center py-4 riepilogo-ordine">
                    {/* toggle in alto a sinistra del container di riepilogo per ingradire il riepilogo */}
                    <i className="bi bi-arrows-angle-expand fs-4 toggle" onClick={() => hideOrder(true)}></i>
                </div>
            )}
        </>
    );
}


export default ResumeOrder;