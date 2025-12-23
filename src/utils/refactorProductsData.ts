import type { ShortProductBase, ShortProductLocal } from "../types";

export const refactorProductsData = (
  products: ShortProductBase[]
): ShortProductLocal[] => {
  return products.map((el) => ({ ...el, like: false }));
};
