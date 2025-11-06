import { createAction, props } from "@ngrx/store";
import { Produit } from "../../models/produit";


export const ajout = createAction("[Produit] Ajout", props<{ produit: Produit }>());

export const suppression = createAction("[Produit] Suppression", props<{produit: Produit}>());

export const purge = createAction("[Produit] Purge")