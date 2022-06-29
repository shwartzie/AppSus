import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";

const MAILS_KEY = "mails";
_createMails();

// const loggedinUser = {
//   email: 'user@appsus.com',
//   fullname: 'Mahatma Appsus'
//  }

export const mailService = {
  query,
  remove,
  save,
  get,
  getEmptyMail,
};

function query() {
  return storageService.query(MAILS_KEY);
}

function remove(mailId) {
  return storageService.remove(MAILS_KEY, mailId);
}

function get(mailId) {
  return storageService.get(MAILS_KEY, mailId);
}

function save(mail) {
  if (mail.id) return storageService.put(MAILS_KEY, mail);
  else return storageService.post(MAILS_KEY, mail);
}

function getEmptyMail() {
  return  {
    id: '',
    subject: '',
    body: '',
    isRead: false,
    sentAt: null,
    to: ''
  }
}

function _createMail
(
    id = 'e101',
    subject = 'Miss you!',
    body = utilService.makeLorem(utilService.getRandomInt(15, 20)),
    isRead = false,
    sentAt = Date.now(),
    to = 'momo@momo.com'
  ) {
    return {
        id,
        subject,
        body,
        isRead,
        sentAt,
        to
    }
   
}

function _createMails() {
  let mails = utilService.loadFromStorage(MAILS_KEY);
  if (!mails || !mails.length) {
    mails =
      [
        _createMail(),
        _createMail(),
        _createMail(),
        _createMail()
      ]
    utilService.saveToStorage(MAILS_KEY, mails);
  }
  return mails;
}




