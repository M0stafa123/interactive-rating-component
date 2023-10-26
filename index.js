let span = document.querySelectorAll(".nums span");
let btn = document.querySelector("button");
span.forEach((e) => {
  e.addEventListener("click", function () {
    span.forEach((e) => e.classList.remove("active"));
    this.classList.add("active");
  });
});
btn.addEventListener("click", () => {
  let before = document.querySelector(".before");
  let submitted = document.querySelector(".submitted");
  let rate = document.querySelector(".rate");
  rate.innerHTML = Array.from(span).filter((e) =>
    e.classList.contains("active")
  )[0].innerHTML;
  before.style.display = "none";
  submitted.style.display = "block";
});
