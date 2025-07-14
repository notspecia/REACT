import useListaPizzeController from "./useListaPizzeController";
import './ListaPizze.css';
import Pizza from "../../components/Pizza/Pizza";
import Loader from "../../components/Loader/Loader";
import ChangeView from "../../components/ChangeView/ChangeView";


function ListaPizze() {

    // hook controller che gestisce la logica della lista delle pizze
    const { listaPizze, isLoading, ordini, totalePizze, prezzoTotale, aggiornaQuantita, handleOrdination } = useListaPizzeController();

    return (
        <>
            {/* fetch di simulazione, con loader component mentre le pizze vengono fetchate */}
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {/* componente per cambiare rotta di navigazione tra prenotazione tavolo e ordine */}
                    <ChangeView goBoth={true} />
                    {/* container con il riepilogo degli ordini (solo se è presente almeno una pizza) */}
                    {
                        totalePizze > 0 && (
                            <div
                                className="mt-4 mx-auto p-3 border-top text-center w-75 riepilogo-ordine"
                            >
                                <h2 className="fs-3 text-danger">Riepilogo ordine</h2>
                                <p className="fs-5">
                                    Numero pizze selezionate: <strong>{totalePizze}</strong>
                                </p>
                                <p className="fs-5">
                                    Prezzo complessivo: <strong>€{prezzoTotale.toFixed(2)}</strong>
                                </p>
                                <button className="btn btn-outline-danger px-4 py-2 fs-5" onClick={handleOrdination}>Conferma Ordine</button>
                            </div>
                        )
                    }

                    {/* catalogo della lista di tutte le pizze disponibili, ogni pizza è ciclata in un componente singolo */}
                    <h2 className="text-center my-5 fs-1">Le nostre pizze</h2>
                    <div className="row g-5">
                        {/* 
                        map delle pizze, al click su ognuna porta al dettaglio di essa
                        - oggetto con i dati della pizza
                        - la quantita ordinata
                        - callback function per aggiornare la quantita di quella pizza ordinata
                        */}
                        {listaPizze.map((pizza) => (
                            <div className="col-12 col-md-6 col-lg-4" key={pizza.id}>
                                <Pizza
                                    pizza={pizza}
                                    quantitaOrdinata={ordini[pizza.id] || 0}
                                    aggiornaQuantita={aggiornaQuantita}
                                />
                            </div>
                        ))}
                    </div>
                </>
            )
            }
        </>
    );
}


export default ListaPizze;