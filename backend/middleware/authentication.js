const jwt = require("jsonwebtoken");
const { NotFoundError, UnauthorizedError } = require("../helper/customErrors");
const { jwtVerify } = require("../helper/jwt");
const { User } = require("../models");

const verifyToken = async (req, res, next) => {
  try {
    const { headers } = req;
    if (!headers.authorization) return next();

    const token = headers.authorization.split(" ")[1];
    if (!token) throw new UnauthorizedError();

    const userVerified = await jwtVerify(token);
    if (!userVerified) throw new UnauthorizedError();

    req.loggedUser = await User.findOne({
      attributes: { exclude: ["email"] },
      where: { email: userVerified.email },
    });

    if (!req.loggedUser) return next(new NotFoundError("User"));

    headers.email = userVerified.email;
    req.loggedUser.dataValues.token = token;

    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return next(new UnauthorizedError());
    }
    next(error);
  }
};

module.exports = verifyToken;
