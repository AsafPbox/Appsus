export default {
    template: `
        <section>
            <div class="img-box">
                <p>{{info.title}}</p>
                <img :src="info.url" height="100" width="100">
            </div>
        </section>
    `,
    props : ['info']
}