import appFooter from './app-book/cmps/app-footer.cmp.js';
import appHeader from './app-book/cmps/app-header.cmp.js';
import { router } from './router.js';
import userMsg from './app-book/cmps/user-msg.cmp.js';

const options = {
    template: `
        <section>
            <app-header />
            <user-msg/>
            <router-view/>
            <app-footer />
        </section>
    `,
    components: {
        appHeader,
        appFooter,
        userMsg
    }
};


const app = Vue.createApp(options);
app.use(router)
app.mount('#app');
