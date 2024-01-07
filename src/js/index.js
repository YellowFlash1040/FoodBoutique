import { fillCategories } from "./partials/categories";
import { fillProductsList } from "./partials/products";
import { setParamsBasedOnScreenSize } from "./partials/pages";
import { showCartAmount } from "./partials/cart";

showCartAmount();

await fillCategories();

setParamsBasedOnScreenSize();

await fillProductsList();
