export default {
    template: `
          <header class="mail-header-keep">
              <nav class="nav-bar home-page">
                  <div class="apps-nav" @click="isOpen = !isOpen">
                  <i class="fa-solid fa-list-ul"></i>
                      <div v-if="isOpen" :class="showExpansionModal">
                          <router-link to="/"><i class="fa-solid fa-house"></i></router-link>
                          <router-link to="/book"><i class="fa-solid fa-book"></i></router-link>
                          <router-link to="/about"><i class="fa-solid fa-address-card"></i></router-link>
                          <router-link to="/mail"><i class="fa-solid fa-envelopes-bulk"></i></router-link>
                          <router-link to="/keep"><i class="fa-solid fa-folder"></i></router-link>
                      </div>
                  </div>
                  
              </nav>
          </header>
      
      `,
    data() {
      return {
        isOpen: false,
        filterBy: {
          txt: "",
        },
        direction:false,
      };
    },
    mounted() {
      this.$refs.textInput.focus();
    },
    created() {},
    methods: {
      filter() {
        this.$emit("filtered", { ...this.filterBy });
      },
      setToCol() {
          this.direction=!this.direction
          const directionClass=this.direction ?"flex-column-wrap": ''
          this.$emit("col", directionClass);
      },
  },
  computed: {
        showIcon(){
            return this.direction ? 'fa-solid fa-table-cells':'fa-regular fa-rectangle-list'
        
        },
      showExpansionModal() {
        return this.isOpen ? "apps-nav-modal" : "";
      },
    },
    unmounted() {},
  };
  