import { Book } from "../models/book.js";

function index(req, res){
  Book.find({}, function(err, books) {
    res.render('books/index', {
      books
    })
  })
}

function newBook(req, res){

}

export{
  index,
  newBook as new
}