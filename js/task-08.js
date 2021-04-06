// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputEl = document.querySelector('input');
const renderEl = document.querySelector('button[data-action ="render"]');
const destroyEl = document.querySelector('button[data-action ="destroy"]');
const boxes = document.getElementById('boxes');

renderEl.addEventListener('click', getAmount);
destroyEl.addEventListener('click', destroyBoxes)

function getAmount() {
    const amount = document.querySelector("#controls input").value;
    createBoxes(amount);
}

function createBoxes(amount) {
    const size = 30;
    for (let i = 1; i <= amount; i += 1) {
        const newDiv = document.createElement('div');
        let sizeNew = size + 10*i;
        newDiv.style.cssText = `width: ${sizeNew}px; height: ${sizeNew}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
       boxes.appendChild(newDiv);
    }
}

function random() {
  return Math.floor(Math.random() * 256);
}

function destroyBoxes() {
    inputEl.value = '';
    boxes.innerHTML = "";
}






