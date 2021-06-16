const getElementAsArray = (thing) => {
  if (thing instanceof NodeList) return Array.from(thing);
  if (thing instanceof Array) return thing;

  return [thing];
};

const addClass = (elOrEls, className) => {
  for (const el of getElementAsArray(elOrEls)) el.classList.add(className);
};

const removeClass = (elOrEls, className) => {
  for (const el of getElementAsArray(elOrEls)) el.classList.remove(className);
};

const loadNavbar = () => {
  const navItems = document.querySelectorAll('.nav-item');

  gsap.to(navItems, {
    opacity: 1,
    left: 0,
    duration: 1,
    stagger: 0.1,
  });
};

const loadHeroEls = () => {
  const heroEls = document.querySelectorAll('#hero .container > *');

  gsap.to(heroEls, {
    opacity: 1,
    top: 0,
    duration: 1,
    stagger: 0.1,
  });
};

const animateNavbar = () => {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach((navItem) => {
    const animate = ({ target: t }, type) => {
      eval(`${type}Class(navItem, 'active')`);
      eval(`${type}Class(Array.from(navItems).filter((x) => x !== t), 'inactive')`);
    };

    navItem.addEventListener('mouseenter', (e) => animate(e, 'add'));
    navItem.addEventListener('mouseleave', (e) => animate(e, 'remove'));
  });
};

const main = async () => {
  loadNavbar();
  loadHeroEls();

  animateNavbar();
};

window.addEventListener('DOMContentLoaded', main);
