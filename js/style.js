const opendrawer = document.body.querySelector("#openbar");
const closedrawer = document.body.querySelector("#closebar");
const drawer = document.body.querySelector("#drawer");

closedrawer.addEventListener("click", () => {
  drawer.classList.add("closedrawer");
  drawer.classList.remove("opendrawer");
});
opendrawer.addEventListener("click", () => {
  drawer.classList.add("opendrawer");
  drawer.classList.remove("closedrawer");
});
