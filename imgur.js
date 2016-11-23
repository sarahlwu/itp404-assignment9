var imgur = require('imgur')

imgur.setClientId(process.env.client_id);

module.exports = {
  search: function(searchTerm) {
    return new Promise(function(resolve, reject) {
      var url = 'https://imgur.com/search?q=' + searchTerm + '.json'
      request.get(url);
      var promise = $.ajax({

        type: 'get'
      }).then(function(datachunk) {
        console.log(datachunk)
      })
      //   var posts = subreddits.data.children;
      //   console.log(posts);
      //   var templateSource = $('#subreddit-list-template').html();
      //   var template = Handlebars.compile(templateSource);
      //   var html = template({
      //     post: posts
      //   });
      //   $('#subreddit-list').html(html);
      // }, function() {
      //   console.log('Nothing found');
      // });
    })
  }
}
