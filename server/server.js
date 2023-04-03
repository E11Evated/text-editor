const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

// Serve the service worker file
app.get('/src-sw.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'src-sw.js'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`);
});
