const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');


function setDate(){
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360) + 90;

    const mins = now.getMinutes();
    const minsDegrees = ((mins/60)*360) + 90;

    const hours = now.getHours();
    const hoursDegree = ((hours/60)*360+90);

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
}


setInterval(setDate,1000);