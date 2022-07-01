export default {
    props: ["keep"],
  template: `
    <h1>{{keep.title}}</h1>
  <li   v-for="content in keep.contentOfType" class="todo-in-keep">
    <h1 :class="marked(content)" @click=toggleFinish(content)>{{content.txt}}</h1>
    <button @click=removeTodo(content.id)>X</button>
  </li>
  `,
  data() {
    return {};
  },
  created() {},
  methods: {
    marked(content){
        return (content.isDone) ? 'done': ''
    },
    toggleFinish(content){
        content.isDone=!content.isDone
    },
    removeTodo(todoId) {
        const idx = this.keep.contentOfType.findIndex(todo => todo.id === todoId)
        this.keep.contentOfType.splice(idx, 1)
    }

  },
  computed: {
    renderList(){
        return `${this.keep}`
    },
    
  },
  mounted() {},
  unmounted() {},
  components: {},
};
