$(document).ready(function() {
  // Initializes search overlay plugin.
  // Replace onSearchSubmit() and onKeyEnter() with
  // your logic to perform a search and display results
  $('[data-pages="search"]').search({
    searchField: '#overlay-search',
    closeButton: '.overlay-close',
    suggestions: '#overlay-suggestions',
    brand: '.brand',
    onSearchSubmit: function(searchString) {
      console.log("Search for: " + searchString);
    },
    onKeyEnter: function(searchString) {
      console.log("Live search for: " + searchString);
      var searchField = $('#overlay-search');
      var searchResults = $('.search-results');
      clearTimeout($.data(this, 'timer'));
      searchResults.fadeOut("fast");
      var wait = setTimeout(function() {
        searchResults.find('.result-name').each(function() {
          if (searchField.val().length != 0) {
            $(this).html(searchField.val());
            searchResults.fadeIn("fast");
          }
        });
      }, 500);
      $(this).data('timer', wait);
    }
  });

  //date range picker
  $('#daterangepicker').daterangepicker({
    timePicker: true,
    timePickerIncrement: 30,
    format: 'MMM D YYYY, h:mm A'
  }, function (start, end, label) {
    console.log(start.toISOString(), end.toISOString(), label);
  });

  $(document).ready(function(e){
    $(".img-check").click(function(){
      $(this).toggleClass("check");
    });
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
})
