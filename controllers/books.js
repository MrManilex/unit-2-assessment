import { Book } from "../models/book.js";

function index(req, res){
  Book.find({}, function(err, books) {
    console.log(books)
    res.render('books/index', {
      books
    })
  })
}

function newBook(req, res){
  res.render('books/new')
}

function create(req, res){
  req.body.read = !!req.body.read
  Book.create(req.body)
    .then(book => {
      res.redirect('/books')
    })
}

function deleteBook(req, res){
  Book.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/books')
    })
}

export{
  index,
  newBook as new,
  create,
  deleteBook
}