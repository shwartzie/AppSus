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
        <keep-add/>
        
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
      console.log(keeps);
      this.keeps = keeps
    });
  },
  methods: {
    removekeep(id) {
      keepService
        .remove(id)
        .then(() => {
          console.log("Deleted successfully");
          const idx = this.keeps.findIndex((keep) => keep.id === id);
          this.keeps.splice(idx, 1);
          eventBus.emit("show-msg", { txt: "Deleted successfully", type: "success" });
        })
        .catch((err) => {
          console.log(err);
          eventBus.emit("show-msg", { txt: "Error - try again later", type: "error" });
        });
    },
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
