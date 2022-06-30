import { keepService } from "../services/keep-service.js";
import longText from "../../app-mail/cmps/long-text.cmp.js";
import todoKeep from "../cmps/todo-keep.cmp.js";



let keepTimer
export default {
  props: ["keep"],
  template: `
  
    <div  class="keep" >
    <cite contenteditable="true" ref="titleInput" @input="changeTitle(keep)">{{keep.title}}</cite>
        <div v-if="keep.type === 'img'">
        <img :src="keepImgUrl" alt="">
        </div>
        <div v-else-if="keep.type === 'text'">
        <blockquote contenteditable="true" ref="freeTxtInput" @input="changeFreeText(keep)">
        <long-text :text="keep.contentOfType"/>
      </blockquote>
        </div>
        <div v-else-if="keep.type === 'video'">
        <iframe width="220" height="115" :src="keepVidUrl" frameborder="0" gesture="media" allow="autoplay; encrypted-media" allowfullscreen> </iframe>
        </div>
        <div v-else-if="keep.type === 'todo'">
        <todo-keep :keep="keep" @update="updateKeep" />
        </div>
    </div>
`,

  data() {
    return {
    };
  },
  methods: {

    changeTitle(keep){
        clearTimeout(keepTimer)
        keepTimer=setTimeout(() => {
            keep.title=this.$refs.titleInput.innerText
            keepService.saveChangedKeep(keep)
        }, 500)
    },
    changeFreeText(keep){
        clearTimeout(keepTimer)
        keepTimer=setTimeout(() => {
            keep.contentOfType=this.$refs.freeTxtInput.innerText
            keepService.saveChangedKeep(keep)
        }, 500)
    },
    updateKeep(keep){
      keepService.saveChangedKeep(keep)
    }
  },
  computed: {
    keepVidUrl() {
      return `${this.keep.contentOfType}`;
    },
    keepImgUrl(){
        return `${this.keep.contentOfType}`; 
    },
    checkPrice() {
      return { low: this.keep.listPrice.amount < 20, high: this.keep.listPrice.amount > 150 };
    },
  },
  components: {
    longText,
    todoKeep,
}
};
