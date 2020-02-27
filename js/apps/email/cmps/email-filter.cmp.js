import eventBus from '../services/event-bus.service.js'
import {emailService} from '../services/email.service.js'

export default {
    template:`
        <div class="filter-emails">
            <button @click="filterByRead()">FilterBy Read</button>
            <button @click="filterByUnRead()">FilterBy UnRead</button>
        </div>
    `,
    methods: {
        filterByRead(){
            // emailService.getReadEmails()
            var a = emailService.getReadEmails()
            eventBus.$emit('readEmails', a)
        },
        filterByUnRead(){
            eventBus.$emit('unReadEmails')
        }
    },
    components: {
        eventBus,
        emailService
    }
}