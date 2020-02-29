import eventBus from '../services/event-bus.service.js'

export default {
    template: `
        <section class="email-preview-container">
            <section class="flex">
                <div class="email-preview-subject">
                    {{email.subject}}
                </div>
            <div class="email-preview-btn">
                <div @click="readEmail()"><router-link :to="'/email/' + email.id"> 
                <img src="img/preview/expand.svg" />
                </router-link>
                </div>
            <button @click="deleteEmail()"><img src="img/preview/delete.svg" /></button>
            </div>
            </section>    
            <section class="flex">
                <div class="email-preview-sender">{{email.senderName}}</div>
                <div class="email-preview-email"><{{email.senderEmail}}></div>
            </section>
            <section class="email-preview-body">
                {{email.body}}
            </section> 
        </section>               
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