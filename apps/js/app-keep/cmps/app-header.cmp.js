export default {
    template: `
        <header class="app-header">
            <div class="logo">
                <h3>keep</h3>
            </div>
            <h1>logo</h1>
            <button @click="setToCol"></button>
            <input placeholder="title" type="text" v-model="filterBy.txt" @input="filter" ref="textInput">
            <nav class="nav-bar">

                <router-link to="/">Home</router-link>|
                <router-link to="/book">books</router-link>|
                <router-link to="/about">About</router-link>|
                <router-link to="/mail">Mail</router-link>|
                <router-link to="/keep">keep</router-link>|

            </nav>
        </header>
    
    `,
       data() {
        return {
            filterBy: {
                txt: "",
            },
        }
    },
    mounted() {
        this.$refs.textInput.focus()
    },
    methods: {
        filter() {
            this.$emit("filtered", { ...this.filterBy })
        },
        setToCol(){
            this.$emit("col", 'flex-column-wrap')
        }
    },
}
