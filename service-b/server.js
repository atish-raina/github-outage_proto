const express = require('express');

const app = express();
const PORT = process.env.PORT || 3002;

app.get('/api/status', (req, res) => {
  res.json({ service: 'service-b', status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`service-b listening on http://localhost:${PORT}`);
});
