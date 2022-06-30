export default {
    props: ["keep"],
  template: `
  <h1>{{renderList}}</h1>
  `,
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {
    renderList(){
        return `${this.keep}`
    }
  },
  mounted() {},
  unmounted() {},
  components: {},
};
