// Validasi form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Semua field wajib diisi!");
      return;
    }

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      alert("Format email tidak valid!");
      return;
    }

    alert("Pesan berhasil dikirim!");
    form.reset();
  });

  // Toggle Dark Mode
  const toggleButton = document.getElementById("toggleDark");
  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });
});
