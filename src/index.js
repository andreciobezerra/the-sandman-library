import { mainScreen } from './mainScreen'
import { addScreen } from './addScreen'
import { selectionScreen } from './selectionScreen'
import { searchScreen } from './searchScreen'
import { editScreen } from './editScreen'

/* At start */
mainScreen.load()

/* Common Events */
$(document).on('click', '#cancelBtn', () => mainScreen.load())

/* Main screen events */
$(document).on('click', '#listBooks', () => mainScreen.listBooks())
$(document).on('click', '#addBook', () => addScreen.load())
$(document).on('click', '#editBook', () => selectionScreen.load())
$(document).on('click', '#searchBook', () => searchScreen.load())
$(document).on('click', '#editBtn2', (event) => mainScreen.toEdit(event.target.value))
$(document).on('click', '#deleteBtn', (event) => mainScreen.toDelete(event.target.value))


/* Selection screen event */
$(document).on('click', '#selectBtn', ()=> editScreen.load($('#selectBook').val()))

/* Edit Screen event */
$(document).on('click', '#updateBtn', ()=> editScreen.updateBooks(
  $('#titleEdit').val().toLowerCase(),
  $('#authorEdit').val().toLowerCase(),
  $('#pagesEdit').val(),
  ($('input[name*=statusEdit]')[0].checked) ? 'Read' : 'Unread',
  $('#bookID').val()
))

/* Add Screen event */
$(document).on('click', '#saveBtn', () => addScreen.save(
    $('#title').val().toLowerCase(),
    $('#author').val().toLowerCase(),
    $('#pages').val(),
    ($('input[name*=status]')[0].checked) ? 'Read' : 'Unread'
  )
)

/* Search Screen event */
$(document).on('click', '#searchBtn', () => searchScreen.search($('#bookToSearch').val().toLowerCase()))

