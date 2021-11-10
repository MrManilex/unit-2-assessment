import { Book } from "../models/book.js";

function index(req, res){
  Book.find({}, function(err, books) {
    console.log(books)
    res.render('books/index', {
      books
    })
  })
}

export{
  index
}