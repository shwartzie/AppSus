import { mailService } from "../services/mail-service.js";
import mailCompose from "../cmps/mail-compose.cmp.js"
export default {
    props: ['mails'],
    template: `
     <aside class="aside">
        <div class="aside-funcs">
            <mail-compose 
            @submittedMsg="submittedMsg
            " @draftMsg="draftedMsg"
            :class="showCompose"
            v-if="isOpen"
            :isOpen="isOpen"
            @open="setComposeModal"
            />
            <a class="btn-mail-aside compose-btn" @click="isOpen = !isOpen">Compose</a>
            <a class="btn-mail-aside" @click="noFilter">Inbox</a>
            <a class="btn-mail-aside" @click="filterByStarred">Starred</a>
            <a class="btn-mail-aside" @click="filterBySentMails" >Sent Mail</a>
            <a class="btn-mail-aside" @click="filterByDrafts">Drafts</a>
            <a class="btn-mail-aside" @click="filterByArchive">Archive</a>
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
            this.$emit('inbox', 'inbox')
        },
        filterByStarred() {
            this.$emit('starred', 'starred')
        },
        submittedMsg(mail) {
            this.mail = mail
            mailService.save(mail)
        },
        filterBySentMails() {
            this.$emit('sentMsg', 'sentMsg')
        },
        draftedMsg(mail) {
            this.mail = mail
            mailService.save(mail)
        },
        filterByDrafts() {
            this.$emit('draftedMsg', 'draftedMsg')
        },
        setComposeModal(isOpen) {
            this.isOpen = isOpen
        },
        filterByArchive() {
            this.$emit('archived', 'archived')
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