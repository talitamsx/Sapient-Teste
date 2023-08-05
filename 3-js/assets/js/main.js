//ABRIR MENU
function menuToggle() {
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");
  menuButton.addEventListener("click", function () {
    menu.classList.toggle("-active");
  });
}
document.addEventListener("DOMContentLoaded", menuToggle);

//EXECUTAR VIDEO
function playVideo() {
  const videoPlayer = document.getElementById("video-player");
  const videoCover = document.getElementById("video-cover");

  videoCover.addEventListener("click", function () {
    videoCover.style.display = "none";
    videoPlayer.style.display = "block";
    videoPlayer.play();
  });
}
document.addEventListener("DOMContentLoaded", playVideo);

//ABRIR SANFONA
function accordionSetup() {
  const items = document.querySelectorAll(".accordion .item");

  items.forEach(function (item) {
    const title = item.querySelector(".title");
    const description = item.querySelector(".description");

    title.addEventListener("click", function () {
      item.classList.toggle("-active");

      if (item.classList.contains("-active")) {
        description.style.maxHeight = description.scrollHeight + "px";
      } else {
        description.style.maxHeight = "0";
      }
    });
  });
}
document.addEventListener("DOMContentLoaded", accordionSetup);

//ACESSO API
document.addEventListener("DOMContentLoaded", function () {
  const extractWiki = document.querySelector(".extract");

  fetch("https://catfact.ninja/fact")
  .then((response) => response.json())
  .then((data) => {
    const catFact = data.fact;
    extractWiki.innerHTML = catFact;
  })
  .catch((error) => {
    console.log("Error fetching data", error);
  });
});

  //ABRIR/FECHAR MODAL
  const buttonModal = document.getElementById("button-modal");
  const modalWiki = document.getElementById("modal-wiki");
  const closeModal = document.getElementById("close-modal");

  function openModal() {
    if (typeof modalWiki.showModal === "function") {
      modalWiki.showModal();
    } else {
      modalWiki.classList.add("modal-wiki-active");
    }
  }
  function closeModalFunc() {
    if (typeof modalWiki.close === "function") {
      modalWiki.close();
    } else {
      modalWiki.classList.remove("modal-wiki-active");
    }
  }
  buttonModal.addEventListener("click", openModal);
  closeModal.addEventListener("click", closeModalFunc);