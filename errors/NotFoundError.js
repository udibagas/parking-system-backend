class NotFoundError extends Error {
  name = "NotFoundError";
  status = 404;

  constructor(message = "Data not found") {
    super(message);
  }
}

module.exports = NotFoundError;
