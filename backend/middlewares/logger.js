const logger = (req, res, next) => {
  next();
};

module.exports = logger;

/* exports.logger = (req, res, next) => {
  console.log("logging request");
  next();
}; */
