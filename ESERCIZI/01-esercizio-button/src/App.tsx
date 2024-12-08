import { useState } from 'react'
import './App.css'



function App() {

  //? useState -> è un hook di React che permette di gestire uno stato all'interno di un componente.
  //* setCount / setData -> sono funzioni che aggiornano lo stato del primo valore e notifica React di ridisegnare il componente <App>.
  const [count, setCount] = useState(0)  // stato iniziale -> count parte da 0
  const [data, setData] = useState<number[]>([]) // stato iniziale -> array di numeri vuoto chc conterrà la data (in ms) al click

  function increaseCount(): void {
    console.log(count);

    setCount((count) => count + 1);
  }

  function createData(): void {
    console.log(data);
    setData([...data, Date.now()]); // spread operator aggiungendo oltre alle data già aggiunte anche quella attuale al click
  }


  return (
    <>
      <div className="card">

        {/* al click del bottone vado ad invocare la funzione increaseCount e createData */}
        <button onClick={() => { increaseCount(); createData(); }}> click me</button>
        <p>count is {count}</p>

        <ul>
          {data.map((d) => <li>{`${new Date(d).getHours()}:${new Date(d).getMinutes()}:${new Date(d).getSeconds()}`}</li>)}
        </ul>
        <p></p>

      </div>
    </>
  )

}



export default App