const { GENESIS_DATA} = require('./config')

console.log(GENESIS_DATA);


class Block {
    constructor({ timestamp, lastHash, hash, data }) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    static genesis() {
        return new Block(GENESIS_DATA);
    }
}

module.exports = Block