// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Change icon 🌙 <-> ☀️
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});

// Contact form handler
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill all fields.";
    status.style.color = "red";
  } else {
    status.textContent = "Message sent successfully!";
    status.style.color = "green";
    form.reset();
  }
});