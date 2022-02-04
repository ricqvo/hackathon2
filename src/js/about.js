const aboutText = document.querySelector(".about_text");
const about_addedText = document.createElement("p");
about_addedText.style.fontSize = "20px";

about_addedText.innerText = "Who are we and what do we do?";
const about_aboutus = document.querySelector(".about_aboutus");
const about_divText = document.querySelector(".about_div-text");

aboutText.addEventListener("mouseenter", (e) => {
  aboutText.style.fontSize = "20px";
  about_aboutus.appendChild(about_addedText);
  about_divText.style.fontWeight = "bold";
  about_aboutus.style.color = "#FFA384";
});

aboutText.addEventListener("mouseleave", (e) => {
  aboutText.style.fontSize = "15px";
  about_aboutus.removeChild(about_addedText);
  about_divText.style.fontWeight = "100";
  about_aboutus.style.color = "#74BDCB";
});
