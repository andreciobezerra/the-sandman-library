import { firestore } from './firebase'
import { editScreen } from './editScreen'

export const mainScreen = (() => {
  const load = () => {
    $('#dashBoard').empty()
    $('#controlBoard').empty().load('components/mainScreen.html #mainScreen')
  }
  const toEdit = (book) => {
    $('#dashBoard').empty()
    editScreen.load(book)
  }
  const toDelete = async (book) => {
    let bookToDelete = JSON.parse(book)
    await firestore.doc(`books/${bookToDelete.id}`).delete()
    $('#dashBoard').empty().html(`<h2 class="text-danger">The book ${bookToDelete.data.title} was deleted!</h2>`)
    setTimeout(() => {
      $('#dashBoard').empty()
      load()
    }, 1500)
  }

  const filllines = (books) => {
    books.forEach(book => $('#table').append(
      `<tr>
        <td> ${book.data().title}</td> 
        <td> ${book.data().author}</td> 
        <td> ${book.data().pages}</td> 
        <td> ${book.data().status}</td>
        <td>
          <button id="editBtn2" class="btn-sm btn-warning mx-2" title="Edit this book" value='${JSON.stringify({ id: book.id, data: book.data() })}'>Update</i>
          </button> 
          <button id="deleteBtn" class="btn-sm btn-danger" title="Delete this book" value='${JSON.stringify({ id: book.id, data: book.data() })}'>Delete</button> 
        </td>        
      </tr>`
    )
    )

    $('#table').removeClass('d-none')
  }
  const listBooks = async () => {
    $('#dashBoard').empty().load('components/table.html #table')
    let books = await firestore.collection('books').get()
    filllines(books)
  }
  return { load, listBooks, toEdit, toDelete, filllines }
})()

