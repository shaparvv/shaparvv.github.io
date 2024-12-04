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
