const audio = document.getElementById('background-music');
const button = document.getElementById('play-music');

button.addEventListener('click', () => {
    audio.play();

    button.style.opacity = '0';

    setTimeout(() => {
        button.remove();
    }, 2000);
});

window.onscroll = function() { updateProgressBar(); };

function updateProgressBar() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercent = (scrollTop / scrollHeight) * 100;
    document.querySelector(".progress-bar").style.width = scrollPercent + "%";
}


let currentButton = null;

const pins = {
  1: "2024", /*What was the year we became a couple?*/
  2: "1807", /*What was the day and month i made u the first proposal?*/
  3: "1809", /*What was the date we started a new chapter - living together and abroad?*/
  4: "2602", /*Checking if you didn`t forger the date we started our relationship*/
  5: "3009" /*And when are we starting our trip to AMSTERDAM?*/
};


/* pin code window open */

function openPinModal(buttonNumber) {

  currentButton = buttonNumber;

  document.getElementById("pinModal").classList.add("active");

  document.getElementById("pinInput").value = "";

  document.getElementById("pinMessage").textContent = "";

  document.getElementById("pinInput").focus();

}


/* pin code window close */

function closePinModal() {

  document.getElementById("pinModal").classList.remove("active");

}


/* check pin */

function checkPin() {

  const enteredPin = document
    .getElementById("pinInput")
    .value
    .trim();

  const message = document.getElementById("pinMessage");

  if (enteredPin === pins[currentButton]) {

    message.className = "pin-success";

    message.textContent = "Well done, Dasha. Keep going. ♥";

    setTimeout(() => {

      closePinModal();

      unlockNextSection(currentButton);

    }, 1500);

  } else {

    message.className = "pin-error";

    message.textContent =
      "Are you blind? Enter the correct code. 😭";

  }

}


/* next section unlocj */

function unlockNextSection(step) {

  const nextSectionNumber = step + 1;

  const nextSection = document.getElementById(
    "section" + nextSectionNumber
  );

  if (nextSection) {

    nextSection.classList.remove("locked");

    nextSection.classList.add("unlocked");

    setTimeout(() => {

      nextSection.scrollIntoView({
        behavior: "smooth"
      });

    }, 2000);

  }

}


/* enter pin */

document.getElementById("pinInput").addEventListener("keydown", function(event) {

  if (event.key === "Enter") {
    checkPin();
  }

});


/* click outside */

document.getElementById("pinModal").addEventListener("click", function(event) {

  if (event.target === this) {
    closePinModal();
  }

});
