import {emailService} from '../apps/email/services/email.service.js'
import emailList from '../apps/email/cmps/email-list.cmp.js'
import eventBus from '../apps/email/services/event-bus.service.js'
import sideBar from '../apps/email/cmps/side-bar.cmp.js'
import emailDetails from '../apps/email/pages/email-details.cmp.js'
import emailUtils from '../apps/email/cmps/email-utils.cmp.js'
import emailFilter from '../apps/email/cmps/email-filter.cmp.js'

export default {
	template: `
        <section class="email-app-container">
            <side-bar :unreadEmailCount="unreadEmailCount"></side-bar>
            <email-utils></email-utils>
            <email-filter></email-filter>
            <section class="email-list-container">
                <email-List :emails="emails"></email-list>
                <email-details></email-details>
            </section>
        </section>
    `,
	data() {
		return {
            emails: [],
            unreadEmailCount: null,
            filterBy: null
		};
    },
    computed: {
        emailsForDisplay() {
            if (!this.filterBy) return this.emails;
            return this.emails.filter(email => 
                email.isRead === True
           );
        }
    },
	created() {
		emailService.getEmails().then(emails => {
			this.emails = emails;
        }),
        eventBus.$on('deleteEmail', function(payload){
            emailService.removeEmail(payload)
        }),
        eventBus.$on('readEmails', function(payload){
            this.filterBy = payload
            console.log(this.filterBy)
        }),
        emailService.countUnreadEmails()
            .then(unread => {
                this.unreadEmailCount = unread
        })
    },
	components: {
		emailList,
		emailDetails,
        sideBar,
        eventBus,
        emailUtils,
        emailFilter
	}
}
