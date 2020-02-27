import emailPreview from "./email-preview.cmp.js";
// import { utilService } from '../services/util.service.js';

export default {
	template: `
    <section class="emails-container">
        <ul class="clean-list email-list-container" >
            <li v-for="(email, idx) in emails" :key="email.id" @click="toggle(idx)" :class="{ active : isActive}">
            <div class="email-list-item flex space-between" :class="{ unread : !email.isRead }">    
                <div class="email-list-sender">{{email.senderName}}</div>
                <div class="email-list-content flex">
                    <div class="email-list-subject">{{email.subject}}</div>
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
	computed: {
		// formattedTime() {
		// 	var t = this.email.sentAt;
		// 	var time = utilService.showTime(t);
		// 	return time;
		// }
	},
	props: ["emails"],
	components: {
		emailPreview
	}
};
