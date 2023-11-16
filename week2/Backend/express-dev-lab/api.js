const express = require('express');
const app = express();
const port = 4000;

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

app.get('/jsonmessage', (req, res) => {
  const jsonData = {
    message: 'This is a JSON response.',
    timestamp: new Date()
  };

  res.json(jsonData);
});


app.get('/textmessage', (req, res) => {
    res.send('This is a simple text response.');
    });

app.get('/htmlmessage', (req, res) => {
    res.send('<h1>This is a simple html response.</h1>');
    });

app.get('/info', (req, res) => {
    res.send(`Time is ${new Date()}.`);
    });