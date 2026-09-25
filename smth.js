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
    const enteredPin = pinInput.value.trim();

    if (enteredPin === pins[currentButton]) {
        const completedStep = currentButton;

        pinMessage.className = "pin-success";
        pinMessage.textContent = "Well done, Dasha. ♥";

        // play music after pin
        if (completedStep === 5) {
            const backgroundMusic =
                document.getElementById("background-music");

            const birthdayMusic =
                document.getElementById("birthday-music");

            if (backgroundMusic) {
                backgroundMusic.pause();
            }

            if (birthdayMusic) {
                birthdayMusic.currentTime = 0;
                birthdayMusic.play().catch(console.error);
            }
        }

        setTimeout(() => {
            closePinModal();

            // unlock the next section, including section6
            unlockNextSection(completedStep);

        }, 1000);

    } else {
        pinMessage.className = "pin-error";
        pinMessage.textContent = "Wrong code... Try again 😭";
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
