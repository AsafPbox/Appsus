export default {
    template: `
        <section>
            <h3>{{email.id}}</h3>
            <h3>{{email.body}}</h3>
            <h4>{{email.sentAt}}</h4>
        </section>               
    `,
    props: ['email']
}