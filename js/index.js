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
  body.classList.toggle("no-scroll"); //para que no haga scroll el body cuando el menu este desplegado
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    menuBtn.classList.remove("menuBtnVisible");
    nav.classList.remove("navMenuVisible");
  })
);
