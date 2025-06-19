import useSearchBarController from './useSearchBarController';



function SearchBar({ onResults }: { onResults: (results: any[]) => void }) {
 
    // destructuring dell'oggetto restituito ed importato qui dentro da "useHomeController.ts" contenente stati e logica con funzioni handle degli inputs/form
    const { query, handleInputChange, handleSubmit } = useSearchBarController(onResults);


    return (
     <>
        <form className="d-flex" onSubmit={handleSubmit}>
            <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            value={query}
            onChange={handleInputChange}/>
            <button className="btn btn-outline-warning" type="submit">Search🔍</button>
        </form>
    </>
    )
}




export default SearchBar