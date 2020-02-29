'use strict';

import { storageService } from './storage.service.js';
import { utilService } from './util.service.js';

const KEY = 'notesDB';

var notes = _createNotes();

function _createNotes(){
	var notes = storageService.load(KEY)
	if (!notes || !notes.length) {
		notes = [
			_createEmptyNoteText('This is a test'),
			_createEmptyNoteText('This is a test2'),
			_createEmptyNoteTodos('ToDos list'),
			_createEmptyNoteImg('https://i.pinimg.com/originals/80/05/64/8005645509e41bbda14538e817f25257.jpg')
		];
		storageService.store(KEY, notes);
	}
	return {'cmps' : notes}
	// return notes
}

function getNotes() {
	return Promise.resolve(notes);
}

function createNewNote(noteType, arg){
	if (noteType === 'text'){
		var newNote = _createEmptyNoteText(arg)
	}
	else if (noteType === 'img'){
		var newNote = _createEmptyNoteImg(arg)
	}
	else if (noteType === 'todo'){
		var newNote = _createEmptyNoteTodos(arg) // need comma seprate
	}
	return newNote
}

function _createEmptyNoteText(text){
	return {
		id: utilService.makeId(),
		type : 'textBoxCmp',
		isPinned : false,
		info : {
			txt : text
		}
	}
}

function _createEmptyNoteImg(url){
	return {
		id: utilService.makeId(),
		type : 'imgBoxCmp',
		isPinned : false,
		info : {
			url : url,
			// title : title
		},
		style : {
			backgroundColor : '#00d'
		}
	}
}

function _createEmptyNoteTodos(label){
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

function saveNote(note){ 
	console.log(note)
	notes.unshift(note);
    storageService.store(KEY, notes);
    // return Promise.resolve(note);
}

export const keepService = {
	getNotes,
	createNewNote,
	saveNote
	// createEmptyNoteText,
	// createEmptyNoteImg,
	// createEmptyNoteTodos
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