import appHeader from "../cmps/app-header.cmp.js";
import appFooter from "../cmps/app-footer.cmp.js";
import keepAside from "../cmps/keep-aside.cmp.js";
import { keepService } from "../services/keep-service.js";
import keepList from "../cmps/keep-list.cmp.js";
import keepAdd from "../cmps/keep-add.cmp.js";
export default {
  template: `
    <app-header />
    <section class="keeps">
      <keep-aside/>
      <section class="main-content">
        <keep-add @add="addkeep"/>
        
        <keep-list :keeps="keepsForDisplay" @remove="removekeep"/>
      </section>

    </section>
    <app-footer /> 
`,
  data() {
    return {
      keeps:null,
    };
  },
  components: {
    appHeader,
    appFooter,
    keepAside,
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
          this.keeps.splice(idx, 1);
          eventBus.emit("show-msg", { txt: "Deleted successfully", type: "success" });
        })
        .catch((err) => {
          eventBus.emit("show-msg", { txt: "Error - try again later", type: "error" });
        });
    },
    addkeep(keep){
      console.log(keep);
     keepService.save(keep).then(() => {
        this.$router.push("/keep")
        this.keeps.push(keep)
        // eventBus.emit("show-msg", { txt: "Saved/Update successfully", type: "success" })
      })
    }
  },
  computed: {
    keepsForDisplay() {
      // if (!this.filterBy) return this.keeps;
      // const filterKeeps = this.keeps.filter((keep) => {
      //   return (
      //     keep.listPrice.amount < this.filterBy.toPrice &&
      //     keep.listPrice.amount > this.filterBy.fromPrice &&
      //     keep.title.includes(this.filterBy.title)
      //   );
      // });
      return this.keeps;

    },
  },
  unmounted() {},
};
