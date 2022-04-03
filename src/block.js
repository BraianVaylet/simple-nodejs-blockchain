const SHA256 = require('crypto-js/sha256')

// Una manera de gestionar el algoritmo de minado,
// si muchos bloques se generan en un tiempo corto, se puede aumentar la dificultad.
const DIFFICULTY = 3
// La tasa de minado entre bloques.
const MINE_RATE = 3000

class Block {
  constructor ({
    time,
    previousHash,
    hash,
    height, // posición o numero de bloque de la cadena.
    body,
    nonce, // numero de vueltas que da el algoritmo de minado hasta encontrar el hash.
    difficulty
  }) {
    this.time = time
    this.previousHash = previousHash
    this.hash = hash
    this.height = height
    this.body = body // Buffer.from(JSON.stringify(body).toString('hex'))
    this.nonce = nonce
    this.difficulty = difficulty
  }

  static get genesis () {
    const time = new Date('2009-03-01').getTime()
    return new this({
      time,
      previousHash: undefined,
      hash: 'genesis_hash',
      height: 0,
      body: 'Genesis Block',
      nonce: 0,
      difficulty: DIFFICULTY
    })
  }

  static mineBlock ({
    previousBlock,
    body
  }) {
    const { hash: previousHash, height: previousHeight } = previousBlock
    const height = previousHeight + 1
    let { difficulty } = previousBlock
    let hash
    let time
    let nonce = 0

    do {
      time = Date.now()
      nonce += 1
      difficulty = previousBlock.time + MINE_RATE > time ? difficulty + 1 : difficulty - 1
      hash = SHA256(previousHash + time + body + nonce + difficulty).toString()
    } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty))

    return new this({ time, previousHash, hash, height, body, nonce, difficulty })
  }

  // Mostrar por consola la información del bloque.
  toString () {
    const { time, previousHash, hash, height, body, nonce, difficulty } = this
    return `🧱 Block - 
            Time: ${time}
            Previous Hash: ${previousHash}
            Hash: ${hash}
            height: ${height}
            body: ${body}
            Nonce: ${nonce}
            Difficulty: ${difficulty}
            -------------------------------------`
  }
}

module.exports = Block
