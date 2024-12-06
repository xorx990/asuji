import requests

def QC(quality):
    url = "https://api.openloop.so/bandwidth/share"
    
    headers = {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,id;q=0.8,su;q=0.7",
         "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhYWphZGltZWtAZ21haWwuY29tIiwiZXhwIjoxNzQ5MDU3NzQ1LCJqdGkiOiJiNzhjYjlhOC1hMTlkLTRhZmUtOGY4Ny05ZWNmM2EzNzRlNjAiLCJpYXQiOjE3MzM1MDU3NDUsImlzcyI6InNlaS1zcGluIiwic3ViIjoiYXV0aCIsInVzZXJfaWQiOjMxNDE0LCJ1c2VybmFtZSI6ImFhamFkaW1la0BnbWFpbC5jb20ifQ.-qSMk75ahK71kpsws3N03ZowrkLQOlmG9ZcUwV0KtTk", # Masukkan AUTH anda disini
   
        "content-type": "text/plain;charset=UTF-8",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site"
    }
    
    body = {
        "quality": quality
    }
    
    response = requests.post(url, headers=headers, json=body)
    
    return response.json()
import time
while True:
    # Contoh pemanggilan fungsi
    result = QC(99999999)
    print(result)
    time.sleep(5)