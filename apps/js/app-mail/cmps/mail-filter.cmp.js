// import { bookService } from "../services/book-service.js"
export default {
    template: `
    <input class="filter-mail" type="text" v-model="filterBy.subject" @input="filter" placeholder="Search..">
   `,
    data() {
        return {
            filterBy: {
                subject: '',
                starred: false
            }
        }
    },
    methods: {
        filter() {
            this.$emit("filtered", { ...this.filterBy });
        },
    },
    computed: {
       
    }
}