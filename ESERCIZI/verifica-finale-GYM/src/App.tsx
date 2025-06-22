import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useAppController from './useAppController';

// importazione delle pages da inserire come "element" nelle Routes di react-router-dom
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import EquimentsBooked from './pages/EquipmentsBooked/EquipmentsBooked';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';



/**
 * componente principale dell'applicazione che gestisce il routing tra le pagine della SPA:
 * HOME, EQUIPMENTS BOOKED, LOGIN, REGISTER
 * la navigazione avviene tramite il componente Navbar.tsx, che fornisce i collegamenti ai percorsi delle rotte definiti nelle Routes.
 * 
 */
function App() {

  /* 
  destrutturazione dell'oggetto restituito da "useAppController.ts"
  contenente stati e logica per la gestione degli equipmentioni handle degli inputs/form 
  */
  const { equipments, error } = useAppController();


  return (
    <>
      <Router>
        {/* wrap dell'applicazione per abilitare il routing tra le pagine della SPA tramite <Link to="path"/>*/}
        <Navbar />
        <Routes>
          {/* route principale che mostra la pagina Home */}
          <Route path="/" element={<Home equipments={equipments} error={error} />} />
          {/* route per la pagina degli equipment prenotati */}
          <Route path="/equipments-booked" element={<EquimentsBooked />} />
          {/* route per la pagina di login utente */}
          <Route path="/login" element={<Login />} />
          {/* route per la pagina di registrazione utente */}
          <Route path="/register" element={<Register />} />
          {/* route per path di pagine inesistenti */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router >
    </>
  );
}

export default App;