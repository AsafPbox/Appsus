import {emailService} from '../apps/email/services/email.service.js'
import emailList from '../apps/email/cmps/email-list.cmp.js'
import emailDetails from '../apps/email/pages/email-details.cmp.js'

export default {
    template:`
        <section class="email-app-container">
            <email-List :emails="emails"></email-list>
            <email-details></email-details>
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
        emailList,
        emailDetails
    }
}