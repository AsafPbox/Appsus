export default {
    template: `
    <div class="keep-input-container">
        <input type="text" class= "keep-input" v-bind:placeholder="desc" @keyup.enter="printInput">
        <div class="keep-buttons">
            <button @click="updatePlaceholder('Whats on your mind ?')">Text</button>
            <button @click="updatePlaceholder('Enter img url')">Url</button>
            <button @click="updatePlaceholder('Enter video url')">Videos</button>
            <button @click="updatePlaceholder('Enter comma separated list')">ToDos</button>
        </div>
    </div>
    `,
    data() {
		return {
            desc : 'Chose option',
            input : ''
		};
    },
    methods : {
        updatePlaceholder: function(objType){
            this.desc = objType;
        },
        printInput: function(){
            console.log('Hi')
        }
    }
}