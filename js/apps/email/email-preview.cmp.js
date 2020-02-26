export default {
    template: `
        <section>
            <h3>{{email.sender}}</h3>
            <h4>{{email.subject}}</h4>
            <h4>{{email.sentAt}}</h4>
        </section>               
    `,
    props: ['email']
}