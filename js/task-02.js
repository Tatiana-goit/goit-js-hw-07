// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

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
