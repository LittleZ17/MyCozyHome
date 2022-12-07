const url = window.location.href
const splitUrl = url.split("/")
const path = splitUrl[splitUrl.length-1]

if (path === 'index.html'){
  addMenuHamburger();
  printProducts();
}
if (path === 'cart.html'){
  addMenuHamburger();
  renderCartItems();
}

// Function menu hamburger
function addMenuHamburger(){
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

// PRINT PRODUCTS IN index.html

function printProducts() {
  const productsCard = document.querySelector("#cards");
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

//render cart items
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
//   console.log(cart);
}

const priceTotalCart = document.querySelector("#totalMoney");
//  calculate and render subtotal
// function renderSubtotal() {
//   let totalPrice = 0,
//     totalItems = 0;

//   cart.forEach((item) => {
//     totalPrice += item.price * item.numberOfUnits;
//     totalItems += item.numberOfUnits;
//   });
//   priceTotalCart.innerHTML = `${totalPrice.toFixed(2)} €`;
//}
