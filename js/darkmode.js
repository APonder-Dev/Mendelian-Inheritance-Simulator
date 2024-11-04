// Dark mode toggle functionality
document.getElementById('darkModeToggle').addEventListener('click', () => {
  const lightStyle = document.getElementById('light-mode-style');
  const darkStyle = document.getElementById('dark-mode-style');

  // Toggle the styles
  if (darkStyle.disabled) {
      darkStyle.disabled = false; // Enable dark mode
      lightStyle.disabled = true;  // Disable light mode
      localStorage.setItem('theme', 'dark'); // Save the choice in local storage
  } else {
      darkStyle.disabled = true;  // Disable dark mode
      lightStyle.disabled = false; // Enable light mode
      localStorage.setItem('theme', 'light'); // Save the choice in local storage
  }
});

// Load the theme from local storage on page load
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  const lightStyle = document.getElementById('light-mode-style');
  const darkStyle = document.getElementById('dark-mode-style');

  // Apply the saved theme
  if (savedTheme === 'dark') {
      darkStyle.disabled = false; // Enable dark mode
      lightStyle.disabled = true;  // Disable light mode
  } else {
      darkStyle.disabled = true;  // Disable dark mode
      lightStyle.disabled = false; // Enable light mode
  }
});
