
export default {
    template: `
    <section class="keep-input">  
            <div class="inputs">
            <!-- clear on click, when repressing the title its reset error -->
            <blockquote contenteditable="true" ref="titleInput" @input="changeTitle()" @click="openType('text')" >
                <p class="new-keep-title">start a new keep</p>
            </blockquote>
                    <div v-if="keep.type" >
                    <p contenteditable="true" v-if="keep.type === 'img'"  ref="imgInput" @input="inputImgUrl(value)">image url:</p>
                        
                    <p contenteditable="true"  v-else-if="keep.type === 'video'" ref="vidInput" @input="inputVidUrl(value)" >video url:</p>

                    
                        <blockquote contenteditable="true" ref="freeTxtInput" @input="inputFreeText()" v-else-if="keep.type === 'text'">
                            <p class="free-text-input">text</p>
                        </blockquote>
                        <blockquote  v-else-if="keep.type === 'todo'" contenteditable="true" ref="todoInput" @input="inputTodoList()" >
                             <p class="new-keep-title">enter a coma seperated list</p>
                         </blockquote>

                        <div class="keep-buttons" contenteditable="false">
                            <button @click="openType('text')">text</button>
                            <button @click="openType('img')">img</button>
                            <button @click="openType('video')">video</button>
                            <button @click="openType('todo')">todo list</button>
                        </div>
                        <button @click="save">Add</button>
                    </div>
            </div>   
                    
    </section>
    `,
    data() {
        return {
            keepType: null,
            keep: {
                title: '',
                type: '',
                contentOfType: '',

            }
        };
    },
    created() { },
    methods: {
        openType(type) {
            this.keep.type = type
        },
        save() {

            this.$emit("add", this.keep)
            this.keep={
                title: '',
                type: '',
                contentOfType: '',
                isPinned:false,

            }
        },
        changeTitle() {
            this.keep.title = this.$refs.titleInput.innerText
        },
        inputFreeText() {
            this.keep.type = 'text'
            this.keep.contentOfType = this.$refs.freeTxtInput.innerText
        },
        inputImgUrl() {
            this.keep.contentOfType = this.$refs.imgInput.innerText
        },
        inputVidUrl() {
            this.keep.contentOfType = this.$refs.vidInput.innerText
        },
        inputTodoList() {
            this.keep.contentOfType = this.$refs.todoInput.innerText
            
        },
        //do better
    },
    computed: {},
    mounted() { },
    unmounted() { },
    components: {},
};
