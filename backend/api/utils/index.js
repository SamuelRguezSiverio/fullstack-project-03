const jwt = require("jsonwebtoken");
const AccountManager = require("../models/accountManager.Model");

async function checkAuthAccountManager(req, res, next) {
  try {
    if (!req.headers.token) {
      return res.status(403).json({ error: "No Token found" });
    } 
    jwt.verify(
      req.headers.token,
      process.env.SECRET,
      async (err, decoded) => {
        if (err)

          return res.status(401).send("You do not have rights to access");
        const accountManager = await AccountManager.findOne({
          where: { email: decoded.email },
        });

        if (!accountManager)
          return res.status(401).send("You do not have rights to access");
        else {
          res.locals.accountManager = accountManager;
        }
        next();
      }
    );
  } catch (error) {
    res.status(403).json({ error: `Token not valid + ${error}` });
  }
}

module.exports = {
  checkAuthAccountManager,
};
