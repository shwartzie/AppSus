import appHeader from "../cmps/app-header.cmp.js";
import mailAside from "../cmps/mail-aside.cmp.js";
import mailList from "../cmps/mail-list.cmp.js";
import { mailService } from "../services/mail-service.js"
export default {
    template: `
    <section class="mail-layout">
        <app-header @filtered="setFilter"/>
    </section>
    <section class="mail-content-container">
        <mail-aside/>
        <mail-list :mails="mailsForDisplay" @selected="selectMail"/>
    </section>
    `,
    components: {
        appHeader,
        mailAside,
        mailList
    },
    data() {
        return {
            mails: null,
            filterBy: null,
            selectedMail: null
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
        selectMail(mail) {
			this.selectedMail = mail
		},
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

