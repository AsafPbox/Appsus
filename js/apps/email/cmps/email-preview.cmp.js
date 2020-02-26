import eventBus from '../services/event-bus.service.js'

export default {
    template: `
        <section>
            <h3>{{email.id}}</h3>
            <h3>{{email.body}}</h3>
            <h4>{{email.sentAt}}</h4>
            <router-link :to="'/email/' + email.id"> 
                Expand
            </router-link>
            <button @click="deleteEmail()">Delete</button>
        </section>               
    `,
    props: ['email'],
    methods: {
        deleteEmail(){
            var emailId = this.email.id;
            eventBus.$emit('deleteEmail', emailId)
        }
    }
}