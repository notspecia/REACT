
// GET per prendere 10 serie/film in base alla query ricercata
export const tvmaze = async (query:string, path:string) => {
    // chiamata api dell'end point POST per gli show
    const response = await fetch(`${path}?q=${query}`);
    if (!response.ok) {
        throw new Error("Errore ricezione query");
    }
    // restituisce i film/serie in formato risposta JSON dalla chiamata HTTP GET
    return response.json();
};



export default tvmaze;