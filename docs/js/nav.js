function createNav() {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  const navItems = [
    { text: 'Home', href: '../index.html' },
    { text: 'Blood Types', href: 'blood-types.html' },
    { text: 'Eye Color', href: 'eye-color.html' },
    { text: 'Skin Color', href: 'skin-color.html' },
    { text: 'Height', href: 'height.html' },
    { text: 'Hair Color', href: 'hair-color.html' },
  ];

  navItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
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
