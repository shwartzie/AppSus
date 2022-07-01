import longText from "./long-text.cmp.js";
export default {
    props: ["mail"],
    template: `
    <main class="mail-content">
        <div class="mail" v-if="mail.sentAt">
            <div class="mail-subject" >
                To: {{mail.to}} 
            </div>
            <div class="mail-body" @click="selectedMail(mail,selected = !selected)">
                <long-text :text="mail.body"/>
            </div>
        </div>

        <div v-else class="mail">
            <div class="mail-subject">
                {{mail.subject}} 
            </div>
            <div class="mail-body" @click="selectedMail(mail,selected = !selected)">
                <long-text :text="mail.body"/>
            </div>
        </div>
    </main>
`,
    data() {
        return {
            selected: false
        };
    },
    created() { },
    methods: {
        selectedMail(mail, selected) {
            this.selected = selected
            this.$emit('selected', {...mail})
        },
    },
    computed: {},
    unmounted() { },
    components: {
        longText
    }
};
