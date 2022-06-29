import { keepService } from "../services/keep-service.js";

export default {
    template: `
    <section class="keep-input">  
            <div class="inputs">

            <blockquote contenteditable="true" ref="titleInput" @input="changeTitle()" @click="openType('text')" >
                <p class="new-keep-title">start a new keep</p>
            </blockquote>
                    <form v-if="keepType" @submit.prevent="save">
                    <cite contenteditable="true" v-if="keepType === 'img'"  ref="imgInput" @input="inputImgUrl(value)">image url:</cite>
                        
                    <cite contenteditable="true"  v-else-if="keepType === 'video'" ref="vidInput" @input="inputVidUrl(value)">video url:</cite>

                    
                        <blockquote contenteditable="true" ref="freeTxtInput" @input="inputFreeText()" v-else-if="keepType === 'text'">
                            <p class="free-text-input">text</p>
                        </blockquote>
                        <blockquote  v-else-if="keepType === 'todo'" contenteditable="true" ref="todoInput" @input="inputTodoList()" >
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
                type: 'text',
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
            keepService.save(this.keep)

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
            console.log(this.$refs.imgInput.innerText);
            this.keep.contentOfType = this.$refs.imgInput.innerText
        },
        inputVidUrl(value) {
            this.keep.typeOfKeep = 'video'
            this.keep.contentOfType = this.$refs.vidInput.innerText
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
