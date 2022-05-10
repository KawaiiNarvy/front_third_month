const itnInput = document.querySelector(".itnInput");
const itnCheck = document.querySelector(".itnCheck");
const itnResult = document.querySelector(".itnResult");

const itnValidate = /^(1\d{13}|2\d{13})$/;

itnCheck.addEventListener('click', () => {
    if (itnValidate.test(itnInput.value)) {
        itnResult.innerText = "все норм";
        itnResult.style.color = "green";
    } else {
        itnResult.innerText = "што то нитак блина";
        itnResult.style.color = "red";
    }
});