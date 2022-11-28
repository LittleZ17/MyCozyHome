const productsCard = document.querySelector("#cards");

function printProducts(productsArray) {
  productsArray.forEach((item) => {
    productsCard.innerHTML += `
    <div class="products">
      <div class="item">
        <div class="imgProduct">
          <img src= "${item.image}" class="card-img-top" alt="${item.name}" />
        </div>
      <div class="infoProduct">
        <h5 class="card-title">${item.name}</h5>
        <a href="#"><img src="assets/icons/buttonCart.svg" alt="" /></a>
        <p class="card-text">${item.price} €</p>
      <div>
        <button><img src="assets/icons/buttonMinus.svg" alt="" /></button>
        <h6>01</h6>
        <button><img src="assets/icons/buttonAdd.svg" alt="" /></button>
      </div>
    </div>
  </div>
  </div>
  `;
  });
}

printProducts(productsArray);
