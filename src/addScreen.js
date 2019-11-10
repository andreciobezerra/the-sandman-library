import { book } from './book'
import { mainScreen } from './mainScreen'
import { firestore } from './firebase'

export const addScreen = (() => {
  const load = () => {
    $('#dashBoard').empty()
    $('#controlBoard').empty().load('components/addScreen.html #addScreen')
  }
  
  const save = async (title, author, pages, status) => {
    if ([title, author, pages].some(field => field == '')) {
      $('#dashBoard').html('<h2 class="text-danger">Please fill all fields!</h2>')
      setTimeout(() => $('#dashBoard').empty(), 1500)
      return
    }

    let bookRef = firestore.doc(`books/${title}`)
    let newBook = book(title, author, pages, status)
    bookRef.set(newBook)
      .then(() => {
        $('#dashBoard').html(`<h2 class="text-success">The book ${title} was add with success!</h2>`)
        setTimeout(()=> {
          $('#dashBoard').empty()
        },1500)
      })
      .catch((error) => {
        $('#dashBoard').html(`<h2 class="text-success">There was the following error: ${error}</h2>`)
        setTimeout(() => $('#dashBoard').empty(), 1500)
      })

    mainScreen.load()
  }

  return { load, save}
})()