export default {
    template: `
        <section class="home-container flex">
            <div>
            <router-link to="/email">
                <img src="img/home/mail.png" title="Mail" />
            </router-link>
            </div>
            <div>
            <router-link to="/keep">
                <img src="img/home/keep.png" title="Keep" />
            </router-link>
            </div>
            <div>
            <router-link to="/books">
                <img src="img/home/books.png" title="Books" />
            </router-link>
            </div>
        </section>
    `
}