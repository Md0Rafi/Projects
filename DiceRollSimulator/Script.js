const btnEl = document.getElementById("roll-btn");

const diceEl = document.getElementById("dice");

const rollHisEl = document.getElementById("roll-his");

let historyList = [];

function updateRollHis() {
    rollHisEl.innerHTML = "";
    for (var i = 0; i < historyList.length; i++) {
        const listEl = document.createElement("li");
        listEl.innerHTML = `Roll ${i + 1}: <span>${getdiceFace(historyList[i])}</span>`;
        rollHisEl.appendChild(listEl);
    }
}

function getdiceFace(rollVal) {
    switch(rollVal) {
        case 1:
            return "&#9856";
        case 2:
            return "&#9857";
        case 3:
            return "&#9858";
        case 4:
            return "&#9859";
        case 5:
            return "&#9860";
        case 6:
            return "&#9861";
        default:
            return "";
    }
}

function rollDice() {
    const rollVal = Math.floor(Math.random() * 6) + 1;
    const diceFace = getdiceFace(rollVal);
    diceEl.innerHTML = diceFace;
    historyList.push(rollVal);
    updateRollHis();
}

btnEl.addEventListener("click", () => {

    diceEl.classList.add("roll-animation");

    setTimeout(() => {

        diceEl.classList.remove("roll-animation");

        rollDice();

    }, 1000)
})