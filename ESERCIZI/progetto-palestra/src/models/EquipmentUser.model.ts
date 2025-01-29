// interfaccia iniziale di quando si fa la GET per prendere gli equipment dell'utente
export interface EquipmentUser {
    id: number,
    equipment_id: number,
    user_id: string,
    start_date: string,
    end_date: string
}