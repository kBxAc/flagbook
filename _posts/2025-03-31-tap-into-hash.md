---
title: Tap into Hash
date: 2025-03-30 00:00:00 +0530
categories: [picoCTF2025, rev]
tags: [writeup, picoctf2025, rev, tap-into-hash]
author: ayushch
---

In this challenge we're given a simple program of blockchain implementation in python, blockchains are generally considered a secure but certain things might make them insecure if you're not aware of how things are *really* working

### 1. Analyzing the provided python script
The program loads by taking a command line argument as `text` and then it passes it through `main` function 
```python
if __name__ == "__main__":
    text = sys.argv[1]
    main(text)
```
#### `main` function
```python
def main(token):
    key = bytes.fromhex(random_string)

    genesis_block = Block(0, "0", int(time.time()), "EncodedGenesisBlock", 0)
    blockchain = [genesis_block]

    for i in range(1, 5):
        encoded_transactions = base64.b64encode(
            f"Transaction_{i}".encode()).decode('utf-8')
        new_block = proof_of_work(blockchain[-1], encoded_transactions)
        blockchain.append(new_block)

    all_blocks = get_all_blocks(blockchain)

    blockchain_string = blockchain_to_string(all_blocks)
    encrypted_blockchain = encrypt(blockchain_string, token, key)

    print("Encrypted Blockchain:", encrypted_blockchain)
```
So, in the `main` function the passed argument is stored as `token` indicating it might play a significat role.
```python
def generate_random_string(length):
    return secrets.token_hex(length // 2)

random_string = generate_random_string(64)


def main(token):
    key = bytes.fromhex(random_string)
```
The function then generates a *random string* using `generate_random_string` function and then converting to hex to store it as the key in the `main` function.
After that a genesis block which is the first block of every blockchain is created using `Block` class (No need to deep-dive into it).
```python
    genesis_block = Block(0, "0", int(time.time()), "EncodedGenesisBlock", 0)
    blockchain = [genesis_block]
```
Now the genesis block is saved in a list called `blockchain`.
Next, our little cute blockchain mines 4 blocks and then appends them to the `blockchain` list.
```python
    for i in range(1, 5):
        encoded_transactions = base64.b64encode(
            f"Transaction_{i}".encode()).decode('utf-8')
        new_block = proof_of_work(blockchain[-1], encoded_transactions)
        blockchain.append(new_block)
```
While mining it uses a function named `proof_of_work` which takes the *last block* and `encoded_transactions` as an argument. And the `encoded_transactions` is nothing but just a fancy bluff or i'd say a simple base64 encoded string.
In the next part of the code we can see that it's creating another bluffy variable named `all_blocks` which again does nothing.
```python
def get_all_blocks(blockchain):
    return blockchain
```
```python
    all_blocks = get_all_blocks(blockchain)
```
In simple code we can write that `all_blocks = blockchain`.

Moving foreward we can see that now, we're getting closer to the real *crazy* part of our liitle cute blockchain.
```python
    blockchain_string = blockchain_to_string(all_blocks)
    encrypted_blockchain = encrypt(blockchain_string, token, key)
```
Here, its converting all blocks in the blockchain to the string and then encrypting it using the `token` we provided from CLI arguments and a randomly generated 256-bit key.
```python
def blockchain_to_string(blockchain):
    block_strings = [f"{block.calculate_hash()}" for block in blockchain]
    return '-'.join(block_strings)


def encrypt(plaintext, inner_txt, key):
    midpoint = len(plaintext) // 2

    first_part = plaintext[:midpoint]
    second_part = plaintext[midpoint:]
    modified_plaintext = first_part + inner_txt + second_part
    block_size = 16
    plaintext = pad(modified_plaintext, block_size)
    key_hash = hashlib.sha256(key).digest()

    ciphertext = b''

    for i in range(0, len(plaintext), block_size):
        block = plaintext[i:i + block_size]
        cipher_block = xor_bytes(block, key_hash)
        ciphertext += cipher_block

    return ciphertext
```
The `blockchain_to_string` function is just returning a string containing hashes of mined blocks seperated by `-`.

The `encrypt` function is taking a `plaintext`, which is the text that will be converted to `ciphertext`. It works by finding the mid-point in the plaintext and then seperating it into two different blocks,
then it inserts `inner_txt` which is basically the `token` which we took as a CLI argument when running our python file. After that, the plaintext is padded using `pad` function (just a simple implementation, no need to deep-dive into it).
Then a `key_hash` a SHA-256 digest of the given key, i.e., it tries to hide the fact that key is being once again dynamically generated using the previous key.
After that it breaks the `modified_plaintext` into equal parts each of `block_size`, and iterates over them, does XOR using `key_hash` and adds it to `ciphertext` and at last returns the `ciphertext`.
```python
    print("Encrypted Blockchain:", encrypted_blockchain)
````
Now, at the end of `main` function it logs the encrypted blockchain thats it for the analysis of the provided blockchain implementation in python.


### 2. The real hacking part
Now to hack, we're given a key and encrypted blockchain to make our life easy
```txt
Key: b'B\xfdL\x92\xf1C\x8fP\xb4\xd4dt\x8b\x18\xcfR\xfd`\xd1-\xa5\xde\xcd\x89\xee\xdb\xfb\r\x83&\x07\x82'
Encrypted Blockchain: b'|`M\xb2&\xa7\xea\xd5m\xb5\x83g\x11\x90\x08\xdbx7L\xb2v\xa0\xb8\xd4;\xbe\xdd`E\xc4\x01\xdb/:\x18\xe5s\xa6\xee\x8e;\xbd\xd8i\x19\x94X\xda|2\x19\xe2v\xf4\xed\x81m\xbb\xdd1\x13\x98\x08\xd3d3K\xe4t\xf1\xec\x83;\xbe\x83c\x18\x93]\xda|2\x1e\xe7&\xa9\xbd\xd0a\xee\x8a4\x13\xc3Z\xd3x7J\xb5u\xa1\xe9\x81o\xbf\x8ec\x12\x90\x0c\xd3y3N\xe3 \xa6\xbe\x85>\xe9\x82c\x14\x92\x0c\x81\x7f.K\xb6t\xa3\xee\x80o\xb4\x8dcE\x94\x08\x82(3K\xe2r\xa5\xe9\xd0o\xef\x8f1\x10\xc5\x0c\xd2\x7f`\x0b\xefs\xff\xcc\xe2\x1e\xf7\xd9<O\xc2R\xbczP)\xeeF\xf9\xdd\xd4\x0c\xbd\xca3x\xfea\xb6#NK\xf4$\xa9\xec\xfe\x07\xfd\xf8*M\xebc\x99\x0bH$\xbe$\xa2\xec\xd0`\xbf\xda-\x10\x91\\\xd3-eJ\xb6#\xa3\xea\xd2m\xbc\xddfC\xc5\t\x82+fO\xe2(\xa9\xee\x85k\xe8\x822\r\x91\t\x86y1I\xe7!\xf5\xb6\x8e>\xbd\xdae\x14\x98\t\xd6(1M\xbfv\xa9\xe9\x85=\xe8\xdadB\x92\x00\xdb*fB\xb2!\xa5\xeb\x83<\xea\x8d5A\x96\x0c\xd2\x7f2M\xb2(\xa6\xea\xd5l\xea\xdab\x16\x8c\t\xd3z`C\xe3(\xa0\xb7\x81j\xee\xd9hE\x95\x0b\x82*aO\xb2"\xa7\xeb\x86:\xbe\xd9gC\x97\x01\xd4yf\x19\xe0\'\xa3\xb9\x80>\xbb\xdahE\x93\x0f\x82,`\x1d\xb5#\xa7\xb6\x82k\xbc\x8ci\x14\x97;\xe1'
```

To hack it, we can write a python script `hack.py` (or if you think you're cool then write in intel styled assembly)

Now looking onto the `encrypt` function we can see, its returning a `ciphertext`, and if we can reverse it we will get the plaintext where the flag is hidden.
```py
    ciphertext = b''

    for i in range(0, len(plaintext), block_size):
        block = plaintext[i:i + block_size]
        cipher_block = xor_bytes(block, key_hash)
        ciphertext += cipher_block

    return ciphertext
```

Here, its interating over plaintext; then dividing it into blocks, each of size 16, after that it encrypts using XOR and the key is `key_hash` which is just simple SHA256 of the key.
And at last it appends it into `ciphertext` and returns us like it did something very huge.

Now since we need to do SHA256 of provided key, we can simply import `hashlib` and start writing a `decrypt` function
```py
def decrypt(ciphertext, key):
    block_size = 16
    key_hash = hashlib.sha256(key).digest()
    
    blocks = list()

    for i in range(0, len(ciphertext), block_size):
        blocks.append(
            xor_bytes(ciphertext[i:i + block_size], key_hash).decode()
        )
```
Now, here we are just iterating over `ciphertext`, just like what `encrypt` function did in so called *blockchain*, and the we made a list called `blocks` where we're appending the decrypted blocks.

After this, we need to construct the `plaintext` then, there are two ways to solve -
1. If flag format is known then, do a simple regex search (We will go with this one)
2. If flag format is not known, then unpad the `plaintext` obtained, after that find the **real** mid-point of the real plaintext, then extract the text that was inserted in between.


Following the first approach, we know that the flag format is `picoCTF{...}`.

Here, we can import `re` library, which gives support for regex in python. Then finding the match of our regex expression in the `plaintext` gives the **flag**.
```py
def decrypt(ciphertext, key):
    block_size = 16
    key_hash = hashlib.sha256(key).digest()

    blocks = list()

    for i in range(0, len(ciphertext), block_size):
        blocks.append(
            xor_bytes(ciphertext[i:i + block_size], key_hash).decode()
        )

    plaintext = ''.join(blocks)

    regex = r"picoCTF\{[^\}]*\}"
    flag = re.search(regex, plaintext).group()

    return flag
```

Now, summing everything up, our fancy `hack.py` is ![here](https://github.com/ayushch80/ctf-writeups/blob/main/2025/Pico%20CTF%202025/rev/TapintoHash_solve.py)

### 3. The FLAG
By running the script we can obtain our flag `picoCTF{block_3SRhViRbT1qcX_XUjM0r49cH_qCzmJZzBK_842cf83a}`