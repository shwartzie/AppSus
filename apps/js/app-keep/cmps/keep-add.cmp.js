export default {
    template: `
    <section class="keep-input">  
            <div class="inputs">

            <blockquote contenteditable="true" ref="titleInput" @input="changeTitle()" @click="openType('text')" >
                <p class="new-keep-title">start a new keep</p>
            </blockquote>
                    <form v-if="keepType" @submit.prevent="save">
                    <input v-if="keepType === 'img'" @input="inputImgUrl" placeholder="image url:">
                        
                        <blockquote contenteditable="true" ref="freeTxtInput" @input="inputFreeText()" v-else-if="keepType === 'text'">
                            <p class="free-text-input">text</p>
                        </blockquote>
                        <input v-else-if="keepType === 'video'" @input="inputVidUrl" placeholder="video url:">
                        
                        <input v-else-if="keepType === 'todo'"  @input="inputVidUrl" placeholder="video url:">
                        
                        <blockquote contenteditable="true" ref="todoInput" @input="inputTodoList()" >
                             <p class="new-keep-title">start a Todo</p>
                         </blockquote>

                        <div class="keep-buttons" contenteditable="false">
                            <button @click="openType('text')">text</button>
                            <button @click="openType('img')">img</button>
                            <button @click="openType('video')">video</button>
                            <button @click="openType('todo')">todo list</button>
                        </div>
                        <button >Add</button>
                    </form>
            </div>   
                    
    </section>
    `,
    data() {
        return {
            keepType: null,
            keep: {
                title: '',
                typeOfKeep: 'text',
                contentOfType: '',

            }
        };
    },
    created() { },
    methods: {
        openType(type) {
            this.keepType = type
            console.log(this.keepType);
        },
        save() {
            console.log(this.keep);
        },
        changeTitle() {
            this.keep.title = this.$refs.titleInput.innerText

        },
        inputFreeText() {
            this.keep.typeOfKeep = 'text'
            this.keep.contentOfType = this.$refs.freeTxtInput.innerText
        },
        inputImgUrl(value) {
            this.keep.typeOfKeep = 'img'
            this.keep.contentOfType = value
        },
        inputVidUrl(value) {
            this.keep.typeOfKeep = 'video'
            this.keep.contentOfType = value
        },
        inputTodoList() {
            this.keep.typeOfKeep = 'todo'
            this.keep.contentOfType = this.$refs.todoInput.innerText
        },
    },
    computed: {},
    mounted() { },
    unmounted() { },
    components: {},
};
