'use strict';

import { storageService } from './storage.service.js';



const KEY = "notesDB";

var notes = _createNotes();

function _createNotes() {
	var notes = storageService.load(KEY);
	if (!notes || !notes.length) {
		notes = [
			_createNote("Hello", "BlaBlaBla", "moshe"),
			_createNote("Bye", "BAAAAlaBlaBla", "Ron"),
			_createNote("HI", "hihihi", "Shlom")
		];
		storageService.store(KEY, notes);
	}
	return notes;
}

function _createNote(subject, body) {
	return {
		id: utilService.makeId(),
		senderName: 'Yaron',
		sendernote : 'yaron@misterbit.co.il',
		subject,
		body,
		isRead: false,
		sentAt: moment().format('hh:mm, MMM Do YYYY')
	};
}

function getEmptyText() {
    var emptyNote =  {
        id: utilService.makeId(),
        type : 'noteText',
        isPinned: false,
        info: {
            txt: ''
        },
        style: {
            color: '',
            backGroundColor: ''
        }
    }
    return emptyNote;
}



function helloWorld() {
    console.log ('Hello world!')
}

export const keepService {
}