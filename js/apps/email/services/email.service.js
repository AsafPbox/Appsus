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

function _createEmail(subject, body) {
	return {
		id: utilService.makeId(),
		senderName: 'Yaron',
		senderEmail : 'yaron@misterbit.co.il',
		subject,
		body,
		isRead: false,
		sentAt: Date.now()
	};
}

function getById(emailId) {
	const email = emails.find(email => email.id === emailId);
	return Promise.resolve(email);
}

function getEmails() {
	return Promise.resolve(emails);
}

// Fix later to foreach?
function countReadEmails() {
	let total = emails.length;
	var count = 0;
	for (var i = 0; i < total; i++) {
		if (emails[i].isRead) count++;
	}
	return count;
}

function removeEmail(emailId) {
    const idx = emails.findIndex(email => email.id === emailId)
    if(idx === -1) return Promise.reject('DID NOT REMOVE email')
    emails.splice(idx, 1);
    storageService.store(KEY, emails)
    return Promise.resolve('email REMOVED')
}

function getEmptyEmail() {
    var emptyEmail =  {
		id: utilService.makeId(),
		senderName: null,
		senderEmail : 'yaron@misterbit.co.il',
		subject: null,
		body: null,
		isRead: false,
		sentAt: Date.now()
    }
    return emptyEmail;
}

function saveEmail(email){ 
    emails.unshift(email);
    storageService.store(KEY, emails);
    return Promise.resolve(email);
}

export const emailService = {
	getEmails,
    countReadEmails,
    getById,
    removeEmail,
    getEmptyEmail,
    saveEmail
};
