const BOOK_SELECTED = 'BOOK_SELECTED';

export const selectBook =  (book) =>{
  return{
    type: BOOK_SELECTED,
    payload: book
  }
}