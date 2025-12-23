import type { RootState } from "..";
import type { ShortProductLocal } from "../../types";

export const selectProducts = (state: RootState): ShortProductLocal[] => state.products;
