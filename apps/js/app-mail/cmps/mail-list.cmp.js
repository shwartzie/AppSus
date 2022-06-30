import mailPreview from "../cmps/mail-preview.cmp.js"
import { mailService } from "../services/mail-service.js"
export default {
    props: ["mails"],
    template: `
        <section class="mail-list">
            <ul class="mail-ul">
                <div  v-for="mail in mails" :key="mail.id">
                    <li class="mails-preview-container" @mouseover="mouseOver">
                        <div class="mail-container">
                            <div class="mail-actions">
                                <input class="mail-check-box" type="checkbox" v-model="isChecked" @click="setCheck(mail, isChecked = !isChecked)"/>
                                <button class="mail-star" :class="onStarActive" @click="onStar(mail, activeStar = !activeStar)">✰</button> 
                            </div>
                            <mail-preview :mail="mail" @selected="onSelectedMail"/>
                            <div class="extra-mail-actions">
                                <button @click="onDelete(mail)">Delete</button>
                                <button @click="onArchive(mail)">Archive</button>
                            </div>
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
            isChecked: false,
            isHover: false
        };
    },
    created() { },
    methods: {
        onSelectedMail(mail) {
            this.$emit('selected', mail)
        },
        onStar(mail, activeStar) {
            this.starId = mail.id
            this.activeStar = activeStar
            mail.isStarred = activeStar
            mailService.save(mail)
            
        },
        setCheck(mail, isChecked) {
            // console.log(mail)
        },
        mouseOver() {
            this.isHover = !this.isHover
        },
        onDelete(mail) {
            this.$emit('removed', mail.id)
        },
        onArchive(mail) {
            mail.isArchived = true
            mailService.save(mail)
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