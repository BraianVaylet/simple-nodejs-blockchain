const SHA256 = require('crypto-js/sha256')
const hex2ascii = require('hex2ascii')

class Block {
  constructor (data) {
    this.hash = null // hash del bloque.
    this.height = 0 // posición o numero de bloque de la cadena.
    this.body = Buffer.from(JSON.stringify(data).toString('hex')) // cuerpo del bloque.
    this.time = 0 // tiempo en el que se genera el bloque y se añade a la cadena.
    this.previousBlockHash = null // hash del bloque previo.
  }

  // validamos que el bloque sea correcto.
  validate () {
    const self = this
    return new Promise((resolve, reject) => {
      const currentHash = self.hash

      self.hash = SHA256(JSON.stringify({ ...self, hash: null })).toString()

      if (currentHash !== self.hash) {
        return resolve(false)
      }

      resolve(true)
    })
  }

  // obtenemos los datos del bloque.
  getBlockData () {
    const self = this
    return new Promise((resolve, reject) => {
      const encodedData = self.body
      const decodedData = hex2ascii(encodedData)
      const dataObject = JSON.parse(decodedData)

      if (dataObject === 'Genesis Block') { // Genesis Block es el primer bloque de la cadena. (no tiene un hash previo)
        reject(new Error('This is the Genesis Block'))
      }

      resolve(dataObject)
    })
  }

  // mostrar por consola la información del bloque.
  toString () {
    const { hash, height, body, time, previousBlockHash } = this
    return `Block -
        hash: ${hash}
        height: ${height}
        body: ${body}
        time: ${time}
        previousBlockHash: ${previousBlockHash}
        -------------------------------------`
  }
}

module.exports = Block
