import { firestore } from './firebase'

export const selectionScreen = (() => {
  const pickBooks = async() => { 
    let books = await firestore.collection('books').get()
    books.forEach(book => $('#selectBook').append(`<option value='${JSON.stringify({id:book.id, data:book.data()})}'>${book.data().title} - ${book.data().author}</option>`)) 
 
  } 
  
  const load = () => {
    $('#dashBoard').empty()
    $('#controlBoard').empty().load('components/selectionScreen.html #selectionScreen', () => pickBooks())
}

  return { load }
})()