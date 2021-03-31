import { Identite } from "./identite";

export interface Particulier extends Identite{
    id: number,
    libelle: string
}
