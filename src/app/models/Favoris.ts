import { Entreprise } from "./Entreprise";

export interface Favoris {
    id: number,
    client_id: number,
    entreprise: Entreprise
}