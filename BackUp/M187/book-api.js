const express = require('express')
const cors = require('cors');

const app = express()
const port = 4400

let books = [{
    "isbn": "9781593275846",
    "cover_image": "http://t1.gstatic.com/images?q=tbn:ANd9GcQvJJDi2mzwg9v_PlmKYL31gXIz0kvAObJak7DVFPcD_mJTIyec",
    "title": "Norwegian Wood",
    "author": "Marijn Haverbeke",
    "publish_date": "2014-12-14",
    "publisher": "No Starch Press",
    "numOfPages": 472,
},
{
    "isbn": "9781449331818",
    "cover_image": "http://t0.gstatic.com/images?q=tbn:ANd9GcRHFU_j93PPsbQGqoaZJnHH6-Emk_sIxG823SkoRTL0nvdEP41f",
    "title": "Kafka on the Shore",
    "author": "Addy Osmani",
    "publish_date": "2012-07-01",
    "publisher": "O'Reilly Media",
    "numOfPages": 254,
},
{
    "isbn": "9781449365035",
    "cover_image": "http://t3.gstatic.com/images?q=tbn:ANd9GcQBMNA8A19vQpNY4bkgadsLhiRUFqBKwKAA6ANrw8VEtOiPrYQJ",
    "title": "After Dark",
    "author": "Axel Rauschmayer",
    "publish_date": "2014-02-01",
    "publisher": "O'Reilly Media",
    "numOfPages": 460,
}];

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-COntrol-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(cors());

app.use(allowCrossDomain);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/book', (req, res) => {
    res.json(books);
});

app.listen(port, () => console.log(`Book API app listening on port ${port}!`))

app.get('/book/:isbn', (req, res) => {
    // reading isbn from the URL
    const isbn = req.params.isbn;
    
    // searching books for the isbn
    for (let book of books) {
    if (book.isbn === isbn) {
    res.json(book);
    return;
    }
    }
    
    // sending 404 when not found something is a good practice
    res.status(404).send('Book not found');
    });

    app.post('/book', (req, res) => {
        const book = req.body;
        books.push(book);
        res.send('Book is added to the database');
    });

    app.put('/book/:isbn', (req, res) => {
        // reading isbn from the URL
        const isbn = req.params.isbn;
        const newBook = req.body;
        
        // remove item from the books array
        for (let i = 0; i < books.length; i++) {
        let book = books[i]
        
        if (book.isbn === isbn) {
        books[i] = newBook;
        }
        }
        
        // sending 404 when not found something is a good practice
        res.send('Book is edited');
        });

        app.delete('/book/:isbn', (req, res) => {
            // reading isbn from the URL
            const isbn = req.params.isbn;
            const newBook = req.body;
            
            // remove item from the books array
            for (let i = 0; i < books.length; i++) {
            let book = books[i]
            
            if (book.isbn === isbn) {
            books[i] = newBook;
            }
            }
            
            // sending 404 when not found something is a good practice
            res.send('Book is deleted');
            });

    
    app.delete('/book/:isdn', (req, res) => {
        const isbn = req.params.isbn;

        book = books.filter(i => {
            if(i.isbn !== isbn){
                return true;
            }

            return false;
        })
        res.send('Book is deleted');

    })