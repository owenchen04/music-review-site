let reviewPopup = document.getElementById("review-popup");

document.querySelector(".js-post-card")
  .addEventListener('click', () => {
    openReviewPopup();
  });

function openReviewPopup() {
  reviewPopup.classList.add("open-review-popup");
  backdrop.classList.add("active-backdrop");
}

document.querySelector(".js-exit-review")
  .addEventListener('click', () => {
    closeReviewPopup();
  });

function closeReviewPopup() {
  reviewPopup.classList.remove("open-review-popup");
  backdrop.classList.remove("active-backdrop");
}