const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post('/submit', (req, res) => {
    const data = req.body;
    let fileData = [];
    try {
        fileData = JSON.parse(fs.readFileSync('applications.json'));
    } catch {}
    fileData.push(data);
    fs.writeFileSync('applications.json', JSON.stringify(fileData, null, 2));
    res.redirect('/thanks.html');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));