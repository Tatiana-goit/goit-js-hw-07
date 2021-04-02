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
// console.log(linkEl);
// console.log(linkEl.getAttribute('href'));;

// console.log(linkEl.attributes);

const newTitle = document.createElement('h1');
newTitle.textContent ='Это новый заголовок';
// console.log(newTitle);
navEl.before(newTitle);



const newNavLink = document.createElement('li');
newNavLink.textContent = 'Информация';
newNavLink.classList.add('site-nav__item');
// console.log(newNavLink);
navEl.before(newNavLink);



// Пример с видео_____________________________

const colors = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const colorPickerEl = document.querySelector('.js-simple');

const makeColor = options => {
    return options.map(option => {
        const buttonEl = document.createElement('button');
        buttonEl.type = 'button';
        buttonEl.classList.add('color__button');
        buttonEl.textContent = option.label;
        buttonEl.style.backgroundColor = option.color;

        return buttonEl;
    });
};

const elements = makeColor(colors);

colorPickerEl.append(...elements);

//  СОБЫТИЯ ------------------------------------------------

const targetBtnEl = document.querySelector('.js-btn');
const targetBtnAdd = document.querySelector('.js-add-listener');
const targetBtnRemove = document.querySelector('.js-remove-listener');


targetBtnAdd.addEventListener('click', (event) => {
  console.log('Вешаю слушателя события на текущую кнопку');
  targetBtnEl.addEventListener('click', onTargetButtonClick);
})

targetBtnRemove.addEventListener('click', (event) => {
  console.log('Убираю слушателя события на текущую кнопку');
  targetBtnEl.removeEventListener('click', onTargetButtonClick);
})

function onTargetButtonClick(event) {
  console.log('Клик по текущей кнопке');
}














