import eventBus from '../services/event-bus.service.js'

export default {
    template: `
        <div>
            <section class="flex">
            <div>{{email.subject}}</div>
            <div>
            <div @click="readEmail()"><router-link :to="'/email/' + email.id"> 
                Expand
            </router-link></div>
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
    data() {
        return {
            // isReadEmail: false
        }
    },
    props: ['email'],
    methods: {
        deleteEmail(){
            var emailId = this.email.id;
            eventBus.$emit('deleteEmail', emailId)
        },
        readEmail(){
            this.email.isRead = true;
            // this.isReadEmail = true;
        }
    }
}