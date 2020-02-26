import emailPreview from './email-preview.cmp.js'

export default {
    template: `
    <section class="emails-container">
        <ul>
            <li v-for="(email, idx) in emails" :key="email.id" @click="toggle(idx)">
                {{email.senderName}}
                |
                {{email.subject}}
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
    props: ['emails'],
    components: {
        emailPreview
    }
}