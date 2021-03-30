import { Connexion } from "./connexion";

export interface Association {
    id?: number,
    type_commande?: string,
    numeroTelephone: string,
    rue: string,
    codePostal: string,
    nom: string,
    prenom: string,
    connexion: any,
    perimetre: number,
    libelle: string,
    numero: string // numero RNA
}