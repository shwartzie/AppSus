import appHeader from "../cmps/app-header.cmp.js";
import mailAside from "../cmps/mail-aside.cmp.js";
import mailList from "../cmps/mail-list.cmp.js";
import mailSent from "../cmps/mail-sent.cmp.js";
import mailDrafted from "../cmps/mail-drafted.cmp.js";
import { mailService } from "../services/mail-service.js";

export default {
    template: `
    <section class="mail-layout">
        <app-header @filtered="setFilter"/>
    </section>
    <section class="mail-content-container">
        <mail-aside 
            :mails="mails" 
            @starred="setStarred" 
            @inbox="setAll" 
            @submittedMsg="setSentMails"
            @draftedMsg="setDraftedMails" 
        />
        <mail-list v-if="!this.isFiltered && !this.isDrafted" :mails="mailsForDisplay" @selected="selectMail"/>
        <mail-sent :mails="mails" v-else-if="this.isFiltered" @selected="selectMail" />
        <mail-drafted :mails="mails" v-else-if="this.isDrafted" @selected="selectMail"/>
    </section>
    `,
    components: {
        appHeader,
        mailAside,
        mailList,
        mailSent,
        mailDrafted
    },
    data() {
        return {
            mails: null,
            filterBy: null,
            selectedMail: null,
            starred: null,
            isFiltered: false,
            isDrafted: false
        };
    },
    created() {
        mailService.query().then((mails) => {
            this.mails = mails
        })
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        setStarred(starred) {
            this.mails = starred
        },
        setAll() {
            this.isDrafted = false
            this.isFiltered = false
            mailService.query().then((mails) => {
                this.mails = mails
            })
        },
        selectMail(mail) {
            this.selectedMail = mail
        },
        setSentMails() {
            this.isFiltered = true
            mailService.query().then((mails) => {
                this.mails = mails
            })
        },
        setDraftedMails() {
            this.isDrafted = true
            mailService.query().then((mails) => {
                this.mails = mails
            })
        }
    },
    computed: {
        mailsForDisplay() {
            if (!this.filterBy) {
                return this.mails;
            }
            const txt = this.filterBy
            const regex = new RegExp(txt, "i")
            return this.mails.filter((mail) => regex.test(mail.subject) || regex.test(mail.body))
        }
    },
    unmounted() { },
};

