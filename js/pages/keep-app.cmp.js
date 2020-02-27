import noteCreate from '../apps/keep/cmps/note-create.cmp.js';
import noteGallery from '../apps/keep/cmps/note-gallery.cmp.js';
// import {keepService} from '../apps/keep/services/keep.service.js';

export default {
    template:`
        <main>
            <h1>Keep</h1>
            <note-create></note-create>
            <note-gallery></note-gallery>
        </main>
    `,
    components: {
        noteCreate,
        noteGallery
    }
}