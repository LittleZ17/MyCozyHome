const productsCard = document.querySelector("#cards");

function printProducts(productsArray) {
  productsArray.forEach((item) => {
    productsCard.innerHTML += `
      <div class="item">
          <div class="imgProduct">
            <img src= "${item.image}" class="card-img-top" alt="${item.name}" />
          </div>
        <div class="infoProduct">
          <div>
            <h5>${item.name}</h5>
            <a href="#"><img src="assets/icons/buttonCart.svg" alt="" /></a>
          </div>
          <div>
            <div class="cantidad">
              <button><img src="assets/icons/buttonMinus.svg" alt="" /></button>
              <h6>01</h6>
              <button><img src="assets/icons/buttonAdd.svg" alt="" /></button>
            </div>
            <p>${item.price} €</p>
          </div>
        </div>
      </div>
  `;
  });
}

printProducts(productsArray);

// menu hamburgesa-----------------------------
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("header nav");
const body = document.querySelector("body");
menuBtn.addEventListener("click", (event) => {
  menuBtn.classList.toggle("salir");
  nav.classList.toggle("visible");
  body.classList.toggle("no-scroll");
});
