import emailPreview from './email-preview.cmp.js'

export default {
    template: `
    <section class="emails-container">
        <ul class="clean-list">
            <li v-for="(email, idx) in emails" :key="email.id" @click="toggle(idx)">
                {{email.senderName}}
                |
                {{email.subject}}
                |
                {{email.body}}
                |
                {{email.sentAt}}
                <div v-if="isClicked === idx">
                    <email-preview :email="email"></email-preview>
                </div>
            </li>  
        </ul>
    </section>
    `,
    data (){
        return {
            isClicked: false,
        }
    },
    methods: {
        toggle(idx){
            this.isClicked = idx
        }
    },
    computed: {
        // shortBodyText() {
        //     var summary = '';
        //     if ()
        // }
    },
    props: ['emails'],
    components: {
        emailPreview
    }
}