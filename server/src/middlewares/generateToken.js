// import jwt
const jwt = require("jsonwebtoken");
// const { nanoid } = require("nanoid");
// const crypto = require("crypto");

const generateToken = async (_id, role) => {
  try {
    // header, payload, signatures

    // const { _id, role } = user;

    // const cryptoKey = crypto.randomBytes(64).toString("hex");

    //instead of crypto.randomBytes(64).toString('hex')
    //   const nanoidTokenKey = nanoid(64);

    const token = jwt.sign({ _id, role }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    return token;
  } catch (error) {
    console.log("ERROR JWT - ", error);
    throw error;
  }
};

module.exports = generateToken;
