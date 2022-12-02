const productsCard = document.querySelector("#cards");

function printProducts(productsArray) {
  productsArray.forEach((item) => {
    productsCard.innerHTML += `
      <div class="item">
          <div class="imgProduct">
            <img src= "${item.image}" class="card-img-top" alt="${item.name}" />
          </div>
        <div class="infoProduct">
          <div class="row1">
            <h5>${item.name}</h5>
            <a onclick="addToCart(${
              item.id
            })" href="#"><img src="assets/icons/buttonCart.svg" alt="Add product to cart" /></a>
          </div>
          <div class="row2">
            <div class="cantidad">
              <button><img src="assets/icons/buttonMinus.svg" alt="More product" /></button>
              <h6>01</h6>
              <button><img src="assets/icons/buttonAdd.svg" alt="Less product" /></button>
            </div>
            <p>${item.price.toFixed(2)} €</p>
          </div>
        </div>
      </div>
  `;
  });
}

printProducts(productsArray);

// menu hamburger----------------------------
const menuBtn = document.querySelector(".menuBtn");
const nav = document.querySelector(".navMenu");
const body = document.querySelector("body");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menuBtnVisible");
  nav.classList.toggle("navMenuVisible");
  body.classList.toggle("no-scroll");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    menuBtn.classList.remove("menuBtnVisible");
    nav.classList.remove("navMenuVisible");
  })
);
