import { emailService } from '../services/email.service.js';

export default {
	template: `
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
		},
		// formattedTime() {
		// 	var t = this.email.sentAt;
		// 	var time = utilService.showTime(t);
		// 	return time;
		// }
	},
	created() {
		this.getEmail();
	},
	mounted() {
		
	}
};
