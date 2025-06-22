/**
 * componente NotFound
 * 
 * questo componente viene renderizzato quando l'utente tenta di accedere a un percorso non definito nelle rotte dell'applicazione dentro "App.tsx"
 * visualizza un messaggio di errore "404 - Pagina non trovata"
 * 
 */
function NotFound() {
    return (
        <>
            <h1 className="text-2xl text-center text-red-500 mt-48"> Pagina non Trovata! ERROR 404</h1>
        </>
    )
}


export default NotFound;