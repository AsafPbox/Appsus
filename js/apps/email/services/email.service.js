"use strict";

import { utilService } from "./util.service.js";
import { storageService } from "./storage.service.js";

const KEY = "emailsDB";

var emails = _createEmails();

function _createEmails() {
	var emails = storageService.load(KEY);
	if (!emails || !emails.length) {
		emails = [
			_createEmail("Hello", "BlaBlaBla", "moshe"),
			_createEmail("Bye", "BAAAAlaBlaBla", "Ron"),
			_createEmail("HI", "hihihi", "Shlom")
		];
		storageService.store(KEY, emails);
	}
	return emails;
}

function _createEmail(subject, body, senderName) {
	return {
		id: utilService.makeId(),
		senderName,
		senderEmail,
		subject,
		body,
		isRead: false,
		sentAt: Date.now()
	};
}

function getById(emailId) {
	const email = emailsDB.find(email => email.id === emailId);
	return Promise.resolve(email);
}

function getEmails() {
	return Promise.resolve(emails);
}

// Fix later
function countReadEmails() {
	let total = emails.length;
	var count = 0;
	for (var i = 0; i < total; i++) {
		if (emails[i].isRead) count++;
	}
	return count;
}

export const emailService = {
	getEmails,
	countReadEmails
};
