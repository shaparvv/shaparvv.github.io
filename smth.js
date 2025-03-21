console.log(    )

const audio = document.getElementById('background-music');
const button = document.getElementById('play-music');

button.addEventListener('click', () => {
  audio.play();
  button.style.opacity = '0';
  setTimeout(() => {
    button.remove(); // Removes the button from the DOM
  }, 2000);
});


window.onscroll = function() { updateProgressBar(); };

function updateProgressBar() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercent = (scrollTop / scrollHeight) * 100;
    document.querySelector(".progress-bar").style.width = scrollPercent + "%";
}