import { useState } from "react"
import { type FilmSerie } from "../../models/FilmSerie.model";
import SearchBar from "../../components/SearchBar/SearchBar"
import ResultsFilmSerie from "../../components/ResultsFilmSerie/ResultsFilmSerie";


function Home() {

  const [filmSerie, setFilmSerie] = useState<FilmSerie[]>([]);

  return (
    <>
      <h1 className="text-center my-5">Search <img src="/hub-icon.png" alt="" /></h1>
      <SearchBar onResults={setFilmSerie} />

      {/* Se filmSerie ha elementi, mostra la lista */}
      {
        filmSerie.length > 0 && (
          <ResultsFilmSerie filmSerie={filmSerie} />
        )
      }
    </>
  )
}




export default Home