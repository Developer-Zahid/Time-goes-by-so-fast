const houreElement = document.querySelector(".clock__tick--houre");
const minutesElement = document.querySelector(".clock__tick--minutes");
const secondsElement = document.querySelector(".clock__tick--seconds");

const rootElement = document.querySelector(".root");

function analogClock(){
    let time = new Date();
    let houre = time.getHours() * 30;
    let minutes = time.getMinutes() * 6;
    let seconds = time.getSeconds() * 6;
    let timeStatus = time.getHours();

    houreElement.style.transform = `rotateZ(${houre + (minutes / 12)}deg)`;
    minutesElement.style.transform = `rotateZ(${minutes}deg)`;
    secondsElement.style.transform = `rotateZ(${seconds}deg)`;

    if(timeStatus <= 12){
        rootElement.classList.add("am")
    }else{
        rootElement.classList.remove("am")
    }

}

setInterval(()=>{
    analogClock();
},1000)