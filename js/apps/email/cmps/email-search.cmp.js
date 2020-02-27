import eventBus from '../services/event-bus.service.js'

export default {
    template:`
        <input type="text" name="searchEmail" placeholder="Search emails">
    `,
    components: {
        eventBus
    }
}