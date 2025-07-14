import { useNavigate, useParams } from 'react-router-dom';


function useChangeViewController() {

    const { idPrenotazione } = useParams();
    const navigate = useNavigate();

    // restituzione degli stati della lista pizze e funzioni di handler
    return {
        idPrenotazione,
        navigate
    }
}


export default useChangeViewController;