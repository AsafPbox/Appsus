import noteCreate from '../apps/keep/cmps/note-create.cmp.js';
import noteGallery from '../apps/keep/cmps/note-gallery.cmp.js';
import {keepService} from '../apps/keep/services/keep.service.js';
import eventBus from '../apps/keep/services/event-bus.service.js'

export default {
    template:`
        <main>
            <h1 v-on:setInputType="updateInput()"></h1>
            <note-create></note-create>
            <note-gallery></note-gallery>
            <!-- <note-gallery :notes="notes"></note-gallery> -->
        </main>
    `,
    data() {
        return {
            notes : [],
        }
    },
    methods: {
        updateInput: function(){
            console.log('HERE :')
        },
    },
    created() {
        keepService.getNotes()
            .then(notes => {
                this.notes = notes
        }),
        eventBus.$on('newNote', function(newNote){
            var newNote = keepService.createNewNote(newNote.type, newNote.input)
            console.log('Mynew Note :', newNote)
            keepService.saveNote(newNote);
        })
    },
    components: {
        noteCreate,
        noteGallery
    }
}