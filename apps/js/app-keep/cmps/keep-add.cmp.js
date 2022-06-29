export default {
    template: `
    <section class="keep-input">  
            <div class="inputs">

            <blockquote contenteditable="true" ref="titleInput" @input="changeTitle()" @click="openType('text')" >
                <p class="new-keep-title">start a new keep</p>
            </blockquote>
                    <form v-if="keepType" @submit.prevent="save">

                        <h2 v-if="keepType === 'img'">img</h2>
                        
                        <blockquote contenteditable="true" ref="freeTxtInput" @input="changeFreeText()" v-else-if="keepType === 'text'">
                            <p class="free-text-input">text</p>
                        </blockquote>
                        
                        <h1 v-else-if="keepType === 'video'">video</h1>
                        
                        <h1 v-else-if="keepType === 'todo'">no</h1>
                        
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
            keepType:null,
            keep:{
                title:'',

            }
        };
    },
    created() { },
    methods: {
        openType(type) {
            this.keepType=type
            console.log(this.keepType);
        },
        save() {
            console.log('hi');
          },
          changeTitle(){
                this.keep.title=this.$refs.titleInput.innerText
            
        },
        changeFreeText(){
                this.keep.freeText=this.$refs.freeTxtInput.innerText

        },
    },
    computed: {},
    mounted() { },
    unmounted() { },
    components: {},
};
