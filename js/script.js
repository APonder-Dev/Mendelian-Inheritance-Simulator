// Main script.js
document.addEventListener("DOMContentLoaded", () => {
  // Set up Dark Mode Toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("click", () => toggleDarkMode());

  // Load specific scripts based on page ID
  const pageId = document.body.getAttribute("data-page-id");
  if (pageId) loadPageScript(pageId);
});

function toggleDarkMode() {
  const theme = document.body.getAttribute("data-theme");
  if (theme === "light") {
    document.getElementById("dark-mode-style").disabled = false;
    document.getElementById("light-mode-style").disabled = true;
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.getElementById("dark-mode-style").disabled = true;
    document.getElementById("light-mode-style").disabled = false;
    document.body.setAttribute("data-theme", "light");
  }
}

function loadPageScript(pageId) {
  const script = document.createElement("script");
  script.src = `js/alleles/${pageId}.js`;
  document.body.appendChild(script);
}
