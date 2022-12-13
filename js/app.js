'use strict';
function getTime() {
    getHours();
    getMinutes();
    getSeconds();
}
function getHours() {
    const time = new Date();
    const hours = time.getHours();
    const digitHoursTwo = hours % 10;
    const digitHoursOne = (hours - digitHoursTwo)/10;
    document.querySelector('.hours_first').src = 'images/' + digitHoursOne + '.jpg';
    document.querySelector('.hours_second').src = 'images/' + digitHoursTwo + '.jpg';

}
function getMinutes() {
    const time = new Date();
    const minutes = time.getMinutes();
    const digitMinutesTwo = minutes % 10;
    const digitMinutesOne = (minutes - digitMinutesTwo)/10;
    document.querySelector('.min_first').src = 'images/' + digitMinutesOne + '.jpg';
    document.querySelector('.min_second').src = 'images/' + digitMinutesTwo + '.jpg';
    if (minutes === 0) {
        getHours();
    }

}
function getSeconds() {
    const time = new Date();
    const seconds = time.getSeconds();
    const digitSecondsTwo = seconds % 10;
    const digitSecondsOne = (seconds - digitSecondsTwo)/10;
    document.querySelector('.sec_first').src = 'images/' + digitSecondsOne + '.jpg';
    document.querySelector('.sec_second').src = 'images/' +digitSecondsTwo + '.jpg';
    if (seconds === 0) {
        getMinutes();
    }
}
getTime();
setInterval(getSeconds, 1000);