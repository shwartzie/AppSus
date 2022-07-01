
export default {
    template: `
    <section class="keep-inputs">  
            <div class="inputs">
            <!-- clear on click, when repressing the title its reset error -->
            <p class="new-keep-title keep-input" contenteditable="true" ref="titleInput" @input="changeTitle()" @click="openType('text')" >
                start a new keep
            </p>
                    <div v-if="keep.type" >
                        <p class="keep-input" contenteditable="true" v-if="keep.type === 'img'"  ref="imgInput" @input="inputImgUrl(value)">
                            image url:
                        </p>
                        
                        <p class="keep-input" contenteditable="true"  v-else-if="keep.type === 'video'" ref="vidInput" @input="inputVidUrl(value)" >
                            video url:
                        </p>

                    
                        <p class="free-text-input keep-input" contenteditable="true" ref="freeTxtInput" @input="inputFreeText()" v-else-if="keep.type === 'text'">
                          text
                        </p>

                        <p  class="new-keep-title" v-else-if="keep.type === 'todo'" contenteditable="true" ref="todoInput" @input="inputTodoList()" >
                            enter a coma seperated list
                        </p>

                        <div class="keep-buttons" >
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
