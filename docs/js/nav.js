function createNav() {
  const nav = document.createElement('nav');
  nav.className = 'main-nav';

  const ul = document.createElement('ul');

  const navItems = [
    { text: 'Home', href: '../index.html' },
    { text: 'Blood Types', href: 'blood-types.html' },
    { text: 'Eye Color', href: 'eye-color.html' },
    { text: 'Skin Color', href: 'skin-color.html' },
    { text: 'Height', href: 'height.html' },
    { text: 'Hair Color', href: 'hair-color.html' },
  ];

  const currentPath = window.location.pathname.split('/').pop();

  navItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;

    // Highlight current page
    if (item.href === currentPath) {
      a.className = 'active';
    }

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  return nav;
}

document.addEventListener('DOMContentLoaded', () => {
  const oldNav = document.querySelector('nav');
  if (oldNav) {
    const newNav = createNav();
    oldNav.replaceWith(newNav);
  } else {
    document.body.prepend(createNav());
  }
});
