const productsCard = document.querySelector("#cards");

function printProducts(productsArray) {
  productsArray.forEach((item) => {
    productsCard.innerHTML += `
    <div class="card">
    <img src= "${item.image}" class="card-img-top" alt="${item.name}" />
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.price} €</p>
      <div>
        <button><img src="assets/icons/buttonMinus.svg" alt="" /></button>
        <input type="number" />
        <button><img src="assets/icons/buttonAdd.svg" alt="" /></button>
      </div>
      <a href="#"><img src="assets/icons/buttonCart.svg" alt="" /></a>
    </div>
    <a href="#"><img src="assets/icons/buttonCart.svg" alt="" /></a>
  </div>
  `;
  });
}

printProducts(productsArray);
