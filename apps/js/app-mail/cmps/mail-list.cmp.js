import mailPreview from "../cmps/mail-preview.cmp.js";
import { mailService } from "../services/mail-service.js"
export default {
    props: ["mails"],
    template: `
        <section class="mail-list">
            <ul class="mail-ul">
                <div  v-for="mail in mails" :key="mail.id">
                    <li class="mails-preview-container">
                        <div class="actions">
                            <input type="checkbox" v-model="isChecked" @click="setCheck(mail.id)"/>
                            <button class="mail-star" :class="onStarActive" @click="onStar(mail, activeStar = !activeStar)">✰</button>
                        </div>
                        <mail-preview :mail="mail" @click="selectedMail(mail)" />
                    </li>
                </div>
            </ul>
        </section>
`,
    data() {
        return {
            activeStar: false,
            starId: null,
            isChecked: false
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
        setCheck(mailId) {
            console.log(mailId)
        }

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