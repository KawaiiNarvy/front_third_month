// используя рекурсию необходимо заставить блок двигаться по странице. 
// Создайте один большой блок и один маленький внутри него. 
// Задайте большому блоку position: relative, а малому absolute. 
// Используя addEventListener изменяйте параметр позиции малого блока (.style.left=`${переменная}px`).

const block = document.querySelector(".small")

let num = 0

const motion = function() {
    num += 20
    block.style.left = `${num}px`;
    if (num < 600) {
        motion();
    } else {
        num = 0
    }
}

block.addEventListener("mousedown", motion)