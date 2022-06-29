import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";

const KEEP_KEY = "keep";
_createKeeps();

export const keepService = {
  query,
  remove,
  save,
  getEmptybook,
  get,
  addReview,
  getReviews,
  getBooksFromGoogle,
  saveChangedKeep,
};

function query() {
  return storageService.query(KEEP_KEY);
  // return utilService.loadFromStorage(KEEP_KEY);
}

function remove(bookId) {
  // return Promise.reject('Big Error Badd')
  return storageService.remove(KEEP_KEY, bookId);
}

function get(bookId) {
  return storageService.get(KEEP_KEY, bookId);
}

function save(book) {
  if (book.id) return storageService.put(KEEP_KEY, book);
  else return storageService.post(KEEP_KEY, book);
}
function saveChangedKeep(keep){
  return storageService.put(KEEP_KEY, keep)
}

function getReviews(bookId) {
  return storageService.query(bookId);
}

function getEmptybook() {
  return {
    id: "",
    vendor: "",
    maxSpeed: 0,
    authors: "",
    categories: ["", ""],
    listPrice: {
      amount: 0,
      currencyCode: "ILS",
      isOnSale: false,
    },
  };
}

function getBooksFromGoogle(searchKey) {
  return storageService.query("google-books")
  .then(() => axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${searchKey}`))
  .then(res => res.data.items)
  .then(books => storageService.postMany("google-books", books))
}
function _createbook(vendor, maxSpeed = 250) {
  const book = {
    id: utilService.makeId(),
    vendor,
    maxSpeed,
  };
  return book;
}

function addReview(bookId, review) {
  storageService.post(bookId, review);
}

function _createKeeps() {
  let keeps = utilService.loadFromStorage(KEEP_KEY);
  if (!keeps || !keeps.length) {
    keeps=[
      {
        title:'ooga booga',
        freeText:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, molestias?',
        type:'text',
        id:101
      },
      {
        title:'ooga booga',
        freeText:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, molestias?',
        type:'video',
        url:'https://www.youtube.com/embed/tgbNymZ7vqY',
        id:102
      },
      {
        title:'ooga booga',
        freeText:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, molestias?',
        type:'img',
        url:'https://i.pinimg.com/474x/b6/0f/20/b60f20b811cbe9a73bfbc2658ff53b74.jpg',
        id:103
      },
      {
        title:'ooga booga',
        freeText:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, molestias?',
        type:'todo-list',
        id:104
      },
    ]

    utilService.saveToStorage(KEEP_KEY, keeps);
  }
  return keeps;
}




