
const signupForm = document.getElementById('signup-form');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirm-password');

signupForm.addEventListener('submit', function(event) {
  if (passwordField.value !== confirmPasswordField.value) {
    alert("Passwords don't match!");
    event.preventDefault();
  }
});
