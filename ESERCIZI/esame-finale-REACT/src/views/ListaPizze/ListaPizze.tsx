import useListaPizzeController from "./useListaPizzeController";
import './ListaPizze.css';
import Pizza from "../../components/Pizza/Pizza";
import Loader from "../../components/Loader/Loader";
import ChangeView from "../../components/ChangeView/ChangeView";
import ResumeOrder from "../../components/ResumeOrder/ResumeOrder";


function ListaPizze() {

    // hook controller che gestisce la logica della lista delle pizze
    const { listaPizze, isLoading, ordini, totalePizze, prezzoTotale, aggiornaQuantita, handleOrdination, handleCancelOrdination } = useListaPizzeController();

    return (
        <>
            {/* fetch di simulazione, con loader component mentre le pizze vengono fetchate */}
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {/* componente per cambiare rotta di navigazione tra prenotazione tavolo e ordine */}
                    <ChangeView goBoth={true} />
                    {/* container fixed con il riepilogo degli ordini (solo se è presente almeno una pizza) */}
                    {
                        totalePizze > 0 && (
                            <ResumeOrder totalePizze={totalePizze} prezzoTotale={prezzoTotale} handleOrdination={handleOrdination} handleCancelOrdination={handleCancelOrdination} />
                        )
                    }

                    {/* catalogo della lista di tutte le pizze disponibili, ogni pizza è ciclata in un componente singolo */}
                    <h2 className="text-center my-5 fs-1">Le nostre pizze <i className="bi bi-fork-knife ms-2"></i></h2>
                    <div className="row g-5 lista-pizze-container">
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