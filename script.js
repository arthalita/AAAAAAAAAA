let currentIndex = 0;
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");

function goToSlide(index) {
  if (index >= 0 && index < slides.length) {
    
    // Hapus active lama
    slides[currentIndex].classList.remove("active");

    currentIndex = index;

    // Geser slider
    slider.style.transform = "translateX(-" + (index * 100) + "%)";

    // Tambah active baru (delay biar animasi enak)
    setTimeout(() => {
      slides[currentIndex].classList.add("active");
    }, 200);
  }
}

// Aktifkan slide pertama saat load
window.onload = () => {
  slides[0].classList.add("active");
};
