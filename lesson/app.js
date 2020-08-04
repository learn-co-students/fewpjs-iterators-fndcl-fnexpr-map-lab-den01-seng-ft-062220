const petsUl = document.querySelector(".pets");
const $form = document.querySelector("form");
const $input = document.querySelector("input");
const $h1 = document.querySelector("h1");

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  const petName = $input.value;
  const $li = document.createElement("li");
  $li.textContent = petName;
  petsUl.append($li);
})

$h1.addEventListener("click", () => { alert("Ow!") });