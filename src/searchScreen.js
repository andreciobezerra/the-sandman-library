import { firestore } from './firebase'
import { mainScreen } from './mainScreen'

export const searchScreen = (() => {
  const load = () => {
    $('#dashBoard').empty()
    $('#controlBoard').empty().load('components/searchScreen.html #searchScreen')
  }

  const search = async (bookTitle) => {
    let bookSearch = await firestore.collection('books').where('title', '==', bookTitle).get()
    if(bookSearch.size === 0){
      $('#dashBoard').html(`<h2 class="text-danger">The book ${bookTitle} doesn't exist in your library!</h2>`)
      setTimeout(()=>{
        $('#dashBoard').empty()
        mainScreen.load()
      }, 1500)
      return    
    }
  
    let bookData = bookSearch.docs[0].data()
    let bookID = bookSearch.docs[0].id
    $('#dashBoard').append(
      `<table class="text-center table table-dark table-hover">
        <tr>
          <td> ${bookData.title}</td> 
          <td> ${bookData.author}</td> 
          <td> ${bookData.pages}</td> 
          <td> ${bookData.status}</td>
          <td>
            <button id="editBtn2" class="btn-sm btn-warning mx-2" title="Edit this book" value='${JSON.stringify({ id: bookID, data: bookData })}'>Update          </button> 
            <button id="deleteBtn" class="btn-sm btn-danger" title="Delete this book" value='${JSON.stringify({ id: bookID, data: bookData })}'>Delete</button> 
          </td>        
        </tr>
      </table>`
    )
    
  }
  return { load, search }
})()