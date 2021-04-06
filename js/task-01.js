// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const allItemEl = document.querySelectorAll('ul#categories li.item');
 console.log(`В списке ${allItemEl.length} категории.`);

allItemEl.forEach(element => {
    console.log(`Категории: ${element.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${element.lastElementChild.childElementCount}`);
})


// 2 способ для тренировки


// allItemEl.forEach(element => {
//     const titleEl = element.querySelector('h2');
//     console.log(`Категории: ${titleEl.textContent}`);

//     const countEl = element.querySelectorAll('li').length;
//     console.log(`Количество элементов: ${countEl}`);
    
// });