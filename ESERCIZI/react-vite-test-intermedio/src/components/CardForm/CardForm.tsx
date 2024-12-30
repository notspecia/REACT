import { type City } from "../../City.model"
import { type CardFormProp } from "./CardFormProp.model";


// passiamo la [prop] contenente la funzione che permetterà al genitore di aggiornare lo stato delle città nella lista cities[]
function CardForm({ addCity }: CardFormProp) {

    //  funzione che al click va a evocare la callback function passata dal genitore `App.tsx`, aggiunge una città con proprietà statiche
    const handleClick = () => {
        const city: City = {
            key: 4,
            name: "Oslo",
            imgURL:
                "https://media.istockphoto.com/id/170550591/it/foto/cittadina-di-bellagio-sul-lago-di-como-luogo-dinteresse-nazionale-italia.jpg?s=612x612&w=0&k=20&c=WfBWQaNlmgTT1DFpM35tQqhA17QM0dvfIAEyDeIUv-0=",
            description: "Osloooo seee",
            isVisited: true
        }

        addCity(city); // FUNZIONE DI CALLBACK PASSATA DAL GENITORE usata per 
    }



    return (
        <div className="flex flex-col gap-3 w-80 mb-10">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            {/* al click del bottone va a chiamare la funzione che contiene la funzione di callback `addCity`
            importata precedentemente dal padre per cambiare lo stato delle cities[] */}
            <button className="" onClick={handleClick}>Aggiungi la card!</button>
        </div>
    )
};

export default CardForm;