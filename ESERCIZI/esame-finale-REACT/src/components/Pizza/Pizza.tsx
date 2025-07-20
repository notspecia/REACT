import type { Pizza as PizzaType } from "../../models/pizzeria.model";
import usePizzaController from "./usePizzaController";
import "./Pizza.css";


// componente pizza ciclato singolarmente, accetta come parametri l'oggetto con i dati della pizza, la quantità ordinata su quella pizza, e la callback per mandare il segnale al padre di aggiornare il numero di pizze 
function Pizza({
    pizza,
    quantitaOrdinata,
    aggiornaQuantita,
}: {
    pizza: PizzaType;
    quantitaOrdinata: number;
    aggiornaQuantita: (pizzaId: number, quantità: number) => void;
}) {

    // utilizzo del controller hook per gestire lo stato e le funzioni
    const { mostraSelettore, setMostraSelettore, handleShowSelettore, handleGoToPizzaDetail } = usePizzaController();

    return (
        <div className="card shadow-sm">
            {/* al click su immagine, redirect al dettaglio della pizza */}
            <img onClick={() => handleGoToPizzaDetail(pizza)}
                src={pizza.image}
                className="card-img-top"
            />
            <div className="card-body">
                <h3 className="card-title text-center fw-bold">{pizza.name}</h3>
                <p className="card-text text-muted">{pizza.description}</p>
                <p className="card-text">
                    <strong>Ingredienti:</strong> {pizza.ingredients}
                </p>
                <p className="card-text">
                    <strong>Prezzo:</strong> €{pizza.price.toFixed(2)}
                </p>

                {/* al click del bottone ordina si va a mostrare il selettore di quantita, e il bottone ordina sparisce */}
                {!mostraSelettore && (
                    <button
                        className="btn btn-danger w-100 fs-5 mt-3"
                        onClick={handleShowSelettore}
                    >
                        Ordina
                    </button>
                )}

                {/* quando mostrato il selettore (flag true), permette di gestire tramite aggiornaQuantita() e di comunicare le quantita al padre */}
                {mostraSelettore && (
                    <div className="mt-3">
                        <div className="row align-items-center g-2">
                            <div className="col-auto">
                                <label htmlFor="quantita" className="col-form-label">
                                    Quantità:
                                </label>
                            </div>
                            <div className="col-3">
                                <input
                                    type="number"
                                    id="quantita"
                                    name="quantita"
                                    className="form-control"
                                    value={quantitaOrdinata || 0}
                                    onChange={(e) =>
                                        aggiornaQuantita(pizza.id, Math.max(1, Number(e.target.value)))
                                    }
                                />
                            </div>
                            {/* bottone per annulare la prenotazione di quella tipologia di pizze (reset quantita e flag a false del selezionatore) */}
                            <div className="col">
                                <button
                                    className="btn btn-secondary w-100"
                                    onClick={() => {
                                        aggiornaQuantita(pizza.id, 0);
                                        setMostraSelettore(false);
                                    }}
                                >
                                    Annulla
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


export default Pizza;