import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


// importazione dei componenti pagine da inserire come Rotte
import Home from './views/Home/Home';
import Notfound from './views/Notfound/Notfound';
import ListaPizze from './views/ListaPizze/ListaPizze';
import PizzaDetail from './views/PizzaDetail/PizzaDetail';
import Ordine from './views/Ordine/Ordine';



function App() {

  return (
    <>
      <Router>
        {/* overlay sfondo scuro sull'immagine presente nel body come background */}
        <div className="app-bg z-1" />
        {/* wrap dell'applicazione per abilitare il routing tra le pagine della SPA tramite <Link to="path"/>*/}
        <main className='container position-relative z-2'>
          <Routes>
            {/* route principale Home (montata all'avvio dell'applicazione)*/}
            <Route path="/" element={<Home />} />
            <Route path='/:idPrenotazione/menu' element={<ListaPizze />} />
            <Route path="/:idPizza/pizza" element={<PizzaDetail />} />
            <Route path="/:idPrenotazione/order" element={<Ordine />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </main>
      </Router >
      {/* import globale nell'app per utilizzare notifiche TOAST */}
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </>
  );
}


export default App;