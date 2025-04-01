function createFooter() {
    const footer = document.createElement('footer');
    const paragraph = document.createElement('p');
    paragraph.textContent = '© 2024 Ponder, Anthony. All rights reserved.';
    footer.appendChild(paragraph);
    return footer;
  }
  
  // Replace the existing <footer> with the dynamically created one
  document.addEventListener('DOMContentLoaded', function() {
    const oldFooter = document.querySelector('footer');
    const newFooter = createFooter();
    oldFooter.replaceWith(newFooter);
  });