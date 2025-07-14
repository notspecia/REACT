import usePizzaDetailController from "./usePizzaDetailController";
import Loader from "../../components/Loader/Loader";


function PizzaDetail() {

    // utilizzo del controller per la logica di business della pagina dettaglio pizza
    const { pizza, isLoading } = usePizzaDetailController();

    return (
        <>
            {/* render dinamico simulazione fetch ritardo per la GET dettaglio pizza */}
            {isLoading || !pizza ? (
                <Loader />
            ) : (
                // card con il dettaglio della pizza
                <div className="card shadow pt-5">
                    <img
                        src={pizza.image}
                        className="card-img-top"
                        alt={pizza.name}
                        style={{ height: "800px", objectFit: "cover" }}
                    />
                    <div className="card-body fs-4">
                        <h2 className="card-title">{pizza.name}</h2>
                        <p className="text-muted">{pizza.description}</p>
                        <p><strong>Ingredienti:</strong> {pizza.ingredients}</p>
                        <p><strong>Prezzo:</strong> €{pizza.price.toFixed(2)}</p>
                    </div>
                </div>
            )}
        </>
    );
}


export default PizzaDetail;