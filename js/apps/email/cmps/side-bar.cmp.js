import emailCompose from './email-compose.cmp.js'

export default {
	template: `
        <section class="side-bar-container">
            <button @click="composeEmail()" class="btn-compose"><img src="img/side-bar/compose.png" /> Compose</button>
            <email-compose v-if="isClicked"></email-compose>
            <ul class="side-bar-options clean-list">
                <li><img src="img/side-bar/inbox.png" />   
                    <router-link to="/email"> Inbox ({{unreadEmailCount}})
                    </router-link></li>
                <li><img src="img/side-bar/starred.png" /> Starred</li>
                <li><img src="img/side-bar/sent.png" /> Sent mail</li>
                <li><img src="img/side-bar/drafts.png" /> Drafts</li>
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

