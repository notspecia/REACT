import useDetailController from "./useDetailController";
import './Detail.css';
import Loader from "../../components/Loader/Loader";
import GoBack from "../../components/GoBack/GoBack";


function Detail() {

  // destructuring dell'oggetto 
  const { filmSerie } = useDetailController();


  return (
    <>
      <h1 className=" text-center my-5 pt-5">Dettaglio del film 🔍</h1>
      {filmSerie ? (
        <>
          <div className="card mb-5 shadow p-3">
            <div className="row g-0">
              <div className="col-md-4 d-flex align-item-center">
                <img
                  src={filmSerie.image.medium}
                  alt={filmSerie.name}
                  className="img-fluid rounded-start w-75"
                />
              </div>
              {/* Corpo testo */}
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title mb-5">{filmSerie.name}</h3>
                  <p className="card-text">
                    <strong>Genere:</strong> {filmSerie.genres.join(", ")}
                  </p>
                  <p className="card-text">
                    <strong>Lingua:</strong> {filmSerie.language}
                  </p>
                  <p className="card-text">
                    <strong>Data di uscita:</strong> {filmSerie.premiered}
                  </p>
                  <p className="card-text">
                    <strong>Voto medio:</strong> {filmSerie.rating.average}
                  </p>
                  <p
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: filmSerie.summary }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* componente per tornare alla HOME search bar */}
          <GoBack />
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}


export default Detail