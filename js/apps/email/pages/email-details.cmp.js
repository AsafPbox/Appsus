import { emailService } from '../services/email.service.js';
import { utilService } from '../services/util.service.js';

export default {
	template: `
    <section v-if="email" class="email-details">
        <header>    
        <div class="email-time">{{email.time}}</div>
        <div class="email-sender">{{email.senderName}}</div>
        <div class="email-sender-letter">{{emailFirstLetter}}</div>
        <div class="email-sender-address">{{email.senderEmail}}</div>
        </header>
        <main>
            <div class="email-body">{{email.body}}</div>
        </main>
    </section>
    `,
	data() {
		return {
			email: null,
		};
	},
	methods: {
		getEmail() {
			const emailId = this.$route.params.emailId;
			console.log("emailId", emailId);
			emailService.getById(emailId).then(email => {
				this.email = email;
			});
		},
	},
	computed: {
		emailFirstLetter() {
			var sender = email.senderName;
			let first = sender.charAt(0);
			return first;
		}
	},
	created() {
		this.getEmail();
	}
};
