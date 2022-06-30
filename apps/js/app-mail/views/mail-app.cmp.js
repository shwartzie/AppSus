import appHeader from "../cmps/app-header.cmp.js"
import mailAside from "../cmps/mail-aside.cmp.js"
import mailList from "../cmps/mail-list.cmp.js"
import { mailService } from "../services/mail-service.js"

export default {
    template: `
    <section class="mail-layout">
        <app-header @filtered="setFilter"/>
    </section>
    <section class="mail-content-container">
        <mail-aside 
            :mails="mails" 
            @starred="setType" 
            @inbox="setType" 
            @sentMsg="setType"
            @draftedMsg="setType" 
        />
        <mail-list :mails="mailsForDisplay" @selected="selectMail"/>
    </section>
    `,
    components: {
        appHeader,
        mailAside,
        mailList,
    },
    data() {
        return {
            mails: null,
            filterBy: null,
            selectedMail: null,
            starred: null,
            filterByType: null
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
        setType(type) {
            console.log(type)
            mailService.query().then((mails) => {
                this.filterByType = type
                this.mails = mails
            })
        },
        // setAll() {
        //     this.isDrafted = false
        //     this.isFiltered = false
        //     mailService.query().then((mails) => {
        //         this.mails = mails
        //     })
        // },
        // selectMail(mail) {
        //     // this.selectedMail = mail
        //     this.filterByType = mail
        // },
        // setSentMails() {
        //     this.isFiltered = true
        //     mailService.query().then((mails) => {
        //         this.mails = mails
        //     })
        // },
        // setDraftedMails() {
        //     this.isDrafted = true
        //     mailService.query().then((mails) => {
        //         this.mails = mails
        //     })
        // }
    },
    computed: {
        mailsForDisplay() {
            if (this.filterByType === 'starred') {
                return this.mails.filter(mail => mail.isStarred)

            } else if (this.filterByType === 'inbox') {
                return this.mails.filter(mail => !mail.sentAt && !mail.isDrafted)

            } else if (this.filterByType === 'sentMsg') {
                const mail = this.mails.filter(mail => mail.sentAt)
                console.log(mail)
                return this.mails.filter(mail => mail.sentAt)

            } else if (this.filterByType === 'draftedMsg') {
                return this.mails.filter(mail => mail.isDrafted)

            }
            if (!this.filterBy) {
                return this.mails.filter(mail => !mail.sentAt && !mail.isDrafted)
            }

            const txt = this.filterBy
            const regex = new RegExp(txt, "i")
            return this.mails.filter((mail) => regex.test(mail.subject) || regex.test(mail.body))
        }
    },
    unmounted() { },
};

