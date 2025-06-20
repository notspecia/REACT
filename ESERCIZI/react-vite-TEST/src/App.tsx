import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' // importiamo lo style CSS iniziale che stilizza i loghi, button...
import NavBar from './components/NavBar/NavBar' // importiamo anche il COMPONENT navbar, da utilizzare all'interno della --> funzione App()


// ! QUESTO E IL COMPONENTE <APP> "quello che effettivamente vediamo", che viene creato tramite una funzione (non classe come ANGULAR)
// questa funziona RITORNA dell'html, ma in realtà sotto banco va a utilizzare il document.getElement.... react prende tutta sta roba e la manda a schermo
function App() {

  const [count, setCount] = useState(0);
  const [food, setFood] = useState<string[]>(["banana"]);

  /* scriviamo dell'html ma in realtà poi viene costruito come TYPESCRIPT */
  return (
    <>

      {/* test USANDO TAILWIND */}
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>


      {/* importiamo il nostro component all'interno del component <app>! */}
      <NavBar></NavBar>


      {/* queste 2 href link sono i loghi di vite + react che vediamo quando avviamo il server */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>


      {/* questo è il bottone che al click incrementa il counter che vediamo quando avviamo il server */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <button onClick={() => setFood([...food, "mela"])}>
        aggiungi food "mela"
      </button>

      <ul>
        {food.map((f, i) => (
          <li key={i}>
            {f}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App // lo esportiamo al `main.tsx` per potrelo renderizzarlo successicamente al <div root> presente nell'html principale!