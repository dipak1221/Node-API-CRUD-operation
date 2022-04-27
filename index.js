const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();


dotenv.config();

//connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log("connected to DB")
);


//import routes

const productRoutes = require("./routes/product");

// middlewares
app.use(express.json());
app.use(cors());
//route middleware
app.use("/api/products", productRoutes);

app.listen(4000, () => {
    console.log("Server Connected.. and express is running on port 4000");
})
