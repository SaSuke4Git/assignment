const profileIcon = document.querySelector(".profile-icon");
profileIcon.addEventListener("click", () => {
  window.locaton.href = "profile.html";
});

function openLoginForm() {
  document.getElementById("loginForm").style.display = "flex";
}

function closeLoginForm() {
  document.getElementById("loginForm").style.display = "none";
}
function handleLogin(event) {
  console.log(localStorage);
  event.preventDefault();

  localStorage.setItem("loggedIn", "0");

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var users = JSON.parse(localStorage.getItem("users")) || [];

  var existingUser = users.find(
    (i) => i.username === username && i.password === password
  );

  if (existingUser) {
    localStorage.setItem("loggedIn", "1");

    localStorage.setItem("username", username);

    var signInText = document.getElementById("signInText");
    signInText.innerText = username;

    document.getElementById("logOutBtn").style.display = "block";

    closeLoginForm();
  } else {
    alert("Invalid username or password try sign up");
    window.location.href = "front.html";
  }
}

function logOut() {
  localStorage.removeItem("username");
  localStorage.setItem("loggedIn", "0");

  document.getElementById("signInText").innerText = "SIGN IN";
  document.getElementById("logOutBtn").style.display = "none";
}

window.onload = function () {
  var storedUsername = localStorage.getItem("username");
  if (storedUsername) {
    document.getElementById("signInText").innerText = storedUsername;
    document.getElementById("logOutBtn").style.display = "block";
  } else {
    document.getElementById("logOutBtn").style.display = "none";
  }
};
