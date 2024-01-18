document.getElementById('myButton').addEventListener('click', function() {
    window.location.href = 'contact.html#targetSection';
});
     document.getElementById('close-button').addEventListener('click', function() {
  var container = document.getElementById('cartContainer');
  container.style.display = 'none';
});
    document.getElementById('btn').addEventListener('click', function() {
  var container = document.getElementById('cartContainer');
  container.style.display = 'block';
});

  function addToCart(productName, price, quantityInputId) {
            var quantityElement = document.getElementById(quantityInputId);
            var quantity = quantityElement.value;
            var totalCost = (price * quantity).toFixed(2);
            
            var messageContainer = document.querySelector('.message');

            var message = `Added ${quantity} ${productName}(s) to cart. Total cost: &#x20B1; ${totalCost}`;
            messageContainer.innerHTML += `<p>${message}</p>`;

            quantityElement.value = 1;
        }



        