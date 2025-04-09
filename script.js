
// best code ever
const USERNAME = "k";
const PASSWORD = "supersecure";

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === USERNAME && pass === PASSWORD) {
    localStorage.setItem("loggedIn", "true");
    showContent();
  } else {
    document.getElementById("login-message").textContent = "no";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  showLogin();
}
function showContent() {
  document.getElementById("login-container").classList.add("hidden");
  document.getElementById("content").classList.remove("hidden");
  document.getElementById("poop").classList.add("hidden");
}

function showLogin() {
  document.getElementById("login-container").classList.remove("hidden");
  document.getElementById("content").classList.add("hidden");
  document.getElementById("poop").classList.remove("hidden");
}

window.onload = function () {
  if (localStorage.getItem("loggedIn") === "true") {
    showContent();
  } else {
    showLogin();
  }
};


document.addEventListener("DOMContentLoaded", function() {
  // triggering the animation on page load
  var iconElement = document.querySelector('.icon');
  if (iconElement) {
    iconElement.style.animation = 'flip-card 3s ease-in-out infinite';
    iconElement.style.animationPlayState = 'running';
  }
});

