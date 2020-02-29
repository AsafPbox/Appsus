'use strict';

import { storageService } from './storage.service.js';
import { utilService } from './util.service.js';

const KEY = 'notesDB';

var notes = _createNotes();

function _createNotes(){
	var notes = storageService.load(KEY)
	if (!notes || !notes.length) {
		notes = [
			createEmptyNoteText('This is a test'),
			createEmptyNoteTodos('ToDos list'),
			createEmptyNoteImg('https://i.pinimg.com/originals/80/05/64/8005645509e41bbda14538e817f25257.jpg', 'gangstaPug')
		]
	}
	return {'cmps' : notes}
}

function getNotes() {
	return Promise.resolve(notes);
}

function createEmptyNoteText(text){
	return {
		id: utilService.makeId(),
		type : 'textBoxCmp',
		isPinned : false,
		info : {
			txt : text
		}
	}
}

function createEmptyNoteImg(url, title){
	return {
		id: utilService.makeId(),
		type : 'imgBoxCmp',
		isPinned : false,
		info : {
			url : url,
			title : title
		},
		style : {
			backgroundColor : '#00d'
		}
	}
}

function createEmptyNoteTodos(label){
	return {
		id: utilService.makeId(),
		type : 'todoBoxcmp',
		isPinned : false,
		info : {
			label : label,
			todos : [
				{ txt : 'FirstToDo'},
				{ txt : 'SecondToDo'}
			]
		}
	}
}

export const keepService = {
	getNotes,
	createEmptyNoteText,
	createEmptyNoteImg,
	createEmptyNoteTodos
}

// function _createNotes() {
// 	var notes = storageService.load(KEY);
// 	if (!notes || !notes.length) {
// 		notes = [
// 			_createNote(),
// 			_createNote(),
// 			_createNote()
// 		];
// 		storageService.store(KEY, notes);
// 	}
// 	return notes;
// }

// function _createNote() {
// 	return {
// 		id: utilService.makeId(),
//         type : 'noteText',
//         isPinned: false,
//         info: {
//             txt: ''
//         },
//         style: {
//             color: '',
//             backGroundColor: ''
//         }
// 	};
// }

// function getEmptyText() {
//     var emptyNote =  {
//         id: utilService.makeId(),
//         type : 'noteText',
//         isPinned: false,
//         info: {
//             txt: ''
//         },
//         style: {
//             color: '',
//             backGroundColor: ''
//         }
//     }
//     return emptyNote;
// }