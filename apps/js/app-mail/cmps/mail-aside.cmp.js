import mailCompose from "./mail-compose.cmp.js";
export default {
    template: `
     <aside class="aside">
        <div class="aside-funcs">
            <mail-compose/>
            <a class="btn-mail-aside" @click="">Inbox</a>
            <a class="btn-mail-aside" @click="filter()">Starred</a>
            <a class="btn-mail-aside" @click="" >Sent Mail</a>
            <a class="btn-mail-aside" @click="">Drafts</a>
        </div>
     </aside>
    `,
    data() {
        return {
            filterBy: {
                starred: ''
            }
        };
    },
    created() { },
    methods: {
        filter() {

        }
    },
    computed: {},
    unmounted() { },
    components: {
        mailCompose
    }
};