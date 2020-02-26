import { emailService } from "../apps/email/services/email.service.js";
import { utilService } from "../apps/email/services/util.service.js";

export default {
	template: `
    <section>
        <header>    
        <div class="email-time"></div>
        <div class="email-sender"></div>
        <div class="email-sender-letter"></div>
        <div class="email-sender-address"></div>
        </header>
        <main>
            <div class="email-body"></div>
        </main>
    </section>
    `,
	data() {
		return {
			time
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
		computed: {}
	}
};
