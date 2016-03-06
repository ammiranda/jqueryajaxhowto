var marked = require('marked');
var fs = require('fs');

marked.setOptions({
  renderer: new marked.Renderer()
});

var docs = fs.readFile('docs.md', 'utf8', function(err, data) {
  var html = marked(data.toString());
  fs.writeFile('docs.html', html, function(err, d) {
    if (err) console.log('error occurred');
  });
});


