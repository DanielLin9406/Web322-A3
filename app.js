const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PRODUCTION === 'true' ? 80 : 3000;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/intro.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// Deploy on Vercel:
// https://web322-a3-garul50s2-daniellin9406s-projects.vercel.app/
