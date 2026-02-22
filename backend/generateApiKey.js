const crypto = require('crypto');

function generateApiKey() {
  return crypto.randomBytes(32).toString('hex'); // 64-character string
}

module.exports = generateApiKey;