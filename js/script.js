// ===== TUGAS JAVASCRIPT: TOGGLE DARK MODE =====
// Logika:
// 1. Saat halaman dibuka, cek preferensi mode yang tersimpan di localStorage.
// 2. Terapkan class "dark" ke <html> sesuai preferensi tersebut (default: dark).
// 3. Saat tombol diklik, mode dibalik (dark <-> light) dan disimpan lagi
//    supaya tetap konsisten walau pindah ke halaman lain.

const htmlEl = document.documentElement;
const toggleBtn = document.getElementById("darkModeToggle");
const iconMoon = document.getElementById("iconMoon");
const iconSun = document.getElementById("iconSun");

function applyTheme(theme) {
  if (theme === "light") {
    htmlEl.classList.remove("dark");
    iconMoon.classList.add("hidden");
    iconSun.classList.remove("hidden");
  } else {
    htmlEl.classList.add("dark");
    iconMoon.classList.remove("hidden");
    iconSun.classList.add("hidden");
  }
}

// Ambil preferensi tersimpan, default-nya "dark"
const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

toggleBtn.addEventListener("click", () => {
  const isDark = htmlEl.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});