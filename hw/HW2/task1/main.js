const block = document.querySelector(".block")

let x = 0;
let y = 0;

const motion = () => {
    if (x < 450 && y == 0) {
        x += 10
        block.style.left = `${x}px`;
        setTimeout(() => {
            motion()
        }, 50)
    } else if (x == 450 && y < 450) {
        y += 10
        block.style.top = `${y}px`
        setTimeout(() => {
            motion()
        }, 50)
    } else if (x > 0 && y == 450) {
        x -= 10
        block.style.left = `${x}px`
        setTimeout(() => {
            motion()
        }, 50)
    } else if (x == 0 && y > 0) {
        y -= 10
        block.style.top = `${y}px`
        setTimeout(() => {
            motion()
        }, 50)
    } else {
        return;
    }
}
motion()