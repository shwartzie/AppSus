import mailFilter from "./mail-filter.cmp.js";
export default {
    template: `
        <header class="mail-header">
            <nav class="nav-bar">
                <div class="logo-and-hamburger">
                    <a class="hamburger" @click="openMenu">
                        <i class="fa fa-bars"></i>
                    </a>
                    <img src="../img/gmail-logo.png" alt="">
                    <h3>Mail</h3>
                    <mail-filter @filtered="setFilter" />
                </div>
                <div class="apps-nav">
                    <router-link to="/">Home</router-link>|
                    <router-link to="/book">books</router-link>|
                    <router-link to="/about">About</router-link>|
                    <router-link to="/mail">Mail</router-link>|
                    <router-link to="/keep">Keep</router-link>|
                </div>
            </nav>
        </header>
    
    `,
    data() {
        return {
        };
    },
    created() { 
       
    },
    methods: {
        setFilter(txt) {
            this.$emit('filtered', txt)
        },
    },
    computed: {
        
    },
    unmounted() { },
    components: {
        mailFilter
    }
}


