import emailCompose from './email-compose.cmp.js'

export default {
	template: `
        <section>
            <button @click="composeEmail()">+ Compose</button>
            <email-compose v-if="isClicked"></email-compose>
            <ul>
                <li><img src="" />Inbox</li>
                <li><img src="" />Starred</li>
                <li><img src="" />Sent mail</li>
                <li><img src="" />Drafts</li>
            </ul>
        </section>
    `,
    data (){
        return {
            isClicked: false,
        }
    },
    methods : {
        composeEmail(){
            this.isClicked = !this.isClicked
        }
    },
    components: {
        emailCompose
    }
};
