const displayRating = document.querySelector(".selected-stars");
const rating = localStorage.getItem("rating");

if (rating) {
  displayRating.innerText = `You selected ${rating} out of 5`;
}
