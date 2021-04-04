const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const mainUl = document.querySelector(`#ingredients`);

const makeList = elements => {
    return elements.map(element => {
        const makeLi = document.createElement('li')
        makeLi.textContent = element;
        return makeLi;
    });
};

const newList = makeList(ingredients);
mainUl.append(...newList);
