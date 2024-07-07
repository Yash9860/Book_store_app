const express = require("express");
const booksController = require("../controllers/books-controller");

const router = express.Router();

// this route will provide all of the books
router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
