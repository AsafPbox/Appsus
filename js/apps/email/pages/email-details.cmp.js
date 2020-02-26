import { emailService } from '../services/email.service.js';
import { utilService } from '../services/util.service.js';

export default {
	template: `
    <section v-if="email" class="email-details">
        <header>    
        <div class="email-time">Time: {{email.sentAt}}</div>
        <div class="email-sender">Sender: {{email.senderName}}</div>
        <div class="email-sender-letter">Letter: {{emailFirstLetter}}</div>
        <div class="email-sender-address">Email: {{email.senderEmail}}</div>
        </header>
        <main>
            <div class="email-body">Message: {{email.body}}</div>
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
			emailService.getById(emailId).then(email => {
				this.email = email;
			});
		},
	},
	computed: {
		emailFirstLetter() {
			var sender = this.email.senderName;
			let first = sender.charAt(0);
			return first;
		}
	},
	created() {
		this.getEmail();
	}
};
