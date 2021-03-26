import { Vendeur } from './vendeur';
export interface Entreprise {
    id: number,
    numeroSiret: string;
    typeRestauration: string,
    nomEntreprise: string,
    vendeur: Vendeur
}
