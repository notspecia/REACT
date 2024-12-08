import usePokeApi from "./hooks/usePokeApi"


const App = () => {

  const { pokemon, goToPreviousPage, goToNextPage, hasPrevoiusPage, hasNextPage, page, totPages }
    = usePokeApi(40); //* passiamo come numero massimo di pokemon mostrabili all'API ogni pagina
  return (
    <>

      <h1>Pokèmon List</h1>

      {/* per ogni pokemon dell'array andiamo a mappare l'array che contiene tutto, creiamo per ognuno un <li> */}
      <ul>
        {pokemon.map((poke, i) => {
          return <li key={i}>{poke.name}</li>
        })}
      </ul>

      {/* al click cambiamo lo stato del componente che cambierà pagina */}
      <button onClick={goToPreviousPage} disabled={hasPrevoiusPage()}>Prevoius page</button>
      <button onClick={goToNextPage} disabled={hasNextPage()}>Next page</button>
      <h3>current page: {page + 1} of {totPages}</h3>

    </>
  )
}



export default App