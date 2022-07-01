import mailPreview from "../cmps/mail-preview.cmp.js"
import { mailService } from "../services/mail-service.js"
export default {
    props: ["mails", "selectedList"],
    template: `
        <section class="mail-list">
            <div>{{checkEmails(selectedList)}}</div>
            <ul class="mail-ul">
                <div  v-for="mail in mails" :key="mail.id">
                    <li class="mails-preview-container" @mouseover="mouseOver">
                        <div class="mail-container">
                            <div class="mail-actions">
                                <input class="mail-check-box" type="checkbox" v-model="isChecked" @click="setCheck(mail)"/>
                                <button class="mail-star" :class="getActiveStarClass(mail)" @click="onStar(mail)">
                                    <i class="fa-solid fa-star"></i>
                                </button> 
                            </div>
                            <mail-preview :mail="mail" @selected="onSelectedMail"/>
                            <div class="extra-mail-actions">
                                <button @click="onDelete(mail)"><i class="fa-solid fa-trash-can"></i></button>
                                <button @click="onArchive(mail)"><i class="fa-solid fa-box-archive"></i></button>
                                <button @click="onRead(mail)" :class="showEnvelope(mail)"></button>
                            </div>
                        </div>
                    </li>
                </div>
            </ul>
        </section>
`,
    data() {
        return {
            starId: null,
            isHover: false,
            list: null
        };
    },
    created() {
      
    },
    methods: {
        onSelectedMail(mail) {
            this.$emit('selected', { ...mail })
        },
        onStar(mail) {
            mail.isStarred = !mail.isStarred
            mailService.save(mail)
        },
        setCheck(mail) {
            mail.isChecked = !mail.isChecked
            mailService.save(mail)
        },
        mouseOver() {
            this.isHover = !this.isHover
        },
        onDelete(mail) {
            this.$emit('removed', mail.id)
        },
        onArchive(mail) {
            mail.isArchived = !mail.isArchived
            mailService.save(mail)
        },
        onRead(mail) {
            mail.isRead = !mail.isRead
            mailService.save(mail)
        },
        getActiveStarClass(mail) {
            return mail.isStarred ? 'star-active' : ''
        },
        showEnvelope(mail) {
            return mail.isRead ? 'fa-solid fa-envelope-open' : 'fa-solid fa-envelope'
        },
        checkEmails(list) {
            if (list === 'inbox') {
                return 'Sorry There is no mails in this mailbox'
            } else if (list === 'starred') {
                return 'Sorry, No starred emails were found. In order to have starred emails please mark them in the Inbox'
            } else if (list === 'draftedMsg') {
                return 'Sorry, No drafted emails were found. In order to have drafted emails you will have to have unfinishied Composer'
            } else if (list === 'sentMsg') {
                return 'Sorry, No emails were sent. You will see them as here as soon as they will be sent!'
            } else if (list === 'archived') {
                return 'Sorry, No emails were archived. In order to have archived emails please mark them in the Inbox'
            }
        }

    },
    computed: {
        
    },
    components: {
        mailPreview,
    },
};