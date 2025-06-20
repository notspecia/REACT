import useNotfoundController from "./useNotfoundController";
import './Notfound.css';


function Notfound() {

    const { } = useNotfoundController();

    return (
        <>
            <p className="text-danger">errore!</p>
        </>
    );
}



export default Notfound;