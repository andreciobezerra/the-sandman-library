export default mainScreen = (() => $('controlBoard').html(
  <section id="main">
    <div class="d-flex justify-content-center mt-3">
      <button type="button" class="btn-lg btn-primary mx-2 " onclick="addScreen()">Add book</button>
      <button type="button" class="btn-lg btn-success mx-2" onclick="list()">List the books</button>
    </div>
    <div class="d-flex justify-content-center mt-3">
      <button type="button" class="btn-lg btn-warning mx-2" onclick="editScreen()">Edit book</button>
      <button type="button" class="btn-lg btn-secondary mx-2" onclick="searchScreen()">Search a book </button>
    </div>
  </section>) )()