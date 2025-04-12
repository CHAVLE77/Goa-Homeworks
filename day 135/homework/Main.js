import * as Auth from './Auth.js';
import * as Cart from './Cart.js';

window.onload = () => {
  if (!Auth.isAuthenticated()) {
    window.location.href = 'login.html';
    return;
  }

  loadProducts();
  updateCartDisplay();
};

function loadProducts() {
  const products = [
    { id: 1, name: 'Laptop', price: 800 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Headphones', price: 50 }
  ];

  localStorage.setItem('products', JSON.stringify(products));

  const productContainer = document.getElementById('product-list');
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `
      <div>
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    productContainer.appendChild(productDiv);
  });
}

function addToCart(productId) {
  Cart.addToCart(productId, 1);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartTotal = Cart.calculateCartTotal();
  document.getElementById('cart-total').textContent = `Cart Total: $${cartTotal}`;
}
