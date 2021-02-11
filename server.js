require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://admin:root@cluster0.teaax.mongodb.net/books?retryWrites=true&w=majority' , {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
  console.log(error);
});

mongoose.connection.on("open", () => {
  console.log("succesfully connected");
});

mongoose.connection.on("error", () => {
  console.log("there was an error");
});

const BookSchema = mongoose.Schema({ title: 'string', description: 'string', author: 'string' })
const Book = mongoose.model('books', BookSchema);

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.post('/api', async (req, res) => {
  const body = req.body;
  console.log(body)
  const book = new Book(body);
  await book.save((error) => {
    if (error) {
      res.status(400);
      res.send('Failed to add a book to the database');
    }
    else {
      res.status(200);
      res.send('Succesfully added a book to the database');
    }
  })
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
})

app.listen(process.env.port || 8080, '0.0.0.0', () => {
    console.log('Express app is running on port 8080');
});