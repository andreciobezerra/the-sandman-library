import { addScreen } from './addScreen'

export const selectionScreen = (() => {
  const pickBooks = () => addScreen.myLibrary.map(book => $('#selectBook').append(`<option value='${JSON.stringify(book)}'>${book.title} - ${book.author}</option>`))
  const load = () => $('#controlBoard').empty().load('components/selectionScreen.html #selectionScreen', () => pickBooks())
  
  return { load }
})()