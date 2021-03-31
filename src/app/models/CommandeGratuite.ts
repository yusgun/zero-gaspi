import { Association } from "./association";
import { Lot } from "./lot";

export interface CommandeGratuite {
    id?: number,
    datePaiement: Date,
    dateEnvoie: Date,
    dateArrivee: Date,
    association: Association,
    lot: Lot
}