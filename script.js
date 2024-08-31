const ratingButton = document.querySelectorAll(".rating-btn");
const submitButton = document.querySelector(".submit-btn");

let rating = "";

submitButton.disabled = true;
submitButton.classList.add("disabled");

ratingButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      rating = "";
      submitButton.disabled = true;
      submitButton.classList.add("disabled");
      return;
    }
    ratingButton.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    rating = btn.innerText;
    submitButton.disabled = false;
    submitButton.classList.remove("disabled");
  });
});

submitButton.addEventListener("click", (event) => {
  if (rating === "") {
    event.preventDefault(); // Prevent navigation
    alert("Please select a rating before submitting.");
  } else {
    localStorage.setItem("rating", rating); // Store the rating
  }
});
