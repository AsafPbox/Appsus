import emailPreview from './email-preview.cmp.js'

export default {
    template: `
    <section class="emails-container">
        <ul>
            <div @click=printEmail()>
            <li v-for="(email) in emails" >
                {{email.sender}}
                |
                {{email.subject}}
                <!-- <email-preview v-show="isClicked" :email="email"></email-preview> -->
                <!-- <button @click="$emit('remove', currCar.id)">x</button> -->
            </li>  
            </div>      
        </ul>
    </section>
    `,
    data (){
        return {
            isClicked: false 
        }
    },
    props: ['emails'],
    components: {
        emailPreview
    },
    methods: {
        printEmail(){
            // this.isClicked = !this.isClicked
            console.log()
        }
    }
}