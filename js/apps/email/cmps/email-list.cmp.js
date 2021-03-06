import emailPreview from "./email-preview.cmp.js";

export default {
	template: `
    <section class="emails-container">
        <ul class="clean-list email-list-container" >
            <li v-for="(email, idx) in emails" :key="email.id" @click="toggle(idx)" :class="{ active : isActive}">
            <div class="email-list-item flex" :class="{ unread : !email.isRead }">    
                <div class="email-list-sender">{{email.senderName}}</div>
                <div class="email-list-content flex">
                    <div class="email-list-subject">{{email.subject  }} - </div>
                    <div class="email-list-body">{{email.body}}</div>
                </div>
                <div class="email-list-time">{{email.sentAt}}</div>
                </div>
                 <div v-if="isClicked === idx">
                    <email-preview :email="email"></email-preview>
                 </div>
            
            </li>  
        </ul>
    </section>
    `,
	data() {
		return {
			isClicked: false,
			isActive: false
		};
	},
	methods: {
		toggle(idx) {
			this.isClicked = idx;
			this.isActive = !this.isActive;
		}
	},
	props: ["emails"],
	components: {
		emailPreview
	}
};
