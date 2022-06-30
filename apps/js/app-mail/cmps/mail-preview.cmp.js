import longText from "./long-text.cmp.js";
export default {
    props: ["mail"],
    template: `
    <main class="mail-content">
        <div class="mail">
            <div class="mail-subject">
                {{mail.subject}} 
            </div>
            <div class="mail-body">
                {{mail.body}} 
                <long-text :text="mail.body"/>
            </div>
            
        </div>
    </main>
`,
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
    components: {
        longText
    }
};
