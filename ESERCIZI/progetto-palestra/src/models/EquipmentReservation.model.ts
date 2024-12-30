import { type Equipment } from "./Equipment.model";

// interfaccia funzione di callback con il setSelectedEquipment che contiene un arrow funrciont che accetta un parametro di type :Equipment!!
export interface EquipmentReservation {
    openModal: (arg: Equipment) => void;
}