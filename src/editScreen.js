export const editScreen = (() => {
  const fillInfo = (book) => {
    let bookToEdit = JSON.parse(book)
    console.log(bookToEdit)
    $('#titleEdit').val(bookToEdit.title)
    $('#authorEdit').val(bookToEdit.author)
    $('#pagesEdit').val(bookToEdit.pages)
    
    if(bookToEdit === 'Read'){
      $('#read').attr('checked', true)
    }
    else{
      $('#unread').attr('checked', true)
    }
    
  }
  
  const load = (book) => $('#controlBoard').empty().load('components/editScreen.html #editScreen', ()=>fillInfo(book))
  const updateBooks = () => console.log('to implement')
  
  return { load, updateBooks }
})()