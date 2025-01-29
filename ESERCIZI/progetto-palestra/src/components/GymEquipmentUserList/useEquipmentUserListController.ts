import { useEffect, useState } from "react";
import { type EquipmentUser } from "../../models/EquipmentUser.model";
import { type EquipmentFiltered, type Equipment } from "../../models/Equipment.model";


/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function useEquipmentUserList({ userEquipments, equipments }: { userEquipments: EquipmentUser[], equipments: Equipment[] }) {

    /* 
    ora che possediamo all'interno di questo componente i:
    *01. userEquipments: tutti gli oggetti da palestra prenotati dall'utente con model "EquipmentUser[]"
    *02. equipments: tutti gli oggetti da palestra disponibili della palestra con model "Equipment[]" 
    andiamo a mappare questi 2 array distiniti, mettendo a confronto gli ID di entrambi, se combaciano verrà aggiunto a questo
    nuovo array gli EQUIPMENTS PRENOTATI DALL'UTENTE CON IL MODEL "Equipment[]" 
    */
    const [filteredEquipments, setFilteredEquipments] = useState<EquipmentFiltered[]>([]);


    // sempre al montaggio del componente, andiamo a effettuare il filtro dei 2 equipments distiniti
    useEffect(() => {
        if (userEquipments && userEquipments.length > 0 && equipments) {
            const filtered: EquipmentFiltered[] = userEquipments.map((bookedEquipment) => {
                const equipment = equipments.find(
                    (equipment) => equipment.id === bookedEquipment.equipment_id,
                );

                return {
                    ...equipment,
                    start_date: bookedEquipment.start_date,
                    end_date: bookedEquipment.end_date,
                } as EquipmentFiltered;
            });

            setFilteredEquipments(filtered);
        }
    }, [userEquipments, equipments]);



    // restituiamo gli state e le funzioni evocate dal form all'iterno del file Login.tsx
    return {
        filteredEquipments
    }
}

export default useEquipmentUserList;