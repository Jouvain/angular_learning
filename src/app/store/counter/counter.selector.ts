import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";


export const selectCounterState = createFeatureSelector<CounterState>('counter')

export const selectValeur = createSelector(
    selectCounterState,
    (state: CounterState) => state.valeur
)

export const selectSigne = createSelector(
    selectCounterState,
    (state: CounterState) => state.signe
)