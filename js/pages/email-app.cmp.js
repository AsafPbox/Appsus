import {emailService} from '../apps/email/services/email.service.js'

export default {
    template:`
        <section class="email-app-container">
            {{emails}}
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
    }
}