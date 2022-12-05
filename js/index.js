// menu hamburger
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

// PRINT PRODUCTS IN index.html

const productsCard = document.querySelector("#cards");
const productsInsideCart = document.querySelector("#cartCards");

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
            })" ><img src="assets/icons/buttonCart.svg" alt="Add product to cart" /></a>
          </div>
          <div class="row2">
            <div class="quantity">
              <button id="minus"><img src="assets/icons/buttonMinus.svg" alt="Minus one product" /></button>
              <h6 id="counter">0</h6>
              <button id="plus"><img src="assets/icons/buttonAdd.svg" alt="Add one product" /></button>
            </div>
            <p>${item.price.toFixed(2)} €</p>
          </div>
        </div>
      </div>
  `;
  });
}

printProducts(productsArray);

// COUNTER IN HTML
let minus = document.querySelector("#minus");
let counter = document.querySelector("#counter");
let plus = document.querySelector("#plus");
let count = 0;

currentCount();

minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
  }
  currentCount();
});
plus.addEventListener("click", () => {
  if (count < 10) {
    count++;
  }
  currentCount();
});

function currentCount() {
  counter.innerText = count;
}

// cart array
let cart = [];

// ADD TO CART
function addToCart(id) {
  // check if product already exist in cart
  if (cart.some((product) => product.id === id)) {
    Swal.fire({
      title: "Product already in cart!",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  } else {
    const product = productsArray.find((item) => item.id === id);
    cart.push({
      ...product,
      numberOfUnits: count,
    });
  }
  updateCart();
}

// update cart
function updateCart() {
  renderCartItems();
  //renderSubtotal();
}

//render cart items

function renderCartItems() {
  productsInsideCart.innerHTML = ""; //clear cart element
  cart.forEach((item) => {
    productsInsideCart.innerHTML += `
    <div class="itemCall">
      <div class="infoContainer">
        <div class="imgProductCart">
          <img src= "${item.image}" alt="${item.name}" />
        </div>
        <div class="productInfoCart">
          <div class="itemInfoCart">
            <div class="firstLine">
              <h5>${item.name}</h5>
              <button class="remove"><img src="assets/icons/buttonXRemove.svg" alt="Remove product"/></button>
            </div>
            <h4>${item.price.toFixed(2)} €/item</h4>
          </div>
          <div class="quantityContainer">
            <div class="quantity quantityCart">
              <button><img src="assets/icons/buttonMinusCart.svg" alt="Minus one product" /></button>
              <h6>${item.numberOfUnits}</h6>
              <button><img src="assets/icons/buttonAddCart.svg" alt="Add one product" /></button>
            </div>
            <p>20.00 €</p>
          </div>
        </div>
      </div>
    </div>
    `;
  });
}
