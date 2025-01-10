import GymEquipmentsList from "../../components/GymEquimentsList/GymEquipmentsList";
import { type Equipment } from "../../models/Equipment.model";



/* Pagina Home che riceve come parametri gli equipments / errore ricevuti dalla fetch GET dentro l'App principale
in caso gli equipments vengono ottenuti con successo verrà mostrato un componente che .mappa() tutti gli equipments */
function Home({ equipments, error }: { equipments: Equipment[], error: string | null }) {


    return (
        <>
            <h1 className="text-white text-7xl font-bold text-center mt-28 mb-24">Gym Equipment</h1>

            {/* 
            - in caso il value di "errore" sia != da null andrà a reinidirizzare la lista degli equipments,
            andiamo a mostrare come elmento principale il componente che riceve gli equipments, che verranno
            mappati sottoforma di lista mostrando ognuno singolarmente, passiamo gli equipments tramite props (equipments)
            */}
            {error ? (
                <h1 className='text-3xl text-red-700 text-center'>{error}</h1>
            ) : (
                <div className="flex flex-wrap justify-around gap-y-24">
                    <GymEquipmentsList equipments={equipments} />
                </div>
            )}
        </>
    );

}

export default Home;