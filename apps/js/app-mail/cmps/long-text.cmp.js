export default {
	props: ['text'],
	template: `
    {{formatedText}} <span v-if="longText">...</span> <span v-if="longText" @click="isMore = !isMore">{{envelope}}</span>
	`,
	data() {
		return {
			isMore: false,
			longText: this.text.length > 100,
		}
	},
	methods: {},
	computed: {
		formatedText() {
			return this.isMore ? this.text : this.text.slice(0, 100)
		},
		envelope() {
			return  this.isMore ? '<i class="fa-regular fa-envelope"></i>' : '<i class="fa-regular fa-envelope-open"></i>'
		}
	},
}
