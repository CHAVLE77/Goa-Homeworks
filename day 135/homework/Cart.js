export function addToCart(productId, quantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.productId === productId);
  
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.push({ productId, quantity });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  export function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }
  
  export function calculateCartTotal() {
    const cart = getCart();
    const productList = JSON.parse(localStorage.getItem('products')) || [];
    return cart.reduce((total, cartItem) => {
      const product = productList.find(product => product.id === cartItem.productId);
      return total + (product.price * cartItem.quantity);
    }, 0);
  }
  
  export function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.productId !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  