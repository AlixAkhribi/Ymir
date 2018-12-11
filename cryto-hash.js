const crypto = require('crypto');

// ES6 spread operator to turn N arguments into an inputs Array
const cryptoHash = (...inputs) => {
    const hash = crypto.createHash('sha256');

    hash.update(inputs.sort().join(' '));

    return hash.digest('hex')
}

module.exports = cryptoHash;