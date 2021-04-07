// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector('#validation-input');
const totalLenght = inputEl.getAttribute('data-length');
const intTotalLenght = Number(totalLenght);


function onClassChange() {
    if (inputEl.value.length === intTotalLenght ) {
        onColorChange('valid', 'invalid');
    } else {
        onColorChange('invalid','valid');
    }
}

function onColorChange(newClass,oldClass) {
        inputEl.classList.add(newClass);
        inputEl.classList.remove(oldClass);

}
    
inputEl.addEventListener('blur', onClassChange)