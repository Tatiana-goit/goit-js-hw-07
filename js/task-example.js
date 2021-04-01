const listEl = document.querySelector('.animal__item');
// console.log(listEl);

const itemEl = document.querySelectorAll('.animal__item');
// console.log(itemEl);

// const imgEl = document.querySelector('.people__img');
// console.log(imgEl);
// console.log(imgEl.src);
// imgEl.alt = 'Могу выполнять разные действия';

const titleEl = document.querySelector('h1');
// console.log(titleEl);
// console.log(titleEl.textContent);

const navEl = document.querySelector('.site-nav');
// console.log(navEl);
// console.log(navEl.children);

const navItemEl = document.querySelector('.site-nav__item')
// console.log(navItemEl.children);

const navLinkEl = document.querySelector('.site-nav__link');
// console.log(navLinkEl);
// console.log(navLinkEl.textContent);

navEl.classList.add('new', 'second');
navEl.classList.remove('second');
navEl.classList.replace('new', 'new2');
// console.log(navEl.classList.contains('new2'));
navEl.classList.toggle('new')
// console.log(navEl);

const linkEl = document.querySelector('a');
console.log(linkEl);
console.log(linkEl.getAttribute('href'));;

console.log(linkEl.attributes);





