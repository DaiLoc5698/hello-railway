const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const path = require('path');

// const authRouter = require("./src/routes/auth");
const userRouter = require("./src/routes/users");
const contactsRouter = require("./src/routes/contacts");
const catRouter = require("./src/routes/categories");

// app.use(cors());

// the api
app.use(express.json());
// app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/categories", catRouter);
app.use("/", (req, res) => {
    res.send('welcome to the server home page')
})
app.listen(process.env.PORT || 8080, () => {
    console.log('backend running')
})

// https://shrouded-ravine-20668.herokuapp.com/api/posts code deploy to the herokuapp