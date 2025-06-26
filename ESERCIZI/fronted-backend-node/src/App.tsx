import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useAppController from './useAppController';

// importazione dei componenti pagine da inserire come Rotte
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Notfound from './views/Notfound/Notfound';



function App() {

  const { } = useAppController();


  return (
    <>
      <Router>
        {/* wrap dell'applicazione per abilitare il routing tra le pagine della SPA tramite <Link to="path"/>*/}
        <Navbar />
        <main className='container'>
          <Routes>
            {/* route principale Home (montata all'avvio dell'applicazione)*/}
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </main>
      </Router >
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

