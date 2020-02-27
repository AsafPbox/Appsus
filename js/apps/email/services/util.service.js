function makeId(length = 5) {
	var txt = "";
	var possible =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (let i = 0; i < length; i++) {
		txt += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return txt;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function sortBySender() {
	emails.sort(compareValues("senderName", "asc"));
}

function sortByDate() {
	emails.sort(compareValues("sentAt", "asc"));
}

function sortByRead() {
	emails.sort(compareValues("isRead", "asc"));
}

function compareValues(key, order = "asc") {
	return function innerSort(a, b) {
		if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
			return 0;
		}

		const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
		const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

		let comparison = 0;
		if (varA > varB) {
			comparison = 1;
		} else if (varA < varB) {
			comparison = -1;
		}
		return order === "desc" ? comparison * -1 : comparison;
	};
}

function showTime(time) {
	var ts = new Date();
	var currDate = moment(ts).format("L");
	if (currDate === moment(time).format("L")) {
		return moment(time).format("LT");
	} else {
		return moment(time).format("lll");
	}
}

export const utilService = {
	makeId,
	getRandomInt,
    showTime,
    sortByDate,
    sortByRead,
    sortBySender
};
