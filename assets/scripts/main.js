
function getTime() {
    let now = new Date();
    
    let hourHand = document.querySelector('.hour_hand');
    let minHand = document.querySelector('.minitue_hand');
    let secHand = document.querySelector('.second_hand');

    let currentSecond = now.getSeconds();
    let currentMinitue = now.getMinutes();
    let currentHour = now.getHours();

    let eachSecDeg = (6 * currentSecond);
    let eachMinDeg = (6 * currentMinitue) + (0.1 * currentSecond); //1 min = 6deg so 60sec = 6deg, 1sec = 6/60 deg
    let eachHourDeg = (30 * currentHour) + (0.5 * currentMinitue);//1hr = 30deg so 60min = 30deg, 1min = 30/60 deg

    minHand.style.transform = `rotate(${eachMinDeg + 90}deg)`;
    secHand.style.transform = `rotate(${eachSecDeg + 90}deg)`;
    hourHand.style.transform = `rotate(${eachHourDeg + 90}deg)`;
}

setInterval(getTime,1000);
