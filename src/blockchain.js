/* eslint-disable no-async-promise-executor */
const SHA256 = require('crypto-js/sha256')
const Block = require('./block')

class Blockchain {
  constructor () {
    this.chain = [] // array de bloques.
    this.height = -1 // longitud de la blockchain.
    this.initializeChain()
  }

  // Iniciamos la blockchain con el Genesis Block.
  async initializeChain () {
    if (this.height === -1) {
      const block = new Block({ data: 'Genesis Block' })
      await this.addBlock(block)
    }
  }

  // Agregamos un nuevo bloque a la cadena.
  addBlock (block) {
    const self = this
    return new Promise(async (resolve, reject) => {
      block.height = self.chain.length
      block.time = new Date().getTime().toString()
      // Si la cadena ya tiene un bloque.
      if (self.chain.length > 0) {
        block.previousBlockHash = self.chain[self.chain.length - 1].hash
      }
      // validamos la cadena.
      const errors = await self.validateChain()
      if (errors.length > 0) {
        reject(new Error('The chain is not valid: ', errors))
      }
      // Obtenemos hash del bloque nuevo.
      block.hash = SHA256(JSON.stringify(block)).toString()
      // Lo agregamos a la cadena.
      self.chain.push(block)
      resolve(block)
    })
  }

  // validamos la cadena
  validateChain () {
    const self = this
    const errors = []

    return new Promise(async (resolve, reject) => {
      self.chain.map(async (block) => {
        try {
          const isValid = await block.validate()
          if (!isValid) {
            errors.push(new Error(`The block ${block.height} is not valid`))
          }
        } catch (err) {
          errors.push(err)
        }
      })

      resolve(errors)
    })
  }

  // Método que llama a todos los toString, recorre la cadena y los va imprimiendo.
  print () {
    const self = this
    for (const block of self.chain) {
      console.log(block.toString())
    }
  }
}

module.exports = Blockchain
