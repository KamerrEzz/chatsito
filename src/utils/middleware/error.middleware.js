const logErrors = (err, req, res, next) => {
  console.error(err);
  next(err);
};

const boomError = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    console.log(output);
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
};

const defaultError = (err, req, res, next) => {
    res.status(500).json({
        message: err.message || "oh!",
        stack: err.stack || false
    })
}

module.exports = {
    logErrors,
    boomError,
    defaultError
}