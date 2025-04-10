/* Grab elements */
const themeSwitch = document.getElementById('themeSwitch');
const root = document.documentElement;
const toggleButton = document.getElementById('toggleButton');
const yesButton = document.getElementById("yesButton");
var userAgent = navigator.userAgent || navigator.vendor || window.opera;

/* Counters / messages for "No" clicks */
let counter = 0;
const messages = [
  "You're gonna have to click yes eventually",
  "Stop playing hard to get, I know you want me ",
  "PLS PLS PLS PLS Click yes 🙏",
];

/* Toggle Themes */
function toggleTheme() {
  if (themeSwitch.checked) {
    // Light Mode
    root.style.setProperty('--bg-color', '#FFE3EC');   // Light background
    root.style.setProperty('--text-color', '#e75480'); // Light text
    root.style.setProperty('--button-color', '#e75480');
    root.style.setProperty('--button-text', '#FFE3EC');
  } else {
    // Dark Mode
    root.style.setProperty('--bg-color', '#e75480');   // Dark background
    root.style.setProperty('--text-color', '#FFE3EC'); // Dark text
    root.style.setProperty('--button-color', '#FFE3EC');
    root.style.setProperty('--button-text', '#e75480');
  }
}
themeSwitch.addEventListener('change', toggleTheme);

/* Optionally load saved theme from localStorage */
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  themeSwitch.checked = false; // if you prefer "false" for dark
  toggleTheme();
}

/* Preloader */
var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
  loader.style.display = "none";
  document.body.style.overflow = "auto";
});

/* Animations for the button (hover effect) */
const UPDATE = ({ target, x, y }) => {
  const bounds = target.getBoundingClientRect();
  target.style.setProperty("--x", x - bounds.left);
  target.style.setProperty("--y", y - bounds.top);
};
const BTNS = document.querySelectorAll("button");
BTNS.forEach(BTN => BTN.addEventListener("pointermove", UPDATE));

/* "Yes" button click => show special container & play music */
function showYippeeCat() {
  // Hide the main container
  document.querySelector('.container-class').style.display = 'none';
  // Hide the navbar if desired
  document.querySelector('nav').style.display = 'none';

  // Show the "Yes" image container
  document.getElementById('yesImageContainer').style.display = 'block';

  // Play background music
  var audio = document.getElementById('backgroundMusic');
  audio.play();
}

/* "No" button runs away */
if (/android/i.test(userAgent) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)) {
  // On mobile, run away when clicked
  toggleButton.addEventListener("click", changeButton);
} else {
  // On desktop, run away on mouseover
  toggleButton.addEventListener("mouseover", changeButton);
}

function changeButton() {
  yesButton.classList.add("move-left");
  // Keep the button fully visible by subtracting the button’s dimensions
  const windowWidth = window.innerWidth - toggleButton.offsetWidth;
  const windowHeight = window.innerHeight - toggleButton.offsetHeight;
  
  const i = Math.floor(Math.random() * windowWidth);
  const j = Math.floor(Math.random() * windowHeight);

  toggleButton.style.position = 'absolute';
  toggleButton.style.left = i + "px";
  toggleButton.style.top = j + "px";

  counter++;
  if (counter === 3) {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
    counter = 0;
  }
}
