const contact1 = document.querySelector(".contact1");
const contact2 = document.querySelector(".contact2");

contact1.addEventListener("mouseenter", (e) => {
  contact1.style.backgroundColor = "#74BDCB";
});

contact1.addEventListener("mouseleave", (e) => {
  contact1.style.backgroundColor = "#FFA384";
});

contact2.addEventListener("mouseenter", (e) => {
  contact2.style.backgroundColor = "#74BDCB";
});

contact2.addEventListener("mouseleave", (e) => {
  contact2.style.backgroundColor = "#FFA384";
});
