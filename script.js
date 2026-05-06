let currentIndex = 0;
const slider = document.getElementById("slider");
const totalSlides = document.querySelectorAll(".slide").length;

function goToSlide(index) {
  if (index >= 0 && index < totalSlides) {
    currentIndex = index;
    slider.style.transform = "translateX(-" + (index * 100) + "%)";
  }
}

// Form kontak
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  document.getElementById("hasil").innerHTML = `
    <h3>Pesan Berhasil Dikirim</h3>
    <p><b>Nama:</b> ${nama}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Pesan:</b> ${pesan}</p>
  `;
});
