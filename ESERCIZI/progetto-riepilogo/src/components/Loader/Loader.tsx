import './Loader.css';


function Loader() {

    return (
        <>
            <div className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 z-1">
                <div className="spinner-border text-light" style={{ width: '4rem', height: '4rem' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}


export default Loader