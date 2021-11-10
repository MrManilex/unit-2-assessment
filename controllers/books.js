import { Book } from "../models/book.js";

function index(req, res){
  Book.find({}, function(err, books) {
    res.render('books/index', {
      books
    })
  })
}

function newBook(req, res){
  res.render('books/new')
}

export{
  index,
  newBook as new
}