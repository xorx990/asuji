import requests
import random
import time
from colorama import Fore, Style, init

# Pastikan colorama diinisialisasi di awal program
init(autoreset=True)

# Global headers (tanpa token, token akan dimasukkan setelah login berhasil)
headers = {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Microsoft Edge\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\", \"Microsoft Edge WebView2\";v=\"131\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "Referer": "https://emojiapp.xyz/?tgWebAppStartParam=926506362",
    "Referrer-Policy": "strict-origin-when-cross-origin"
}

# Fungsi untuk membaca file query.txt dan mendapatkan beberapa baris
def read_query_file():
    with open('query.txt', 'r') as file:
        lines = file.readlines()
    return [line.strip() for line in lines]  # Menghapus newline di akhir setiap baris

# Fungsi Auth untuk melakukan otentikasi menggunakan data dari query.txt
def auth():
    global headers  # Menandakan bahwa kita akan mengubah global headers
    
    url = "https://emojiapp.xyz/api/auth"
    
    query_data = read_query_file()
    
    if len(query_data) < 1:
        print("Error: query.txt tidak memiliki cukup data untuk diproses!")
        return

    body = {
        "initData": query_data[0]  # Menggunakan baris pertama sebagai 'initData'
    }

    response = requests.post(url, headers=headers, json=body)

    if response.ok:
        data = response.json()
        user = data.get('user', {})
        tiket = user.get('amountOfTickets', 'N/A')
        balance = user.get('points', 'N/A')
        name = user.get('nameSurname', 'N/A')
        token = data.get('token', 'N/A')

        if token != 'N/A':
            headers['authorization'] = f'Bearer {token}'  # Memperbarui headers dengan token baru

        print(Fore.RESET + '[ ' + Fore.MAGENTA + 'DEBUG' + Fore.RESET + ' ]' + f' Name   : {Fore.MAGENTA + name + Fore.RESET}')
        print(Fore.RESET + '[ ' + Fore.MAGENTA + 'DEBUG' + Fore.RESET + ' ]' + f' Ticket : {Fore.MAGENTA + str(tiket) + Fore.RESET}')
        print(Fore.RESET + '[ ' + Fore.MAGENTA + 'DEBUG' + Fore.RESET + ' ]' + f' Points : {Fore.MAGENTA + str(balance) + Fore.RESET}')
    else:
        print("Request Failed:", response.status_code, response.text)

# Fungsi untuk mengecek kelayakan klaim tiket
def elig_tiket():
    url = "https://emojiapp.xyz/api/users/free-tickets-eligibility"
    
    response = requests.post(url, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        can_claim = data.get('canClaim', False)
        next_claim = data.get('nextClaim', 'Not available')

        if can_claim:
            print(Fore.RESET + '[ ' + Fore.GREEN + 'SUCCESS' + Fore.RESET + ' ]' + ' Anda sudah bisa claim tiket')
            return True
        else:
            print(Fore.RESET + '[ ' + Fore.YELLOW + 'WARN' + Fore.RESET + ' ]' + f' Anda belum bisa claim tiket. Please try again on {Fore.YELLOW + next_claim + Fore.RESET}')
            return False
    else:
        print(Fore.RESET + '[ ' + Fore.RED + 'ERROR' + Fore.RESET + ' ]' + f' Failed to fetch data, status code: {Fore.RED + str(response.status_code) + Fore.RESET}')
        return False

# Fungsi untuk klaim tiket
def claim_tiket():
    url = "https://emojiapp.xyz/api/users/claim-free-tickets"
    
    response = requests.post(url, headers=headers)
    
    if response.status_code == 200:
        print(Fore.RESET + '[ ' + Fore.GREEN + 'SUCCESS' + Fore.RESET + ' ]' + ' Claim berhasil!')
    else:
        print(Fore.RESET + '[ ' + Fore.RED + 'ERROR' + Fore.RESET + ' ]' + f' Error: {Fore.RED + str(response.status_code) + Fore.RESET}')

# Fungsi untuk mengambil daftar quest
def get_task():
    url = "https://emojiapp.xyz/api/quests"
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        data = response.json()
        quests = data.get('quests', {})

        quest_list = []
        for quest_type, quest_items in quests.items():
            for quest in quest_items:
                quest_id = quest.get('id')
                quest_text = quest.get('text')
                quest_completed = quest.get('completed')
                quest_list.append({
                    "id": quest_id,
                    "text": quest_text,
                    "completed": quest_completed
                })
                
        return quest_list
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}

# Fungsi untuk memverifikasi quest
def verify_task(quest_id, quest_text):
    url = f"https://emojiapp.xyz/api/quests/verify?questId={quest_id}"
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        data = response.json()

        if data.get('message') == 'Quest completed and reward granted':
            print(Fore.RESET + '[ ' + Fore.GREEN + 'SUCCESS' + Fore.RESET + ' ]' + f' Quest {Fore.GREEN + quest_text + Fore.RESET} berhasil dikerjakan!')
        else:
            print(Fore.RESET + '[ ' + Fore.YELLOW + 'WARN' + Fore.RESET + ' ]' + f' Quest {Fore.YELLOW + quest_text + Fore.RESET} belum selesai atau respons berbeda.')
    except requests.exceptions.RequestException as e:
        print(Fore.RESET + '[ ' + Fore.RED + 'ERROR' + Fore.RESET + ' ]' + f' Gagal mengerjakan quest {Fore.RED + quest_text + Fore.RESET}!')

# Fungsi untuk memainkan game dengan nama yang diberikan
def play_game(game_name):
    """
    Memainkan game dengan nama yang diberikan.
    
    Parameters:
        game_name (str): Nama game yang ingin dimainkan. Harus salah satu dari 'Basketball', 'Football', atau 'Darts'.
    
    Returns:
        dict: Respons dari server.
    """
    url = "https://emojiapp.xyz/api/play"
    data = {"gameName": game_name}

    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        return response.json()  # Mengembalikan respons sebagai JSON
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}
    
def print_welcome_message():
    print(Fore.WHITE + r"""
          
█▀▀ █░█ ▄▀█ █░░ █ █▄▄ █ █▀▀
█▄█ █▀█ █▀█ █▄▄ █ █▄█ █ ██▄
          """)
    print(Fore.GREEN + Style.BRIGHT + "webEMOJI BOT")
    print(Fore.YELLOW + Style.BRIGHT + "Free Konsultasi Join Telegram Channel: https://t.me/ghalibie_sharing")
    print(Fore.BLUE + Style.BRIGHT + "Buy me a coffee :) 0823 2367 3487 GOPAY / DANA")
    print(Fore.RED + Style.BRIGHT + "NOT FOR SALE ! Ngotak dikit bang. Ngoding susah2 kau tinggal rename :)\n\n")    

# Fungsi untuk memainkan game secara acak
def play_random_game():
    """
    Memainkan game secara acak dari 'Basketball', 'Football', atau 'Darts'.
    """
    valid_games = ["Basketball", "Football", "Darts"]
    random_game = random.choice(valid_games)
    print(Fore.RESET + '[ ' + Fore.BLUE + 'INFO' + Fore.RESET + ' ]' + f' Playing {Fore.BLUE + random_game + Fore.RESET}...')
    result = play_game(random_game)
    
    # Menampilkan hasil sesuai format yang diminta
    if "pointsWon" in result:
        print(Fore.RESET + '[ ' + Fore.GREEN + 'SUCCESS' + Fore.RESET + f' ] Game telah selesai, anda mendapatkan point: {Fore.GREEN}{result["pointsWon"]}{Fore.RESET}')
    else:
        print("Terjadi kesalahan dalam memainkan game.")
    
    return result

# Fungsi utama untuk menjalankan program
def main():
    print_welcome_message()
    # Melakukan otentikasi
    auth()
    
    # Mengambil dan memverifikasi quest
    quests = get_task()
    
    if isinstance(quests, list) and quests:
        for quest in quests:
            verify_task(quest['id'], quest['text'])
    else:
        print(Fore.RESET + '[ ' + Fore.RED + 'ERROR' + Fore.RESET + ' ]' + ' Tidak ada quest yang tersedia atau terjadi kesalahan: ' + str(quests))
   
    # Mengecek kelayakan klaim tiket
    if elig_tiket():
        # Jika eligible, klaim tiket
        claim_tiket()
    
    # Mengambil data user setelah otentikasi untuk mendapatkan jumlah tiket
    query_data = read_query_file()
    if len(query_data) < 1:
        print("Error: query.txt tidak memiliki cukup data untuk diproses!")
        return

    body = {
        "initData": query_data[0]
    }

    # Pastikan kita mendapatkan token setelah otentikasi berhasil
    response = requests.post("https://emojiapp.xyz/api/auth", headers=headers, json=body)
    if response.ok:
        data = response.json()
        user = data.get('user', {})
        tiket = user.get('amountOfTickets', 'N/A')
        if tiket == 'N/A':
            print("Tiket tidak tersedia!")
            return

        print(f"Jumlah tiket yang tersedia: {tiket}")

        # Konfirmasi apakah ingin menghabiskan seluruh tiket
        confirm = input(f"Anda memiliki {tiket} tiket. Apakah Anda ingin menghabiskan seluruh tiket? (y/n): ")
        
        if confirm.lower() == 'y':
            for _ in range(int(tiket)):  # Melakukan loop sebanyak jumlah tiket
                play_random_game()
                print(Fore.RESET + '[ ' + Fore.BLUE + 'INFO' + Fore.RESET + ' ]' + ' Rehat dulu bang cape...')
                time.sleep(10)  # Jeda 10 menit
        else:
            print("Proses dibatalkan. Tidak ada tiket yang digunakan.")
    else:
        print("Gagal melakukan otentikasi.")

# Panggil fungsi main untuk menjalankan seluruh proses
if __name__ == "__main__":
    main()
