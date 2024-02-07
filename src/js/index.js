import { fillCategories } from "./partials/categories";
import { setParamsBasedOnScreenSize } from "./partials/pages";
import { showCartAmount } from "./partials/cart";

showCartAmount();

fillCategories().then(() => {
  setParamsBasedOnScreenSize();
});
