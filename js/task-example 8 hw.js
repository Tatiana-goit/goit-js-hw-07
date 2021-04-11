const container = document.querySelector('.js-container');
let selectedTag = null;


container.addEventListener('click', onContainerClick);

// function onContainerClick(evt) {
//     if (evt.target.nodeName !== 'BUTTON') {
//         return
//     }

//     const currentActiveBtn = document.querySelector('.tags__btn--active');

//     if (currentActiveBtn) {
//         currentActiveBtn.classList.remove('tags__btn--active')
//     }

//     // АНАЛОГ
//     // currentActiveBtn?.classList.remove('tags__btn--active')

//     const nextActiveBtn = evt.target;
//     nextActiveBtn.classList.add('tags__btn--active');
//     selectedTag = nextActiveBtn.dataset.value;
//     console.log(selectedTag);
// }

function onContainerClick(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
        return
    }

    removeActiveBtn();
   
    const nextActiveBtn = evt.target;

    addActiveBtn(nextActiveBtn) 
    
    selectedTag = nextActiveBtn.dataset.value;
    console.log(selectedTag);
}

function removeActiveBtn() {
    const currentActiveBtn = document.querySelector('.tags__btn--active');

     if (currentActiveBtn) {
        currentActiveBtn.classList.remove('tags__btn--active')
    }
}

function addActiveBtn(btn) {
    btn.classList.add('tags__btn--active');
    
}

// const selectedTags = new Set;

// function onContainerClick(evt) {
//     if (evt.target.nodeName !== 'BUTTON') {
//         return
//     }

//     const btn = evt.target;
//     const tag = btn.dataset.value;
//     const isActive = btn.classList.contains('tags__btn--active')

//     if (isActive) {
//         selectedTags.delete(tag)
//     } else {
//         selectedTags.add(tag);
//     }
    
//     btn.classList.toggle ('tags__btn--active')
//     console.log(selectedTags);

// }




// const addBtn = document.querySelector('.js-add-button');

// addBtn.addEventListener('click', onAddBtnClick);
// let  labelCounter = 6;

// function onAddBtnClick() {
//     const btn = document.createElement('button');
//     btn.textContent = `Кнопка ${labelCounter}`;
//     btn.type = 'button';
//     container.appendChild(btn);
//     labelCounter += 1;
// }