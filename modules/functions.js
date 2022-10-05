import {
  listBooks, list, addNew, contact,
} from './selectors.js';
import { DateTime } from './luxon.js';

// Clean HTML
export const cleanHTML = () => {
  while (listBooks.firstChild) {
    listBooks.removeChild(listBooks.firstChild);
  }
};

// Display date
export const displayDate = () => {
  const date = document.getElementById('date');
  setInterval(() => {
    date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  }, 0);
};
displayDate();

// Display sections
export const displayList = () => {
  list.style.display = 'flex';
  addNew.style.display = 'none';
  contact.style.display = 'none';
};

export const displayAddNew = () => {
  list.style.display = 'none';
  addNew.style.display = 'flex';
  contact.style.display = 'none';
};

export const displayContact = () => {
  list.style.display = 'none';
  addNew.style.display = 'none';
  contact.style.display = 'flex';
};

export const loadBooks = () => {
  const data = JSON.parse(localStorage.getItem('books')) || [];

  for (let i = 0; i < data.length; i += 1) {
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-wrap');
    listBooks.appendChild(bookContainer);

    const wrap = document.createElement('div');
    wrap.classList.add('wrap');
    bookContainer.appendChild(wrap);

    const tittleBook = document.createElement('p');
    tittleBook.classList.add('tittle-book');
    tittleBook.innerText = `"${data[i].tittle}"`;
    wrap.appendChild(tittleBook);

    const authorBook = document.createElement('p');
    authorBook.classList.add('author-book');
    authorBook.innerText = `by ${data[i].author}`;
    wrap.appendChild(authorBook);

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('btn-remove');
    removeBtn.innerText = 'Remove';
    bookContainer.appendChild(removeBtn);

    removeBtn.addEventListener('click', (parameter) => {
      if (parameter.target.classList.value === 'btn-remove') {
        listBooks.removeChild(parameter.target.parentElement);
      }
    });
  }
};