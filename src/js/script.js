const buttonHome = document.querySelector(".button1");
const buttonAbout = document.querySelector(".button2");
const buttonContact = document.querySelector(".button3");
const buttonRandom = document.querySelector(".button4");

buttonHome.addEventListener("click", function () {
        location.href = "./index.html";
});
buttonAbout.addEventListener("click", function () {
        location.href = "./about.html";
});
buttonContact.addEventListener("click", function () {
        location.href = "./contact.html";
});
buttonRandom.addEventListener("click", function () {
        location.href = "./random.html";
});
