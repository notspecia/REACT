import { Link } from 'react-router-dom';
import './goBack.css';


function GoBack() {
    return (
        <>
            <div className="d-flex justify-content-center">
                <Link to="/"><p className='text-light fs-4'>Torna alla HOME!</p></Link>
            </div>
        </>
    )
}


export default GoBack