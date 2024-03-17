exports.logtime = async (req, res, next) => {
  console.log("Request received at " + Date.now());
  next();
};
exports.logURL = async (req, res, next) => {
  console.log("Request URL is " + req.url);
  next();
};
