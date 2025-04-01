function createFooter() {
  const footer = document.createElement('footer');
  const paragraph = document.createElement('p');
  paragraph.textContent = `© ${new Date().getFullYear()} Ponder, Anthony. All rights reserved.`;
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
