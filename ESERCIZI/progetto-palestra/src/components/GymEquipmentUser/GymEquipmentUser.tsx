import { type EquipmentFiltered } from "../../models/Equipment.model";



/**
 * Nome della funzione
 * componente card dell'equipment singolo, che riceve i suoi dati associati (nome, descrizione, prezzo...) 
 * e la funzione di callback che contiene il metodo che contiene il "SetselectedEquipment", 
 * che permette di selezionare questo strumento da palestra, otterrà come parametro l'equipment
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function GymEquipmentUser({ equipmentUser }: { equipmentUser: EquipmentFiltered }) {

    // destructuring dell'oggetto restituito ed importato qui dentro da "useLoginController.ts" contenente stati e logica con funzioni handle degli inputs/form



    return (
        <>
            <div className="equipmentUser relative w-80 md:w-96 flex flex-col items-center shadow-lg bg-white/10 backdrop-blur-lg text-white py-6 px-8 rounded-2xl border border-white/20 transition-transform duration-300 hover:scale-105">
                {/* Badge prezzo */}
                <span className="absolute top-4 right-4 bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {equipmentUser.pricePerMinute} €/min
                </span>

                {/* Nome */}
                <h2 className="text-2xl font-bold mb-3 text-center">{equipmentUser.name}</h2>

                {/* Icona e immagine */}
                <div className="relative w-40 h-40 flex justify-center items-center bg-indigo-800/20 rounded-full shadow-md">
                    <img src={equipmentUser.image} alt={equipmentUser.name} className="w-32 h-32 object-contain" />
                </div>

                {/* Claim */}
                <p className="text-center text-sm mt-4 px-4">{equipmentUser.claim}</p>

                {/* Pulsante azione */}
                <button className="mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-md transition-all duration-300">
                    Prenota
                </button>
            </div>


        </>
    );
}

export default GymEquipmentUser;