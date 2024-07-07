const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();

//middleware
app.use(express.json());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://yashkulkarni0987:iluUog4t6YPEOASd@cluster0.pqxiqpn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("connnected to Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err.message));
