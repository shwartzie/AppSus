import {mailService} from '../services/mail-service.js'
export default {
    props: ['isOpen'],
    template: `
    <section>
        <div class="header-compose-modal">
            <h4>New Message</h4>
            <div class="header-functions">
                <button @click="onFullscreen">👐🏼</button>
                <button @click="onClose"> ✖</button>
            </div>
        </div>
        <form @submit="onSubmit">
            <input class="compose-input" v-model="mail.to" type="text" placeholder="To">
            <input class="compose-input"  v-model="mail.subject" type="text" placeholder="Subject">
            <textarea cols="30" rows="20" v-model="mail.body"></textarea>
            <div class="compose-footer-functions">
                <input class="btn-submit-compose" type="submit" placeholder="Send"/>
                <button @click="onDeleteMessage">Delete</button>
            </div>
        </form>
    </section>
    `,
    data() {
        return {
            open: false,
            mail: mailService.getEmptyMail()
        };
    },
    created() {
        console.log(this.open)
        this.open = this.isOpen
     },
    methods: {
        onClose() {
            this.$emit('open', this.open)
            this.open = false
            const emptyMail = mailService.getEmptyMail()
            if(this.mail !== emptyMail) {
                this.mail.isDrafted = true
                this.saveToDraft(this.mail)
            }
        },
        onSubmit() {
            setTimeout(() => {
                this.open = false
                this.mail.sentAt = Date.now()
                this.$emit('submittedMsg', this.mail)
            },500)
        },
        saveToDraft(mail) {
            this.$emit('draftMsg', mail)
        },

    },
    computed: {
        
    },
    components: {
        mailService
    }
};