// const productsCard = document.querySelector("#cartCards");

// function printProducts(productsArray) {
//   productsArray.forEach((item) => {
//     productsCard.innerHTML += `
//       <div class="itemCall">
//         <div class="infoContainer">
//           <div class="imgProduct">
//             <img src= "${item.image}" alt="${item.name}" />
//           </div>

//           <div class="productInfo">
//             <div class="itemInfo">
//               <div class="firstLine">
//               <h5>${item.name}</h5>
//               <div class="remove">
//               <button><img src="assets/icons/buttonXRemove.svg" alt="Remove product" /></button>
//               </div>
//             </div> 
//               <h4>${item.price.toFixed(2)} €/item</h4>
//             </div>
//             <div class="quantityContainer">
//               <div class="cantidad">
//                 <button><img src="assets/icons/buttonMinusCart.svg" alt="Minus one product" /></button>
//                 <h6>01</h6>
//                 <button><img src="assets/icons/buttonAddCart.svg" alt="Add one product" /></button>
//               </div>
//               <p>${item.price.toFixed(2)} €</p>
//             </div>
//           </div>
//         </div>
//       </div>
//   `;
//   });
// }
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