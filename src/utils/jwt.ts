import * as jwt from 'jsonwebtoken';
const secretToken = 'woden-shop';

function createToken(payload: object) {
  return jwt.sign(payload, secretToken, { expiresIn: 60 });
}

async function decodeToken(token: string) {
  var decoded = jwt.verify(token, secretToken);
  console.log(decoded) // b
}

export {
  createToken,
  decodeToken
}