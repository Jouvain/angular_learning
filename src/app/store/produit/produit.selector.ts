import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProduitState } from "./produit.state";


export const selectProduitState = createFeatureSelector<ProduitState>('ajout');

// export const selectValeurPanier = createSelector(
//     selectProduitState,
//     (state: ProduitState) => state.valeur
// )

export const selectProduits = createSelector(
  selectProduitState,
  (state: ProduitState) => state.produits
);
