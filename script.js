// Get all elements
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const switchToRegister = document.getElementById("switch-to-register");
const switchToLogin = document.getElementById("switch-to-login");
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");

// Switch to register form
switchToRegister.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  document.getElementById("form-title").textContent = "Register";
});

// Switch to login form
switchToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.style.display = "none";
  loginForm.style.display = "block";
  document.getElementById("form-title").textContent = "Please Login";
});

// Handle login submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Retrieve stored user credentials
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  // Validate credentials
  if (email === storedEmail && password === storedPassword) {
    alert("Login successful!");
    window.location.href = "https://imtahirnaseer.github.io/Portfolio/"; // Redirect to chatbot
  } else {
    alert("Invalid credentials. Please check your email and password.");
  }
});

// Handle registration submission
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newEmail = document.getElementById("new-email").value;
  const newPassword = document.getElementById("new-password").value;

  // Basic validation
  if (newEmail && newPassword) {
    // Store user credentials in LocalStorage
    localStorage.setItem("email", newEmail);
    localStorage.setItem("password", newPassword);

    alert("Registration successful! You can now login with your new credentials.");
    registerForm.style.display = "none";
    loginForm.style.display = "block";
    document.getElementById("form-title").textContent = "Please Login";
  } else {
    alert("Please fill in both fields.");
  }
});

// Add wave animation to labels
const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join("");
});
