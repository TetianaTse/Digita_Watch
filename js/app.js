'use strict';

const images = [
    './images/0.jpg',
    './images/1.jpg', 
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',
    './images/7.jpg',
    './images/8.jpg',
    './images/9.jpg',
];

let oldTime = "000000";

function getTime() {
    const time = new Date();
    const hr = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    
    const showTime = `${(hr - hr%10)/10}${hr%10}${(min - min%10)/10}${min%10}${(sec - sec%10)/10}${sec%10}`;
    showTime.split("").forEach((digit, i) => {
            document.getElementById("t" + i).src = images[digit];
      })
}
const pad = num => String(num).padStart(2, "0");

setInterval(() => {
    const time = new Date();
    const hr = pad(time.getHours());
    const min = pad(time.getMinutes());
    const sec = pad(time.getSeconds());
    const showTime = `${hr}${min}${sec}`;
    showTime.split("").forEach((digit, i) => {
      if (oldTime[i] != digit) {
          document.getElementById("t" + i).src = images[digit];
      }
    })
    oldTime = showTime;
  }, 1000);

getTime();