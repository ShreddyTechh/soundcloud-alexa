
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const trackUrl = process.argv[2];
if (!trackUrl) {
  console.error('Bitte SoundCloud-Link angeben!');
  process.exit(1);
}

const cleanName = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

function downloadTrack(url) {
  exec(`yt-dlp -x --audio-format mp3 "${url}"`, (err, stdout) => {
    if (err) return console.error('Fehler beim Download:', err);

    const match = stdout.match(/Destination: (.+\.mp3)/);
    if (match) {
      const file = match[1];
      const base = cleanName(path.basename(file, '.mp3'));
      fs.renameSync(file, `./tracks/${base}.mp3`);
      console.log(`Track gespeichert als: ./tracks/${base}.mp3`);
    } else {
      console.log('Download erfolgreich, aber Datei nicht gefunden.');
    }
  });
}

downloadTrack(trackUrl);
