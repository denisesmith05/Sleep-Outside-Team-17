import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  const savedCart = getLocalStorage("so-cart");

  const cartItems = Array.isArray(savedCart)
    ?
      savedCart
    : savedCart
      ? [savedCart]
      : [];
  // if savedCart is an array, use it as is, otherwise, if savedCart is not an array but exists, wrap it in an array, else use an empty array.
  
  cartItems.push(product);

  setLocalStorage("so-cart", cartItems);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
