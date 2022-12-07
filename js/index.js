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
const priceTotalCart = document.querySelector("#totalMoney");

function printProducts() {
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
          })"><img src="assets/icons/buttonCart.svg" alt="Add product to cart"></a>
        </div>
        <div class="row2">
          <div class="quantity">
            <button id="minus" onclick="lessItem(${
              item.id
            })"><img src="assets/icons/buttonMinus.svg" alt="Minus one product"></button>
            <input type="text" value="0" id="item-${item.id}">
            <button id="plus" onclick="addItem(${
              item.id
            })"><img src="assets/icons/buttonAdd.svg" alt="Add one product"></button>
          </div>
          <p>${item.price.toFixed(2)} €</p>
        </div>
      </div>
    </div>
`;
  });
}
printProducts();

// COUNTER IN HTML
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let count = 0;

function addItem(id) {
  let valueInput = document.getElementById(`item-${id}`);
  let count = parseInt(valueInput.value); // valor entero
  if (count < 10) {
    count++;
  }
  valueInput.value = count;
}

function lessItem(id) {
  let valueInput = document.getElementById(`item-${id}`);
  let count = parseInt(valueInput.value);
  if (count > 0) {
    count--;
  }
  valueInput.value = count;
}
let cart = [];

// download info
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("newCart")) {
    cart = JSON.parse(localStorage.getItem("newCart"));
    renderCartItems();
  }
});
// cart array
// Obtener el arreglo de localStorage
// let cart = JSON.parse(localStorage.getItem("newCart")) || [];

// ADD TO CART
function addToCart(id) {
  let valueCount = document.getElementById(`item-${id}`).value;
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
      numberOfUnits: parseInt(valueCount),
    });
  }
  updateCart();
}

//necesitamos mostrar el carrito ya renderizado por medio de la session store
//render cart items
function renderCartItems(cart) {
  //clear cart element
  // productsInsideCart.innerHTML = "";
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
  console.log(cart);
}
renderCartItems(cart);

// update cart
function updateCart() {
  // Se guarda en localStorage despues de JSON stringificarlo
  localStorage.setItem("newCart", JSON.stringify(cart));
  renderCartItems(cart);
  renderSubtotal();
}
//  calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  priceTotalCart.innerHTML = `${totalPrice.toFixed(2)} €`;
}
