const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/hello', (req, res) => {
  res.json({ service: 'service-a', message: 'Hello from service A' });
});

app.listen(PORT, () => {
  console.log(`service-a listening on http://localhost:${PORT}`);
});
