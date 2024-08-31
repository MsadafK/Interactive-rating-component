const ratingButton = document.querySelectorAll(".rating-btn");
const submitButton = document.querySelector(".submit-btn");

let rating = "";

submitButton.disabled = true;
submitButton.classList.add("disabled");

ratingButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      return;
    }
    ratingButton.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    rating = btn.innerText;

    if (rating) {
      submitButton.disabled = false;
      submitButton.classList.remove("disabled");
    }
  });
});

submitButton.addEventListener("click", () => {
  localStorage.setItem("rating", rating);
});
