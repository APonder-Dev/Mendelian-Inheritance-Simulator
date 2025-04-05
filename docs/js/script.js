document.addEventListener("DOMContentLoaded", () => {
  // Load preferred theme from localStorage
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  // Set up Dark Mode Toggle (if button exists)
  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      const currentTheme = document.body.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      applyTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }

  // Load specific trait script dynamically
  const pageId = document.body.getAttribute("data-page-id");
  if (pageId) loadPageScript(pageId);
});

// Theme switcher
function applyTheme(theme) {
  const lightStyle = document.getElementById("light-mode-style");
  const darkStyle = document.getElementById("dark-mode-style");

  if (theme === "dark") {
    darkStyle.disabled = false;
    lightStyle.disabled = true;
    document.body.setAttribute("data-theme", "dark");
  } else {
    darkStyle.disabled = true;
    lightStyle.disabled = false;
    document.body.setAttribute("data-theme", "light");
  }
}

// Load specific page logic dynamically
function loadPageScript(pageId) {
  const script = document.createElement("script");
  script.src = `js/alleles/${pageId}.js`;
  script.defer = true;
  document.body.appendChild(script);
}
