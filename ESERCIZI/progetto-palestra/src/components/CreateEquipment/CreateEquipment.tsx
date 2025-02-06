import { Equipment } from "../../models/Equipment.model";
import useCreateEquipmentController from "./useCreateEquipmentController";



/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function CreateEquipment({ equipments }: { equipments: Equipment[] }) {

    /* 
    destrutturazione dell'oggetto restituito da "useCreateEquipmentController.ts"
    */
    const { dataEquipment, handleSubmit, handleInputChange } = useCreateEquipmentController({ equipments });


    return (
        <>
            {/* creato al di fuori della modale un overlay che copre tutto lo schermo che porta ad alcuni funzionamenti vantaggiosi:
            01. aggiunto un interazione che al click di ques'ultima (esclusa modale dato che avrà un z-index >) chiuderà la modale
            02. non permette l'interazione con tutto quanto al di fuori della card se non viene chiusa! */}



            {/* modale per la prenotazione dell'equipment */}
            <form
                onSubmit={handleSubmit}
                className="modal flex flex-col justify-around fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-40 w-2/6 py-10 bg-slate-800 text-zinc-50 rounded-lg">

                {/* input per il nome dell'equipment */}
                <div className="mb-6">
                    <label htmlFor="name" className="block text-lg font-light text-white mb-2">Nome corso</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={dataEquipment.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 text-md text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Inserisci il nome del corso"
                        required
                    />
                </div>

                {/* input per la descrizione dell'equipment */}
                <div className="mb-6">
                    <label htmlFor="claim" className="block text-lg font-light text-white mb-2">Descrizione corso</label>
                    <input
                        type="text"
                        id="claim"
                        name="claim"
                        value={dataEquipment.claim}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 text-md text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Inserisci descrizione del corso"
                        required
                    />
                </div>


                {/* input per il link dell'immagine dell'equipment */}
                <div className="mb-6">
                    <label htmlFor="image" className="block text-lg font-light text-white mb-2">Nome corso</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={dataEquipment.image}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 text-md text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Inserisci il link dell'immagine"
                        required
                    />
                </div>

                {/* input per inserire il prezzo/m dell'equipment */}
                <div className="mb-6">
                    <label htmlFor="prezzo" className="block text-lg font-light text-white mb-2">Nome corso</label>
                    <input
                        type="number"
                        id="prezzo"
                        name="prezzo"
                        value={dataEquipment.pricePerMinute}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 text-md text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Inserisci il prezzo al minuto/€"
                        required
                    />
                </div>

                {/* bottone per confermare la creazione dell'equipment */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Crea corso!
                </button>
            </form>
        </>
    );
}


export default CreateEquipment;