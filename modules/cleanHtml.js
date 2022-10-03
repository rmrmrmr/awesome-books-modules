export function cleanHTML() {
  while (listBooks.firstChild) {
    listBooks.removeChild(listBooks.firstChild);
  }
}