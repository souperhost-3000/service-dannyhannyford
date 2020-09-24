const express = require('express');
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const port = 3007;
const app = express();

app.use(express.static(PUBLIC_DIR));

// app.get('/', (req, res) => {
//   res.send('hello');
// });

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port: ', port);
});
