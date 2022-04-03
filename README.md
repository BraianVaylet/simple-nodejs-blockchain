# Una Blockchain simple con Node.js

Este proyecto es una simple aplicación desarrollada con node.js donde se construyó de forma muy, pero muy simple una blockchain aplicando los principales conceptos.

## Branches

- Branch: [simple-blockchain-v1](https://github.com/BraianVaylet/simple-nodejs-blockchain/tree/simple-blockchain-v1) (Simulamos principios de una blockchain)
- Branch: [simple-blockchain-v2](https://github.com/BraianVaylet/simple-nodejs-blockchain/tree/simple-blockchain-v2) (Simulamos el minado de una blockchain)

## Pasos

- Clonar repositorio.
- yarn install
- yarn start

✅ Se debe visualizar por consola los bloques que se agregan a la clase Blockchain.

### [simple-blockchain-v1](https://github.com/BraianVaylet/simple-nodejs-blockchain/tree/simple-blockchain-v1)

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

### [simple-blockchain-v2](https://github.com/BraianVaylet/simple-nodejs-blockchain/tree/simple-blockchain-v2)

```bash
C:\simple-nodejs-blockchain>node index.js
block: 🧱 Block -
            Time: 1649028595369
            Previous Hash: genesis_hash
            Hash: 13579816e888ddcd5a5c558de57113de75636d1a7fe519ef055038b84acf7470
            height: 1
            body: Block 0
            Nonce: 3
            Difficulty: 0
            -------------------------------------
block: 🧱 Block -
            Time: 1649028601317
            Previous Hash: 13579816e888ddcd5a5c558de57113de75636d1a7fe519ef055038b84acf7470
            Hash: 086f4e1ff3a256b205b607bea54a0c48d885794e1644c1055e88137d16d7c63a
            height: 2
            body: Block 1
            Nonce: 593318
            Difficulty: 0
            -------------------------------------
block: 🧱 Block -
            Time: 1649028607347
            Previous Hash: 086f4e1ff3a256b205b607bea54a0c48d885794e1644c1055e88137d16d7c63a
            Hash: 15cfa5c84ee8a59a30150aabcf262c8f998a2b2a90758681a92f4837c5c40113
            height: 3
            body: Block 2
            Nonce: 623976
            Difficulty: 0
            -------------------------------------
block: 🧱 Block -
            Time: 1649028613407
            Previous Hash: 15cfa5c84ee8a59a30150aabcf262c8f998a2b2a90758681a92f4837c5c40113
            Hash: cb6ab9e306a34f82c8c26f4f729c2651c7540c10a6ed8c1ef12db0fee4c71b81
            height: 4
            body: Block 3
            Nonce: 630522
            Difficulty: 0
            -------------------------------------
block: 🧱 Block -
            Time: 1649028619483
            Previous Hash: cb6ab9e306a34f82c8c26f4f729c2651c7540c10a6ed8c1ef12db0fee4c71b81
            Hash: 802bbb798b7056f6fe830499310d98c88405e97100920e7fdd7ca619a49b23d7
            height: 5
            body: Block 4
            Nonce: 602066
            Difficulty: 0
            -------------------------------------
block: 🧱 Block -
            Time: 1649028625503
            Previous Hash: 802bbb798b7056f6fe830499310d98c88405e97100920e7fdd7ca619a49b23d7
            Hash: 09dfd699aa137b8eb2a04a71deda35461a1d2d513294b1fb916a06e2c8241eb0
            height: 6
            body: Block 5
            Nonce: 622671
            Difficulty: 1
            -------------------------------------
block: 🧱 Block -
            Time: 1649028631544
            Previous Hash: 09dfd699aa137b8eb2a04a71deda35461a1d2d513294b1fb916a06e2c8241eb0
            Hash: 748d8aae83754a508bd25cbd998838c436c9a7e2250a4ed3ab20b6258ef24356
            height: 7
            body: Block 6
            Nonce: 620259
            Difficulty: 0
            -------------------------------------
block: 🧱 Block -
            Time: 1649028637561
            Previous Hash: 748d8aae83754a508bd25cbd998838c436c9a7e2250a4ed3ab20b6258ef24356
            Hash: 0ded21e19f0a6f0678f8a63590078448287e83187e10d2990621715e21eda6cd
            height: 8
            body: Block 7
            Nonce: 614327
            Difficulty: 1
            -------------------------------------
block: 🧱 Block -
            Time: 1649028643623
            Previous Hash: 0ded21e19f0a6f0678f8a63590078448287e83187e10d2990621715e21eda6cd
            Hash: f6bef6d3865efacaa65dadb598d8d92b00c493653cae541dc34eb919346c4d78
            height: 9
            body: Block 8
            Nonce: 629689
            Difficulty: 0
            -------------------------------------
block: 🧱 Block -
            Time: 1649028649568
            Previous Hash: f6bef6d3865efacaa65dadb598d8d92b00c493653cae541dc34eb919346c4d78
            Hash: e4fe612364b20a0e79980be1ea93595f4d86916ac2d02b652e20a72407a5ec32
            height: 10
            body: Block 9
            Nonce: 576902
            Difficulty: 0
            -------------------------------------
```
