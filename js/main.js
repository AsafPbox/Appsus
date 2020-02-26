import navBar from './cmps/nav-bar.cmp.js'
import susFooter from './cmps/footer.cmp.js';

new Vue({
	el: "#app",
	template: `
        <section class="app-container">
            <nav-bar></nav-bar>
            <h1>Appsus</h1>
            <sus-footer></sus-footer>
        </section>  
    `,
    components: {
        susFooter,
        navBar
    }
});
