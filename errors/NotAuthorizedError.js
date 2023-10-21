class NotAuthorizedError extends Error {
  name = "NotAuthorizedError";
  status = 403;

  constructor(message = "Unauthorized") {
    super(message);
  }
}

module.exports = NotAuthorizedError;
