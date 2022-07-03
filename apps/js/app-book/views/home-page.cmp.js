import appHeader from "../cmps/app-header.cmp.js";
import appFooter from "../cmps/app-footer.cmp.js";
export default {
  template: `
 <section class="home-page app-main">
    <header>
    <router-link to="/book"><i class="fa-solid fa-book"></i></router-link>
        <router-link to="/about"><i class="fa-solid fa-address-card"></i></router-link>
        <router-link to="/mail"><i class="fa-solid fa-envelopes-bulk"></i></router-link>
        <router-link to="/keep"><i class="fa-solid fa-folder"></i></router-link>
    </header>
    <h3>Home sweet home</h3>
    <router-link to="/book">s</router-link>
    <!-- <img src="img/homeScreen.gif" alt="" class="home-img"> -->
    <!-- <div class="home-nav">


    </div> -->

 </section>
`,
  components: {
    appFooter,
    appHeader,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
  unmounted() {},
};
