export const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 150 }
  ];
  
  export function getProductById(id) {
    return products.find(p => p.id === id);
  }
  
  export function renderProducts(container, onAddToCart) {
    container.innerHTML = '';
    products.forEach(product => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.price}₾</p>
        <button data-id="${product.id}">დამატება კალათაში</button>
      `;
      div.querySelector('button').addEventListener('click', () => onAddToCart(product.id));
      container.appendChild(div);
    });
  }
  