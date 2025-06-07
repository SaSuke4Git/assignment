function handleSignUp(event) {
  console.log(localStorage);
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("newPassword").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  var users = JSON.parse(localStorage.getItem("users")) || [];

  var existingUser = users.find((u) => u.username === name);
  if (existingUser) {
    alert("User already exists. Please login.");
    return;
  }

  var newUser = {
    username: name,
    password: password,
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Sign-up successful! You can now log in.");
  window.location.href = "index.html";
}
