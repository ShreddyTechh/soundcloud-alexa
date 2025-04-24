
# SoundCloud Alexa Skill

## Setup
1. Klone das Repository:
   ```bash
   git clone https://github.com/ShreddyTechh/soundcloud-alexa-hack.git
   cd soundcloud-alexa-hack
   ```
2. Installiere die Abhängigkeiten:
   ```bash
   npm install
   ```
3. Erstelle den MP3-Ordner:
   ```bash
   mkdir tracks
   ```
4. Lade einen SoundCloud-Track herunter:
   ```bash
   node download.js "https://soundcloud.com/ghostemane/mercury"
   ```
5. Starte den Server:
   ```bash
   node server.js
   ```
6. Starte Ngrok (in einem separaten Terminal):
   ```bash
   ngrok http 3000
   ```
7. Füge deine Ngrok-URL in `.env` ein und starte den Alexa Skill.
