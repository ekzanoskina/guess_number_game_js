"use strict";

const guess_btn = document.querySelector(".guess-btn");
const guess_input = document.querySelector(".guess-input");
const attempts_count = document.querySelector(".attempts-count");
const record = document.querySelector(".record-score");
let secret_number = Math.floor(Math.random() * 20 + 1);
console.log(secret_number);

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
  };


function decreaseAttempts() {
    attempts_count.textContent = parseInt(attempts_count.textContent) - 1
    if (parseInt(attempts_count.textContent) < 1) {
        displayMessage("Вы проиграли!");
        document.querySelector("body").style.background = "red";
    }
}

function reset() {
    guess_input.value = "";
    attempts_count.textContent = 20;
    secret_number = Math.floor(Math.random() * 20 + 1);
    console.log(secret_number);
    document.querySelector("body").style.background = "radial-gradient(circle,rgba(35, 34, 41, 1) 51%,rgba(56, 59, 60, 1) 100%)"
}
function renewRecord() {
    if (20 - parseInt(attempts_count.textContent) < parseInt(record.textContent)) {
    record.textContent = 20 - parseInt(attempts_count.textContent)
    }
}

guess_btn.addEventListener("click", () => {

    const guess_value = parseInt(guess_input.value);
    if (!guess_value) {
        displayMessage("Вы не ввели число!");
    }
    else if (guess_value > 20 || guess_value < 1) {
        displayMessage("Введите число от 1 до 20!");
    }
    else if (guess_value === secret_number) {
        document.querySelector("body").style.background = "green";
        decreaseAttempts();
        displayMessage("Вы угадали!");
        renewRecord();
    }
    else if (guess_value < secret_number) {
        displayMessage("Слишком мало!");
        decreaseAttempts();
    }
    else if (guess_value > secret_number) {
        displayMessage("Слишком много!");
        decreaseAttempts();
    }
    guess_input.value = "";
}
    
    

);

const reset_btn = document.querySelector(".reset-btn");
    reset_btn.addEventListener("click", () => {
    reset()
});

