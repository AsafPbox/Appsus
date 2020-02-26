import emailPreview from './email-preview.cmp.js'

export default {
    template: `
    <section class="emails-container">
        <ul>
            <li v-for="email in emails" @click="printEmail(email)">
                {{email.sender}}
                |
                {{email.subject}}
                <email-preview v-show="isClicked" :email="email"></email-preview>
            </li>  
        </ul>
    </section>
    `,
    data (){
        return {
            isClicked: false
        }
    },
    methods: {
        printEmail(email){
            console.log(email.id)
        }
    },
    props: ['emails'],
    components: {
        emailPreview
    }
}