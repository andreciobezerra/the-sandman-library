import { book } from './book'
import { mainScreen } from './mainScreen'

export const addScreen = (() => {
  let myLibrary = [{ title: 'Eu', author: 'Augusto do Anjos', pages: 160, status: 'Unread' }, { title: 'Dracula', author: 'Bram Stocker', pages: 160, status: 'Read' }]
  const load = () => $('#controlBoard').empty().load('components/addScreen.html #addScreen')
  const save = (title,author,pages,status) => {
     if ([title, author, pages].some(field => field == '')) {
      $('#dashBoard').html('<h2 class="text-danger">Please fill all fields!</h2>')
      setTimeout(() => $('#dashBoard').empty(), 1500)
      return
    }

    myLibrary.push(book(title, author, pages, status))
    $('#dashBoard').html(`<h2 class="text-success">The book ${title} was add with success!</h2>`)

    setTimeout(() => $('#dashBoard').empty(), 1500)
    mainScreen.load()

    return
  }

  return { load, save, myLibrary }
})()