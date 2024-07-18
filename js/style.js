const opendrawer = document.body.querySelector("#openbar");
const closedrawer = document.body.querySelector("#closebar");
const drawer = document.body.querySelector("#drawer");
const home_logo = document.body.querySelector("#home_logo");

function toggleDrawer() {
  drawer.classList.toggle("closedrawer");
  drawer.classList.toggle("opendrawer");
}

closedrawer.addEventListener("click", toggleDrawer);
opendrawer.addEventListener("click", toggleDrawer);

home_logo.addEventListener("mouseover", () => {
  home_logo.classList.add("animate__animated", "animate__bounce");
});

home_logo.addEventListener("mouseout", () => {
  home_logo.classList.remove("animate__animated", "animate__bounce");
});
