import { Link } from 'react-router-dom';
import { type FilmSerie } from '../../models/FilmSerie.model';
import './ResultsFilmSerire.css';

function ResultsFilmSerie({ filmSerie }: { filmSerie: FilmSerie[] }) {
 
    return (
    <>
      <div className='d-flex justify-content-center'>
        <ul className="list-group mt-5 w-50">
          {filmSerie.map((item) => (
            <li key={item.show.id} className="list-group-item d-flex justify-content-between align-items-center">
              <h6 className='w-100 text-primary text-decoration-underline text-center '>
                <Link to={`/detail/${item.show.id}`}>{item.show.name}</Link>
              </h6>
              <img src={item.show.image?.medium} alt={item.show.name} className='w-25' />
            </li>
          ))}
        </ul>
      </div>
    </>
    )
}




export default ResultsFilmSerie