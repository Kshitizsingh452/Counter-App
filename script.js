const count = document.querySelector(".counts");
const add = document.querySelector(".Add");
const reset = document.querySelector(".Reset");
const subtract = document.querySelector(".subtract");

add.addEventListener("click", () => {
  count.innerHTML++;
});

subtract.addEventListener("click", () => {
  count.innerHTML--;
});

reset.addEventListener("click", () => {
  count.innerHTML=0;
});
