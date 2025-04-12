import { getProductById } from './product.js';

export const cart = [];

export function addToCart(productId) {
  const product = getProductById(productId);
  if (product) {
    cart.push(product);
  }
}

export function removeFromCart(productId) {
  const index = cart.findIndex(p => p.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
  }
}

export function getTotalPrice() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

export function renderCart(container) {
  container.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
      <span>${item.name} - ${item.price}₾</span>
      <button data-id="${item.id}">წაშლა</button>
    `;
    div.querySelector('button').addEventListener('click', () => {
      removeFromCart(item.id);
      renderCart(container);
      updateTotal();
    });
    container.appendChild(div);
  });
}
