// GET per prendere 10 serie/film in base alla query ricercata
export const detailTvmaze = async (path:string, id:string) => {
    // chiamata api dell'end point POST per gli show
    const response = await fetch(`${path}${id}`);
    if (!response.ok) {
        throw new Error("Errore invio dettaglio film");
    }
    // restituisce i film/serie in formato risposta JSON dalla chiamata HTTP GET
    return response.json();
};



export default detailTvmaze;