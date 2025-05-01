import requests
import json
from config import NFT_STORAGE_API

def upload_to_filecoin(file_path):
    try:
        API_KEY = NFT_STORAGE_API
        url = "https://api.nft.storage/upload"
        headers = {
            "Authorization": f"Bearer {API_KEY}",
        }
        with open(file_path, "rb") as f:
            files = {"file": (file_path, f)}
            response = requests.post(url, headers=headers, files=files)
        
        if response.status_code == 200:
            cid = response.json()["value"]["cid"]
            return cid
        else:
            print("Filecoin upload failed. Response:", response.text)
            return None

    except Exception as e:
        print(f"Exception during Filecoin upload: {e}")
        return None
