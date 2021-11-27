import { createSelector } from "reselect";

const selectProds = (state) => state.prods;

export const selectProducts = createSelector(
  [selectProds],
  (prods) => prods.products
);