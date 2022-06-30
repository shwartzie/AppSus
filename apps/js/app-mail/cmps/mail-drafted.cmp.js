import mailPreview from "../cmps/mail-preview.cmp.js"
import mailCompose from "./mail-compose.cmp.js"
import { mailService } from "../services/mail-service.js"
export default {
    props: ["mails"],
    template: `
    <section class="mail-list">
            <ul class="mail-ul">
                <div v-for="mail in mails" :key="mail.id">
                    <li class="mails-preview-container" v-if="mail.isDrafted">
                        <mail-preview :mail="mail" @click="selectedMail(mail) "/>
                        <mail-compose v-if="selected" :class="showCompose" @open="setOpenCompose"/>
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
            starId: null,
            mail: null,
            selected: false,
            isOpen: false
        };
    },
    created() { },
    methods: {
        selectedMail(mail) {
            this.mail = mail
            this.selected = !this.selected
            console.log(mail)
            // this.$emit('selected', mail);
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
        setOpenCompose(isOpen) {
            this.selected = isOpen   
        }
        
    },
    computed: {
        onStarActive() {
            return this.activeStar ? 'star-active' : ''
        },
        showCompose() {
            return this.mail ? 'compose-modal' : ''
        },
        
    },
    unmounted() { },
    components: {
        mailPreview,
        mailCompose
    },
};