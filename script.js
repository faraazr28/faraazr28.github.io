const TOGGLE = document.querySelector('button');
const themeSwitch = document.getElementById('themeSwitch');
const root = document.documentElement;
const toggleButton = document.getElementById('toggleButton');
const yesButton = document.getElementById("yesButton");
const yayHidden = document.getElementsByClassName("yayHidden");

// Function to toggle light and dark themes
function toggleTheme() {
	if (themeSwitch.checked) {
		root.style.setProperty('--bg-color', '#FFE3EC'); // Light mode background color
		root.style.setProperty('--text-color', '#e75480');  // Light mode text color
		root.style.setProperty('--button-color', '#e75480');  // Light mode button text color
		root.style.setProperty('--button-text', '#FFE3EC');  // Light mode button text color
		if (themeSwitch.nextElementSibling) {
			themeSwitch.nextElementSibling.textContent = 'Light Mode';
		}
	} else {
		root.style.setProperty('--bg-color', '#e75480');  // Dark mode background color
		root.style.setProperty('--text-color', '#FFE3EC'); // Dark mode text color
		root.style.setProperty('--button-color', '#FFE3EC');  // Light mode button text color
		root.style.setProperty('--button-text', '#e75480');  // Light mode button text color
		if (themeSwitch.nextElementSibling) {
			themeSwitch.nextElementSibling.textContent = 'Dark Mode';
		}
	}
}

themeSwitch.addEventListener('change', toggleTheme);

const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
	themeSwitch.checked = true;
	toggleTheme();
}

//preloader
var loader = document.getElementById("preloader");
		window.addEventListener("load", function() {
			loader.style.display = "none";
			document.body.style.overflow = "auto";
})

//buttons
const UPDATE = ({ target, x, y }) => {
	const bounds = target.getBoundingClientRect();
	target.style.setProperty("--x", x - bounds.left);
	target.style.setProperty("--y", y - bounds.top);
};

const BTNS = document.querySelectorAll("button");
BTNS.forEach(BTN => BTN.addEventListener("pointermove", UPDATE));

function showYippeeCat() {
	var valentineContainer = document.getElementById("valentineContainer");
	var buttons = document.querySelectorAll('.custom-btn');
	valentineContainer.classList.add("answer--yes");
	buttons.forEach(button => button.classList.add('hide-buttons'));
}

//teleport button
toggleButton.addEventListener("mouseover", changeButton);
function changeButton()
{
	yesButton.classList.add("move-left");
	const windowWidth = window.innerWidth - 170;
    const windowHeight = window.innerHeight - 170;
	var i = Math.floor(Math.random() * windowWidth);
    var j = Math.floor(Math.random() * windowHeight);
	toggleButton.style.position = 'absolute';
    toggleButton.style.left = i+"px";
    toggleButton.style.top = j+"px";
}