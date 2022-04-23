var searchInput = document.querySelector('#search-input');
var selectEl = document.querySelector('#format-input');
var searchForm = document.querySelector('#search-form')

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var searchTerm = searchInput.value.trim();
    var formatSelect = selectEl.value;

  })