class NotAuthorizedError extends Error {
  name = "NotAuthorizedError";
  status = 403;

  constructor(message = "Username & password salah") {
    super(message);
  }
}

module.exports = NotAuthorizedError;
