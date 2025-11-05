import { Adresse } from "./adresse";

export default interface Personne {
    id?: number | null | undefined;
    nom?: string | null | undefined;
    prenom?: string | null | undefined;
    age?: number | null | undefined;
    adresses?: Adresse[];
}
