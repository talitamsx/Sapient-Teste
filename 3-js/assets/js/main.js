// jQuery
// $(document).ready(function() {
  // code
// });

// Vanilla JS

// window.onload = function() {
  // code
// };

const menuButton = document.getElementById("menu-button");
const menuList = document.querySelector("#menu .list");

menuButton.addEventListener("click", function () {
  if (menuList.style.display === "none") {
    menuList.style.display = "block";
    console.log("Abriu", menuList);
  } else {
    menuList.style.display = "none";
    console.log("Fechou", menuList);

  }
});

const buttonModal = document.querySelector("button-modal")
const modal = document.querySelector(".modal-wiki")
const buttonClose = document.querySelector(".close-modal")

buttonModal.onClick = function() {
  modal.showModal()
}

buttonClose.onClick = function() {
const buttonClose = document.querySelector(".close-modal")
  modal.close()
}
