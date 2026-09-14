

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

// default dark
const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

toggleBtn.addEventListener("click", () => {
  const isDark = htmlEl.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});