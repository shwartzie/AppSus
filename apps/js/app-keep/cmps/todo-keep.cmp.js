export default {
    props: ["keep"],
  template: `
    <h1>{{keep.title}}</h1>
  <h1>{{keep.contentOfType}}</h1>
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
