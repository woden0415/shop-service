import * as jwt from 'jsonwebtoken';
const secretToken = 'woden-shop';

function createToken(payload: object) {
  return jwt.sign(payload, secretToken, { expiresIn: 60 });
}

async function decodeToken(token: string): Promise<string | object> {
  const decoded = jwt.verify(token, secretToken);
  return decoded;
}

export {
  createToken,
  decodeToken
}