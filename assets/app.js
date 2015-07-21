(function() {
  var heroesEl = document.querySelector('.heroes');
  var templateString = document.querySelector('#characters-template').innerHTML;

  var t = Handlebars.compile(templateString);

  var result = marvelData.data.results.reduce(function(previous, character) {
    return previous + t(character);
  }, '');

  heroesEl.innerHTML = result;
})();
