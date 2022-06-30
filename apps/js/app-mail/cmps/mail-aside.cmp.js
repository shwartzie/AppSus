import { mailService } from "../services/mail-service.js";
import mailCompose from "./mail-compose.cmp.js";
export default {
    props: ['mails'],
    template: `
     <aside class="aside">
        <div class="aside-funcs">
            <mail-compose @submittedMsg="submittedMsg" @draftMsg="draftedMsg" :class="showCompose" v-if="isOpen" :isOpen="isOpen"/>
            <a class="btn" @click="isOpen = !isOpen">Compose</a>
            <a class="btn-mail-aside" @click="noFilter">Inbox</a>
            <a class="btn-mail-aside" @click="filterByStarred">Starred</a>
            <a class="btn-mail-aside" @click="filterBySentMails" >Sent Mail</a>
            <a class="btn-mail-aside" @click="filterByDrafts">Drafts</a>
        </div>
     </aside>
    `,
    data() {
        return {
            mail: null,
            isOpen: false,
        };
    },
    created() { },
    methods: {
        noFilter() {
            this.$emit('inbox')
        },
        filterByStarred() {
            const starredMails = this.mails.filter(mail => mail.isStarred)
            console.log(starredMails)
            this.$emit('starred', starredMails)
        },
        submittedMsg(mail) {
            this.mail = mail
            mailService.save(mail)
        },
        filterBySentMails() {
            mailService.query().then(() => {
                this.$emit('submittedMsg')
            })
        },
        draftedMsg(mail) {
            this.mail = mail
            mailService.save(mail)
        },
        filterByDrafts() {
            mailService.query().then(() => {
                this.$emit('draftedMsg')
            })
        }
    },
    computed: {
        showCompose() {
            return this.isOpen ? 'compose-modal' : ''
        }
    },
    unmounted() { },
    components: {
        mailCompose
    }
};