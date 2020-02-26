import {emailService} from '../apps/email/services/email.service.js'
import emailList from '../apps/email/email-list.cmp.js'


export default {
    template:`
        <section class="email-app-container">
            <email-List :emails="emails"></email-list>
        </section>
    `,
    data() {
        return {
            emails: []
        }
    },
    created(){
        emailService.getEmails()
            .then(emails => {
                this.emails=emails
            })
    },
    components:{
        emailList
    }
}