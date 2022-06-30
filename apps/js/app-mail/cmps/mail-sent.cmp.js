import mailPreview from "../cmps/mail-preview.cmp.js";
import { mailService } from "../services/mail-service.js"
export default {
    props: ["mails"],
    template: `
    <section class="mail-list">
            <ul class="mail-ul">
                <div v-for="mail in mails" :key="mail.id">
                    <li class="mails-preview-container" v-if="mail.sentAt">
                        <mail-preview :mail="mail" @click="selectedMail(mail)" />
                        <div class="actions">
                            <button class="mail-star" :class="onStarActive" @click="onStar(mail, activeStar = !activeStar)">✰</button>
                            <button @click=""></button>
                        </div>
                    </li>
                </div>
            </ul>
        </section>
`,
    data() {
        return {
            activeStar: false,
            starId: null
        };
    },
    created() { },
    methods: {
        selectedMail(mail) {
            this.$emit('selected', mail);
        },
        onStar(mail, activeStar) {
            this.starId = mail.id
            this.activeStar = activeStar
            if (activeStar) {
                mail.isStarred = true
                mailService.save(mail)
            } else {
                mail.isStarred = false
                mailService.save(mail)
            }
        },
        

    },
    computed: {
        onStarActive() {
            return this.activeStar ? 'star-active' : ''
        }
    },
    unmounted() { },
    components: {
        mailPreview,
    },
};