export default {
    template: `
        <header class="mail-header-keep">
            <nav class="nav-bar">
                <div class="keep-logo-and-hamburger">
                    <!-- <a class="hamburger" @click="openMenu">
                        ☰
                    </a> -->
                    <div class="logo-and-keep">
                        <img src="../../../img/keep-logo.png" alt="" class="keep-logo">
                    </div>
                    <h1>Keep</h1>
                </div>
                <div class="keep-filter-container">
                <button @click="setToCol"></button>
                <input placeholder="title" type="text" v-model="filterBy.txt" @input="filter" ref="textInput">
                </div>
                <div class="apps-nav" @click="isOpen = !isOpen">
                <i class="fa-solid fa-list-ul"></i>
                    <div v-if="isOpen" :class="showExpansionModal">
                        <router-link to="/"><i class="fa-solid fa-house"></i></router-link>
                        <router-link to="/book"><i class="fa-solid fa-books"></i></router-link>
                        <router-link to="/about"><i class="fa-solid fa-address-card"></i></router-link>
                        <router-link to="/mail"><i class="fa-solid fa-envelopes-bulk"></i></router-link>
                        <router-link to="/keep"><i class="fa-solid fa-folder"></i></router-link>
                    </div>
                </div>
            </nav>
        </header>
    
    `,
    data() {
        return {
            isOpen: false,
            filterBy: {
                        txt: "",
                    },
        };
    },
    mounted() {
                this.$refs.textInput.focus()
            },
    created() { 
       
    },
    methods: {
        filter() {
                        this.$emit("filtered", { ...this.filterBy })
                    },
        setToCol(){
                        this.$emit("col", 'flex-column-wrap')
                    }
    },
    computed: {
        showExpansionModal() {
            return this.isOpen ? 'apps-nav-modal' : ''
        }
    },
    unmounted() { },
}



// export default {
//     template: `
//         <header class="app-header">
//             <div class="logo">
//                 <h3>keep</h3>
//             </div>
//             <h1>logo</h1>
//             <button @click="setToCol"></button>
//             <input placeholder="title" type="text" v-model="filterBy.txt" @input="filter" ref="textInput">
//             <nav class="nav-bar">

//                 <router-link to="/">Home</router-link>|
//                 <router-link to="/book">books</router-link>|
//                 <router-link to="/about">About</router-link>|
//                 <router-link to="/mail">Mail</router-link>|
//                 <router-link to="/keep">keep</router-link>|

//             </nav>
//         </header>
    
//     `,
//        data() {
//         return {
//             filterBy: {
//                 txt: "",
//             },
//         }
//     },
//     mounted() {
//         this.$refs.textInput.focus()
//     },
//     methods: {
//         filter() {
//             this.$emit("filtered", { ...this.filterBy })
//         },
//         setToCol(){
//             this.$emit("col", 'flex-column-wrap')
//         }
//     },
// }
