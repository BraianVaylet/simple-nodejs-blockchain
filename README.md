# Una Blockchain simple con Node.js

Este proyecto es una simple aplicación desarrollada con node.js donde se construyó de forma muy, pero muy simple una blockchain aplicando los principales conceptos.

## Versiones:
- Branch: [simple-blockchain-v1](https://github.com/BraianVaylet/simple-nodejs-blockchain/tree/simple-blockchain-v1) (Simulamos principios de una blockchain)
- Branch: [simple-blockchain-v2](https://github.com/BraianVaylet/simple-nodejs-blockchain/tree/simple-blockchain-v2) (Simulamos el minado de una blockchain)

## Pasos:

- Clonar repositorio.
- yarn install
- yarn start

✅ Se debe visualizar por consola los 3 bloques que se agregan a la clase Blockchain.

```bash
C:\simple-nodejs-blockchain>node index.js>node index.js
Block -
        hash: 89d33a17fd10eb9cdd3a2dc1426cf1356202a1f3dbf04c27ac0fba58a48f6b30
        height: 0
        body: {"data":"Genesis Block"}
        time: 1649028491620
        previousBlockHash: null
        -------------------------------------
Block -
        hash: e7f272a4a47d94a934e2e124ee8a037a6eccdb7c1338c442724f6ead91c670b3
        height: 1
        body: {"data":"Block #1"}
        time: 1649028491621
        previousBlockHash: 89d33a17fd10eb9cdd3a2dc1426cf1356202a1f3dbf04c27ac0fba58a48f6b30
        -------------------------------------
Block -
        hash: 665352cee09c60f2d78edb7991ee41be02f82ee37058819fd031f29c167b86d8
        height: 2
        body: {"data":"Block #2"}
        time: 1649028491622
        previousBlockHash: e7f272a4a47d94a934e2e124ee8a037a6eccdb7c1338c442724f6ead91c670b3
        -------------------------------------
Block -
        hash: 44158daf1a850cb788f7d3235bfcfd574af5b0af239df9ccdb62f02d758d681f
        height: 3
        body: {"data":"Block #3"}
        time: 1649028491623
        previousBlockHash: 665352cee09c60f2d78edb7991ee41be02f82ee37058819fd031f29c167b86d8
        -------------------------------------
```
