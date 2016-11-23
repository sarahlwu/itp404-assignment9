var fivehundred = require('500px'),
    api500px = new fivehundred(process.env.consumer_key);

module.exports = {
  getPopular: function(callback) {
    api500px.photos.getPopular({'sort': 'created_at', 'rpp': '100'},  function(error, results) {
      if (error) {
        // Error!
        console.log('fuck you')
        return;
      }
      else {
        var array = new Array;
        for (var i=0; i<15; i++) {
          var object = {
            imgurl: results.photos[i].image_url,
            name: results.photos[i].name
          }
          array.push(object)
        }

        callback(array);
      }
    });
  },

  search: function(searchTerm, callback) {
    api500px.photos.searchByTerm (searchTerm, {'sort': 'created_at', 'rpp': '100'},  function(error, results) {
      if (error) {
        // Error!
        console.log('fuck you')
        return;
      }
      else {
        var array = new Array;
        for (var i=0; i<15; i++) {
          var object = {
            imgurl: results.photos[i].image_url,
            name: results.photos[i].name
          }
          array.push(object)
        }

        callback(array);
      }
    });
  }
}
