// Dark mode toggle functionality
document.getElementById('darkModeToggle').addEventListener('click', () => {
  const lightStyle = document.getElementById('light-mode-style');
  const darkStyle = document.getElementById('dark-mode-style');
  const isDark = darkStyle.disabled === false;

  if (isDark) {
    darkStyle.disabled = true;
    lightStyle.disabled = false;
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    darkStyle.disabled = false;
    lightStyle.disabled = true;
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});

// Load the theme from local storage on page load
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const lightStyle = document.getElementById('light-mode-style');
  const darkStyle = document.getElementById('dark-mode-style');

  if (savedTheme === 'dark') {
    darkStyle.disabled = false;
    lightStyle.disabled = true;
    document.body.setAttribute('data-theme', 'dark');
  } else {
    darkStyle.disabled = true;
    lightStyle.disabled = false;
    document.body.setAttribute('data-theme', 'light');
  }
});
