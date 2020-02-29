export default {
    template: `
        <section class="home-container flex">
            <div class="home-item">
            <router-link to="/email">
                <img src="img/home/mail.png" title="Mail" />
                <p>Mail</p>
            </router-link>
            </div>
            <div class="home-item">
            <router-link to="/keep">
                <img src="img/home/keep.png" title="Keep" />
                <p>Keep</p>
            </router-link>
            </div>
            <div class="home-item">
            <router-link to="/books">
                <img src="img/home/books.png" title="Books" />
                <p>Books</p>
            </router-link>
            </div>
        </section>
    `
}