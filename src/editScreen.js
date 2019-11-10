import { firestore } from './firebase'
import { book } from './book'
import { mainScreen } from './mainScreen'

export const editScreen = (() => {
  const fillInfo = (book) => {
    let bookEdit = JSON.parse(book)
    $('#titleEdit').val(bookEdit.data.title)
    $('#authorEdit').val(bookEdit.data.author)
    $('#pagesEdit').val(bookEdit.data.pages)
    $('#bookID').val(bookEdit.id)

    if (bookEdit.data.status === 'Read') {
      $('#read').attr('checked', true)
    }
    else {
      $('#unread').attr('checked', true)
    }

  }

  const load = (book) => {
    $('#dashBoard').empty()
    $('#controlBoard').empty().load('components/editScreen.html #editScreen', () => fillInfo(book))
  }
  const updateBooks = async (title, author, pages, status, id) => {
    let bookToUpdate = book(title, author, pages, status)
    await firestore.doc(`books/${id}`).set(bookToUpdate)
    $('#dashBoard').html(`<h2 class="text-success">The book ${title} was update with success!</h2>`)
    setTimeout( ()=> {
      $('#dashBoard').empty()
      mainScreen.load()
    }, 1500)

    return
  }

  return { load, updateBooks }
})()