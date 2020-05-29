var msg = 'Hello World';
console.log(msg);

app.get('/mars', function(req, res) {
    res.send('Hello Mars!\n');
  });