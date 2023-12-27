require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { ValidationError } = require("sequelize");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", require("./routes/api"));

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  const errors = {};

  if (err instanceof ValidationError) {
    err.status = 422;
    for (let e of err.errors) {
      if (errors[e.path] === undefined) {
        errors[e.path] = [];
      }

      errors[e.path].push(e.message);
    }
  }

  const { name, message } = err;
  res.status(err.status || 500).json({ name, message, errors });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
