const counter = document.querySelector("#counter");

const reviewsCompleted = localStorage.getItem("reviewsCompleted");

counter.innerHTML = reviewsCompleted;
