import eventBus from '../services/event-bus.service.js'

export default {
    template:`
        <div class="filter-emails">
            <button @click="filterByRead()">FilterBy Read</button>
            <button @click="filterByUnRead()">FilterBy UnRead</button>
        </div>
    `,
    methods: {
        filterByRead(){
            eventBus.$emit('readEmails')
        },
        filterByUnRead(){
            eventBus.$emit('unReadEmails')
        }
    },
    components: {
        eventBus
    }
}