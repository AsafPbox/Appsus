import eventBus from '../services/event-bus.service.js'

export default {
    template:`
        <div class="filter-emails">
            <button @click="filterByRead()">Read emails</button>
            <button @click="filterByUnRead()">Unread emails</button>
        </div>
    `
    ,
    methods: {
        filterByRead(){
            eventBus.$emit('readEmails', true)
        },
    },
    components: {
        eventBus
    }
}