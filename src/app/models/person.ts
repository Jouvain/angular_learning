import { Commentaire } from "./commentaire"

export interface Person {
    nom?: string | null | undefined
    prenom?: string | null | undefined
    commentaires: Commentaire[]
}
