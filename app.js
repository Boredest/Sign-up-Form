const password = document.getElementById("pwd");
const confirmPassword = document.getElementById("confirm-pwd");

const form = document.getElementById("form");

form.onclick = function () {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords do not match.");
  } else {
    confirmPassword.setCustomValidity("");
  }
};
