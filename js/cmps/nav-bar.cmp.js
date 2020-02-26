export default {
	template: `
    <section>
        <nav class="flex space-between">
    <div class="logo-name">Apps Place</div>
    <ul class="nav-bar-list flex clean-list">
        <li>
            <router-link to="/">
                Home
            </router-link>
        </li>
        <li>
            <router-link to="/books">
                Books
            </router-link>
        </li>
        <li>
            <router-link to="/email">
                Email
            </router-link>
        </li>
        <li>
            <router-link to="/keep">
                Keep
            </router-link>
        </li>
    </ul>    
    </nav>
</section>
    `
};
