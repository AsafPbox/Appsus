export default {
	template: `
    <section>
        <nav class="flex space-between">
        <div class="logo-name">
        <router-link to="/">
        <img src="img/nav-bar/sus.svg" title="AppSus" /> AppsSUS
        </router-link>
        </div>
        <ul class="nav-bar-list flex clean-list">
        <li>
            <router-link to="/">
                <img src="img/nav-bar/home.svg" title="Home" /> Home
            </router-link>
        </li>
        <li>
            <router-link to="/email">
                <img src="img/nav-bar/mail.svg" title="Mail" /> Mail
            </router-link>
            </li>
        <li>
            <router-link to="/keep">
                <img src="img/nav-bar/keep.svg" title="Keep" /> Keep
            </router-link>
        </li>
        <li>
            <router-link to="/books">
                <img src="img/nav-bar/books.svg" title="Books" /> Books
            </router-link>
        </li>
    </ul>    
    </nav>
</section>
    `
};
