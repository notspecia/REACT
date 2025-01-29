

/**
 * Nome della funzione
 * componente montato in caso venisse inserito un path != da quelli delle pagine di routing create all'interno di app.tsx
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function NotFound() {
    return (
        <>
            <h1 className="text-2xl text-center text-red-500 mt-48"> Pagina non Trovata! ERROR 404</h1>
        </>
    )
}


export default NotFound;