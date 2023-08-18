const bdayElement = document.getElementById("birthday");
const result = document.getElementById("result");
const days = document.getElementById("days");

const btnElement = document.getElementById("btn");

btnElement.addEventListener("click", calculateAge);

function calculateAge() {
    const bdayValue = bdayElement.value;
    
    if (bdayValue === "") {
        alert("Please enter your Birthday");
    }
    else {
        const age = getAge(bdayValue);
        const daycount = getDays(bdayValue);
        const hourcount = daycount * 24;
        const minutecount = daycount * 24 * 60;
        const secondcount = daycount * 24 * 60 * 60;

        result.innerHTML = `You are ${age} ${age > 1 ? "years":"year"} old`;
        days.innerHTML = `You lived for ${daycount} ${daycount > 1 ? "days" : "day"} - ${hourcount} hours - ${minutecount} minutes - ${secondcount} seconds`;
    }
}

/* Age */
function getAge(bdayValue) {

    const curr = new Date();
    const prev = new Date(bdayValue);
    
    let age = curr.getFullYear() - prev.getFullYear();
    
    const month = curr.getMonth() - prev.getMonth();

    if ( month < 0 || (month === 0 && curr.getDate() < prev.getDate()) ) {
        age--;
    }

    return age;
}

/* Days */
function getDays(bdayValue) {
    
    const curr = new Date();
    const prev = new Date(bdayValue);

    const time = Math.abs(prev - curr);
    const days = Math.ceil(time / (1000 * 60 * 60 * 24));
    
    return days;
}