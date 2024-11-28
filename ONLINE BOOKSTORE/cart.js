const products = [
    { id: 1, name: 'Product 1', price: 87.50 },
    { id: 2, name: 'Product 2', price: 36.90 },
    { id: 3, name: 'Product 3', price: 48.97 }
  ];
  
  
  let cart = [];
  
  
  function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    
    cartItemsContainer.innerHTML = '';
    
    
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <span>${item.name} - ${item.price.toFixed(2)}</span>
        <button onclick="removeFromCart(${item.id})">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItem);
    });
    
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = total.toFixed(2);
  }
  
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      updateCart();
    }
  }
  
  
  function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
  }
  

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
      const productId = parseInt(event.target.closest('.product').getAttribute('data-id'));
      addToCart(productId);
    });
  });
  

  document.getElementById('clear-cart').addEventListener('click', () => {
    cart = [];
    updateCart();
  });
  

  updateCart();