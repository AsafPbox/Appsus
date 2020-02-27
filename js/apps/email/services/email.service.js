'use strict';

import { utilService } from './util.service.js';
import { storageService } from './storage.service.js';

const KEY = 'emailsDB';

var emails = _createEmails();

function _createEmails() {
	var emails = storageService.load(KEY);
	if (!emails || !emails.length) {
		emails = [
			_createEmail('Hello', 'My name is Inigo Montoya - You killed my fater, prepare to die.', 'Inigo Montoya'),
			_createEmail('Hello', 'My name is, my name is, my name is chiki chiki Slim Shady', 'Marshal Mathers'),
			_createEmail('Open this email', 'An offer you cannot refuse', 'Vito Corleone'),
			_createEmail('Your daily mantra', 'I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.', 'Bene Gesserit'),
			_createEmail('About medals', 'Like Olympic medals and tennis trophies, all they signified was that the owner had done something of no benefit to anyone more capably than everyone else.', 'Yossarian')
		];
		storageService.store(KEY, emails);
	}
	return emails;
}

function _createEmail(subject, body, senderName) {
	return {
		id: utilService.makeId(),
		senderName,
		senderEmail : 'notarobot@android.com',
		subject,
		body,
		isRead: false,
		sentAt: moment().format('hh:mm, MMM Do YYYY')
	};
}

function getById(emailId) {
	const email = emails.find(email => email.id === emailId);
	return Promise.resolve(email);
}

function getEmails() {
	return Promise.resolve(emails);
}

function getReadEmails() {
	var readEmails = []
	emails.forEach(email => {
		if(email.isRead) readEmails.push(email);
	})
	return readEmails
}

// Fix later to foreach?
function countUnreadEmails() {
	let total = emails.length;
	var count = 0;
	for (var i = 0; i < total; i++) {
		if (!emails[i].isRead) count++;
	}
	return Promise.resolve(count);
}

function removeEmail(emailId) {
    const idx = emails.findIndex(email => email.id === emailId);
    if(idx === -1) return Promise.reject('DID NOT REMOVE email');
    emails.splice(idx, 1);
	storageService.store(KEY, emails);
	countUnreadEmails();
    // return Promise.resolve('email REMOVED')
}

function getEmptyEmail() {
    var emptyEmail =  {
		id: utilService.makeId(),
		senderName: null,
		senderEmail : 'weknownothing@google.com',
		subject: null,
		body: null,
		isRead: false,
		sentAt: moment().format('hh:mm, MMM Do YYYY')
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
    countUnreadEmails,
    getById,
    removeEmail,
    getEmptyEmail,
	saveEmail,
	getReadEmails
};