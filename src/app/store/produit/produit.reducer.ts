import { createReducer, on } from "@ngrx/store";
import { ProduitState } from "./produit.state";
import { ajout, purge, suppression } from "./produit.action";


const initialState: ProduitState = {produits: []};

export const produitReducer = createReducer(
    initialState,
    on(ajout, (state, {produit}) => ({...state, produits: [...state.produits, produit]})), 
    on(suppression, (state, {produit}) => (
        {...state, produits: state.produits.filter(elt => elt.nom != produit.nom)}) 
    ),
    on(purge, (state) => ({...state, produits: []}) )
);

