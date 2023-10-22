class NotAuthorizedError extends Error {
  status = 403;

  constructor(message = "Username & password salah") {
    super(message);
  }
}

module.exports = NotAuthorizedError;
