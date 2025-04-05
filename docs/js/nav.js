function createNav() {
  const nav = document.createElement('nav');
  nav.className = 'main-nav';

  const ul = document.createElement('ul');
  ul.className = 'nav-list';

  const navItems = [
    { text: 'Home', href: '/' },
    { text: 'Blood Types', href: '/pages/blood-types.html' },
    { text: 'Eye Color', href: '/pages/eye-color.html' },
    { text: 'Skin Color', href: '/pages/skin-color.html' },
    { text: 'Height', href: '/pages/height.html' },
    { text: 'Hair Color', href: '/pages/hair-color.html' },
  ];

  const currentPath = window.location.pathname;

  navItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;

    // Active page highlighting
    if (item.href === currentPath) {
      a.classList.add('active');
    }

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  return nav;
}

document.addEventListener('DOMContentLoaded', () => {
  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) {
    placeholder.replaceWith(createNav());
  } else {
    document.body.prepend(createNav());
  }
});
