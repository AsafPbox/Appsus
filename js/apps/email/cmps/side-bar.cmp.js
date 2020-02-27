import emailCompose from './email-compose.cmp.js'

export default {
	template: `
        <section class="side-bar-container">
            <button @click="composeEmail()" class="btn-compose">+ Compose</button>
            <email-compose v-if="isClicked"></email-compose>
            <ul class="side-bar-options clean-list">
                <li><img src="" />   
                    <router-link to="/email">
                    Inbox ({{unreadEmailCount}})
                    </router-link></li>
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
    },
    props: ['unreadEmailCount']
};
