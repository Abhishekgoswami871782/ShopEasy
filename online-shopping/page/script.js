let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  displayCart();
}

function displayCart() {
  let cartList = document.getElementById('cart-items');
  let totalSpan = document.getElementById('total');
  cartList.innerHTML = '';
  cart.forEach(item => {
    let li = document.createElement('li');
    li.textContent = `${item.product} - ₹${item.price}`;
    cartList.appendChild(li);
  });
  totalSpan.textContent = total;
}
