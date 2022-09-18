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
