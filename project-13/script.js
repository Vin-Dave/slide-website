const form = document.querySelector("form");
const input = form.querySelector("input[type ='text']");

const ul = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.textContent = input.value.trim();
    button.textContent = "Usuń";

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);

    input.value = "";
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    e.target.parentNode.remove();
  }
});
