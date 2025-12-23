import type { RootState } from "..";
import type { ShortProductLocal } from "../../types";

export const selectProducts = (state: RootState): ShortProductLocal[] =>
  state.products;

export const selectFilterProducts = (state: RootState, filter: string) => {
  if (filter === "liked") {
    return state.products.filter((product) => product.like);
  }

  return state.products;
};
