import { emailService } from "../services/email.service.js";
import sideBar from "../cmps/side-bar.cmp.js";

export default {
	template: `
	<section class=flex>
		<section>
			<side-bar :unreadEmailCount="unreadEmailCount"></side-bar>
		</section>
   		<section v-if="email" class="email-details">
  	    	<header>    
  	        <div class="email-time">Time: {{email.sentAt}}</div>
  	        <div class="email-sender">Sender: {{email.senderName}}</div>
 	        <div class="email-sender-letter hidden">Letter: {{emailFirstLetter}}</div>
 	        <div class="email-sender-address">Email: {{email.senderEmail}}</div>
 	        </header>
 	        <main>
	            <div class="email-body">Message: {{email.body}}</div>
 	        </main>
		</section>
	</section>
    `,
	data() {
		return {
			email: null,
			unreadEmailCount: null
		};
	},
	methods: {
		getEmail() {
			const emailId = this.$route.params.emailId;
			emailService.getById(emailId).then(email => {
				this.email = email;
			});
		}
	},
	computed: {
		emailFirstLetter() {
			var sender = this.email.senderName;
			let first = sender.charAt(0);
			return first;
		}
		// formattedTime() {
		// 	var t = this.email.sentAt;
		// 	var time = utilService.showTime(t);
		// 	return time;
		// }
	},
	created() {
		this.getEmail(),
		emailService.countUnreadEmails()
            .then(unread => {
                this.unreadEmailCount = unread
        })
	},
	components: {
		sideBar
	}
};
