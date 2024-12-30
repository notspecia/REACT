import { useState, useEffect } from 'react';

// import GymEquipmentApi from './services/GymEquipment.api'; // richiesta fetch da un file esterno
import GymEquipmentsList from './components/GymEquimentsList/GymEquipmentsList';
import { type Equipment } from './models/Equipment.model';

import './App.css';



function App() {


  //* data di prova perchè la fetch non funziona ancora con degli item di prova da palestra DA SOSTITUIREEE
  const [data, setData] = useState<Equipment[]>([
    {
      name: "Manubri",
      claim: "Ideale per allenamenti di forza, con peso regolabile da 5kg a 40kg.",
      icon: "./assets/gym-icon.png",
      image: "https://www.fitnessway.it/wp-content/uploads/2022/12/deltoidi-alzate.jpg",
      pricePerMinute: 0.15
    },
    {
      name: "Yoga Ball",
      claim: "Palla gonfiabile progettata per esercizi di equilibrio, stretching e rafforzamento del core.",
      icon: "./assets/gym-icon.png",
      image: "https://m.media-amazon.com/images/I/51yubMFVBUL._AC_UF1000,1000_QL80_.jpg",
      pricePerMinute: 0.10
    },
    {
      name: "Tapis Roulant",
      claim: "Perfetto per il cardio, con velocità regolabile e inclinazione automatica.",
      icon: "./assets/gym-icon.png",
      image: "https://contents.mediadecathlon.com/m14376952/k$6069f1c7a630977c5c328dad26d03b11/picture.jpg",
      pricePerMinute: 0.50
    }, {
      name: "Cyclette",
      claim: "Ottima per allenamenti intensivi per il fiato, con resistenza regolabile.",
      icon: "./assets/gym-icon.png",
      image: "https://newvitality.it/1658-large_default/-r44-diamond-cyclette-recumbent-orizzontale.jpg",
      pricePerMinute: 0.40
    }, {
      name: "Lat machine",
      claim: "Concepita soprattutto per eseguire delle trazioni verticali o pull-down, utili nell'allenamento della schiena.",
      icon: "./assets/gym-icon.png",
      image: "https://www.my-personaltrainer.it/2020/10/07/trazioni-alla-lat-machine-cosa-c-e-da-sapere--orig.jpeg",
      pricePerMinute: 0.35
    }, {
      name: "Panca Multifunzionale",
      claim: " Perfetta per esercizi con bilanciere, addominali e allenamento completo.",
      icon: "./assets/gym-icon.png",
      image: "https://www.marbo-sport.pl/data/gfx/pictures/large/8/2/28828_1.jpg",
      pricePerMinute: 0.25
    }
  ]);


  // IMPLEMENTARE LA GESTIONE DEGLI ERRORI MEGLIO, RISOLVERE API ERRATA DAL SERVER
  // useEffect(() => {
  //   fetch("https://d3660g9kardf5b.cloudfront.net/api/equipment")
  //     .then((response) => response.json())
  //     .then((data) => { console.log(data); setData(data); })
  //     .catch((error) => console.error("errore fetch dell'equipment" + error));
  // }, []);


  return (
    <>
      <h1 className="text-7xl font-extrabold text-center mt-10 mb-24">Gym Equipment</h1>
      {/* andiamo a mostrare come elmento principale il componente che riceve gli equipments, che verranno
      mappati sottoforma di lista mostrando ognuno singolarmente */}
      <div className="flex flex-wrap justify-around gap-y-14">
        <GymEquipmentsList equipments={data} />
      </div>
    </>
  );
}

export default App
