const dropDownMenu = document.getElementById("dropdown-menu");
const parentListItem = document.querySelector("nav ul li");

const fadeIn = () => {
  dropDownMenu.classList.remove("fade-out");
  dropDownMenu.classList.add("fade-in");
};

const fadeOut = () => {
  dropDownMenu.classList.remove("fade-in");
  dropDownMenu.classList.add("fade-out");
};

parentListItem.addEventListener("mouseover", fadeIn);
parentListItem.addEventListener("focusin", fadeIn);

parentListItem.addEventListener("mouseout", (event) => {
  if (!dropDownMenu.contains(event.relatedTarget)) {
    fadeOut();
  }
});

parentListItem.addEventListener("focusout", (event) => {
  if (!dropDownMenu.contains(event.relatedTarget)) {
    fadeOut();
  }
});
