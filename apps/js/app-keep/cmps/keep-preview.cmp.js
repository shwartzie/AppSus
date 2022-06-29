import { keepService } from "../services/keep-service.js";
let keepTimer
export default {
  props: ["keep"],
  template: `
  
    <div  class="keep">
    <cite contenteditable="true" ref="titleInput" @input="changeTitle(keep)">{{keep.title}}</cite>
    <p>{{keep.type}}</p>
        <div v-if="keep.type === 'img'">
        <img :src="keepImgUrl" alt="">
        </div>
        <div v-else-if="keep.type === 'text'">
        <blockquote contenteditable="true" ref="freeTxtInput" @input="changeFreeText(keep)">
        <p>{{keep.contentOfType}}</p>
        </blockquote>
        </div>
        <div v-else-if="keep.type === 'video'">
        <iframe width="220" height="115" :src="keepVidUrl" frameborder="0" gesture="media" allow="autoplay; encrypted-media" allowfullscreen> </iframe>
        </div>
        <div v-else>
        Not A/B/C
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
        }, 1000)
    },
    changeFreeText(keep){
        clearTimeout(keepTimer)
        keepTimer=setTimeout(() => {
            keep.freeText=this.$refs.freeTxtInput.innerText
            keepService.saveChangedKeep(keep)
        }, 1000)
    },
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
};
