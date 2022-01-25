const form = document.getElementById("form");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm")
const error = document.getElementById("error")

form.addEventListener("submit", (e) => {
  
  if (password.value !== passwordConfirm.value) {
    e.preventDefault();
    error.innerText = "Password does not match";
    password.style.borderColor = "red";
    passwordConfirm.style.borderColor = "red";
  }
})