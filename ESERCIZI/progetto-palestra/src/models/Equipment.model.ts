// interfaccia per gli equipment che si vedono nella home page
export interface Equipment {
    id: number,
    name: string,
    claim: string,
    icon: string,
    image: string,
    pricePerMinute: number
}

// aggiungiamo all'intereface Equipment un'altra interfaccia per gli equipment dell'utente quando vengono generati nella pagina apposita
export interface EquipmentFiltered extends Equipment {
    start_date: string;
    end_date: string;
}