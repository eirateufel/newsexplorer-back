const { NODE_ENV, JWT_SECRET } = process.env;

const secretKey = NODE_ENV === 'production' ? JWT_SECRET : 'secret-key';

module.exports = secretKey;
