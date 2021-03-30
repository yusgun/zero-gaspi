import { Lot } from "./lot";

export interface CommandeGratuite {
    datePaiement: Date,
    dateEnvoie: Date,
    dateArrivee: Date,
    client: any,
    lot: Lot
}