import './Loader.css';


const Loader = () => {
    return (
        <div className="loader-overlay">
            <div className="spinner-border text-primary loader-spinner" role="status">
                <span className="visually-hidden">Caricamento...</span>
            </div>
        </div>
    );
};


export default Loader;