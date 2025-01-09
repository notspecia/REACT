import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import fetchEquipments from './services/GymEquipment.api'; // funzione con promise per la richiesta HTTP degli equipments
import { type Equipment } from './models/Equipment.model';

import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import EquimentsBooked from './pages/EquipmentsBooked/EquipmetsBooked';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';




/* App principale contenente il Routing delle altre pagine della SPA: HOME, EQUIPMENTS BOOKED, LOGIN, REGISTER
navigando tra di esse grazie a un componente NavBar.tsx con lo stesso path delle Routes */
function App() {

  //* prendiamo tramite fetch GET, gli equipments della palestra da passare al Route <Home></Home>
  const [equipments, setEquipments] = useState<Equipment[]>([]);

  //* in caso la fetch GET degli equipments non va a buon fine, verrà settato un errore da mostrare nella Route <Home></Home>
  const [error, setError] = useState<string | null>(null);


  // al montaggio dell'App.tsx sarà avviato l'useEffect che fa una richiesta HTTP fetch per ricevere gli equipments per poi passarli al Route <Home></Home>
  useEffect(() => {

    // richiamiamo la chiamata fetch che risolve la Promise che è stata restituita, con i dati equipments / errori
    // 01. i dati ricevuti con successo saranno settati tramite il setEquipments cambiano lo stato dell'App.tsx
    // 02. gli errori ricevuti dal fallimento della fetch o stato di errore, gestiti tramite lo stato apposito di App.tsx setError
    fetchEquipments()
      .then((equipments) => { setEquipments(equipments); console.log(equipments) })
      .catch(() => setError(`Errore nel caricamento degli equipments! riprovare pià tardi!`)); // settiamo lo state "errore"
  }, []);



  return (
    <>
      <Router>
        {/* wrap dell'applicazione per abilitare il routing tra le pagine della SPA combinato con una Navbar.tsx */}
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
      </Router>
    </>
  );

}

export default App;