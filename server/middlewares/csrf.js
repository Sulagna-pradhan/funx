const crypto = require("crypto");

function generateToken() {
  return crypto.randomBytes(32).toString("hex");
}

function initializeCsrf(req, res, next) {
  let csrfToken = req.cookies.csrfToken;
  if (!csrfToken) {
    csrfToken = generateToken();
    res.cookie("csrfToken", csrfToken, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
    });
  }
  res.locals.csrfToken = csrfToken;
  next();
}

function verifyCsrf(req, res, next) {
  const csrfTokenFromCookie = req.cookies.csrfToken;
  const csrfTokenFromReq = req.body._csrf || req.headers["x-csrf-token"];

  if (!csrfTokenFromCookie || !csrfTokenFromReq)
    return res.status(401).send("Unauthorized");
  if (csrfTokenFromCookie !== csrfTokenFromReq)
    return res.status(401).send("Unauthorized");

  next();
}

function rotateCsrf(req, res, next) {
  const csrfToken = generateToken();
  res.cookie("csrfToken", csrfToken, {
    httpOnly: false,
    sameSite: "Lax",
  });
  res.locals.csrfToken = csrfToken;
  next();
}

module.exports = {
  initializeCsrf,
  verifyCsrf,
  rotateCsrf,
};
