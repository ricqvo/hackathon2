// import "./about";
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

const url = "https://test-api.codingbootcamp.cz/api/55d443a6/events";
fetch(url)
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                let apiData = [];
                apiData = data;
                console.log(data);

                class smallEvent {
                        constructor(name) {
                                this.name = name;
                        }
                }
                class mainEvent {
                        constructor(name, date, description, image) {
                                this.name = name;
                                this.date = date;
                                this.description = description;
                                this.image = image;
                        }
                }
                const genBigEventInfo = function (index) {
                        let bigEvent = new mainEvent(
                                apiData[index].name,
                                apiData[index].date,
                                apiData[index].description,
                                apiData[index].image_url
                        );
                        return bigEvent;
                };
                const genSmallEventInfo = function (index) {
                        let smallerEvent = new smallEvent(apiData[index].name);
                        return smallerEvent;
                };

                // let eventsArray = [];
                // for (let i = 1; i < 6; i++) {
                //         eventsArray[i] = new smallEvent(apiData[i].name);
                // }
                const bigEventDiv = document.querySelector(".eventMain");
                const events = document.querySelector(".events");

                const genBigEvent = function (index) {
                        let newBigEvent = genBigEventInfo(index);
                        bigEventDiv.innerHTML = `
                        <img
                                                class="eventMain__img"
                                                src="${newBigEvent.image}"
                                                alt=""
                                        />
                                        <div class="eventMain__text">
                                                <h2 class="eventMain__heading">
                                                        ${newBigEvent.name}
                                                </h2>
                                                <h3 class="eventMain__date">${newBigEvent.date}</h3>
                                                <p class="eventMain__p">
                                                        ${newBigEvent.description}
                                                </p>
                                                <button class="show-modal">Register</button>
    <div class="modal hidden">
      <form action="" method="post">
        <button class="close-modal">&times;</button>
        <h1 class="forms__header">${newBigEvent.name}</h1>
        <label class="label" for="event">Choose Event</label>
        <select class="input" name="event" id="event">
          <option value="Prague Carnival">
            Prague Carnival (Masopust) - Festival & Parade
          </option>
          <option value="Ice Rink">Ice Rink by Charles Bridge</option>
          <option value="St. Mathew's Fair">St. Mathew's Fair</option>
          <option value="World Cup">Football World Cup 2022</option>
          <option value="Floorball Tournament">
            Prague Games - Floorball Tournament
          </option>
          <option value="Prague Marathon">Prague Marathon</option>
        </select>
        <label class="label" for="name">First Name</label>
        <input class="input" type="text" name="name" id="name" />

        <label class="label" for="name">Surname</label>
        <input class="input" type="text" name="name" id="name" />

        <label class="label" for="email">Email</label>
        <input class="input" type="email" name="email" id="email" />

        <label class="label" for="birthday">Date of Birth</label>
        <input class="input" type="date" id="birthday" name="birthday" />

        <label class="label" for="feedback"
          >What are you most excited for?</label
        >
        <textarea name="feedback" id="feedback"></textarea>
        <input class="btn" type="submit" value="Submit" />
      </form>
    </div>
    <div class="overlay hidden"></div>`;
                        // const modalFce = function () {
                        const modal = document.querySelector(".modal");
                        const overlay = document.querySelector(".overlay");
                        const btnCloseModal = document.querySelector(".close-modal");
                        const btnsOpenModal = document.querySelectorAll(".show-modal");

                        const openModal = function () {
                                modal.classList.remove("hidden");
                                overlay.classList.remove("hidden");
                        };

                        const closeModal = function () {
                                modal.classList.add("hidden");
                                overlay.classList.add("hidden");
                        };

                        for (let i = 0; i < btnsOpenModal.length; i++)
                                btnsOpenModal[i].addEventListener("click", openModal);

                        btnCloseModal.addEventListener("click", function (e) {
                                e.preventDefault();
                                console.log(btnCloseModal);
                                closeModal();
                        });

                        overlay.addEventListener("click", closeModal);

                        document.addEventListener("keydown", function (e) {
                                if (e.key === "Escape" && !modal.classList.contains("hidden")) {
                                        closeModal();
                                }
                        });
                };
                genBigEvent(0);
                // let indexTemp = 0;
                const genSmallEvent = function (index, className, indexBtn) {
                        const smallEventsDiv = document.querySelector("." + className);
                        let newSmallEvent = genSmallEventInfo(index);
                        smallEventsDiv.innerHTML = `<h2 class="smallEvent__heading">${newSmallEvent.name}</h2>
                                                <button class="smallEvent__btn buttonSmall${indexBtn}">MORE</button>`;
                        // forloop();
                };
                const genSmallEvent2 = function (index, className, indexBtn) {
                        const smallEventsDiv = document.querySelector("." + className);
                        let newSmallEvent = genSmallEventInfo(index);
                        smallEventsDiv.innerHTML = `<h2 class="smallEvent__heading">${newSmallEvent.name}</h2>
                                                <button class="smallEvent__btn buttonSmall${indexBtn}">MORE</button>`;
                        forloop();
                };
                let smallName;
                // let smallName2;
                for (let i = 1; i < 6; i++) {
                        smallName = "small" + i;
                        genSmallEvent(i, smallName, i);
                }
                let idArray = [0, 1, 2, 3, 4, 5];
                const forloop = function () {
                        let smallButtons = document.querySelectorAll(".smallEvent__btn");
                        for (let i = 1; i < 6; i++) {
                                smallButtons[i - 1].addEventListener("click", function () {
                                        console.log("654561456146");
                                        let switchID1 = idArray[0];
                                        let switchID2 = idArray[i];
                                        idArray[0] = switchID2;
                                        idArray[i] = switchID1;
                                        let className2 = "small" + i;
                                        genBigEvent(idArray[0]);
                                        genSmallEvent2(idArray[i], className2, i);
                                        console.log(idArray);
                                        console.log(smallButtons);
                                });
                        }
                };
                forloop();
                // MODAL JAVASCRIPT FUNCTIONS
        });
