// используя рекурсию необходимо заставить блок двигаться по странице. 
// Создайте один большой блок и один маленький внутри него. 
// Задайте большому блоку position: relative, а малому absolute. 
// Используя addEventListener изменяйте параметр позиции малого блока (.style.left=`${переменная}px`).

const block = document.querySelector(".small")

let num = 500

const motion = function() {
    block.style.left = `${num}px`
}

block.addEventListener("mousedown", motion)