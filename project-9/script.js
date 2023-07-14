const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const checkPassword = () => {
  if (
    pass.value.length >= minValue &&
    pass.value.match(letters) &&
    pass.value.match(special)
  ) {
    p.textContent = "Długość hasła spełnia wymogi! 😍";
    p.style.color = "green";
  } else if (pass.value.length >= minValue && pass.value.match(letters)) {
    p.textContent = "Hasło jest ok! 😊";
    p.style.color = "yellow";
  } else {
    p.textContent = "Nie spełnia wymogów 😒";
    p.style.color = "red";
  }
};

const emptyPassowrd = () => {
  if (pass.value !== "") {
    checkPassword();
  } else {
    p.textContent = "Podaj hasło do sprawdzenia 👀✌️";
    p.style.color = "00ffae";
  }
};

pass.addEventListener("keyup", emptyPassowrd);
