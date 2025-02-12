// This CustomError class was created to allow us to send a status code
// back to the user
class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "CustomError";
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export { CustomError };
