import appHeader from "../cmps/app-header.cmp.js";
import appFooter from "../cmps/app-footer.cmp.js";
import { keepService } from "../services/keep-service.js";
import keepList from "../cmps/keep-list.cmp.js";
import keepAdd from "../cmps/keep-add.cmp.js";
export default {
  template: `
    <app-header  @filtered="setFilter"/>
    <section class="keeps">
      <section class="main-content">
        <keep-add @add="addkeep"/>
        
        <keep-list :keeps="keepsForDisplay" @remove="removekeep" @pinned="pinnedKeep"/>
      </section>

    </section>
    <app-footer /> 
`,
  data() {
    return {
      keeps:null,
      filterBy:null,
    };
  },
  components: {
    appHeader,
    appFooter,
    keepList,
    keepAdd,
  },
  created() {
    keepService.query().then((keeps) => {
      this.keeps = keeps

    });
  },
  methods: {
    removekeep(id) {
      keepService
        .remove(id)
        .then(() => {
          const idx = this.keeps.findIndex((keep) => keep.id === id);
          console.log(this.keeps);
          var removedKeep=this.keeps.splice(idx, 1);
          console.log(removedKeep);
          // return removedKeep
          // eventBus.emit("show-msg", { txt: "Deleted successfully", type: "success" });
        })
        .catch((err) => {
          // eventBus.emit("show-msg", { txt: "Error - try again later", type: "error" });
        });
    },
    addkeep(keep){
      keep.bgColor=keepService.randomBC()
     keepService.save(keep).then(() => {
        this.$router.push("/keep")
        this.keeps.push(keep)
        // eventBus.emit("show-msg", { txt: "Saved/Update successfully", type: "success" })
      })
    },
    setFilter(filterBy) {
      this.filterBy = filterBy.txt;
    },
    pinnedKeep(id){
      console.log('i give up');
      // var removedKeep
      // keepService
      // .remove(id)
      // .then(() => {
      //     const idx = this.keeps.findIndex((keep) => keep.id === id);
      //     console.log(this.keeps);
      //     removedKeep=this.keeps.splice(idx, 1);
      //     console.log(removedKeep);
      //     removedKeep.isPinned=!removedKeep.isPinned
      //   })
      //   setTimeout(() => {
      //     keepService.saveStarred(removedKeep).then(() => {
      //       this.keeps.unshift(removedKeep)
      //     })
      // }, 2000)

    }
  },
  computed: {
    keepsForDisplay() {
      if (!this.filterBy) {
        return this.keeps;
    }
    const txt = this.filterBy
    const regex = new RegExp(txt, "i")
    return this.keeps.filter((keep) => regex.test(keep.title) || regex.test(keep.contentOfType)||regex.test(keep.type) )
    },
  },
  unmounted() {},
};
