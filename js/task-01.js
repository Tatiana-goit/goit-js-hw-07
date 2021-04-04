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