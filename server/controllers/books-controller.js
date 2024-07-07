const Book = require("../models/Book");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json({ books });
  } catch (error) {
    res.status(404).json({ message: "No books found" });
  }
};

const addBook = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;

  try {
    let book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
    res.status(201).json({ book });
  } catch (error) {
    res.status(404).json({ message: "Unable to Add" });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);
    res.status(200).json({ book });
  } catch (error) {
    res.status(404).json({ message: "No books found" });
  }
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  try {
    const book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    book = await book.save();
    res.status(200).json({ book });
  } catch (error) {
    res.status(404).json({ message: "Unable to update by this ID" });
  }
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndRemove(id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Unable to Delete by this ID" });
  }
};

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
