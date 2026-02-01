const express = require('express');
const app = express();
const port = 4200;
const morgan = require("morgan");
const cors = require('cors');
const path = require('path');

// CORS phải đặt trước các route
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));

// Database - sửa lại encoding Tiếng Việt
let database = [
  {
    "BookId": "b1",
    "BookName": "Kỹ thuật lập trình cơ bản",
    "Price": 70000,
    "Image": "public/book_images/book1.jpg"
  },
  {
    "BookId": "b2",
    "BookName": "Kỹ thuật lập trình nâng cao",
    "Price": 100000,
    "Image": "public/book_images/book2.jpg"
  },
  {
    "BookId": "b3",
    "BookName": "Máy học cơ bản",
    "Price": 200000,
    "Image": "public/book_images/book3.jpg"
  },
  {
    "BookId": "b4",
    "BookName": "Máy học nâng cao",
    "Price": 300000,
    "Image": "public/book_images/book4.jpg"
  },
  {
    "BookId": "b5",
    "BookName": "Lập trình Robot cơ bản",
    "Price": 250000,
    "Image": "public/book_images/book5.jpg"
  }
];

// API endpoint cho books
app.get("/books", (req, res) => {
  console.log('GET /books called');
  res.json(database);
});

// Default API
app.get('/', (req, res) => {
  res.send('Welcome to <font color="red">K2341111E</font> API');
});

app.get('/about', (req, res) => {
  let tbl = `<table border="1">`;
  tbl += '<tr>';
  tbl += '<td>Student ID</td><td>K2341111411</td>';
  tbl += '</tr>';
  tbl += '<tr>';
  tbl += '<td>Student Name</td><td>Nhung</td>';
  tbl += '</tr>';
  tbl += '<tr>';
  tbl += '<td colspan="2"><img src="/static/images/customer1.png" width="200" height="200"/></td>';
  tbl += '</tr>';
  tbl += '</table>';
  res.send(tbl);
});

// Start server
app.listen(port, () => {
  console.log(`My server listening on http://localhost:4200`);
  console.log(`Books API: http://localhost:4200/books`);
});