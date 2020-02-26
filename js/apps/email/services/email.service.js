'use strict';

import {utilService} from './util.service.js'
import {storageService} from './storage.service.js'

const KEY = 'emailsDB'

var emails = _createEmails()

function _createEmails() {
    var emails = storageService.load(KEY)
    if (!emails || !emails.length) {
        emails = [
            _createEmail('Hello', "BlaBlaBla", 'moshe'), 
            _createEmail('Bye', "BAAAAlaBlaBla", 'Ron'), 
            _createEmail('HI', "hihihi", 'Shlom')
        ]
        storageService.store(KEY, emails)
    }
    return emails;
}

function _createEmail(subject, body, sender) {
    return {
        id: utilService.makeId(),
        sender,
        subject,
        body,
        isRead: false,
        sentAt : Date.now()
    } 
}

function getEmails() {
    return Promise.resolve(emails);
}

// CRUDL - Create, Read, Update, Delete, List
export const emailService = {
    getEmails
}
