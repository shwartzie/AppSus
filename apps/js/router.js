import bookApp from "./app-book/views/book-app.cmp.js"
import homePage from "./app-book/views/home-page.cmp.js"
import aboutPage from "./app-book/views/about-page.cmp.js"
import bookDetails from "./app-book/views/book-details.cmp.js"
import bookEdit from "./app-book/views/book-edit.cmp.js"

const routes = [
    {
        path: "/",
        component: homePage,
    },
    {
        path: "/about",
        component: aboutPage,
    },
    {
        path: "/book",
        component: bookApp,
    },
    {
        path: "/book/:bookId",
        component: bookDetails,
    },
    {
        path: "/book/edit/:bookId?",
        component: bookEdit,
    },
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory(),
})
