
function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i=0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

function showTime(time) {
    var ts = new Date();
    var currDate = (ts.toDateString());
    if (currDate === time.toDateString()) {
        return time.toLocaleTimeString();
    } else {
        return time.toLocaleString();
    }
}

export const utilService = {
    makeId,
    getRandomInt,
    showTime
}