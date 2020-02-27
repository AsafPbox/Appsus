import {router} from './routes.js'
import navBar from './cmps/nav-bar.cmp.js'
import appFooter from './cmps/footer.cmp.js';

new Vue({
    el: "#app",
    router,
	template: `
        <section class="app-container">
            <nav-bar></nav-bar>
            <router-view></router-view>
            <app-footer></app-footer>
        </section>  
    `,
    components: {
        appFooter,
        navBar
    }
});
