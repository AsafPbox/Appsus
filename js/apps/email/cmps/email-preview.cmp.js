import eventBus from '../services/event-bus.service.js'

export default {
    template: `
        <div>
            <section class="flex">
            <div>{{email.subject}}</div>
            <div><router-link :to="'/email/' + email.id"> 
                Expand
            </router-link>
            <button @click="deleteEmail()">Delete</button></div>
            </section>    
            <section class="flex">
                <div>{{email.senderName}}</div>
                <div><{{email.senderEmail}}></div>
            </section>
            <section>
                {{email.body}}
            </section> 
        </div>               
    `,
    props: ['email'],
    methods: {
        deleteEmail(){
            var emailId = this.email.id;
            eventBus.$emit('deleteEmail', emailId)
        }
    }
}