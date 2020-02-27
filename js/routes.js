import home from './pages/home.cmp.js'
import books from './pages/books.cmp.js'
import keep from './pages/keep-app.cmp.js'
import email from './pages/email-app.cmp.js'
import emailDetails from './apps/email/pages/email-details.cmp.js'
// import bookApp from './cmps/book-app.cmp.js'
// import bookDetails from './cmps/book-details.cmp.js'
// import aboutPage from './cmps/about-page.cmp.js'
// import aboutDetails from './cmps/about-details.cmp.js'
// import aboutTeam from './cmps/about-team.cmp.js'

const routes = [
    {path:'/', component:home},
    {path:'/books', component:books},
    {path:'/keep', component:keep},
    {path:'/email', component:email},
    {path:'/email/:emailId', component:emailDetails},
    // {path:'/book', component:bookApp},
    // {path:'/book/:bookId', component:bookDetails},
    // {path:'/about',component:aboutPage,
    // children:[
    //     {path:'', component:aboutDetails},
    //     {path:'team', component:aboutTeam},
    // ]
    // },
];

// export default routes

export const router = new VueRouter({routes});
