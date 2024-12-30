import { type City } from "../../City.model";

// interfaccia di una funzione con addCity che ritorna un arrow function
// che accetta un parametro di type:City
export interface CardFormProp {
    addCity: (arg: City) => void
}
