// DOM elements
const lightStyle = document.getElementById('light-mode-style');
const darkStyle = document.getElementById('dark-mode-style');
const darkToggleBtn = document.getElementById('darkModeToggle');
const icon = darkToggleBtn?.querySelector('i');

// Update the icon based on theme
function updateIcon(theme) {
  if (icon) {
    icon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
    lucide.createIcons(); // Refresh icons
  }
}

// Toggle theme function
function toggleDarkMode() {
  const isDark = document.body.getAttribute('data-theme') === 'dark';

  if (isDark) {
    darkStyle.disabled = true;
    lightStyle.disabled = false;
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    updateIcon('light');
  } else {
    darkStyle.disabled = false;
    lightStyle.disabled = true;
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    updateIcon('dark');
  }
}

// Apply theme on load
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const isDark = savedTheme === 'dark';

  darkStyle.disabled = !isDark;
  lightStyle.disabled = isDark;
  document.body.setAttribute('data-theme', savedTheme);
  updateIcon(savedTheme);
});

// Hook up button
if (darkToggleBtn) {
  darkToggleBtn.addEventListener('click', toggleDarkMode);
}
