import longText from "./long-text.cmp.js";
export default {
    props: ["mail"],
    template: `
    <main class="mail-content">
        <div class="mail" v-if="mail.sentAt">
            <div class="mail-subject" >
                To: {{mail.to}} 
            </div>
            <div class="mail-body" @click="selectedMail(mail)">
                <long-text :text="mail.body"/>
            </div>
        </div>

        <div v-else class="mail">
            <div class="mail-subject">
                {{mail.subject}} 
            </div>
            <div class="mail-body" @click="selectedMail(mail)">
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
        selectedMail(mail) {
            mail.isSelected = !mail.isSelected
            this.$emit('selected', {...mail})
        },
    },
    computed: {},
    unmounted() { },
    components: {
        longText
    }
};
