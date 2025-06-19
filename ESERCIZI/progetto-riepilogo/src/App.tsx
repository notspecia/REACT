import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// importazione delle pages da inserire come "element" nelle Routes di react-router-dom
import Home from './views/Home/Home';
import Detail from "./views/Detail/Detail";



function App() {
 

  return (
  <>
  <div className="container">
      <Router>
        {/* wrap dell'applicazione per abilitare il routing tra le pagine della SPA tramite <Link to="path"/>*/}
        <Routes>
          {/* route principale che mostra la pagina Home */}
          <Route path="/" element={<Home />} />
          {/* route per la pagina... */}
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router >
      </div>
  </>
  )
}




export default App