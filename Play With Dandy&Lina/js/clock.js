setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');

const minuteHand = document.querySelector('[data-minute-hand]');

const secondHand = document.querySelector('[data-second-hand]');



function setClock() {
    const currectDate = new Date();
    const secondsRatio = currectDate.getSeconds() / 60;
    const minutesRatio = (currectDate.getMinutes() + secondsRatio) / 60;
    const hoursRatio = (minutesRatio + currectDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation',rotationRatio * 360);
}