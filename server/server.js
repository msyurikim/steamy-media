/* eslint-disable no-console */
const app = require('./index');

const port = 8000;

app.listen(port, () => { console.log(`listening at http://localhost:${port}`); });
