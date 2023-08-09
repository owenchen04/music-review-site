let profilePopup = document.getElementById("profile-popup");
let backdrop = document.getElementById("backdrop");

document.querySelector(".js-edit-pic-btn")
  .addEventListener('click', () => {
    openProfilePopup();
  });
document.querySelector(".js-edit-username-btn")
  .addEventListener('click', () => {
    openProfilePopup();
  });
document.querySelector(".js-edit-bio-btn")
  .addEventListener('click', () => {
    openProfilePopup();
  });

function openProfilePopup() {
  profilePopup.classList.add("open-popup");
  backdrop.classList.add("active-backdrop");
}

document.querySelector(".js-exit-btn")
  .addEventListener('click', () => {
    closePopup();
  });

function closePopup() {
  profilePopup.classList.remove("open-popup");
  backdrop.classList.remove("active-backdrop");
}