import { Connexion } from "./connexion";

export interface Identite {
    id: number,
    numeroTelephone: string,
    rue: string,
    codePostal: string,
    ville: string,
    nom: string,
    prenom: string,
    connexion: Connexion,
    type_identite?:string
}
