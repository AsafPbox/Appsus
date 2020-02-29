import eventBus from '../services/event-bus.service.js';

export default {
    template: `
    <div class="keep-input-container">
        <input type="text" class="keep-input" v-model="input" v-bind:placeholder="desc" @keyup.enter="addNote">
        <div class="keep-buttons">
            <button @click="updatePlaceholder('Whats on your mind ?', 'text')">Text</button>
            <button @click="updatePlaceholder('Enter img url', 'img')">Url</button>
            <button @click="updatePlaceholder('Enter video url', 'video')">Videos</button>
            <button @click="updatePlaceholder('Enter comma separated list', 'todo')">ToDos</button>
        </div>
    </div>
    `,
    data() {
		return {
            desc : 'Whats on your mind ?',
            type : 'text',
            input : '',
		};
    },
    methods : {
        updatePlaceholder: function(desc, inputType){
            this.desc = desc;
            this.type = inputType;
        },
        addNote: function(){
            eventBus.$emit('newNote',{'type': this.type, 'input': this.input})
        }
    }
}