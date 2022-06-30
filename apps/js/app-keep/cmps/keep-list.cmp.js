import keepPreview from "./keep-preview.cmp.js"

export default {
    props: ["keeps"],
    template: `
        <section class="keep-list">
            <!-- <ul> -->
                <li v-for="keep in keeps" :key="keep.id" class="keep-preview-container" :style="readStyle(keep)" >
                <keep-preview :keep="keep" />
                <button @click="removeKeep(keep.id)"> X</button>
                <button @click="dupKeep(keep)"> dup it</button>
                <button @click="pinnedKeep(keep.id)" v-if="!keep.isPinned"> 📌</button>
                <button @click="pinnedKeep(keep.id)" v-else> ⭐</button>
                
                   <!-- <div class="actions">
                       <router-link :to="'/keep/'+keep.id">Details</router-link>
                       <router-link :to="'/keep/edit/'+keep.id">Edit</router-link>
                       <button @click="remove(keep.id)">X</button>
                    </div> -->
                </li>

            <!-- </ul> -->
        </section>
    `,
    components: {
        keepPreview,
    },
    methods: {
        removeKeep(keepId){
            this.$emit("remove", keepId)
        },        
        // select(keep) {
        //     this.$emit("selected", keep)
        // },
        pinnedKeep(keepId){
            console.log(keepId);
            this.$emit("pinned", keepId)
        },
        dupKeep(keep){
            this.$emit("dup", keep)
            
        },
        readStyle(keep) {
            return `background-color: #${keep.bgColor}`
        },
    },
    computed: {
    },
}
