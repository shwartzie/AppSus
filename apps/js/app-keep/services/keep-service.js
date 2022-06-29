import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";

const KEEP_KEY = "keep";
_createKeeps();

export const keepService = {
  query,
  remove,
  save,
  getEmptyKeep,
  get,
  saveChangedKeep,
};

function query() {
  return storageService.query(KEEP_KEY);
  // return utilService.loadFromStorage(KEEP_KEY);
}

function remove(keepId) {
  // return Promise.reject('Big Error Badd')
  return storageService.remove(KEEP_KEY, keepId);
}

function get(keepId) {
  return storageService.get(KEEP_KEY, keepId);
}

function save(keep) {
  if (keep.id) return storageService.put(KEEP_KEY, keep);
  else return storageService.post(KEEP_KEY, keep);
}
function saveChangedKeep(keep){
  return storageService.put(KEEP_KEY, keep)
}


function getEmptyKeep() {
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

function _createKeeps() {
  let keeps = utilService.loadFromStorage(KEEP_KEY);
  if (!keeps || !keeps.length) {
    keeps=[
      {
        title:'ooga booga',
        contentOfType:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, molestias?',
        type:'text',
        id:101
      },
      {
        title:'ooga booga',
        freeText:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, molestias?',
        type:'video',
        contentOfType:'https://www.youtube.com/embed/tgbNymZ7vqY',
        id:102
      },
      {
        title:'ooga booga',
        freeText:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, molestias?',
        type:'img',
        contentOfType:'https://i.pinimg.com/474x/b6/0f/20/b60f20b811cbe9a73bfbc2658ff53b74.jpg',
        id:103
      },
      {
        title:'ooga booga',
        contentOfType:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, molestias?',
        type:'todo-list',
        id:104
      },
    ]

    utilService.saveToStorage(KEEP_KEY, keeps);
  }
  return keeps;
}




