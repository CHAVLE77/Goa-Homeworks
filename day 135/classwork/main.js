import { renderProducts } from './product.js';
import { addToCart, renderCart, getTotalPrice } from './cart.js';

const productsContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart');
const totalContainer = document.getElementById('total');

function updateTotal() {
  totalContainer.textContent = `ჯამი: ${getTotalPrice()}₾`;
}

function handleAddToCart(id) {
  addToCart(id);
  renderCart(cartContainer);
  updateTotal();
}

renderProducts(productsContainer, handleAddToCart);
renderCart(cartContainer);
updateTotal();
