const express = require("express");
const cors = require("cors");

//require('dotenv').config(); inutile en l'occurence

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const usersRouter = require("./routes/users")
const searchRouter = require("./routes/search")

app.use("/user", usersRouter);
app.use("/search", searchRouter);

app.listen(port, () => {
    console.log("Serveur ecoute sur le port " + port);
})