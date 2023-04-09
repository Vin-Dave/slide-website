const dropdownToggles = document.querySelectorAll(".has-dropdown > a");

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    const parent = toggle.parentElement;
    const dropdown = parent.querySelector(".dropdown");
    parent.classList.toggle("active");
    dropdown.classList.toggle("active");
  });
});
