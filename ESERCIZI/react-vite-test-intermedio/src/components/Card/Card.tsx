import { type PropsWithChildren } from "react"; // per dare un type al children DA REACT!
import { type CardProps } from "./Card.model" // importazione del "model.ts" delle props passate come parametro al componente




// componente che verrà esportato verso l'app, conterrà una card con nome count descrizione e immagina di una città
// creiamo le card usando le className offerte dallo style di tailwind!
// *01.  rendiamo DINAMICO questo component usando delle variabili dichiarate all'interno della funzione component
// *02.1 andiamo a passare come parametro un OGGETTO props, che contiene i props / attributi personalizzati presi dall App.tsx all'interno del componente Card
// *02.2 si può al posto di definire props come oggetto definire direttamente le proprietà singole (MEGLIO COSI!) e vengono scomposte DIRETTAMENTE in variabili!
// *03.  dato che USIAMO TypeScript, sarebbe meglio definire esplicitamente i tipi per le props in un file a parte
function Card({ title, conteggio, imgUrl, paragraph }: PropsWithChildren & CardProps) {

    // parametri ottenuti dalle props passate dall'App.tsx con gli attributi personalizzati

    // * props definite tramite l'oggetto se non vengono scomposte direttamente con viene fatto sopra
    // const titolo: string = title;
    // const immagine: string = imgUrl;
    const description: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet vitae obcaecati tempora nat!";


    // RESTITUIAMO LA CARD ALL APP.TSX CON LE PROPS PASSATE DI OGNI SINGOLA CITTA COMUNICANDO CON IL PADRE!
    return (
        <>
            <div className="rounded-lg overflow-hidden bg-zinc-600 w-60">
                <img src={imgUrl} alt="immagine card" />
                <h3>{conteggio}</h3>
                <div className="flex flex-col p-5">
                    <h2 className="text-3xl">{title}</h2>
                    <p>{description}{paragraph}</p>
                </div>
            </div>
        </>
    )
}


export default Card;