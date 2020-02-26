import home from './cmps/home.cmp.js'
// import about from './cmps/about.cmp.js'
// import bookApp from './cmps/book-app.cmp.js'
// import bookDetails from './cmps/book-details.cmp.js'
// import aboutPage from './cmps/about-page.cmp.js'
// import aboutDetails from './cmps/about-details.cmp.js'
// import aboutTeam from './cmps/about-team.cmp.js'


const routes = [
    {path:'/', component:home},
    {path:'/about', component:about},
    {path:'/book', component:bookApp},
    {path:'/book/:bookId', component:bookDetails},
    // {path:'/about',component:aboutPage,
    // children:[
    //     {path:'', component:aboutDetails},
    //     {path:'team', component:aboutTeam},
    // ]
    // },
];

export default routes