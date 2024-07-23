const bar = document.body.querySelector("#bars").firstElementChild; // bar image
const drawer = document.body.querySelector("#drawer"); // Drawer
const drawer_list = document.body.querySelectorAll(".drawer_list"); // all drawer a tags
const home_logo = document.body.querySelector("#home_logo"); // home section logo

// handle drawer

const changeimage = (image) => {
  bar.src = image;
};

document.body.querySelector("#bars").addEventListener("click", () => {
  if (bar.src === "http://127.0.0.1:5500/Task%2001/icons/openbars.svg") {
    changeimage("icons/closebar.svg");
    drawer.style.display = "inline";
  } else {
    changeimage("icons/openbars.svg");
    drawer.style.display = "none";
  }
});

home_logo.addEventListener("mouseover", () => {
  home_logo.classList.add("animate__animated", "animate__bounce");
});

home_logo.addEventListener("mouseout", () => {
  home_logo.classList.remove("animate__animated", "animate__bounce");
});

// toggle drawer
drawer_list.forEach((link) => {
  link.addEventListener("click", () => {
    drawer.style.display = "none";
    changeimage("icons/openbars.svg");
  });
});

// Style Active nav

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  let scrollPosition = window.scrollY;

  sections.forEach((sec) => {
    let top = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (scrollPosition >= top && scrollPosition < top + height) {
      // Remove 'active' class from all navigation links
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Add 'active' class to the corresponding navigation link
      if (id !== "features") {
        document
          .querySelector("nav ul li a[href='#" + id + "']")
          .classList.add("active");
      }
    }
  });
};
