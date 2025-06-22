import GymEquipmentsList from "../../components/GymEquimentsList/GymEquipmentsList";
import { type Equipment } from "../../models/Equipment.model";



/**
 * componente Home
 * 
 * componente che rappresenta la pagina principale dell'applicazione, dove gli utenti possono esplorare i corsi e gli strumenti disponibili in palestra
 * la pagina visualizza un titolo e una descrizione, e offre un link per esplorare i corsi. 
 * 
 * se i dati sugli strumenti (equipments) sono disponibili, vengono passati al componente `GymEquipmentsList` 
 * per essere visualizzati in una lista. 
 * in caso la lista di equipments non vengono renderizzati, viene mostrato un messaggio di errore.
 * 
 * @param {Equipment[]} equipments - lista degli oggetti disponibili in palestra, ottenuta tramite una fetch
 * @param {string | null} error - messaggio di errore da visualizzare nel caso la fetch fallisca
 */
function Home({ equipments, error }: { equipments: Equipment[], error: string | null }) {


    return (
        <>
            {/* Hero della home con un titolo e un bottone per iniziare a navigare tra gli strumenti da palestra */}
            <div className="flex items-center h-screen bg-gray-900 text-white text-center py-16 mt-5">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold leading-tight">Benvenuti in angFitness!</h1>
                    <p className="text-xl mt-3 mb-5">Scopri i nostri corsi e inizia il tuo percorso verso il benessere fisico.</p>
                    <a href="#list" className="inline-block mt-4 px-10 py-3 bg-blue-600 hover:bg-blue-700 text-lg font-medium rounded-lg transition duration-300">Esplora i nostri corsi!</a>
                </div>
            </div>

            {/* 
            - in caso il value di "errore" sia != da null andrà a reinidirizzare la lista degli equipments,
            andiamo a mostrare come elmento principale il componente che riceve gli equipments, che verranno
            mappati sottoforma di lista mostrando ognuno singolarmente, passiamo gli equipments tramite props (equipments)
            */}
            {error ? (
                <h1 className='text-3xl text-red-700 text-center'>{error}</h1>
            ) : (
                <GymEquipmentsList equipments={equipments} />
            )}
        </>
    );
}


export default Home;