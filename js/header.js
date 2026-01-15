let headtext = document.querySelector("header>h2");
console.log(headtext.innerHTML);

let btn = document.querySelectorAll(`#navlinks>a`);
console.log(btn);

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log(btn.innerHTML);
    headtext.innerHTML = btn.innerHTML;
  });
});
