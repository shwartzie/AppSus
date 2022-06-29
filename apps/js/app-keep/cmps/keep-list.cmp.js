import keepPreview from "./keep-preview.cmp.js"

export default {
    props: ["keeps"],
    template: `
        <section class="keep-list">
            <ul>
                <li v-for="keep in keeps" :key="keep.id" class="keep-preview-container" >
                <keep-preview :keep="keep" />
                <button @click="removeKeep(keep.id)"> X</button>
                
                   <!-- <div class="actions">
                       <router-link :to="'/keep/'+keep.id">Details</router-link>
                       <router-link :to="'/keep/edit/'+keep.id">Edit</router-link>
                       <button @click="remove(keep.id)">X</button>
                    </div> -->
                </li>

            </ul>
        </section>
    `,
    components: {
        keepPreview,
    },
    methods: {
        removeKeep(keepId){
            this.$emit("remove", keepId)
        }
        
        // select(keep) {
        //     this.$emit("selected", keep)
        // },
    },
    computed: {},
}
