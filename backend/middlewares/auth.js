const auth = (req, res, next) => {
  console.log("under authentication");
  const userId = 1;
  res.locals.userId = userId;
  next();
};

module.exports = auth;
