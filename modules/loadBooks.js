
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
}