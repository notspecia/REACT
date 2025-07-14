import useHomeController from "./useHomeController";
import "./Home.css";



function Home() {

    // hook controller che gestisce la logica della home e della prenotazione del tavolo
    const { tableNumber, error, handleChange, handleSubmit } = useHomeController();

    return (
        <section className="vh-100 d-flex align-items-center justify-content-center">
            {/* card centrata nella section per la prenotazione del tavolo */}
            <div className="card p-5 shadow-lg position-relative" >
                <div className="text-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2821/2821801.png"
                        className="mb-4"
                        alt="Pizzeria logo"
                        style={{ width: "100px", height: "100px" }}
                    />
                    <h1 className="text-danger">Pizzeria Italiana</h1>
                    <p className="text-muted fs-5">Prenota il tuo tavolo e gusta la pizza!</p>
                </div>

                {/* form contenete campo input con validazione del numero di prenotazione */}
                <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                        <label htmlFor="tableNumber" className="form-label fw-bold">
                            Numero Tavolo
                        </label>
                        <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            className={`form-control form-control-lg shadow-sm ${error ? "is-invalid" : ""}`}
                            maxLength={3}
                            id="tableNumber"
                            name="tableNumber"
                            placeholder="Es. 12"
                            value={tableNumber}
                            onChange={handleChange}
                        />
                        {error && <div className="invalid-feedback">{error}</div>}
                    </div>
                    {/* bottone per inviare il form e prenotare il tavolo */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-danger btn-lg w-100 fw-bold"
                        >
                            Prenota il Tavolo
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}


export default Home;