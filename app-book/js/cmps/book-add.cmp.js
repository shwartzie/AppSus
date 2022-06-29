import { bookService } from "../services/book-service.js"
import { eventBus } from "../services/eventBus-service.js"


export default {
  template: `
       <section class="book-add">
    <input placeholder="title" type="text" v-model="searchBook" v-on:keyup.enter="filter" ref="textInput">
    <br>
    <li v-for="book in bookResults" :key="book.id">
        <ul>{{book.volumeInfo.title}} </ul>
        <p>{{book.etag}}</p>
        <button @click="add(book.id)">+</button>
            
        </li>

 </section>
    `,
  data() {
    return {
      searchBook: "",
      bookResults:null,
    };
  },
  mounted() {
    this.$refs.textInput.focus();
  },
  methods: {

    filter() {
        console.log(this.searchBook);
        bookService.getBooksFromGoogle(this.searchBook).then((res)=>{
            this.bookResults=res
            console.log(this.bookResults);
        })
    },
    add(bookId){
      
        var selBook=this.bookResults.find((book)=>{
            return book.id=bookId
        })
        var{volumeInfo:{title,categories,imageLinks:{thumbnail},publishedDate ,description,subtitle,pageCount,language}}=selBook
        const googleBook = {
            title,
            categories,
            thumbnail,
            publishedDate,
            description,
            subtitle,
            pageCount,
            language,
            thumbnail,
            listPrice: {
                    amount: 109,
                    currencyCode: "EUR",
                    isOnSale: false,
                  },
            
        }
        console.log(googleBook);
        bookService.save(googleBook).then((book) => {
            this.$router.push("/book")
            eventBus.emit("show-msg", { txt: "Saved/Update successfully", type: "success" })
        })
    }
  },
};
