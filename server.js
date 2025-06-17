const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
app.use(express.json());
app.post('/save', (req, res) => {
  const data = JSON.stringify(req.body);
  fs.writeFileSync('applications.json', data);
  res.send({ status: 'ok' });
});
app.listen(PORT, () => console.log(`Server running on ${PORT}`));