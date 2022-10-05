import { addBook } from './modules/createBooks.js';
import {
  displayList, displayAddNew, displayContact, loadBooks,
} from './modules/functions.js';
import {
  form, navList, navAddNew, navContact,
} from './modules/selectors.js';

const eventListeners = () => {
  // add book
  form.addEventListener('submit', addBook);

  // book DOM
  document.addEventListener('DOMContentLoaded', loadBooks);

  // display sections
  navList.addEventListener('click', displayList);
  navAddNew.addEventListener('click', displayAddNew);
  navContact.addEventListener('click', displayContact);
};

eventListeners();