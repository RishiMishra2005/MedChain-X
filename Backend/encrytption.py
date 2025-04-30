from Cryptodome.Cipher import AES
from Cryptodome.Random import get_random_bytes
import base64
import json

def encrypt_file(file_path, output_path, key):
    # Ensure key is 16, 24, or 32 bytes
    key = key.encode('utf-8')
    if len(key) not in (16, 24, 32):
        raise ValueError("Encryption key must be 16, 24, or 32 bytes long")

    cipher = AES.new(key, AES.MODE_EAX)
    with open(file_path, 'rb') as f:
        data = f.read()
    ciphertext, tag = cipher.encrypt_and_digest(data)

    enc_data = {
        'ciphertext': base64.b64encode(ciphertext).decode('utf-8'),
        'nonce': base64.b64encode(cipher.nonce).decode('utf-8'),
        'tag': base64.b64encode(tag).decode('utf-8')
    }

    with open(output_path, 'w') as f:
        json.dump(enc_data, f)

    return enc_data

def decrypt_file(enc_dict, key):
    key = key.encode('utf-8')
    nonce = base64.b64decode(enc_dict['nonce'])
    tag = base64.b64decode(enc_dict['tag'])
    ciphertext = base64.b64decode(enc_dict['ciphertext'])
    cipher = AES.new(key, AES.MODE_EAX, nonce=nonce)
    data = cipher.decrypt_and_verify(ciphertext, tag)
    return data
