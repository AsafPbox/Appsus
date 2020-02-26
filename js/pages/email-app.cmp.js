import {emailService} from '../apps/email/services/email.service.js'
import emailList from '../apps/email/cmps/email-list.cmp.js'
import eventBus from '../apps/email/services/event-bus.service.js'
import sideBar from "../apps/email/cmps/side-bar.cmp.js";

export default {
	template: `
        <section class="email-app-container">
            <side-bar></side-bar>
            <section class="email-list-container">
                <email-List :emails="emails"></email-list>
                <email-details></email-details>
            </section>
        </section>
    `,
	data() {
		return {
			emails: []
		};
	},
	created() {
		emailService.getEmails().then(emails => {
			this.emails = emails;
		});
	},
	components: {
		emailList,
		emailDetails,
        sideBar,
        eventBus
	}
};
