import emailFilter from './email-filter.cmp.js'
import emailSearch from './email-search.cmp.js'

export default {
    template:`
        <section>
            <!-- <h5>email utils</h5> -->
            <email-search></email-search>
            <email-filter></email-filter>
        </section>
    `,
    components: {
        emailFilter,
        emailSearch
    }
}