export default {
    template:`
        <div>
            <title>New Email</title>
            <form>
                <input type="text" name="to" placeholder="To:">
                <input type="text" name="cc" placeholder="Cc:">
                <input type="text" name="bcc" placeholder="Bcc:">
                <input type="text" name="subject" placeholder="Subject:">
                <textarea rows="5" placeholder="Compose email"></textarea>
            </form>
            <button @click="sendEmail()">Send</button>
            <button @click="discardEmail()">Discard</button>
        </div>
    `,
    methods : {
        sendEmail(){
            console.log('Sending email')
        },
        discardEmail(){
            console.log('Discard email')
        }
    },
}