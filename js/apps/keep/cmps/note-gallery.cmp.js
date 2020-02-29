import {keepService} from '../services/keep.service.js'
import textBoxCmp from '../cmps/note-text.cmp.js'
import imgBoxCmp from '../cmps/note-img.cmp.js'
import todoBoxcmp from '../cmps/note-todos.cmp.js'

export default {
    template: `
    <div>
        <div class="keep-container" v-if="notes">
            <component :is="cmp.type" v-for="cmp in notes.cmps" :info="cmp.info" :key="cmp.id"></component>
        </div>
        <!-- <pre>{{notes}}</pre> -->
    </div>
    `,
    data() {
        return {
            notes : null
        }
    },
    created() {
        keepService.getNotes()
            .then(notes => {
            this.notes = notes;
        }) 
    },
    components: {
        textBoxCmp,
        imgBoxCmp,
        todoBoxcmp
    }
} 
    // props: ["notes"],