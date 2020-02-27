import {emailService} from '../services/email.service.js'

export default {
    template:`
        <div>
            <title>New Email</title>
            <form>
                <input type="text" v-model="email.senderName" name="to" placeholder="To:">
                <!-- <input type="text" name="cc" placeholder="Cc:"> -->
                <!-- <input type="text" name="bcc" placeholder="Bcc:"> -->
                <input v-model="email.subject" name="subject" placeholder="Subject:">
                <textarea rows="5" v-model="email.body" placeholder="Compose email"></textarea>
            </form>
            <button @click="sendEmail()">Send</button>
            <button @click="discardEmail()">Discard</button>
        </div>
    `,
    data() {
        return {
            email: emailService.getEmptyEmail()
            }
    },
    methods : {
        sendEmail(){
            emailService.saveEmail(this.email)
                .then(() => {
                    this.$router.push('/') // need to return to main email page
                })
        },
        discardEmail(){
            console.log('Discard email')
        }
    }
}