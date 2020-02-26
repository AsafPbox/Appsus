import { emailService } from "../apps/email/services/email.service.js";

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
    `
};
