
const express = require('express');
const path = require('path');
const app = express();

app.use('/tracks', express.static(path.join(__dirname, 'tracks')));

app.listen(3000, () => {
  console.log('🔊 MP3 Server läuft auf http://localhost:3000/tracks');
});
