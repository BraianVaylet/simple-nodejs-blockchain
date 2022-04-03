const Block = require('./block')

class Blockchain {
  constructor () {
    this.chain = [Block.genesis]
  }

  addBlock (body) {
    const previousBlock = this.chain[this.chain.length - 1]
    const block = Block.mineBlock({ previousBlock, body })
    this.chain.push(block)
    return block
  }
}

module.exports = Blockchain
