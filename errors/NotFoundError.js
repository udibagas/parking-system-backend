class NotFoundError extends Error {
  status = 404;

  constructor(message = "Data not found") {
    super(message);
  }
}

module.exports = NotFoundError;
