// function to create div 'clock-face'

const createDiv = () => {
  const div = document.createElement('div');
  div.className = 'clock-face';
  document.getElementById('clock').appendChild(div);
}
createDiv();

// function to create divs clock-hands

const createDivsClockHands = () => {
  const clockFace = document.getElementsByClassName('clock-face')[0];

  for (let index = 0; index < 3; index += 1) {
    const divHands = document.createElement('div');
    divHands.className = 'hand';
    clockFace.appendChild(divHands);
  }
}
createDivsClockHands();

// function to add classes to divs clock-hands

const nameDivs = () => {
  document.getElementsByClassName('hand')[0].classList.add('hour-hand');
  document.getElementsByClassName('hand')[1].classList.add('min-hand');
  document.getElementsByClassName('hand')[2].classList.add('second-hand');
}
nameDivs();

// function to get the current date and time

const secondHand = document.getElementsByClassName('hand')[2];
const minHand = document.getElementsByClassName('hand')[1];
const hourHand = document.getElementsByClassName('hand')[0];

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minsDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60)*30) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();

