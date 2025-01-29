import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useAppController from './useAppController';

// importazione delle pages da inserire come "element" nelle Routes di react-router-dom
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import EquimentsBooked from './pages/EquipmentsBooked/EquipmetsBooked';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';



/**
 * Nome della funzione
 * App principale contenente il Routing delle altre pagine della SPA: HOME, EQUIPMENTS BOOKED, LOGIN, REGISTER
 * navigando tra di esse grazie a un componente NavBar.tsx con lo stesso path delle Routes
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function App() {

  // destructuring dell'oggetto restituito ed importato qui dentro da "useLoginController.ts" contenente stati e logica con funzioni handle degli inputs/form
  const { equipments, error } = useAppController();


  return (
    <>
      <Router>
        {/* wrap dell'applicazione per abilitare il routing tra le pagine della SPA tramite <Link to="path"/>*/}
        <NavBar />
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