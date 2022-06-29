import mailPreview from "../cmps/mail-preview.cmp.js";
export default {
    props: ["mails"],
    template: `
    <section class="mail-list">
            <ul class="mail-ul">
                <li v-for="mail in mails" :key="mail.id" class="mails-preview-container" >
                    <mail-preview :mail="mail" @click="selectedMail"/>
                    <div class="actions">
                        <button class="mail-star" :class="onStar" @click="selectedStar = !selectedStar">✰</button>
                        <button @click=""></button>
                    </div>
                </li>
            </ul>
        </section>
   
`,
    data() {
        return {
            mail: null,
            selectedStar: false
        };
    },
    created() { },
    methods: {
        selectedMail(mail) {
            this.$emit('selected', mail);
            this.mail = mail
        },
    },
    computed: {
        onStar() {
            return this.selectedStar ? 'star-active' : '' 
        }
    },
    unmounted() { },
    components: {
        mailPreview
    },
};