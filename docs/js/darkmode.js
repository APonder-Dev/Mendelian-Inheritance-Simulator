// Dark mode toggle functionality
document.getElementById('darkModeToggle').addEventListener('click', () => {
  const lightStyle = document.getElementById('light-mode-style');
  const darkStyle = document.getElementById('dark-mode-style');

  // Toggle the styles
  if (darkStyle.disabled) {
    darkStyle.disabled = false;
    lightStyle.disabled = true;
    localStorage.setItem('theme', 'dark');
  } else {
    darkStyle.disabled = true;
    lightStyle.disabled = false;
    localStorage.setItem('theme', 'light');
  }
});

// Load the theme from local storage on page load
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  const lightStyle = document.getElementById('light-mode-style');
  const darkStyle = document.getElementById('dark-mode-style');

  // Apply the saved theme
  if (savedTheme === 'dark') {
    darkStyle.disabled = false;
    lightStyle.disabled = true;
  } else {
    darkStyle.disabled = true;
    lightStyle.disabled = false;
  }
});