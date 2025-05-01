function toggleDarkMode() {
    // This function should toggle the dark mode class on the body
    // comment out the alert below and replace it with your code
    document.body.classList.toggle("dark");
    let isDark = document.body.classList.contains("dark");
    document.getElementById("toggle-btn").setAttribute("aria-pressed", isDark);


document
.getElementById("toggle-btn")
.addEventListener("click", toggleDarkMode);
}

document
  .getElementById("toggle-btn")
  .addEventListener("click", toggleDarkMode);