const url = window.location.href;
const splitUrl = url.split("/");
const path = splitUrl[splitUrl.length - 1];

if (path === "index.html") {
  addMenuHamburger();
  printProducts();
}
if (path === "cart.html") {
  addMenuHamburger();
  renderCartItems();
  renderSubtotal();
  renderTotal();
  // removeItem();
}

// let cart = JSON.parse(localStorage.getItem("newCart")) || [];


// HAMBURGER MENU
function addMenuHamburger() {
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
}

// PRINT PRODUCTS IN INDEX
function printProducts() {
  const productsCard = document.querySelector("#cards");
  productsArray.forEach((item) => {
    productsCard.innerHTML += `
    <div class="item">
        <div class="imgProduct">
          <img src= "${item.image}" alt="${item.name}" />
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
            <input type="text" value="1" id="item-${item.id}">
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

// ADD TO CART
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("newCart")) || [];
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
  localStorage.setItem("newCart", JSON.stringify(cart));
}

//PRINT PRODUCTS IN CART
function renderCartItems() {
  let cart = JSON.parse(localStorage.getItem("newCart")) || [];
  const productsInsideCart = document.querySelector("#cartCards");
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
              <button id="remove" onclick="removeItem(${item.id})"><img src="assets/icons/buttonXRemove.svg" alt="Remove product"/></button>
            </div>
            <h4>${item.price.toFixed(2)} €/item</h4>
          </div>
          <div class="quantityContainer">
            <div class="quantity quantityCart">
              <button><img src="assets/icons/buttonMinusCart.svg" alt="Minus one product" /></button>
              <h6>${item.numberOfUnits}</h6>
              <button><img src="assets/icons/buttonAddCart.svg" alt="Add one product" /></button>
            </div>
            <p id="subtotalPrice-${item.id}"></p>
          </div>
        </div>
      </div>
    </div>
    `;
  });
}

//CALCULATE SUBTOTAL
function renderSubtotal() {
  let cart = JSON.parse(localStorage.getItem("newCart")) || [];
  console.log(cart);
  let newCart = cart.map((item) => {
    let subtotalPrice = 0;
    subtotalPrice = item.price * item.numberOfUnits;
    let subTotalItem = document.getElementById(`subtotalPrice-${item.id}`);
    subTotalItem.innerHTML = `${subtotalPrice.toFixed(2)} €`;
  });
}
// CALCULATE TOTAL
function renderTotal() {
  let cart = JSON.parse(localStorage.getItem("newCart")) || [];
  let totalPrice = 0,
    totalItems = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  const priceTotalCart = document.querySelector("#totalPriceId");
  priceTotalCart.innerHTML = `${totalPrice.toFixed(2)}`;
}

// REMOVE ITEMS

function removeItem(id){
  let cart = JSON.parse(localStorage.getItem("newCart")) || [];
  let res = cart.filter((item) => item.id !== id)
  localStorage.clear();
  localStorage.setItem("newCart", JSON.stringify(res));
  const productsInsideCart = document.querySelector("#cartCards");
  productsInsideCart.innerHTML = "";
  renderCartItems();
  };