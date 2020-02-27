
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


export const utilService = {
    makeId,
    getRandomInt,
    showTime
}

function showTime(time) {
    var ts = new Date();
    var currDate = moment(ts).format('L')
        if (currDate === moment(time).format('L')) {
        return moment(time).format('LT');
    } else {
        return moment(time).format('lll');
    }
}