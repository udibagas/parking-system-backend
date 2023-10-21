require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require("./routes"));

app.listen(port, () => console.log(`Listening on port ${port}`));
