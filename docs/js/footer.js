function createFooter() {
  const footer = document.createElement('footer');

  const paragraph = document.createElement('p');
  paragraph.innerHTML = `© ${new Date().getFullYear()} 
    <a href="https://aponder.dev" target="_blank" rel="noopener noreferrer" 
       style="background: linear-gradient(90deg, #4CAF50, #2196F3);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              font-weight: bold;
              text-decoration: none;">
      Ponder, Anthony
    </a>. All rights reserved.`;

  footer.appendChild(paragraph);
  return footer;
}

document.addEventListener('DOMContentLoaded', () => {
  const oldFooter = document.querySelector('footer');
  if (oldFooter) {
    const newFooter = createFooter();
    oldFooter.replaceWith(newFooter);
  } else {
    document.body.appendChild(createFooter());
  }
});
